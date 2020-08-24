import React, { Component } from 'react';
import ProjectItem from './ProjectItem.js';
import SectionHeading from './SectionHeading.js';
import SectionParagraph from './SectionParagraph.js';
import FeaturedProject from './FeaturedProject.js';
import SelectedProject from "./SelectedProject";
import ScrollDown from './ScrollDown.js';
import SectionWatermark from './SectionWatermark.js';
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProjectShowcase extends Component {
     constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "ease-out"
        };

        return(
            <Fade duration={1500} bottom>
                <div className="containerAG"  id="mywork">
                    <div>
                        <SectionHeading heading={'Some Things I\'ve Built'}></SectionHeading>
                        <Slider {...settings} style={slider}>
                            {this.props.featuredProjects.map((project, index) => {
                                return(
                                    <FeaturedProject alignment={project.align} title={project.name} caption={project.caption} tech={project.tech} gitRepo={project.gitRepo} image={project.image} mobileImage={project.mobileImage} selectedProject={this.props.selectedProject}></FeaturedProject>
                                )
                            })}
                        </Slider>

                       <div style={container} >
                            <div className="ui three doubling cards" style={otherProjectContainer}>
                                <ProjectItem projects={this.props.projects} selectedProject={this.props.selectedProject}></ProjectItem>
                            </div>
                       </div>
                    </div>
                </div>
            </Fade>
        )
    }
};

const overallContainer = {
    position: 'relative',
    padding: '0',
    margin: '0',
    minHeight: '800px',
    height: '100vh',
    display: 'block',
}

const heading = {
    marginBottom: '44px',
    paddingBottom: '44px'
}

const slider = {
    maxWidth: '700px',
    width: 'auto',
    overflow: 'visible'
}

const container = {
    width: '100%',
    height: 'auto',
}

const content = {
    display: 'inline-grid',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
}

const featuredContainer = {
    maxWidth: '700px',
    overflow: 'visible',
    marginTop: '50px',
    marginBottom: '80px',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const otherProjectContainer = {
    position: 'relative',
    display: 'flex',
    maxWidth: '700px',
    width: 'auto',
    marginTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const row = {
    width: '100%',
    justifyContent: 'space-between'
}

export default ProjectShowcase;
