import React from 'react';

const ConnectAccount = () => {

    const link = "https://www.dropbox.com/oauth2/authorize?response_type=token&client_id=ljx01448f5pmvll&redirect_uri=" + window.host + "/sl/dropbox/oauth";
    const linkGoogle = "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive%20email&response_type=code&access_type=offline&client_id=274892279797-eo0utqaehgrlag64o0ohp3mp99agu39l.apps.googleusercontent.com&redirect_uri=" + window.host + "/sl/gdrive/oauth";

    return (
         <div>
             <a href={link} className="btn btn-primary">
                  Connect Dropbox
             </a>
             <div id="gdrive-connector" style={{"display":"none"}}>
<br/>
            <div>
                <a href={linkGoogle}>Use Google Drive</a>
            </div>

            </div>
        </div>
    );
};

export default ConnectAccount;