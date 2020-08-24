import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class ScrollDown extends Component {
    render() {
        return(
            <FadeIn wrapperTag={"tr"} delay="4000" transitionDuration="1000">
                <div class="ui two column centered grid" style={container}>
                    <div class="column">
                         <a href={this.props.actionLocation} id="scrollHover">
                            <p style={caption}>{this.props.title}</p>
                            <i style={icon} className="big caret square down icon"></i>
                         </a>
                    </div>
                </div>
            </FadeIn>
        )
    }
}

const container = {
    width: '100%',
    position: 'absolute',
    left: '0',
    bottom: '65px',
}

const caption = {
    fontFamily: 'VT323, monospace',
    fontSize: '1.8em',
    marginBottom: '20px',
    textAlign: 'center'
}

const icon = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}

export default ScrollDown;
