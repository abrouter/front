import httpRequest from './httpRequest';

function deleteExperimentState(experiment) {
    const ownerId = experiment.ownerId === undefined ? window.userId : experiment.ownerId;

    let payload = {
        'data': {
            'id': experiment.id,
            'type': 'experiments'
        }
    };

    return httpRequest('experiments/' + (experiment.id), 'DELETE', payload);
}

export default deleteExperimentState;
