import React from 'react';
import getExperiments from '../http/getExperiments';
import deleteExperimentState from '../http/deleteExperimentState';
import LoadingOverlay from 'react-loading-overlay'
import DontHaveExperiments from "./DontHaveExperiments";
import {Navigation} from "./Navigation/Navigation";
import ExperimentInput from "./Inputs/ExperimentInput";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Branch from "./Branch/Branch";

class ExperimentsList extends React.Component {
    experimentStyleBlock = {'display': 'block'};

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: 0,
            activeTab: window.mode === 'feature-toggle'
                ? 'all'
                : 'active',
            experiments: [],
            displayExperiments: [],
        }
        this.props = props;
        this.props.parent.experimentList = this;

    }


    componentDidMount() {

        if (window.mode !== 'mainpage') {
            this.load();
        } else {
            this.setState({
                isLoaded: 1
            });
        }
    }

    load() {
        this.setState({
            isLoaded: 0
        })
        getExperiments().then(data => {
            this.props.state.experiments = data;

            if (window.mode === 'feature-toggle') {
                this.setState({
                    experiments: data.filter(function (experiments) {
                        return experiments.isFeatureToggle === true;
                    })
                })
            } else {
                this.setState({
                    experiments: data.filter(function (experiments) {
                        return experiments.isFeatureToggle === false;
                    })
                })
            }

            this.getExperimentsByTab();
            this.setState({
                isLoaded: 1
            })
        });
    }

    getExperimentsByTab() {
        let enable;

        switch (this.state.activeTab) {
            case ('active'):
                enable = true;
                break;
            case ('not active'):
                enable = false;
                break;
            case ('all'):
                break;
            case ('awaiting launch'):
                break;
        }

        if (this.state.activeTab === 'all') {
            this.setState({
                displayExperiments: this.state.experiments
            })
        } else {
            this.setState({
                displayExperiments: this.state.experiments.filter(function (experiment) {
                    return experiment.isEnabled === enable;
                })
            })
        }
    }

    removeExperiment(item, e) {
        this.props.parent.appState.mode = 'delete';
        this.props.parent.appState.activeItem = item;

        e.preventDefault();
        deleteExperimentState(this.props.parent.appState.activeItem).then(() => {
            this.load();
            this.props.parent.experimentCreate.showNotifications();
            this.props.parent.refreshState();
            this.forceUpdate();
            this.props.parent.appState.adding = false;
        });
    }

    removeBranch(e) {
        e.preventDefault();
        let id = e.currentTarget.getAttribute('data-id');
        this.props.parent.appState.activeItem.branches = this.props.parent.appState.activeItem.branches.filter(function (branch) {
            return branch.id !== id;
        });
        this.forceUpdate();
    }

    edit(item, e) {
        this.deleteClassEdit();
        document.getElementById('experiment-' + item.id).classList.add('edit')
        e.preventDefault();
        this.props.parent.edit(item);
        this.forceUpdate();
    }

    editCheckbox(item) {
        item.isEnabled = item.isEnabled !== true;

        this.props.parent.experimentCreate.submitHandleCheckbox(item)
        this.forceUpdate()
    }

    cancelEdit(e) {
        this.deleteClassEdit();
        e.preventDefault();
        this.props.parent.refreshState();
        this.forceUpdate();
    }

    createExperiment(e) {
        this.deleteClassEdit();
        this.deleteClassActive(e);
        this.experimentStyleBlock = {'display': 'none'};
        this.props.parent.experimentCreate.createExperiment(e);
        this.forceUpdate();
    }

    submitHandle(e) {
        e.preventDefault();
        let div = document.querySelector('.alert');

        if (div) {
            div.className = '';
            div.innerText = '';
        }

        let countPercent = 0,
            allBranchName = [],
            experimentForm = e.target.children[0],
            error = false,
            textError;

        if (e.target[0].value.length === 0) {
            error = true;
        }

        for (let i in this.props.parent.appState.activeItem.branches) {
            let percent = document.getElementById('branch-percent-' +
                this.props.parent.appState.activeItem.branches[i].id
                ).value,
                branchName = document.getElementById(
                    this.props.parent.appState.activeItem.branches[i].id
                ).value;

            countPercent += Number(percent);

            if (branchName.length !== 0) {
                allBranchName.push(branchName);
            }

            if (branchName.length === 0 && countPercent === 100) {
                error = true;
                textError = 'Please, delete the empty branches to make sure everything filled correctly.';

                this.showError(experimentForm, textError)
            }
        }

        for (let i = 0; i < allBranchName.length; i++) {
            let n = 0;

            allBranchName.find(item => {
                if (item === allBranchName[i]) {
                    n++;
                }
            })

            if (experimentForm
                .innerHTML === '<p>The branch name must be unique.</p>'
            ) {
                break;
            }

            if (n > 1) {
                error = true;
                textError = 'The branch name must be unique.';

                this.showError(experimentForm, textError)
            }
        }

        if (countPercent !== 99 && countPercent !== 100) {
            textError = 'The sum of the branch percentages must be 100 or 99.';
            error = true;

            this.showError(experimentForm, textError)
        }

        if(error) {
            throw new Error('Data validation error. Check the correctness of the entered data')
        }

        this.deleteClassEdit();
        this.props.parent.experimentCreate.submitHandle(e);
    }

    showError (e, textError) {
        e.className = 'alert';

        e.innerHTML += '<p>' + textError + '</p>';
    }

    addClassNameActive(e) {
        this.experimentStyleBlock = {'display': 'block'};
        this.props.parent.experimentCreate.styleCreateExperimentBlock = {'display': 'none'};
        this.deleteClassActive(e);
        e.currentTarget.classList.add("active");
        this.props.parent.experimentCreate.forceUpdate();
        this.forceUpdate();
    }

    deleteClassActive() {
        let link = document.getElementsByClassName('top-setting__item');

        for (let i = 0; i < link.length; i++) {
            link[i].classList.remove('active');
        }
    }

    deleteClassEdit() {
        let link = document.getElementsByClassName('table-setting__wrap');

        for (let i = 0; i < link.length; i++) {
            link[i].classList.remove('edit');
        }
    }

    showAllExperiment(e) {
        this.setState({
            activeTab: 'all'
        }, () => {
            this.getExperimentsByTab()
        })
        this.addClassNameActive(e)
    }

    showActiveExperiment(e) {
        this.setState({
            activeTab: 'active'
        }, () => {
            this.getExperimentsByTab()
        })
        this.addClassNameActive(e)
    }

    showNotActiveExperiment(e) {
        this.setState({
            activeTab: 'not active'
        }, () => {
            this.getExperimentsByTab()
        })
        this.addClassNameActive(e)
    }

    showAwaitingLaunchExperiment(e) {
        this.displayExperiments = []
        this.setState({
            activeTab: 'awaiting launch'
        }, () => {
            this.getExperimentsByTab()
        })
        this.addClassNameActive(e)
    }

    countActiveAndNotActiveExperiments() {
        let activeExperiments = 0;
        let notActiveExperiments = 0;
        let experiments = this.state.experiments;
        let length = this.state.experiments.length;

        for (let i = 0; i < length; i++) {
            if (experiments[i].isEnabled === true) {
                activeExperiments++;
            } else notActiveExperiments++;
        }

        return {activeExperiments, notActiveExperiments};
    }

    changeName(e) {
        this.props.parent.changeName(e);
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

    changeBranchUid(e) {
        this.props.parent.changeBranchUid(e);
        this.forceUpdate();
    }

    setActiveTab(tab) {
        this.setState({
            activeTab: tab
        })
    }

    addBranch(e) {
        this.props.parent.experimentCreate.addBranch(e);
        this.forceUpdate();
    }

    render() {
        let showDontHaveExperiments,
            showExperiments = {'display': 'flex'},
            displayAddBranch = window.mode !== 'feature-toggle' ? {'display':'block'} : {'display':'none'};

        if (this.state.experiments.length === undefined || this.state.experiments.length === 0) {
            showDontHaveExperiments = <DontHaveExperiments
                experimentStyleBlock={this.experimentStyleBlock}
                createExperiment={(e) => this.createExperiment(e)}
            />
            showExperiments = {'display': 'none'};
        }

        let experimentName = this.props.parent.appState.activeItem.name;

        let buttonCreate = window.mode === 'feature-toggle' ? 'Add new flag' : 'Create new experiment',
            nameColumn = window.mode === 'feature-toggle' ? 'Feature flags ' : 'Experiment ',
            spinnerStyle = this.state.isLoaded === 0;
        return (
            <>
                <LoadingOverlay
                    active={spinnerStyle}
                    spinner
                    styles={{
                        spinner: (base) => ({
                            ...base,
                            position: 'absolute',
                            height: '64px',
                            width: '64px',
                            '& svg circle': {
                                stroke: 'rgba(30, 144, 255)'
                            }
                        }),
                        overlay: (base) => ({
                            ...base,
                            position: 'fixed',
                            background: 'rgba(250, 250, 250, 0.80)',
                        })
                    }}
                />
                {showDontHaveExperiments}
                <div className="setting__top top-setting" style={showExperiments}>
                    <Navigation
                        showActiveExperiments={(e) => this.showActiveExperiment(e)}
                        showNotActiveExperiments={(e) => this.showNotActiveExperiment(e)}
                        showAllExperiments={(e) => this.showAllExperiment(e)}
                        experiments={this.state.experiments}
                    />
                    <button className="top-setting__btn" onClick={this.createExperiment.bind(this)}>
                        <svg className="top-setting__icon">
                            <use href="/img/icons/icons.svg#plus"/>
                        </svg>
                        <svg className="top-setting__icon top-setting__icon2">
                            <use href="/img/icons/icons.svg#plus2"/>
                        </svg>
                        <span>{buttonCreate}</span>
                    </button>
                </div>
                <div data-edit-flags className="setting__table table-setting" style={this.experimentStyleBlock}>
                    <div className="table-setting__head" style={showExperiments}>
                        <div className=" table-setting__column1">Status</div>
                        <div className="table-setting__column2 ">{nameColumn} name</div>
                        <div className="table-setting__column3">
                            {nameColumn} ID
                        </div>
                        <div className="table-setting__column4">
                            Manage
                        </div>
                    </div>

                    {this.state.displayExperiments.map((item) =>

                        <div className="table-setting__wrap" id={"experiment-" + item.id}>
                            <div className="table-setting__row">
                                <div className="table-setting__status table-setting__column1">
                                    <div className="checkbox table-setting__checkbox">
                                        <input
                                            id="c_1"
                                            data-error="Ошибка"
                                            className="checkbox__input"
                                            type="checkbox"
                                            value="1"
                                            name="form[]"
                                            checked={item.isEnabled}
                                        />
                                        <label
                                            onClick={() => this.editCheckbox(item)}
                                            for="c_1"
                                            className="checkbox__label"
                                        >
                                            <span className="checkbox__text"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="table-setting__name table-setting__column2">{item.name}</div>
                                <div className="table-setting__id table-setting__column3">
                                    <span className="table-setting__mobile-label">
                                        Experiment ID
                                    </span>
                                    {item.alias ? item.alias : item.id}
                                </div>
                                <div className="table-setting__manage table-setting__column4">
                                    <div className="table-setting__items">
                                        {(window.mode  !== 'feature-toggle') ? (
                                        <Tippy content="Code to run">
                                            <a href={"/en/board/run-experiment?id=" + item.alias ?? item.id}
                                               className="table-setting__item">
                                                <svg className="table-setting__icon">
                                                    <use href="/img/icons/icons.svg#code"/>
                                                </svg>
                                            </a>
                                        </Tippy>
                                        ) : (
                                        <Tippy content="Code to run">
                                            <a href={"/en/feature-toggle/run-feature-flag?id=" + item.alias}
                                               className="table-setting__item">
                                                <svg className="table-setting__icon">
                                                    <use href="/img/icons/icons.svg#code"/>
                                                </svg>
                                            </a>
                                        </Tippy>
                                            )}
                                        <Tippy content="View stats">
                                            <a href={"/en/board/experiment-stats?experimentId=" + item.id}
                                               className="table-setting__item">
                                                <svg className="table-setting__icon">
                                                    <use href="/img/icons/icons.svg#stat"/>
                                                </svg>
                                            </a>
                                        </Tippy>
                                        <Tippy content="Edit">
                                        <a href="" data-correct
                                           className="table-setting__item" onClick={e => this.edit(item, e)}>
                                            <svg className="table-setting__icon">
                                                <use href="/img/icons/icons.svg#correct"/>
                                            </svg>
                                        </a>
                                        </Tippy>
                                        <Tippy content="Remove">
                                            <a href="" className="table-setting__item"
                                               onClick={e => this.removeExperiment(item, e)}>
                                                <svg className="table-setting__icon">
                                                    <use href="/img/icons/icons.svg#delete"/>
                                                </svg>
                                            </a>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                            <div className="table-setting__row table-setting__row_edit">
                                <div className="table-setting__column1"/>
                                <form className="create-setting__form" onSubmit={e => this.submitHandle(e)}>
                                    <div/>
                                    <div className="create-setting__row" style={{"margin-bottom":"3rem"}}>
                                        <ExperimentInput
                                            title={'Experiment name'}
                                            value={experimentName}
                                            onChange={e => this.changeName(e.target.value)}
                                        />
                                        <ExperimentInput
                                            title={'Experiment uid'}
                                            value={item.alias}
                                            disabled={this.props.parent.appState.mode === 'edit'}
                                        />
                                    </div>
                                    <Branch
                                        branches={this.props.parent.appState.activeItem.branches ?? []}
                                        disabled={this.props.parent.appState.mode === 'edit'}
                                        onChangeBranchName={e => this.changeBranchName(e)}
                                        onChangeBranchUid={e => this.changeBranchUid(e)}
                                        onChangePercent={e => this.changePercent(e)}
                                        onClickPercent={e => this.changePercent(e)}
                                        onClickRemoveBranch={e => this.removeBranch(e)}
                                    />
                                    <button onClick={e => this.addBranch(e)} className="create-setting__button" style={displayAddBranch}>
                                        + Add another branch
                                    </button>
                                    <div className="create-setting__bottom">
                                        <button className="create-setting__cancel"
                                                onClickCapture={e => this.cancelEdit(e)}>Cancel
                                        </button>
                                        <button type="submit" className="create-setting__update button">
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </>
        );
    }
}

export default ExperimentsList;
