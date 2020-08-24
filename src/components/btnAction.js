import React, {Component} from 'react';

class ActionButton extends Component {
    render() {
        return(
            <form action="mailto:andrewgorman101@gmail.com">
                <button id="actionButton" style={btnAction} className="actionButtonMobile">{this.props.btnCaption}</button>
            </form>
        )
    }
}

const btnAction = {
    height: '50px',
    width: '200px',
    borderRadius: '70px',
    borderWidth: '0',
    backgroundColor: 'orange',
    marginTop: '2em',
    zIndex: '999',

    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: '1.5em',
    fontWeight: '700',
    color: 'white',
    cursor: 'pointer',
    transition: 'none'
}

export default ActionButton;
