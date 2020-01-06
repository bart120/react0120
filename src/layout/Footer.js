import React, { Component } from 'react';

class Footer extends Component {

    //count = 0;

    state = {
        count: 0
    };

    constructor() {
        super();
        console.log('constructor');
    }

    componentDidUpdate() {
        console.log('update');
    }

    componentDidMount() {
        console.log('componentDidMount');
        //        this.state.count = 1;
        this.setState({ count: 1 });
    }

    render() {
        console.log('render');
        return (
            <footer>
                &copy; formation reactjs version {this.state.count}
            </footer>
        );
    }
}

export default Footer;
