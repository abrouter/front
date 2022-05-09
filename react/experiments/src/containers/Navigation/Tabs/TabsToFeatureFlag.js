import React from 'react';

export function TabsToFeatureFlag(props) {
    return (
        <>
            <div className="top-setting__item active" onClick={(e) => props.showAllExperiments(e)}>
                <div className="top-setting__item-value">
                    All
                </div>
                <span className="top-setting__count">{props.experiments}</span>
            </div>
        </>
    )
}