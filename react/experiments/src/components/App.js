import React from 'react';
import ExperimentCreate from '../containers/ExperimentCreate';
import ExperimentsList from '../containers/ExperimentsList';
import toast, {Toaster} from "react-hot-toast";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'experiments': []
        };
        this.refreshState();
        this.experimentList = null;
        this.experimentCreate = null;
        this.toast = toast;
    }

    refreshState() {
        this.appState = {
            'mode': 'create',
            'activeItem': {},
        };
    }

    edit(item) {
        this.appState.mode = 'edit';
        this.appState.activeItem = item;
    }

    changeName(value) {
        this.appState.activeItem.name = value;
    }

    changeUid(value) {
        value = value.replace(/ /g, '-');
        this.appState.activeItem.alias = value;
    }

    changePercent(e) {
        let id = e.target.closest(".quantity").querySelector("input").getAttribute('data-id');
        let value = e.target.closest(".quantity").querySelector("input").value;
        if (e.target.closest(".quantity__button")) {
            value = parseInt(e.target.closest(".quantity").querySelector("input").value);
            e.target.closest(".quantity__button").classList.contains("quantity__button_plus") ? value++ : --value;
            value = value < 0 ? value = 0 : value;
        }

        this.appState.activeItem.branches = this.appState.activeItem.branches.reduce(function (acc, branch) {
            if (branch.id === id) {
                branch.percent = value;
            }

            acc.push(branch);

            return acc;
        }, []);

        return false;
    }

    changeBranchName(e) {
        let id = e.target.getAttribute('data-id'),
            value = e.target.value;

        this.appState.activeItem.branches = this.appState.activeItem.branches.reduce(function (acc, branch) {
            if (branch.id === id) {
                branch.uid = value;
            }

            acc.push(branch);

            return acc;
        }, []);

        return false;
    }

    render() {
        return (
            <div>
                <ExperimentsList state={this.state} parent={this}/>
                <ExperimentCreate parent={this} state={this.appState}/>
                <Toaster
                    position="top-left"
                    reverseOrder={false}
                />
            </div>
        );
    }
}

export default App