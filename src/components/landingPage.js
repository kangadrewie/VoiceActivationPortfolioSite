import React, {Component} from 'react';
import SearchBar from './SearchBar.js';
import TechIcons from './TechIcons.js';
import ScrollComponenet from './ScrollButton.js';
import ScrollDown from './ScrollDownLanding.js';
import FadeIn from 'react-fade-in';
import Background from '../images/landingportrait.png';
import { AnimateOnChange } from 'react-animation';

class LandingDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {

            greetingColl: ['Hi there. 👋', 'Hey! 👋', 'How can I help? 😁', 'Hello. 👌', 'Welcome. 🤙', 'What can I do for you? 😀', 'Nice to meet you.🤝'],
            emotionalGreetingColl: ['I\'m Great. Thanks 😀', 'Very Well, You? 🙌', 'All Good. You? 😊'],
            greetingResponseColl : ['Nm. You? 🤔', 'Just Coding. You? 👨‍💻', 'Chillin. You? 🤔'],
            apologyColl: ['Forgiven. 🤛', 'No Problem 🤝', 'No Need to Apologise. 🤚'],
            gratitudeColl: ['You\'re Welcome. ☺️', 'No Problem. 😀', 'No. Thank you. 👏', 'Any Time. 🤙'],
            ageColl: ['I\'m 25. 🎈'],
            birthdayColl: ['January, 1995. 🎉'],
            abusiveColl: ['No need. 😮', 'Watch Your Mouth. 👊', 'Get Out. 😠', 'Well...😳', '😡😡😡😡'],
            nameColl: ['Andrew.\nBut Call Me Andy. 🤛'],
            firstNameColl: ['Andrew 👨‍🚀'],
            fullNameColl: ['Andrew Gorman.🙋‍♂️'],
            middleNameColl: ['John.'],
            lastNameColl: ['Gorman.🙅‍♂️'],
            locationColl: ['Dublin. 🙅🏻‍♂️'],
            contactColl: ["👈 LinkedIn & Email."],
            unknownColl: ['Sorry. Say again? 😕', 'I Don\'t Understand 😟'],
            favouriteLanguageColl: ['Python. 🐍'],
            favouriteFrameworkColl: ['React. 🚀'],
            heading: "I\'m Andrew",
            caption: "And I’m a passionate and aspiring Software Engineer based in Dublin. I am open to explore any exciting opportunities or challenges so don’t be shy!"
        }
    }

    email = (intent) => {
        if (intent.name == 'email') {
            this.setState({heading: 'Click Here 👈'})
            return(
                <a href="tomail:andrewgorman101@gmail.com">
                    <h1 style={header} className="bgCaptionHeading">{this.state.heading}</h1>
                </a>
            )
        } else {
            return null;
        }
    }
    
    select = (intent) => {
        let collection = intent + "Coll"
        let size = this.state[collection].length 
        console.log(size)
        let randomNum = Math.floor(Math.random() * Math.floor(size))
        let selection = this.state[collection][randomNum]
        console.log(selection)
        this.setState({heading: selection, caption: ''})
    }

    handleIntent = (intent) => {

        this.select(intent.name)
    }

    render() {
        return(
            <div id="homepage" style={container}>
                <FadeIn transitionDuration="1400">
                    <div style={bg} className="bgMobile"></div>
                </FadeIn>
                <div style={dialog} className="bgCaptionContainer">
                    <div>
                    <FadeIn delay="1000" transitionDuration="1000">
                        <AnimateOnChange>
                            <h1 style={header} className="bgCaptionHeading">{this.state.heading}</h1>
                        </AnimateOnChange>
                    </FadeIn>

                    <FadeIn delay="1500" transitionDuration="1200">
                        <p style={caption} className="bgCaptionPara">{this.state.caption}</p>
                    </FadeIn>

                    <FadeIn delay="2000" transitionDuration="1400">
                        <SearchBar intent={this.handleIntent}></SearchBar>
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
