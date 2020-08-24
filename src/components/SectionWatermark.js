import React, { Component } from 'react';

class SectionWatermark extends Component {
    render() {
        return(
            <div style={watermark} className="watermarkMobile">{this.props.watermark}</div>
        )
    }
};

const watermark = {
    position: 'absolute',
    right: '0',
    bottom: '125px',
    fontFamily: 'VT323, monospace',
    fontWeight: '400',
    fontSize: '15em',
    opacity: '0.1',
    zIndex: '-1',
    textAlign: 'right',

}

export default SectionWatermark;
