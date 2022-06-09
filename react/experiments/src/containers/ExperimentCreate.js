import React from 'react';
import saveExperimentState from '../http/saveExperimentState';
import {ExperimentUidInput} from "./Inputs/ExperimentUidInput";

class ExperimentCreate extends React.Component {
    styleCreateExperimentBlock = {'display':'none'};

    constructor(props) {
        super(props);

        this.parent = props.parent;
        this.props.parent.experimentCreate = this;
        this.submitHandle = this.submitHandle.bind(this);
        this.map = {};
    }

    componentDidMount() {
        this.forceUpdate();
    }

    submitHandle(event) {
        this.props.parent.appState.adding=true;
        this.forceUpdate();

        if (window.mode === 'feature-toggle' && this.props.parent.appState.mode !== 'edit') {
            this.createFeatureToggle()
        }

        event.preventDefault();
        saveExperimentState(this.props.parent.appState.activeItem).then(response => {
            this.props.parent.experimentList.load();
            this.showNotifications();
            this.redirectToExperiments();
            this.props.parent.refreshState();
            this.props.parent.appState.adding=false;
            this.forceUpdate();
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
            'id': Date.now().toString()
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
        this.createBranchId();
        this.forceUpdate();
    }

    changeName(value) {
        this.props.parent.changeName(value);
        this.forceUpdate();
    }

    changeUid(value) {
        this.props.parent.changeUid(value);
        this.forceUpdate();
    }

    changePercent(e) {
        this.props.parent.changePercent(e);
        this.forceUpdate();
    }

    changeBranchName(e) {
        this.props.parent.changeBranchName(e);
        this.forceUpdate();
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
            experimentName = this.props.parent.appState.activeItem.name ?? '',
            experimentUid = this.props.parent.appState.activeItem.alias ?? experimentName.replace(/ /g, '-'),
            nameColumn = window.mode === 'feature-toggle' ? 'Feature flags ' : 'Experiment ';

        return (
            <>
                <div className="setting__create create-setting" style={this.styleCreateExperimentBlock}>
                    <div className="create-setting__block">
                        <div className="create-setting__title">
                            Create a new {titleCreate}
                        </div>
                        <form className="create-setting__form">
                            <div className="create-setting__item">
                                <label className="create-setting__label">{nameColumn} name</label>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    data-error="Ошибка"
                                    placeholder="Button color test"
                                    className="input create-setting__input"
                                    value={experimentName}
                                    onChange={e => this.changeName(e.target.value)}
                                />
                            </div>
                            <ExperimentUidInput
                                uid = {experimentUid}
                                mode = {this.props.parent.appState.mode}
                                changeUid = {e => this.changeUid(e)}
                            />
                        </form>
                    </div>
                    <div className="create-setting__block">
                        <div className="create-setting__title" style={displayAddBranch}>
                            Branches
                        </div>
                        <form className="create-setting__form" onSubmit={this.submitHandle.bind(this)}>
                            {branches.map((branch) =>
                                <div className="create-setting__row" style={displayAddBranch}>
                                    <div className="create-setting__item">
                                        <label className="create-setting__label">Branch name</label>
                                        <input autocomplete="off"
                                               type="text"
                                               data-error="Ошибка"
                                               placeholder="Branch name"
                                               className="input create-setting__input"
                                               onChange={this.changeBranchName.bind(this)}
                                               data-id={branch.id}
                                        />
                                    </div>
                                    <div className="create-setting__item2">
                                        <div className="create-setting__item-digit">
                                            <label className="create-setting__label">Split</label>
                                            <div className="quantity">
                                                <span className="quantity__label">%</span>
                                                <div className="quantity__input">
                                                    <input autocomplete="off"
                                                           type="text"
                                                           name="form[]"
                                                           data-id={branch.id}
                                                           id={"branch-percent-" + branch.id}
                                                           value={branch.percent ?? '0'}
                                                           onChange={this.changePercent.bind(this)}
                                                    />
                                                </div>
                                                <div className="quantity__buttons" onClick={this.changePercent.bind(this)}>
                                                    <div className="quantity__button quantity__button_plus">
                                                        <svg className="quantity__icon">
                                                            <use href="/img/icons/icons.svg#arrow-quantity"/>
                                                        </svg>
                                                    </div>
                                                    <div className="quantity__button quantity__button_minus">
                                                        <svg className="quantity__icon">
                                                            <use href="/img/icons/icons.svg#arrow-quantity"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="create-setting__remove" data-id={branch.id} onClickCapture={e => this.removeBranch(e)}>
                                            <svg className="create-setting__remove-icon">
                                                <use href="/img/icons/icons.svg#close"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )}
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
