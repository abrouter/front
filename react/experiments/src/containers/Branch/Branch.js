import React from "react";
import ExperimentInput from "../Inputs/ExperimentInput";
import PercentInput from "../Inputs/PercentInput";

class Branch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            branches: this.props.branches ?? [],
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.branches !== this.props.branches) {
            this.setState({
                branches: this.props.branches
            })
        }
    }

    changeBranchUid(e) {
        this.props.onChangeBranchUid(e)
        this.forceUpdate()
    }

    addDash(name) {
        if (name !== undefined) {
            return name.replace(/ /g, '-')
        }

        return name;
    }

    render () {
        const displayAddBranch = window.mode === 'feature-toggle' ? {'display':'none'} : {};

        return (
            <>
                {this.state.branches.map((item) =>
                    <>
                        <div className="create-setting__row" style={displayAddBranch}>
                            <ExperimentInput
                                title={'Branch name'}
                                dataId={item.id}
                                value={item.name}
                                placeholder={'Branch name'}
                                onChange={e => this.props.onChangeBranchName(e)}
                            />
                            <ExperimentInput
                                title={'Branch uid'}
                                dataId={item.id}
                                value={this.addDash(item.uid ?? item.name)}
                                disabled={item.inactive_edit_uid ?? this.props.disabled}
                                placeholder={'Branch uid'}
                                onChange={e => this.changeBranchUid(e)}
                            />
                            <div className="create-setting__item2">
                                <div className="create-setting__item-digit">
                                    <label className="create-setting__label">Split</label>
                                    <div className="quantity">
                                        <span className="quantity__label">%</span>
                                        <PercentInput
                                            id={item.id}
                                            percent={item.percent}
                                            onChangePercent={e => this.props.onChangePercent(e)}
                                        />
                                        <div className="quantity__buttons" onClick={e => this.props.onClickPercent(e)}>
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
                                <button className="create-setting__remove" data-id={item.id}
                                        onClick={e => this.props.onClickRemoveBranch(e)}>
                                    <svg className="create-setting__remove-icon">
                                        <use href="/img/icons/icons.svg#close"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </>
        )
    }
}

export default Branch;
