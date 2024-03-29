import React from 'react';
import saveExperimentState from '../http/saveExperimentState';
import ExperimentInput from './Inputs/ExperimentInput';
import Branch from "./Branch/Branch";
import experimentValidation from "../validation/validation";

class ExperimentCreate extends React.Component {
    styleCreateExperimentBlock = {'display':'none'};

    constructor(props) {
        super(props);

        this.state = {
            experimentName: null,
            experimentUid: null,
        };
        this.parent = props.parent;
        this.props.parent.experimentCreate = this;
        this.submitHandle = this.submitHandle.bind(this);
        this.map = {};
    }

    checkSendData(event) {
        event.preventDefault();

        if (window.mode === 'feature-toggle' && this.props.parent.appState.mode !== 'edit') {
            this.createFeatureToggle()
        }

        experimentValidation(event.target.children);
        this.submitHandle(event);
    }

    submitHandle(event) {
        this.props.parent.appState.adding=true;

        saveExperimentState(this.props.parent.appState.activeItem)
            .then(response => {
                this.props.parent.experimentList.load();
                this.showNotifications();
                this.redirectToExperiments();
                this.props.parent.refreshState();
                this.props.parent.appState.adding=false;
                this.setState({
                    experimentName: '',
                    experimentUid: '',
                })
            })
            .catch(response => {
                response.json.then(error => {
                    let textError = error.data.attributes.message.substring(0, 46),
                        experimentForm = document.getElementById('create_experiment');

                    experimentForm
                        .children[0]
                        .className = 'alert';

                    experimentForm
                        .children[0]
                        .innerHTML += '<p>'+ textError +'</p>';
                })
            });

        return false;
    }

    showNotifications() {
        let message;
        let name;
        let mode = this.props.parent.appState.mode;
        window.mode === 'feature-toggle' ? name = 'Feature flag' : name = 'Experiment';

        switch (mode) {
            case ('create'):
                message = 'has been successfully created';
                break;
            case ('edit'):
                message = 'has been successfully updated';
                break;
            case ('delete'):
                message = 'has been successfully deleted';
                break;
        }

        this.parent.toast.success(name + ' ' + message, {
            style: {
                background: '#51A351',
                color: '#FFFFFF',
                padding: '16px'
            },
            iconTheme: {
                primary: '#51A351',
                secondary: '#FFFFFF',
            },
        });
    }

    submitHandleCheckbox(item) {
        saveExperimentState(item).then(response => {
            this.props.parent.experimentList.load();
            this.props.parent.refreshState();
            this.forceUpdate();
        });
    }

    createFeatureToggle() {
        let branchUid = ['On', 'Off'];
        let percent = [100, 0];
        this.props.parent.appState.activeItem.isFeatureToggle = true;
        this.props.parent.appState.activeItem.branches = [];

        for (let i = 0; i < 2; i++) {
            this.props.parent.appState.activeItem.branches.push({
                'id': Date.now().toString(),
                'name': branchUid[i],
                'uid': branchUid[i],
                'percent': percent[i],
            });
        }
    }

    error(message) {
        setTimeout(function () {
            document.getElementById('message').style = 'display:block';
        }, 200);
        this.message = message;
    }

    createBranchId() {
        this.props.parent.appState.activeItem.branches = [];

        for (let i = 0; i < 2; i++) {
            this.props.parent.appState.activeItem.branches.push({
                'id': Date.now().toString() + i
            });
        }

        this.forceUpdate();
    }

    addBranch(e) {
        if (this.props.parent.appState.activeItem.branches === undefined) {
            this.props.parent.appState.activeItem.branches = [];
        }

        this.props.parent.appState.activeItem.branches.push({
            'id': Date.now().toString(),
            'inactive_edit_uid': false
        });

        this.forceUpdate();
        e.preventDefault();
        return false;
    }

    removeBranch(e) {
        e.preventDefault();
        let id = e.currentTarget.getAttribute('data-id');
        this.props.parent.appState.activeItem.branches = this.props.parent.appState.activeItem.branches.filter(function (branch) {
            return branch.id !== id;
        });
        this.forceUpdate();
    }

    createExperiment(e) {
        this.styleCreateExperimentBlock = {'display':'block'};
        this.props.parent.refreshState();
        this.createBranchId();
        this.forceUpdate();
    }

    changeName(value) {
        this.props.parent.changeName(value);

        this.setState({
            experimentName: value,
            experimentUid: this.props.parent.appState.activeItem.alias ?? value.replace(/ /g, '-')
        })
    }

    changeUid(value) {
        this.props.parent.changeUid(value);

        this.setState({
            experimentUid: value.replace(/ /g, '-')
        })
    }

    changePercent(e) {
        this.props.parent.changePercent(e);
        this.forceUpdate();
    }

    changeBranchName(e) {
        this.props.parent.changeBranchName(e);
        this.forceUpdate();
    }

    changeBranchUid(e) {
        this.props.parent.changeBranchUid(e);
    }

    redirectToExperiments() {
        let mode = this.props.parent.appState.mode;

        if (mode === 'create') {
            let tab = window.mode === 'feature-toggle' ? 'all' : 'active';
            this.props.parent.experimentList.setActiveTab(tab);
            this.props.parent.experimentList.experimentStyleBlock = {'display':'block'};
            this.styleCreateExperimentBlock = {'display':'none'};
            document.getElementsByClassName('top-setting__item')[0].classList.add('active');
            this.props.parent.experimentList.getExperimentsByTab();
        }

        this.forceUpdate();
    }

    render() {
        const displayAddBranch = window.mode === 'feature-toggle' ? {'display':'none'} : {};
        const titleCreate = window.mode === 'feature-toggle' ? 'flag' : 'experiment';
        let branches = this.props.parent.appState.activeItem.branches ?? [],
            nameColumn = window.mode === 'feature-toggle' ? 'Feature flags name' : 'Experiment name',
            nameUidColumn = window.mode === 'feature-toggle' ? 'Feature flags uid' : 'Experiment uid',
            mode = this.props.parent.appState.mode;

        return (
            <>
                <div className="setting__create create-setting" style={this.styleCreateExperimentBlock}>
                    <div className="create-setting__block">
                        <div className="create-setting__title">
                            Create a new {titleCreate}
                        </div>
                        <form className="create-setting__form" id="create_experiment">
                            <div/>
                            <ExperimentInput
                                style={{'margin-bottom': '1rem'}}
                                title={nameColumn}
                                value={this.state.experimentName}
                                placeholder={'Button color test'}
                                onChange={e => this.changeName(e.target.value)}
                            />
                            <ExperimentInput
                                title={nameUidColumn}
                                value={this.state.experimentUid}
                                placeholder={'Button'}
                                disabled={this.props.parent.appState.mode === 'edit'}
                                onChange={e => this.changeUid(e.target.value)}
                            />
                        </form>
                    </div>
                    <div className="create-setting__block">
                        <div className="create-setting__title" style={displayAddBranch}>
                            Branches
                        </div>
                        <form className="create-setting__form" id="create_branch" onSubmit={this.checkSendData.bind(this)}>
                            {mode === 'create' &&
                                <Branch
                                    branches={branches}
                                    disabled={this.props.parent.appState.activeItem.mode === 'edit'}
                                    onChangeBranchName={e => this.changeBranchName(e)}
                                    onChangeBranchUid={e => this.changeBranchUid(e)}
                                    onChangePercent={e => this.changePercent(e)}
                                    onClickPercent={e => this.changePercent(e)}
                                    onClickRemoveBranch={e => this.removeBranch(e)}
                                />
                            }
                            <button onClick={this.addBranch.bind(this)} className="create-setting__button" style={displayAddBranch}>
                                + Add another branch
                            </button>
                            <div className="create-setting__bottom">
                                <button className="create-setting__update button" type="submit">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>

        );
    }
}
export default ExperimentCreate
