import React from 'react';
import {TabsToExperiments} from "./Tabs/TabsToExperiments";
import {TabsToFeatureFlag} from "./Tabs/TabsToFeatureFlag";

export function Navigation (props) {
    let tab = window.mode === 'feature-toggle'
        ? <TabsToFeatureFlag
            experiments = {props.experiments.length}
            showAllExperiments = {(e) => props.showAllExperiments(e)}
        />
        : <TabsToExperiments
            experiments ={props.experiments}
            showActiveExperiments = {(e) => props.showActiveExperiments(e)}
            showNotActiveExperiments = {(e) => props.showNotActiveExperiments(e)}
        />

    return (
        <div className="top-setting__navigation">
            {tab}
        </div>
    )
}
