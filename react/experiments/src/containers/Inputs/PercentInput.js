import React from 'react';

class PercentInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            percent: this.props.percent ?? 0,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.percent !== this.props.percent) {
            this.setState({
                percent: this.props.percent,
            })
        }
    }

    onChange(e) {
        if (e.target.value > 100) {
            e.target.value = 100
        }

        e.target.value = e.target.value.replace( /[^0123456789]/, '' );

        this.setState({
            percent: e.target.value.replace( /[^0123456789]/, '' )
        })

        this.props.onChangePercent(e);
    }

    check(e) {
        if (e.target.value.length === 0) {
            this.setState({
                percent: 0
            }, () => {
                this.onChange(e);
            })
        }
    }

    render() {
        return (
            <>
                <div className="quantity__input">
                    <input autoComplete="off"
                           type="text"
                           name="form[]"
                           data-id={this.props.id}
                           id={"branch-percent-" + this.props.id}
                           value={this.state.percent}
                           onChange={e => {
                               this.onChange(e)
                           }}
                           onBlur={e => {
                               this.check(e)
                           }}
                    />
                </div>
            </>
        )
    }
}

export default PercentInput;