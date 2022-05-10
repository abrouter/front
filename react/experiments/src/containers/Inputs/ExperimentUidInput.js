import React from "react";

export function ExperimentUidInput(props) {
    let disabled = props.mode === 'edit';

    if (window.mode !== 'feature-toggle') {
        return (
            <div className="create-setting__item">
                <label className="create-setting__label">Experiment uid</label>
                <input autoComplete="off"
                       type="text"
                       data-error="Ошибка"
                       placeholder="Button"
                       className="input create-setting__input"
                       value={props.uid}
                       disabled={disabled}
                       onChange={e => props.changeUid(e.target.value)}
                />
            </div>
        )
    } else {
        return (
            <>
            </>
        )
    }
}