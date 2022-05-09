import React from 'react'
import RemoveDropbox from "../http/RemoveDropbox";

class ListenedAccountItem extends React.Component
{
    props = 0;

    constructor(props) {
        super(props);
        this.props = props;

        this.removeAccount = this.removeAccount.bind(this);
    }

    removeAccount(event) {
        event.preventDefault();
        const id = event.target.dataset.id;

        RemoveDropbox(id).then(t => this.props.parent.componentDidMount());
    }

    render () {
        return (
        <li className="list-group-item">
            {this.props.account.client_email}
            <a href="#" data-id={this.props.account.id} onClick={this.removeAccount} className="btn btn-small">(delete)</a>
        </li>
        );
    }
}

export default ListenedAccountItem