import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class BurgerIcon extends Component {
    showSettings(event) {
      event.preventDefault();
    }

    render() {
        return(
            <div className="burger">
                <Menu styles={styles} right={true} customBurgerIcon={ <i className="big code icon"></i> }>
                    <a id="home" className="menu-item big" href="#home">
                        <tr>
                            <td><i className="large home icon" style={icon}></i></td>
                            <td style={menuItem}>Home</td>
                        </tr>
                    </a>
                    <a id="about" className="menu-item" href="#aboutme">
                        <tr style={row}>
                            <td><i className="large info icon" style={icon}></i></td>
                            <td style={menuItem}>About Me</td>
                        </tr>
                    </a>
                    <a id="projectwork" className="menu-item" href="#mywork">
                        <tr style={row}>
                            <td><i className="large code icon" style={icon}></i></td>
                            <td style={menuItem}>My Work</td>
                        </tr>
                    </a>
                    <h2>Social</h2>
                    <a className="menu-item" href="mailto:andrewgorman101@gmail.com">
                        <tr style={row}>
                            <td><i className="large envelope icon" style={icon}></i></td>
                            <td style={menuItem}>Contact</td>
                        </tr>
                    </a>
                    <a className="menu-item" href="https://www.dropbox.com/s/0k9hbls47818dti/Andrew%20Gorman%20CV.pdf?dl=0" target="_blank">
                        <tr style={row}>
                            <td><i className="large file alternate icon" style={icon}></i></td>
                            <td style={menuItem}>CV</td>
                        </tr>
                    </a>
                    <a className="menu-item" href="https://www.linkedin.com/in/drewgorman" target="_blank">
                        <tr style={row}>
                            <td><i className="large linkedin icon" style={icon}></i></td>
                            <td style={menuItem}>LinkedIn</td>
                        </tr>
                    </a>
                    <a className="menu-item" href="https://github.com/kangadrewie" target="_blank">
                        <tr style={row}>
                            <td><i className="large github icon" style={icon}></i></td>
                            <td style={menuItem}>Github</td>
                        </tr>
                    </a>
                </Menu>
            </div>
        )
    }
};

const menuItem = {
    paddingLeft: '15px'
}

const social = {
}

const row = {
    verticalAlign: 'middle'
}

const icon = {

}

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '26px',
    height: '20px',
    right: '35px',
    top: '35px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '34px',
    width: '34px'
  },
  bmCross: {
    background: 'rgba(255, 255, 255, 0.87)',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'orange',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: 'rgba(255, 255, 255, 0.87)',
    padding: '0.8em'
  },
  bmItem: {
    height: '50px',
    marginBottom: '20px',
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default BurgerIcon;
