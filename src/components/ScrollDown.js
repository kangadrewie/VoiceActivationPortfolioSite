import React, { Component } from 'react';

class ScrollDown extends Component {
    render() {
        return(
            <div style={container}>
                 <a href={this.props.actionLocation} id="scrollHover">
                    <p style={caption}>{this.props.title}</p>
                    <i style={icon} className="big caret square down icon"></i>
                 </a>
            </div>
        )
    }
}

const container = {
    marginTop: '20px',
    width: '100%',
    position: 'absolute',
    left: '0',
    bottom: '45px',
}

const caption = {
    width: '100%',
    fontFamily: 'VT323, monospace',
    fontSize: '1.8em',
    textAlign: 'center'
}

const icon = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}

export default ScrollDown;
