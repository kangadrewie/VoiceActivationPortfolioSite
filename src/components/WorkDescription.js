import React, { Component } from 'react';
import Role from './JobRole.js';
import { AnimateOnChange } from 'react-animation';

class WorkDesc extends Component {
    render() {
        return(
            <div className="mobileWorkDesc"> 
                <AnimateOnChange>
                    <div style={meta}>
                        {this.props.details.role} | {this.props.details.startDate} - {this.props.details.endDate}
                    </div>
                    <ul style={list}>
                        <Role desc={this.props.details.desc}></Role>
                    </ul>
                </AnimateOnChange>
            </div>
        )
    }
};

const meta = {
    fontFamily: 'monospace',
    fontSize: '1.2em'
}

const list = {
    listStylePosition: 'outside'
}

export default WorkDesc;
