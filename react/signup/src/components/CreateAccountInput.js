import React from 'react';
import AttachAccount from "../http/AttachAccount";

class CreateAccountInput extends React.Component
{
    parent = 0;

    constructor(props) {
        super(props);
        this.parent = props.parent;

        this.state = {value: ''};

        this.submitHandle = this.submitHandle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    submitHandle(event) {
        event.preventDefault();
        if (!this.state.value.length) {
            return ;
        }
        AttachAccount(this.state.value).then(t =>  {
            this.parent.componentDidMount();
            if (typeof t.error !== 'undefined') {
                if (t.error === 'err-subscription-duplicated') {

                    if (typeof window.jQuery !== 'undefined') {
                        window.jQuery('#payment-modal-duplicated').modal('toggle');
                    }

                } else if (t.error === 'err-subscription-limit-exceed') {
                    window.jQuery('#limit-modal-duplicated').modal('toggle');
                } else {
                    window.toastr.error(t.error);
                }
            } else {
                // window.toastr.success('Account successfully added');
            }

            document.getElementById('account-username').value = '';
        }
        );
    }

    render () {
        return (
            <div>
                <form onSubmit={this.submitHandle} onChange={this.handleChange}>
                    <div className="form-group"> 
                      <label>Instagram Username (for example - kevin):</label>
                       <input className="form-control form-control-lg " type="text" placeholder="kevin" id="account-username"/>
                     </div>
                     <div className="form-group"> 
                       <input className="btn btn-primary" type="submit" value="Start Listen" id="sl-add-button" />
                     </div>
                </form>
           </div>
       );
    }
}

export default CreateAccountInput;