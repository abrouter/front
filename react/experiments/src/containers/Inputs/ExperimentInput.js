import React from "react";
import {Error} from "./Error";

class ExperimentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            inputError: {},
        }
    }

    change(e) {
        this.props.onChange(e);
    }

    showError(value) {
        if (value.length === 0) {
            this.setState({
                error: true,
                inputError: {'box-shadow': 'inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9'},
            })
        } else {
            this.setState({
                error: false,
                inputError: {},
            })
        }
    }

    render() {
        let title = String(this.props.title);

        return (
            <div className="create-setting__item">
                <label className="create-setting__label">{title}</label>
                <input
                    id="input_uid"
                    autoComplete="off"
                    style={this.state.inputError}
                    type="text"
                    data-error="Ошибка"
                    placeholder={this.props.placeholder}
                    className="input create-setting__input"
                    value={this.props.value}
                    disabled={this.props.mode === 'edit'}
                    data-id={this.props.dataId}
                    onChange={e => {
                        this.showError(e.target.value)
                        this.props.onChange(e)
                    }}
                />
                <Error
                    showError = {this.state.error}
                    id = {'error_' + title.toLowerCase()}
                    errorText = {'Please enter ' + title.toLowerCase() + '.'}
                />
            </div>
        )
    }
}

export default ExperimentInput;
