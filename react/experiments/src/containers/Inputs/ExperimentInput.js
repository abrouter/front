import React from "react";

class ExperimentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        }
    }

    change(e) {
        this.props.onChange(e);
    }

    showError(e, value) {
        if (value.length === 0) {
            e.target.setAttribute('style', 'box-shadow: inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9');
            e.target.closest('.create-setting__item').children[2].setAttribute(
                'style', 'display:block'
            );
        } else {
            e.target.removeAttribute('style');
            e.target.closest('.create-setting__item').children[2].setAttribute(
                'style', 'display:none'
            )
        }
    }

    render() {
        let title = String(this.props.title);

        return (
            <div className="create-setting__item">
                <label className="create-setting__label">{title}</label>
                <input
                    id={this.props.dataId}
                    autoComplete="off"
                    type="text"
                    placeholder={this.props.placeholder}
                    className="input create-setting__input"
                    value={this.props.value}
                    disabled={this.props.disabled}
                    data-id={this.props.dataId}
                    onChange={e => {
                        this.showError(e, e.target.value)
                        this.props.onChange(e)
                    }}
                />
                <div
                    className="input_error"
                    style={{'display':'none'}}
                    id={'error_' + title.toLowerCase()}
                >
                    {'Please enter ' + title.toLowerCase() + '.'}
                </div>
            </div>
        )
    }
}

export default ExperimentInput;
