import React, { Component } from 'react';
import WorkDesc from './WorkDescription.js';

class WorkItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            desc: []
        }
    }

    render() {
        console.log(this.props.mobile)
        if (this.props.mobile == true) {
            return(
                Object.keys(this.props.workHistory).map((work, i) => (
                        <li style={container}>
                            <button id={i} style={btnStyle} onClick={this.props.onClick} selectedJob={this.state.selectedJob}>{this.props.workHistory[work].company}</button>
                        </li>
                ))
            )
        } else {
            return(
                Object.keys(this.props.workHistory).map((work, i) => (
                    <td style={columns} className="eight wide column mobileItemContainer">
                        <button className="mobileJobItem" id={i} style={btnStyle} onClick={this.props.onClick} selectedJob={this.state.selectedJob}>{this.props.workHistory[work].company}</button>
                    </td>
                ))
            )
        }
    }
};

const btnStyle = {
    fontFamily: 'monospace',
    fontSize: '1.3em',
    display: 'block',
    backgroundColor: 'transparent',
    height: '52px',
    width: '100%',
    borderTop: '0',
    borderRight: '0',
    borderLeft: '0',
    borderBottom: '0px',
    outline: 'none',
    textAlign: 'left',
    cursor: 'pointer'
}

const container = {
    width: '200px',
    listStyleType: 'none',
}

const columns = {
    textAlign: 'center',
}

const title = {
    fontFamily: 'monospace',
    fontSize: '1.4em',
    fontWeight: '400',
    cursor: 'pointer'
}

const meta = {
    fontFamily: 'monospace',
    fontSize: '1.2em',
}

const desc = {
    fontFamily: 'Source Sans Pro',
    fontSize: '1.2em',
    fontWeight: '100'
}

const icon = {
    display: 'inline',
    color: 'orange',
    paddingRight: '15px'
}

export default WorkItem;
