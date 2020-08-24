import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="containerAG">
                <div style={footer}>© Andrew Gorman</div>
            </div>
        )
    }
};

const footer = {
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    fontFamily: 'monospace',
    textAlign: 'center',
}

export default Footer;
