import React from 'react';
import getExperiments from '../http/getExperiments';
import deleteExperimentState from '../http/deleteExperimentState';
import LoadingOverlay from 'react-loading-overlay'
import DontHaveExperiments from "./DontHaveExperiments";
import {Navigation} from "./Navigation/Navigation";
import {ExperimentUidInput} from "./Inputs/ExperimentUidInput";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

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
            displayExperiments: []
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
        this.forceUpdate();
        this.props.parent.edit(item);
    }

    editCheckbox(item) {
        item.isEnabled = item.isEnabled !== true;

        this.props.parent.experimentCreate.submitHandleCheckbox(item)
        this.forceUpdate()
    }

    cancelEdit(e) {
        this.deleteClassEdit();
        e.preventDefault();
        this.props.parent.appState.mode = 'create';
        this.props.parent.appState.activeItem = {};
        this.forceUpdate();
    }

    createExperiment(e) {
        this.deleteClassActive(e)
        this.props.parent.refreshState();
        this.experimentStyleBlock = {'display': 'none'};
        this.props.parent.experimentCreate.createExperiment(e);
        this.forceUpdate();
    }

    submitHandle(e) {
        this.deleteClassEdit();
        this.props.parent.experimentCreate.submitHandle(e);
    }

    addClassNameActive(e) {
        this.experimentStyleBlock = {'display': 'block'};
        this.props.parent.experimentCreate.styleCreateExperimentBlock = {'display': 'none'};
        this.deleteClassActive(e);
        e.currentTarget.classList.add("active");
        this.props.parent.experimentCreate.forceUpdate()
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
        let value = e.target.value;
        this.props.parent.changeName(value);
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

    setActiveTab(tab) {
        this.setState({
            activeTab: tab
        })
    }

    render() {
        let showDontHaveExperiments,
            showExperiments = {'display': 'flex'};

        if (this.state.experiments.length === undefined || this.state.experiments.length === 0) {
            showDontHaveExperiments = <DontHaveExperiments
                experimentStyleBlock={this.experimentStyleBlock}
                createExperiment={(e) => this.createExperiment(e)}
            />
            showExperiments = {'display': 'none'};
        }

        let experimentName = this.props.parent.appState.activeItem.name,
            branches;

        if (window.mode !== 'feature-toggle') {
            branches = this.props.parent.appState.activeItem.branches ?? [];
        } else branches = [];

        let buttonCreate = window.mode === 'feature-toggle' ? 'Add new flag' : 'Create new experiment',
            displayLinkStats = window.mode === 'feature-toggle' ? {'display': 'none'} : {'display': 'block'},
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
                                        <Tippy content="View stats">
                                            <a href={"/en/board/experiment-stats?experimentId=" + item.id}
                                               className="table-setting__item" style={displayLinkStats}>
                                                <svg className="table-setting__icon">
                                                    <use href="/img/icons/icons.svg#stat"/>
                                                </svg>
                                            </a>
                                        </Tippy>
                                        <Tippy content="View stats">
                                        <a href="" data-correct
                                           className="table-setting__item" onClick={e => this.edit(item, e)}>
                                            <svg className="table-setting__icon">
                                                <use href="/img/icons/icons.svg#correct"/>
                                            </svg>
                                        </a>
                                        </Tippy>
                                        <Tippy content="View stats">
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
                                <form className="create-setting__form">
                                    <div className="create-setting__row">
                                        <div className="create-setting__item">
                                            <label className="create-setting__label">Experiment name</label>
                                            <input autoComplete="off"
                                                   type="text"
                                                   data-error="Ошибка"
                                                   placeholder="Button"
                                                   className="input create-setting__input"
                                                   value={experimentName}
                                                   onChange={this.changeName.bind(this)}
                                            />
                                        </div>
                                        <ExperimentUidInput
                                            uid={item.alias}
                                            mode={this.props.parent.appState.mode}
                                        />
                                    </div>

                                    {branches.map((branch) =>

                                        <div className="create-setting__row">
                                            <div className="create-setting__item2">
                                                <div className="create-setting__item">
                                                    <label className="create-setting__label">Branch name</label>
                                                    <input autoComplete="off"
                                                           type="text"
                                                           data-error="Ошибка"
                                                           placeholder="Button color test"
                                                           className="input create-setting__input"
                                                           id={'branch-' + branch.name}
                                                           data-id={branch.id}
                                                           value={branch.uid}
                                                           onChange={this.changeBranchName.bind(this)}
                                                    />
                                                </div>
                                                <div className="create-setting__item-digit">
                                                    <label className="create-setting__label">Split</label>
                                                    <div className="quantity">
                                                        <span className="quantity__label">%</span>
                                                        <div className="quantity__input">
                                                            <input autoComplete="off"
                                                                   type="text"
                                                                   name="form[]"
                                                                   data-id={branch.id}
                                                                   id={'branch-percent-' + branch.id}
                                                                   value={branch.percent ?? 0}
                                                                   onChange={this.changePercent.bind(this)}
                                                            />
                                                        </div>
                                                        <div className="quantity__buttons"
                                                             onClick={this.changePercent.bind(this)}>
                                                            <div className="quantity__button quantity__button_plus ">
                                                                <svg className="quantity__icon">
                                                                    <use href="/img/icons/icons.svg#arrow-quantity"/>
                                                                </svg>
                                                            </div>
                                                            <div className="quantity__button quantity__button_minus ">
                                                                <svg className="quantity__icon">
                                                                    <use href="/img/icons/icons.svg#arrow-quantity"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="create-setting__remove" data-id={branch.id}
                                                        onClickCapture={(e) => this.removeBranch(e)}>
                                                    <svg className="create-setting__remove-icon">
                                                        <use href="/img/icons/icons.svg#close"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="create-setting__bottom">
                                        <button className="create-setting__cancel"
                                                onClickCapture={e => this.cancelEdit(e)}>Cancel
                                        </button>
                                        <button className="create-setting__update button"
                                                onClickCapture={e => this.submitHandle(e)}>
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
