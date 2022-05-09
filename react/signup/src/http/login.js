import httpRequest from './httpRequest';

function login(login, password) {
    return httpRequest('auth', 'POST', {
        "data": {
            "type":"auth-request",
            "attributes": {
                "username": login,
                "password": password,
            }
        }    
    });
}

export default login;
