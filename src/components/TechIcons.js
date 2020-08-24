import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import VisibilitySensor from 'react-visibility-sensor';
import Fade from 'react-reveal/Fade';

class TechIcons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: window.matchMedia("(min-width: 768px)").matches,
            iconSize: 'big',
            tech: {
                name: '',
                exp: '',
                frameworks: []
            }
        }
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 886px)").addListener(handler);
    }

    handleClick = (e) => {
        if (e.currentTarget.getAttribute('lang') === 'python') {
            this.setState({tech: {name: 'Python 3', desc: "I build both small and large scale applications in JavaScript daily for desktop, tablet, mobile or server. Combined with an in-depth understanding of UX and design means I can take applications from start to finish. I can also provide consulting and advice on solutions."}})
        }
    }
    
    render() {
        console.log(this.state.matches)
        return(
            <Fade duration={1500} bottom>
                <div style={container}>
                    <h3 style={heading}>Familiar Technologies : </h3>
                    <table>
                        <tbody>
                            <FadeIn delay="200" transitionDuration="600" style={fadeStyle} wrapperTag={"tr"} childTag={"td"}>
                                <h3 style={braces}>{'{'}</h3>
                                <i id="codeIcons" lang="python" className={(this.state.matches) ? "big python icon" : "large python icon"} alt="Python3" onClick={this.handleClick}>,</i>
                                <i id="codeIcons" lang="js" className={(this.state.matches) ? "big js icon" : "large js icon"} alt="Javascript">,</i>
                                <i id="codeIcons" lang="html" className={(this.state.matches) ? "big html5 icon" : "large html5 icon"} alt="HTML5">,</i>
                                <i id="codeIcons" className={(this.state.matches) ? "big react icon" : "large react icon"}>,</i>
                                <i id="codeIcons" className={(this.state.matches) ? "big flask icon" : "large flask icon"} alt="Flask">,</i>
                                <i id="codeIcons" className={(this.state.matches) ? "big css3 icon" : "large css3 icon"} alt="CSS3">,</i>
                                <i id="codeIcons" className={(this.state.matches) ? "big aws icon" : "large aws icon"} alt="AWS">,</i>
                                <i id="codeIcons" className={(this.state.matches) ? "big git icon" : "large git icon"} alt="GIT"></i>
                                <h3 style={braces}>{'}'}</h3>
                            </FadeIn>
                        </tbody>
                    </table>
                </div>
            </Fade>
        )
    }
}

const fadeStyle = {
    display: 'none'
}

const braces = {
    fontWeight: '800',
    fontSize: '2em'
}

const p = {
    textAlign: 'center',
    opacity: '0',
    top: '10px'
}

const tableHead = {
    height: '10px'
}

const heading = {
    fontWeight: '400',
    fontFamily: 'monospace',
    paddingTop: '50px',
    paddingBottom: '20px',
    fontSize: '1em',
}

const container = {
    positon: 'relative',
}

const langDescription = {
    width: '100%'
}

export default TechIcons;
