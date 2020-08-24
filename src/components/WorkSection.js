import React, { Component } from 'react';
import SectionHeading from './SectionHeading.js';
import SectionWatermark from './SectionWatermark.js';
import SectionParagraph from './SectionParagraph.js';
import WorkHistory from './WorkHistory.js';
import TechIcons from './TechIcons.js';
import ScrollDown from './ScrollDown.js';


class AboutMe extends Component {
    render() {
        const AboutPara = "As a self-proclaimed rookie, I am relatively new to this industry, having only begun my journey to Software Engineering in the last 12 months. Before this, I worked as a Graphic Designer for a busy design studio in Dublin, and was most recently employed as an Employment Advisor responsible for managing a large client portfolio on behalf of the Department of Employment Affairs and Protection. However, over the course of the last 12 months, I have developed skills and knowledge in many area of Software Engineering, and am actively driven to continue exploring new technologies and concepts daily."
        return(
            <div id="work" className="containerAG">
                <div style={content}>
                    <div>
                        <SectionHeading heading={'Where I\'ve Worked'}></SectionHeading>
                        <SectionParagraph para={AboutPara}></SectionParagraph>
                        <WorkHistory></WorkHistory>
                    </div>
                </div>
            </div>
        )
    }
}

const content = {
}

export default AboutMe;
