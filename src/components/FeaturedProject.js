import React, { Component } from 'react';
import FeaturedImage from './FeaturedImage.js';
import FeaturedContent from './FeaturedContent.js';
import Fade from 'react-reveal/Fade';

class FeaturedProject extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            matches: window.matchMedia("(min-width: 768px)").matches
        }
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 600px)").addListener(handler);
    }

    render() {
        console.log(this.state.matches)
        if (this.state.matches === false) {
            return(
                    <div className="ui grid featuredMobile" style={global}>
                        <div className={(this.state.matches) ? "eight wide column mobileCardContainer" : "sixteen wide column mobileCardContainer"} type={"featured"}  style={container} id={this.props.gitRepo} onClick={this.props.selectedProject}>
                            <FeaturedContent alignment={this.props.alignment} title={this.props.title} caption={this.props.caption} tech={this.props.tech}></FeaturedContent>
                            <img src={process.env.PUBLIC_URL + this.props.mobileImage} alt=""  style={mobileBackgroundImage}/>
                        </div>
                        <div className={(this.state.matches) ? "eight wide column" : "sixteen wide column"} style={imageContainer} >
                            <FeaturedImage alignment={this.props.alignmnent} image={this.props.image}></FeaturedImage>
                        </div>
                  </div>
           )
        } if (this.props.alignment == 'left') {
            return(
                    <div className="ui grid featuredMobile" style={global}>
                        <div className={(this.state.matches) ? "eight wide column mobileCardContainer" : "sixteen wide column mobileCardContainer"} type={"featured"}  style={container} id={this.props.gitRepo} onClick={this.props.selectedProject}>
                            <FeaturedContent alignment={this.props.alignment} title={this.props.title} caption={this.props.caption} tech={this.props.tech}></FeaturedContent>
                        </div>
                        <div className={(this.state.matches) ? "eight wide column" : "sixteen wide column"} style={imageContainer} >
                            <FeaturedImage alignment={this.props.alignmnent} image={this.props.image}></FeaturedImage>
                        </div>
                  </div>
           )
        } else {
            return(
              <div className="ui grid featuredMobile" style={global}>
                    <div className={(this.state.matches) ? "eight wide column mobileCardContainer" : "sixteen wide column mobileCardContainer"} style={imageContainer} >
                        <FeaturedImage alignment={this.props.alignmnent} image={this.props.image}></FeaturedImage>
                    </div>
                    <div className={(this.state.matches) ? "eight wide column mobileCardContainer" : "sixteen wide column mobileCardContainer"} type={"featured"}  style={container} id={this.props.gitRepo} onClick={this.props.selectedProject}>
                        <FeaturedContent alignment={this.props.alignment} title={this.props.title} caption={this.props.caption} tech={this.props.tech}></FeaturedContent>
                    </div>
              </div>
            )
        }
    }
};

const mobileBackgroundImage = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '-1'
}

const global = {
    paddingLeft: '14px',
    paddingRight: '14px',
}

const container = {
    position: 'relative',
    width: 'auto',
    maxWidth: '50% !important',
    cursor: 'pointer',
    padding: '0 !important',
    boxShadow: '0 1px 10px 0px rgba(34,36,38,.15)',
    backgroundColor: 'orange',
    marginBottom: '50px',
    overflow: 'hidden'

}

const imageContainer = {
    width: 'auto',
    maxWidth: '50%'
}

export default FeaturedProject;
