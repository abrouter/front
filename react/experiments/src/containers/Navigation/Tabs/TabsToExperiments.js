import React from 'react';

export function TabsToExperiments(props) {
    let activeExperiments = 0;
    let notActiveExperiments = 0;
    let experiments = props.experiments;
    let length = props.experiments.length;

    for(let i = 0; i < length; i++) {
        if (experiments[i].isEnabled === true) {
            activeExperiments++;
        } else notActiveExperiments++;
    }

    return (
        <>
            <div className="top-setting__item active" onClick={(e) => props.showActiveExperiments(e)}>
                <div className="top-setting__item-value">
                    Active
                </div>
                <span className="top-setting__count">{activeExperiments}</span>
            </div>
            {/* <div className="top-setting__item" onClick={this.showAwaitingLaunchExperiment.bind(this)}>
                                    <div className="top-setting__item-value">
                                        Awaiting launch
                                    </div>
                                    <span className="top-setting__count">0</span>
                                </div> */}
            <div className="top-setting__item" onClick={(e) => props.showNotActiveExperiments(e)}>
                <div className="top-setting__item-value">
                    Not active
                </div>
                <span className="top-setting__count">{notActiveExperiments}</span>
            </div>
        </>
    )
}
