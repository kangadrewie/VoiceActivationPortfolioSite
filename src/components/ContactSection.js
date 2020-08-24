import React, { Component } from 'react';
import SectionHeading from './SectionHeading.js';
import SectionParagraph from './SectionParagraph.js';
import ActionButton from './btnAction.js';
import Footer from './Footer.js';

class ContactSection extends Component {
    render() {

        const para = "If you’d like to get in touch with me, whether to hire me, request additional contact information, or just to say hi, you can contact me using the big orange button below!"

        const para2 = "Additionally, you can check out my CV, LinkedIn or Github."

        return(
            <div id="contactme" style={container} className="containerAG">
                <div>
                    <SectionHeading heading={'Get In Touch'}></SectionHeading>
                    <SectionParagraph para={para}></SectionParagraph>
                    <ActionButton btnCaption={'Get In Touch'}></ActionButton>
                </div>
            </div>
        )
    }
}
const container = {
    paddingBottom: '120px'
}

const content = {
    display: 'table-cell',
    width: '100%',
    height: '100vh',
    verticalAlign: 'middle'
}

const footer = {
    fontFamily: 'monospace',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    paddingBottom: '30px',
    textAlign: 'center'
}

const p2 = {
    paddingTop: '50px !important'
}


export default ContactSection;
