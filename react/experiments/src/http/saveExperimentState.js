import httpRequest from './httpRequest';

function saveExperimentState(experiment) {
    const ownerId = experiment.ownerId === undefined ? window.userId : experiment.ownerId;
    const dataType = window.mode === 'feature-toggle' ? 'feature-toggles' : 'experiments';
    let alias = experiment.alias ?? experiment.name.replace(/ /g, '-');

    let payload = {
        'data': {
            'type': dataType,
            'attributes': {
                'name': experiment.name,
                'alias': alias,
                'is_enabled': experiment.isEnabled ?? true,
                'is_feature_toggle': experiment.isFeatureToggle ?? false,
                'config': [],
            },
            'relationships': {
                'branches': {
                    'data': experiment.branches.reduce(function (acc, branch) {
                        acc.push({
                            'id': branch.id,
                            'type': 'experiment_branches',
                        });

                        return acc;
                    }, [])
                },
                'owner': {
                    'data': {
                        'id': ownerId,
                        'type': 'users',
                    }
                }
            }
        },
        'included': experiment.branches.reduce(function (acc, branch) {
            acc.push({
                'id': branch.id,
                'type': 'experiment_branches',
                'attributes': {
                    'name': branch.name,
                    'percent': branch.percent,
                    'uid': branch.uid ?? branch.name,
                    'config': {},
                },
                'relationships': {
                    'experiment': {
                        'data': {
                            'id': experiment.id,
                            'type': 'experiments',
                        },
                    },
                    'owner': {
                        'data': {
                            'id': ownerId,
                            'type': 'users',
                        }
                    }
                }
            });

            return acc;
        }, []),
    };
    if (experiment.id !== undefined) {
        payload.data.id = experiment.id;
    }

    let link;

    if(window.mode === 'feature-toggle') {
        link = 'feature-toggles/' + (experiment.id ?? '');
    } else link = 'experiments/' + (experiment.id ?? '');

    return httpRequest(link, experiment.id === undefined ? 'POST' : 'PATCH', payload);
}

export default saveExperimentState;
