import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class InputEmail extends Component {

    static propTypes = {
        textLabel: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        valid: PropTypes.bool,
        onChangeProps: PropTypes.func
    };

    state = {
        onError: false
    }

    onChange = (ev) => {

        if (this.props.valid === true) {
            if (regEmail.test(ev.target.value)) {
                this.setState({ onError: false });
                this.props.onChangeProps({ [this.props.name]: ev.target.value });

            } else {
                this.setState({ onError: true });

                this.props.onChangeProps({ [this.props.name]: null });
            }
        } else {
            this.props.onChangeProps({ [this.props.name]: ev.target.value });
        }
    }

    render() {
        //console.log(this.props);
        return (
            <TextField label={this.props.textLabel} error={this.state.onError} type="email" onChange={this.onChange} />
        );
    }
}

export default InputEmail;