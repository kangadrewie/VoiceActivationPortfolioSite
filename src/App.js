import './app.css';
import React, { Component } from 'react';
import Navigation from './components/navigation.js';
import BurgerIcon from './components/Menu.js';
import LandingDialog from './components/landingPage.js';
import ActionButton from './components/btnAction.js';
import SocialMedia from './components/SocialMediaSidebar.js';
import AboutMe from './components/AboutMe.js';
import Work from './components/WorkSection.js';
import CodeBrowser from './components/gitexplorer/CodeBrowser.js';
import ProjectShowcase from './components/ProjectShowcase.js';
import ProjectModal from './components/ProjectModal.js';
import ContactSection from './components/ContactSection.js';
import Footer from './components/Footer.js';

class App extends Component {

    constructor(props) {
        super(props);

    this.state = {
        featuredProjects: [
            {
                name: 'The Bandy Converter',
                caption: 'A Google Chrome Extension that saves you the hassle of converting Amazon prices',
                tech: 'jQuery, Regex, Exchange Rates API, Google Chrome API',
                desc: 'Bandy is an open sourced currency converter for Amazon.co.uk. Bandy fetches the latest rates from openexchangerates.org and saves you the hassle of converting prices. Once Bandy retrieves the latest exchange rates, the extension pulls the targeted currency from your Amazon Webpage  and converts and updates the the webpage with the latest rate in the users selected currency. Currently, the extension only supports Amazon.co.uk users but further support for other Amazon regions will be implemented.',
                gitRepo: 'AmazonCurrencyConverter',
                image: '/bandy.png',
                mobileImage: '/img-gallery-bandy-1.png',
                imageGallery: ['img-gallery-bandy-1.png', 'img-gallery-bandy-2.png', 'img-gallery-bandy-3.png'],
                status: 'Maintaining Application',
                align: 'left',
                avail: ['Google Play Store', 'GitHub'],
                playStore: 'https://chrome.google.com/webstore/detail/bandy-amazon-currency-con/fbpbbjbdimmlmoejckaaeoelcgelccgm?hl=en-GB&authuser=0',
            },
            {
                name: 'JobCloud',
                caption: 'Discover Exactly What Employers Want',
                desc: 'As an Employment Advisor, I found myself asking my clients to research what exactly Irish employers are looking for by searching online and highlighting the keywords and skills in job vacancies. This idea inspired JobCloud. Using web-scraping, JobCloud extracts the most popular keywords from current job vacancies on indeed.ie. JobCloud is currently a work in progress, and am researching machine learning techniques to further advanced this prototype into identifying the most important hard and soft skills for any job. An early prototype can be viewed by the clicking the Heroku server link.',
                tech: 'Flask, Ajax, Javascript ES6, JQuery, Git',
                gitRepo: 'jobcloud',
                image: '/jobcloud.png',
                mobileImage: '/img-gallery-jobcloud-1.png',
                imageGallery: ['img-gallery-jobcloud-1.png', 'img-gallery-jobcloud-2.png', 'img-gallery-jobcloud-3.png'],
                status: 'In Development',
                align: 'right',
                avail: ['Heroku', 'GitHub'],
                heroku: 'https://jobcloud.herokuapp.com/'
            }
        ],

        projects: [
            {
                name: 'Portfolio',
                caption: 'Personal Portfolio Website with GitHub Connectivity',
                desc: 'Welcome. This is it. This is my Personal Portfolio website created with ReactJS. Initially, when I started this project, I wanted to create a one stop shop for all my work. To achieve this I needed to build a Project Showcase that would allow a user to access my source files for each one of my projects. Using GitHubs API, I built a file explorer that makes requests to my projects latest Github commit and returns the content, without asking the user to leave the page. ',
                tech: 'ReactJS, Semantic UI',
                image: '/projectportrait.png',
                imageGallery: ['img-gallery-portfolio-1.png', 'img-gallery-portfolio-2.png'],
                status: 'Maintaining Application',
                gitRepo: 'Portfolio-Site',
                avail: ['GitHub'],

            },
            {
                name: 'Student Portal',
                caption: 'User Friendly Student Module Mangement System',
                desc: 'The purpose of this project was to create a user friendly student module Management system that allows for students to keep track of, and update, what modules they are enrolled in. From a personal development perspective, this was a great opportunity to gain experience with Googles Firebase Backend platform for storing and maintaining data. I hope to progress further with the application by implementing individual user accounts that will give users their own personal workspace.',
                tech: 'Firebase, Flask, Heroku, Ajax, Javascript ES6, JQuery, Bootstrap, Git',
                image: '/projectstudent.png',
                imageGallery: ['img-gallery-student-1.png', 'img-gallery-student-2.png', 'img-gallery-student-3.png', 'img-gallery-student-4.png'],
                status: 'Complete',
                gitRepo: 'studentmgtsys',
                avail: ['Heroku', 'GitHub'],
                heroku: 'https://d19124355studentmgmtsystem.herokuapp.com/'
            },
            {
                name: 'Linux Backup',
                caption: 'Interactive Bash Script for Routine Backups and Transfers',
                desc: 'Using bash shell scripting to achieve an interactive script that provides routine backups and transfers. In addition, the script allows for detailed or summary audit reports to be generated, alongside server health status and server processes. The script also features a full GUI menu system that is easy to navigate and explores various different options.',
                tech: 'AWS Lightsail, Bash, Vim, Ubuntu OS, CLI, Git',
                image: '/projectlinux.png',
                imageGallery: ['img-gallery-backup-1.png', 'img-gallery-backup-2.png', 'img-gallery-backup-3.png', 'img-gallery-backup-4.png', 'img-gallery-backup-5.png',],
                status: 'Complete',
                gitRepo: 'ServerBackupBashScript',
                avail: ['GitHub'],
            },
            {
                name: 'Guinny',
                caption: 'Prototype Geo Mobile App to Find the Best Pint of Guinness Nearby',
                desc: 'As a lover of a good aul pint of Guinness, I was inspired to create a mobile App that would lead to be finding a perfect pint everytime. A tinder-esque style, but the user is in search for the perfect pint of plain...Guinny is very much a prototype ranking application for Guiness drinkers. Currently, the application has Google Maps access, and is pulling pub locations and details from a Firebase database and pinning them onto the map. Work and Studies have hindered any result progress on Guinny, but is still in development.',
                tech: 'Flutter, DART, Firebase, Google Maps API',
                image: '/projectguinny.png',
                imageGallery: ['img-gallery-guinny-1.png', 'img-gallery-guinny-2.png', 'img-gallery-guinny-3.png', 'img-gallery-guinny-4.png'],
                status: 'In Development',
                gitRepo: 'guinny',
                avail: ['GitHub'],
            },
            {
                name: 'Library CMS',
                caption: 'CLI Library Management System with Open Library\'s RESTful API',
                desc: 'Libsys.py is a python script that can be run in terminal or IDE. It\'s functionality ranges from automatic ISBN book retrieval using Open Library\'s RESTful API and recursive search.',
                tech: 'Python3, Open Library API',
                image: '/projectlibrary.png',
                imageGallery: ['img-gallery-library-1.png', 'img-gallery-library-2.png', 'img-gallery-library-3.png', 'img-gallery-library-4.png'],
                status: 'Complete',
                gitRepo: 'libSystem',
                avail: ['GitHub'],
            },
            {
                name: 'SMS Kris Kindle',
                caption: 'Random Kris Kindle Draw with SMS Notifications',
                desc: 'Christmas time can be hectic, and getting the whole family together in the same room at any one time can be tricky to say the least. So, I created a simple python script that would draw random pairs and notify each participant of their secret match.',
                tech: 'Python3, Twilio API',
                image: '/projectkindle.png',
                imageGallery: ['img-gallery-kindle-1.png'],
                status: 'Complete',
                gitRepo: 'SMS-Kris-Kindle',
                avail: ['GitHub'],
            }
        ],

        selectedProject : {
            name: '',
            caption: '',
            desc: '',
            image: '',
            tech: '',
            lastUpdated: '',
            imageGallery: ["/jobcloud.png"],
            status: '',
            gitRepo: '',
            avail: []
        },
        lastUpdated: '',
        selectAll: null,
        modalVisibility: false,
        setSelectAll: null
        
        }
    }

    toDate = (dateStr) => {
        const [year, month, day] = dateStr.split("-")
        const date = new Date(year, month - 1, day)
        console.log(date.toDateString())
        this.setState({lastUpdated: date.toDateString()})
        return
    }

    lastUpdated = (repoName) => {
        this.setState({files: {}});
        let branchID = 'master';

        fetch(`https://api.github.com/repos/kangadrewie/${repoName}/branches/master`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.commit.commit.committer.date)
            let date = data.commit.commit.committer.date
            let dateClean = date.replace(/T.*$/,"")
            let stringDate = this.toDate(dateClean)
            this.setState({date: stringDate});
            //Temp store of file directory in an array
            return
            })
      };

    selectedProject = (e) => {
        console.log(e.currentTarget.getAttribute('type'))
        if (e.currentTarget.getAttribute('type') == 'featured') {
            this.state.featuredProjects.forEach((element, i) => {
                if (element.gitRepo == e.currentTarget.id) {
                    let projectDetails = this.state.selectedProject
                    projectDetails.name = element.name
                    projectDetails.caption = element.caption
                    projectDetails.desc = element.desc
                    projectDetails.tech = element.tech
                    projectDetails.image = element.image
                    projectDetails.imageGallery = element.imageGallery
                    projectDetails.status = element.status
                    projectDetails.gitRepo = element.gitRepo
                    projectDetails.avail = element.avail
                    projectDetails.playStore = element.playStore
                    projectDetails.heroku = element.heroku

                    this.setState({selectedProject: projectDetails})
                    this.lastUpdated(element.gitRepo)
                }
            });
       } else {
            this.state.projects.forEach((element, i) => {
                if (element.gitRepo == e.currentTarget.id) {
                    let projectDetails = this.state.selectedProject
                    projectDetails.name = element.name
                    projectDetails.caption = element.caption
                    projectDetails.desc = element.desc
                    projectDetails.tech = element.tech
                    projectDetails.image = element.image
                    projectDetails.imageGallery = element.imageGallery
                    projectDetails.status = element.status
                    projectDetails.gitRepo = element.gitRepo
                    projectDetails.avail = element.avail
                    projectDetails.playStore = element.playStore
                    projectDetails.heroku = element.heroku

                    this.setState({selectedProject: projectDetails})
                    this.lastUpdated(element.gitRepo)
                }
            });
       }

        this.setState({modalVisibility: !this.state.modalVisibility})
    }

    closeModal = () => {
        this.setState({modalVisibility: false})
    }
 
    render() {
        const caption = "And I’m a passionate and aspiring Software Engineer based in Dublin. I am open to explore any exciting opportunities or challenges so don’t be shy!";

        return(
            <React.Fragment>
                <div>
                    <Navigation></Navigation>
                    <BurgerIcon></BurgerIcon>
                    <LandingDialog></LandingDialog>
                </div>
                <div style={maxWidth}>
                    <SocialMedia></SocialMedia>
                    <AboutMe></AboutMe>
                    <Work></Work>
                    <ProjectShowcase selectedProject={this.selectedProject} featuredProjects={this.state.featuredProjects} projects={this.state.projects}></ProjectShowcase>
                    <ProjectModal modal={this.state.modalVisibility} closeModal={this.closeModal} project={this.state.selectedProject} lastUpdated={this.state.lastUpdated}></ProjectModal>
                    <ContactSection></ContactSection>
                    <Footer></Footer>
                </div>
            </React.Fragment>
        );
    }
}

const maxWidth = {
    position: 'relative',
    maxWidth: '700px',
    margin: '0 auto'
}

const GitExplorerContainer = {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '782px',
        boxShadow: 'none'
}

export default App;
