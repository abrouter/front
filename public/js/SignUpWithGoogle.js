window.onload = function () {
    google.accounts.id.initialize({
    client_id: google_client_id,
    callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }
    );
}
function handleCredentialResponse(response) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', window.api + 'auth/google');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify({ 
        "data": {
            "type": "auth-request",
            "attributes": {
                "id_token": response.credential
            }
        }
    }
    ));
    xhr.onload = function() {
        let token = xhr.response.data.attributes.token;
        let isNew = xhr.response.meta.isNew;
        
        if (isNew) {
            window.location.href = '/en/redirect?token='+token + '&to=/en/board?signup_conversion=1';
        } else {
            window.location.href = '/en/redirect?token='+token + '&to=/en/board';
        }
    }; 
}
