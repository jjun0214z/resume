import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Reference from './presenter';

class Container extends Component {

    static propTypes = {
        getReference: PropTypes.func.isRequired
    };
    componentDidMount() {
        const { getReference } = this.props;
        getReference();
    }
    render() {
        if( typeof(this.props.reference) !== "undefined" ){
            const { reference } = this.props;
            return (
                <Reference reference={reference} />
            );
        }else{
            return null;
        }
    }
}

export default Container;