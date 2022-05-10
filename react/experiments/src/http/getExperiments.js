import httpRequest from './httpRequest';

function getExperiments() {
    return httpRequest('experiments?include=branches', 'GET', {}).then(response => {
        let experiments = response.data.reduce(function (acc, item) {
            let token = response.meta.token;
            let link = 'https://abrouter.com/api/v1/experiment/run?token='+token+'&experimentId=' + item.id +'&userId={USER_ID}';
            const newItem = {
                'name': item.attributes.name,
                'uid': item.attributes.uid,
                'alias': item.attributes.alias,
                'branches': [],
                'isEnabled': item.attributes.is_enabled,
                'isFeatureToggle': item.attributes.is_feature_toggle,
                'id': item.id,
                'ownerId': item.relationships.owner.data.id,
                'tryUrl': link,
            }; 
            let branches = item.relationships.branches.data.reduce(function (acc, branch) {
                acc.push(response.included.filter(function (item) {
                    return item.id === branch.id;
                })[0]);
                return acc;
            }, []);

            newItem.branches = branches.reduce(function (acc, item) {
                const newItem = {
                    'name': item.attributes.name,
                    'percent': item.attributes.percent,
                    'uid': item.attributes.uid,
                    'id': item.id,
                };
                acc.push(newItem);
                return acc;
            }, []);
        

            acc.push(newItem);
            return acc;
        }, []);

        experiments.token = response.meta.token;
        return experiments;
    });
}

export default getExperiments;
