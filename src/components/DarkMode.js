import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

class DarkMode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            darkMode: false
        }
    }

    handleClick = () => {
        this.setState({darkMode: !this.state.darkMode})
    }

    render() {
        return(
            <Spring
                from={{position: 'fixed', bottom: '35px', left: '-200px', color: 'rgba(0, 0, 0, 0.5)', cursor: 'pointer', zIndex: '999'}}
                to={{left: '25px'}}
                config={{delay: '4000'}}
            >
                {props => (
                  <i id="darkMode" style={props} onClick={this.handleClick} className={
                    (this.state.darkMode === true) ? "large moon icon" : "large moon outline icon"
                    }></i>
                )}
            </Spring>
         )
    }
};

const DarkModeStyle = {
    position: 'fixed',
    bottom: '35px',
    left: '25px',
    color: 'rgba(0, 0, 0, 0.5)',

    cursor: 'pointer',
    zIndex: '999'

}

export default DarkMode;
