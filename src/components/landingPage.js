import React, {Component} from 'react';
import VoiceButton from './VoiceButton.js';
import TechIcons from './TechIcons.js';
import ScrollComponenet from './ScrollButton.js';
import ScrollDown from './ScrollDownLanding.js';
import FadeIn from 'react-fade-in';
import Background from '../images/landingportrait.png';


class LandingDialog extends Component {
    render() {
        return(
            <div id="homepage" style={container}>
                <FadeIn transitionDuration="1400">
                    <div style={bg} className="bgMobile"></div>
                </FadeIn>
                <div style={dialog} className="bgCaptionContainer">
                    <div>
                    <FadeIn delay="1000" transitionDuration="1000">
                        <h1 style={header} className="bgCaptionHeading">{this.props.heading}</h1>
                    </FadeIn>

                    <FadeIn delay="1500" transitionDuration="1200">
                        <p style={caption} className="bgCaptionPara">{this.props.caption}</p>
                    </FadeIn>

                    <FadeIn delay="2000" transitionDuration="1400">
                        <VoiceButton></VoiceButton>
                    </FadeIn>

                    </div>
                </div> 
                <ScrollComponenet></ScrollComponenet>
            </div>
        );
    }
}
const container = {
    minHeight: '30rem',
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'table',
}

const bg = {
    position: 'absolute',
    display: 'table',
    width: '100%',
    paddingTop: '80px',
    height: '100vh',
    maxHeight: '100vh',
    backgroundPosition: 'right bottom',
    backgroundImage: `url(${Background})`,
    backgroundOrigin: 'content-box',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    paddingLeft: '50%',
    backgroundAttachment: 'scroll',
    overflow: 'hidden',
}

//Mobile Devices at 1440px wide
//const mobile = {
//  paddingLeft: '0',
//  paddingTop: '35%',
//  backgroundPosition: 'center bottom'
//  }

const dialog = {
    display: 'inline-grid',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    float: 'left',
    paddingLeft: '13%'
}

const header = {
    fontSize: '6em',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '700',
    fontColor: 'grey',
    marginBottom: '0'
}

const caption = {
    width: '50%',
    height: '50px',
    fontSize: '1.2em',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '200'
}

export default LandingDialog;
