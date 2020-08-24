import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Spring } from 'react-spring/renderprops';

class SocialMedia extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHovering: '',
      };
    }

    handleMouseHover = (e) => {
        this.setState({isHovering: e.currentTarget.id});
    }

    handleMouseLeave = (e) => {
        this.setState({isHovering: ''})
    }
        
    render() {
        return(
            <Spring
                from={{position: 'fixed', top: 'calc(50% - 100px)', height: '200px', color: 'rgba(0, 0, 0, 0.5)', zIndex: '99', left: -200}}
                to={{left: 25}}
                config={{delay: 4000}}
            >
                {props => (
                         <table style={props} className="socialMediaMobile">
                            <tbody>
                                <tr>
                                    <td id="socialIcons">
                                        <a href="https://www.linkedin.com/in/drewgorman" id="LinkedIn" target="_blank" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}> 
                                            <i className="large linkedin icon" ></i>
                                        </a>
                                    </td>
                                    <td>
                                        {this.state.isHovering == "LinkedIn" && <Fade duration={250}><p>LinkedIn</p></Fade>}
                                    </td>
                                </tr>
                                <tr>
                                    <td id="socialIcons">
                                        <a href="https://github.com/kangadrewie" target="_blank" id="GitHub" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
                                            <i className="large github icon" ></i>
                                        </a>
                                    </td>
                                    <td>
                                        {this.state.isHovering == "GitHub" && <Fade duration={250}><p>GitHub</p></Fade>}
                                    </td>
                                </tr>
                                <tr>
                                    <td id="socialIcons">
                                        <a href="https://www.dropbox.com/s/y7l3im7n48l2pt1/Andrew%20Gorman%20CV.pdf?dl=0" target="_blank" id="CV" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
                                            <i className="large file alternate icon" ></i>
                                        </a>
                                    </td>
                                    <td>
                                        {this.state.isHovering == "CV" && <Fade duration={250}><p>CV</p></Fade>}
                                    </td>
                                </tr>
                                <tr>
                                    <td id="socialIcons">
                                        <a href="mailto:andrewgorman101@gmail.com" id="Email" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
                                            <i className="large envelope icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        {this.state.isHovering == "Email" && <Fade duration={250}><p>Email</p></Fade>}
                                    </td>
                                </tr>
                            </tbody>
                       </table>
                )}
            </Spring>
        );
    };
};

const icons = {
    position: 'fixed',
    top: 'calc(50% - 100px)',
    left: '25px',
    height: '200px',
    color: 'rgba(0, 0, 0, 0.5)',
    zIndex: '99'
}

export default SocialMedia;
