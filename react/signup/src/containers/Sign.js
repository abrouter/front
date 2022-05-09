import React from 'react';
import createAccount from '../http/createAccount';
import locales from '../components/Locales';
import loginHttp from '../http/login';

class Sign extends React.Component {
    state = {
    }

    componentDidMount() {
        this.message = '';
    }

    constructor(props) {
        super(props);

        this.mode = this.props.mode;
        this.submitHandle = this.submitHandle.bind(this);
        const urlParams = new URLSearchParams(window.location.search);
        this.state.email = urlParams.get('email');

    }
    
    submitHandle(event) 
    {
        event.preventDefault();
        document.getElementById('message').style.display = 'none';
        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        
        if (this.mode === 'signup') {
            createAccount(login, password).then(response => {
                let token = response.data.attributes.token;
                window.location.href = '/en/redirect?token='+token + '&to=/en/board?signup_conversion=1';
            }).catch(error => error.json.then(data => this.error(data.data.attributes.message)));
        } else {
            loginHttp(login, password).then(response => {
                let token = response.data.attributes.token;
                window.location.href = '/en/redirect?token='+token + '&to=/en/board';
            }).catch(error => this.error('Invalid credentials'));
        }   
    }

    error(message) {
        setTimeout(function () {
            document.getElementById('message').style = 'dispaly:block';
        }, 200);
        this.message = message;
        this.forceUpdate();
    }

    handleOnChange(e) {
        this.state.email = e.target.value;
        this.forceUpdate();
    }

    render() {
        let none = {'display':'none'};


        return (
            <div>
                <div className="alert alert-warning" id="message" style={none} role="alert">{this.message}</div>

                <form onSubmit={this.submitHandle}>
                   <div className="form-group">
                    <label for="login">Email address</label>
                        <input type="text" className="form-control" id="login" value={this.state.email} placeholder="Email" onChange={this.handleOnChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                    <label for="password">Password</label>
                        <input type="password"  className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <input id="proceed"  type="submit" className="btn btn-primary" value={locales[this.mode.toUpperCase() + '_BUTTON']}/>
                </form>
                <div className="mt-2" id="buttonDiv"/>
            </div>
    )
        ;
    }
}
export default Sign
