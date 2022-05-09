import React from 'react';
import SubfolderAttach from "../http/SubfolderAttach";

class SubfolderInput extends React.Component
{
    parent = 0;

    constructor(props) {
        super(props);
        this.props = props;

        this.parent = props.parent;

        this.state = {value: ''};

        this.submitHandle = this.submitHandle.bind(this);
        this.handleChange = this.handleChange.bind(this);

        console.log(this.props)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    submitHandle(event) {
        event.preventDefault();

        SubfolderAttach(this.props.account.id, this.state.value).then(t =>  {
            this.parent.componentDidMount();
            if (typeof t.error !== 'undefined') {
                window.toastr.error(t.error);
            } else {
                window.toastr.success('Subfolder successfully updated');
            }

            // document.getElementById('account-username').value = '';
        }
        );
    }

    render () {
        return (
            <div>
                <p className="lead">Subfolder</p>
                <form onSubmit={this.submitHandle} onChange={this.handleChange}>
                    <div className="form-group"> 
                      <label>Subfolder for group of accounts (optional):</label>
                       <input defaultValue={this.props.account.subfolder} className="form-control form-control-lg " type="text" placeholder="group1" id="subfolder-input"/>
                     </div>
                     <div className="form-group"> 
                       <input className="btn btn-primary" type="submit" value="Save" id="sl-subfolder-button" />
                     </div>
                </form>
           </div>
       );
    }
}

export default SubfolderInput;