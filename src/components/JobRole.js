import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class Role extends Component {
    render() {
        return(
            this.props.desc.map((role) => (
                <li style={list}>{role}</li>
            )) 
        )
    }
};

const list = {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: '1.2em',
    paddingTop: '8px',
    listStylePosition: 'outside'
}

export default Role;
