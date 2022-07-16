import React from 'react';

export function Error(props) {
    let show = props.showError ? {'display': 'block'} : {'display':'none'};

    return (
        <div className="input_error" style={show} id={props.id}>{props.errorText}</div>
    )
}
