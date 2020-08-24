import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import WorkItem from './WorkItem.js';
import WorkDesc from './WorkDescription.js';

class WorkHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: window.matchMedia("(min-width: 768px)").matches,
            mobile: false,
            selectedJob: 'job1',
            workHistory: {

                job1: { 
                    company: 'Seetec',
                    role: 'Employment Advisor',
                    startDate: 'Feb, 2020',
                    endDate: 'Aug, 2020',
                    desc: [
                        'Manage a large client portfolio on behalf of the Department of Employment Affairs and Protection',
                        'Ensure that all clients receive a professional, knowledgeable yet friendly service',
                        'Deliver tailored programmes to individuals and large groups',
                        'Ensure that new business / job opportunities are identified and utilised effectively',
                        'Build business relationships in the areas that support employment opportunities and provide ongoing support for employers',
                        'Source job leads and long term sustainable employment opportunities'
                    ]
                },

                job2: {
                    company: 'O\'Brien Print',
                    role: 'Graphic Designer',
                    startDate: 'Aug, 2014',
                    endDate: 'Jan, 2020',
                    desc: [
                        'Develop, design and produce creative designs for a wide variety of clients',
                        'Projects include brochures, stickers, postcards, banners, posters, business cards, flyers, pens, diaries, notebooks and website materials',
                        'Collaborate with Sales and Production departments to meet clients needs and restrictions (including budget)',
                        'Design and execute email marketing campaigns using MailChimp'
                    ]
                }
            }
        }
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 886px)").addListener(handler);
    }

    handleClick = (e) => {
        if (e.currentTarget.id == 0) {
            this.setState({selectedJob: 'job1'})
        } else {
            this.setState({selectedJob: 'job2'})
        }
    }
    
    render() {
        let job = this.state.selectedJob;
        return(
            <Fade bottom>
                <div style={container} className="ui grid">
                    {this.state.matches && (
                        <React.Fragment>
                        <div style={joblist} className="five wide column">
                            <ul style={list}>
                                <WorkItem mobile={this.state.matches} workHistory={this.state.workHistory} onClick={this.handleClick}></WorkItem>
                            </ul>
                            <span style={(this.state.selectedJob == 'job1') ? {transform: 'translateY(0px)'} : 
                                    (this.state.selectedJob == 'job2') ? {transform: 'translateY(52px)'} : {transform: 'translateY(0px)'}} className="bar"></span>
                        </div>
                        <div style={descStyle} className="eleven wide column">
                            <WorkDesc details={this.state.workHistory[this.state.selectedJob]}></WorkDesc>
                        </div>
                        </React.Fragment>
                    )}

                    {!this.state.matches && (
                        <React.Fragment>
                            <div className="ui grid" style={mobileRow}>
                                    <WorkItem mobile={this.state.matches} workHistory={this.state.workHistory} onClick={this.handleClick}></WorkItem>
                                <span style={(this.state.selectedJob == 'job1') ? {transform: 'translateX(0px)'} : 
                                    (this.state.selectedJob == 'job2') ? {transform: 'translateX(100%)'} : {transform: 'translateX(0px)'}} className="bar"></span>
                            </div>
                            <div style={descStyle} className={(this.state.mobile === false) ? "sixteen wide column mobileWorkDesc" : "eleven wide column mobileWorkDesc"}>
                                <WorkDesc details={this.state.workHistory[this.state.selectedJob]}></WorkDesc>
                            </div>
                       </React.Fragment>
                    )}
                </div>
            </Fade>
        )
    }
};

const mobileRow = {
    width: '100%'
}

const descStyle = {
    top: '30px',
    borderLeft: '2px solid rgba(0, 0, 0, 0.08)',
    transition: 'all ease-in-out 1s'
}

const list = {
    paddingLeft: '0'
}

const joblist = {
    postion: 'relative'
}

const container = {
    position: 'relative',
    width: 'auto',
    maxWidth: '700px',
    height: 'auto',
    top: '45px',
    padding: '0',
    margin: '14px',
}

export default WorkHistory;
