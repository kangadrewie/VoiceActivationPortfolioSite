import React, { Component } from 'react';
import SectionHeading from './SectionHeading.js';
import SectionWatermark from './SectionWatermark.js';
import SectionParagraph from './SectionParagraph.js';
import ScrollDown from './ScrollDown.js';
import TechIcons from './TechIcons.js';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';

class AboutMe extends Component {
    render() {
        const AboutPara = 'I\'m a passionate and aspiring Software Engineer currently studying a Post-Graduate in Computer Science at Technological University Dublin. I’ve a strong desire to learn and grow my skillset in an industry that I am extremely enthusiastic about. I’m currently focused on developing my knowledge in backend development, but having worked as a Graphic Designer for 5 years, I have a keen eye for detail, design, symmetry, and colour and enjoy applying these skills to Front-End Development. I’m a fast learner, and firmly believe in the importance of interaction, feedback, and collaboration in the creative problem-solving process. '

        return(
            <VisibilitySensor>
                {({isVisible}) =>
                    <Spring 
                        from={{opacity: isVisible ? '0' : '1'}}
                        to={{ opacity: 1}}
                    >
                        {props => (
                            <div style={props}>
                                <div id="aboutme" className="containerAG">
                                    <div style={content}>
                                        <div>
                                            <SectionHeading heading={'About Me'}></SectionHeading>
                                            <SectionParagraph para={AboutPara}></SectionParagraph>
                                            <div className="ui text container">
                                                <TechIcons></TechIcons>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Spring>
                }
            </VisibilitySensor>
        )
    }
}

const content = {
    width: '100%',
    height: 'auto',
}

const watermark = {
    bottom: '500px',
    marginBottom: '500px',
    paddingBottom: '500px'
}


export default AboutMe;
