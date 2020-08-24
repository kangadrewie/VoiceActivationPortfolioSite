import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class SectionParagraph extends Component {
    render() {
        return(
            <Fade duration={1000} bottom>
                <div className="ui text container padding">
                    <p style={paraStyle}>{this.props.para}</p>
                </div>
            </Fade>
        )
    }
};

const paraStyle = {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: '1.1em',
    fontWeight: '100',
    maxWidth: '700px',
    textAlign: 'justify'
}

export default SectionParagraph;
