import React from "react"

class DontHaveExperiments extends React.Component
{
    render() {
        let buttonName = window.mode === 'feature-toggle' ? 'Add new flag' : 'Create new experiment'
        return (
            <>
                <div className="setting__top top-setting">
                    <div className="top-setting__info">
                        You don't have active experiments, yet.
                    </div>
                    <button className="top-setting__btn" onClick={(e) => this.props.createExperiment(e)}>
                        <svg className="top-setting__icon">
                            <use href="/img/icons/icons.svg#plus"/>
                        </svg>
                        <svg className="top-setting__icon top-setting__icon2">
                            <use href="/img/icons/icons.svg#plus2"/>
                        </svg>
                        <span>{buttonName}</span>
                    </button>
                </div>
                <div className="setting__image" style={this.props.experimentStyleBlock}>
                    <picture>
                        <source srcSet="/img/png/setting.webp" type="image/webp"/>
                        <img src="/img/png/setting.png?_v=1644581884261" alt="Image"/>
                    </picture>
                </div>
            </>
        )
    }
}

export default DontHaveExperiments;