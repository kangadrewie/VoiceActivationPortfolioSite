import React, {Component} from 'react';
import FadeIn from 'react-fade-in';

class Navigation extends Component {
    render() {
        return(
            <table style={navContainer} className="nav">
                <thead>
                    <FadeIn delay="600" wrapperTag={"tr"} childTag={"td"}>
                        <a href="#aboutme">
                            <td style={navCol}>About</td>
                        </a>
                         <a href="#mywork">
                            <td style={navCol}>Work</td>
                        </a>
                         <a href="#contactme">
                            <td style={navCol}>Contact</td>
                        </a>
                  </FadeIn>
                </thead>
            </table>
        )
    }
}

const navContainer = {
    position: 'absolute',
    top: '65px',
    right: '70px',
    width: '480px',
    zIndex: '999',
    textAlign: 'right'
}

const navCol = {
    width: '160px',

    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: '1.2em',
    fontWeight: '200',
}

export default Navigation; 
