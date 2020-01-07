import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class InputEmail extends Component {

    static propTypes = {
        textLabel: PropTypes.string.isRequired,
        valid: PropTypes.bool
    };

    onChange = (ev) => {

    }

    render() {
        console.log(this.props);
        return (
            <TextField label={this.props.textLabel} type="email" name="email" onChange="{this.onChange}" />
        );
    }
}

export default InputEmail;