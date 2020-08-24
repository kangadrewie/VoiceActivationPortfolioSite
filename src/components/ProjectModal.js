import React, { Component } from 'react';
import SectionParagraph from './SectionParagraph.js';
import Slider from 'react-slick';
import CodeBrowser from './gitexplorer/CodeBrowser.js';
import { Modal } from 'semantic-ui-react';

class ProjectModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: window.matchMedia("(min-width: 768px)").matches, 
            selectedProject: '',
        }
    }

    selectedProject = (e) => {
        if (e.length > 0 && e !== this.state.selectedProject) {
            this.setState({selectedProject: e})
        }
    }

    componentDidMount() {
       const handler = e => this.setState({matches: e.matches});
       window.matchMedia("(min-width: 886px)").addListener(handler); 
    }

    avail = () => {
        if (this.props.project.avail.length > 0 ) {
            this.props.project.avail.map((avail) => {
                console.log(avail)
                return(
                    <i className={(avail === "GitHub") ? "big github icon" : "big file icon"}></i>
                )
            })
        }
    }

    render() {
        console.log(this.props.project.avail)
        console.log(this.props.project.imageGallery)
        const settings = {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const description = "A Google Chrome Extension currency converter for Amazon.co.uk users. The extension retrieves latest exchange rates from an open source API and pulls the targeted currency from the DOM. The extension then converts and updates the DOM with the latest rate in the users selected currency. Currently, the extension only supports Amazon.co.uk users but further support for other Amazon regions will be implemented."

        return(
            <Modal
                open={this.props.modal}
                size='size'
                style={modalContainer}
            >
                <Modal.Content scrolling={false} style={content}>
                    <i className="large close icon" onClick={this.props.closeModal} style={closebutton}></i>
                    <div>
                        <h1 style={title}>{this.props.project.name}</h1>
                    </div>

                    <div style={sliderContainer}>
                        <Slider {...settings} style={slider}>
                            {this.props.project.imageGallery.map((imageSRC) => {
                                return(
                                    <div style={sliderImages}> 
                                        <img className="sliderImagesMobile" style={image} src={process.env.PUBLIC_URL + "/" + imageSRC}/>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>

                    <div className="ui grid" style={overviewContainer}>
                        <div className="row">
                            <div className={(this.state.matches) ? "eleven wide column modalContentDesc" : "sixteen wide column modalContentDesc"} style={contentSection}>
                                <h1 style={descriptionHeadings}>Overview</h1>
                                <p style={desc}>{this.props.project.desc}</p>
                                <React.Fragment>
                                    <p>Available to view at</p>
                                    <tr>
                                        {
                                            this.props.project.avail.map((avail) => {
                                                return(
                                                    <td style={availCol} id="socialIcons">
                                                        <a target="_blank" href={
                                                            (avail === "Heroku") ? this.props.project.heroku :
                                                            (avail === "Google Play Store") ? this.props.project.playStore : 
                                                            (avail === "GitHub") ? "https://github.com/kangadrewie/" + this.props.project.gitRepo : ''}>
                                                            <i className={
                                                                (avail === "Google Play Store") ? "big google play icon" : 
                                                                (avail === "Heroku") ? "big desktop icon" : 
                                                                (avail === "GitHub") ? "big github icon" : ''}></i>
                                                        </a>
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                </React.Fragment>
                            </div>
                            <div className={(this.state.matches) ? "five wide column additionalInfoMobile" : "sixteen wide column additionalInfoMobile"} style={additionalInfo}>
                                <h1 style={descriptionHeadings}>Additional Information</h1>

                                <div style={additionalSubHeadings}>
                                    <h3 style={additionalHeading}>Status</h3>
                                    <p>{this.props.project.status}</p>
                                </div>

                                <div style={additionalSubHeadings}>
                                    <h3 style={additionalHeading}>Last Updated</h3>
                                    <p>{this.props.lastUpdated}</p>
                                </div>

                                <div style={additionalSubHeadings}>
                                    <h3 style={additionalHeading}>Technology Used</h3>
                                    <p>{this.props.project.tech}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ui secondary segment" style={GitExplorerContainer}>
                        <CodeBrowser project={this.selectedProject(this.props.project)} selectedProject={this.props.project}></CodeBrowser>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
};

const availCol = {
    paddingRight: '8px'
}

const modalContainer = {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
}

const overviewContainer = {
    maxWidth: '1095px',
    width: '100%',
    minHeight: '300px',
    marginTop: '35px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '35px',
}

const contentSection = {
    padding: '15px',
    paddingLeft: '0px',
    paddingRight: '75px'
}

const additionalInfo = {
    borderLeft: 'solid 1px grey',
    padding: '15px'
}

const content = {
    color: 'white',
    maxWidth: '1450px',
    width: '80%',
    height: 'auto',
    boxShadow: '0 !important',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'rgba(0,0,0,0)'
}

const sliderContainer = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '50px',
    maxHeight: '450px',
    maxWidth: '1095px',
}

const slider = {
    maxHeight: '450px',
    width: '100%',
    paddingBottom: '40px'
}

const sliderImages = {
    marginLeft: 'auto',
    marginRight: 'auto',
}

const image = {
    maxHeight: '420px',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const title = {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '100',
    fontSize: '3em',
    marginBottom: '80px',
    textAlign: 'center'
}

const descriptionHeadings = {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '100',
    fontSize: '2em',
}

const additionalSubHeadings = {
    width: '175px',
    marginBottom: '10px'
}


const additionalHeading = {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '100',
    fontSize: '1em',
    marginBottom: '0px'
}

const desc = {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '100',
    fontSize: '1.3em',
    width: '100%',
}

const closebutton = {
    position: 'absolute',
    top: '30px',
    right: '30px',
    cursor: 'pointer'
}

const GitExplorerContainer = {
    backgroundColor: 'rgba(18, 18, 18, 0.8)',
    border: 'solid 1px rgba(255,255,255,0.1)',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '724px',
    boxShadow: 'none'
}

export default ProjectModal;
