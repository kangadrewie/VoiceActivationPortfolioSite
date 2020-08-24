import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class SectionHeading extends Component {
    render() {
        return(
            <Fade duration={1500} bottom>
                <div>
                    <h1 style={sectionHeading} className="sectionHeading"><mark>{'<'}</mark> {this.props.heading} <mark>{'/>'}</mark></h1>
                    <span style={line}></span>
                </div>
            </Fade>
        )
    }
}

const sectionHeading = {
    marginBottom: '44px',
    position: 'relative',
}

const line = {
    position: 'relative',
    top: '0',
    left: '0',
    width: '80px',
    height: '10px'
}

export default SectionHeading;
