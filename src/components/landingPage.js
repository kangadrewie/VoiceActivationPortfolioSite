import React, {Component} from 'react';
import SearchBar from './SearchBar.js';
import TechIcons from './TechIcons.js';
import ScrollComponenet from './ScrollButton.js';
import ScrollDown from './ScrollDownLanding.js';
import FadeIn from 'react-fade-in';
import Background from '../images/landingportrait.png';
import { AnimateOnChange } from 'react-animation';
import Bounce from 'react-reveal/Bounce';


class LandingDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {

            greetingColl: ['Hi there. 👋', 'Hey! 👋', 'How can I help? 😁', 'Hello. 👌', 'Welcome. 🤙', 'What can I do for you? 😀', 'Nice to meet you.🤝'],
            emotionalGreetingColl: ['I\'m Great. Thanks 😀', 'Very Well, You? 🙌', 'All Good. You? 😊'],
            greetingResponseColl : ['Nm. You? 🤔', 'Just Coding. You? 👨‍💻', 'Chillin. You? 🤔'],
            byeColl: ['Bye. 👋', 'Cya. 🤙', 'Goodbye! 😀'],
            aboutMeColl: ['At this size font? Impossible. 😋'],
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
            unknownColl: ['Sorry. Say again? 😕', 'I Don\'t Understand 😟', 'Sorry, I\'m Still Learning. 😢'],
            favouriteLanguageColl: ['Python. 🐍'],
            worstLanguageColl: ['TBC. 😅'],
            favouriteFrameworkColl: ['React. 🚀'],
            favouriteMovieColl: ['Green Book. Watch it.'],
            favouriteMusicColl: ['All Music is 🔥'],
            favouriteBookColl: ['1984. 🕵'],
            studyingColl: ['MSc Comp Sci in TU Dublin. 👨‍💻'],
            mainRender: 'main',
            heading: "I\'m Andrew",
            caption: "And I’m a passionate and aspiring Software Engineer based in Dublin. I am open to explore any exciting opportunities or challenges so don’t be shy!"
        }
    }

    mathsExpression = (value) => {
        let payload = encodeURIComponent(value)
        let prefix = ['Ok...', 'Easy. ']
        let suffix = ['.😏', '.😚', '.🧠']
        return fetch(`http://api.mathjs.org/v4/?expr=${payload}`) 
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                let num1 = Math.floor(Math.random() * Math.floor(prefix.length))
                let num2 = Math.floor(Math.random() * Math.floor(suffix.length))
                let ans = prefix[num1] + data + suffix[num2]
                this.setState({heading: ans, caption: ''})
            })
    }
    
    genericSelection = (intent) => {
        let collection = intent + "Coll"
        let size = this.state[collection].length 
        console.log(size)
        let randomNum = Math.floor(Math.random() * Math.floor(size))
        let selection = this.state[collection][randomNum]
        console.log(selection)
        this.setState({heading: selection, caption: ''})
    }

    handleIntent = (data) => {
        console.log(data)
        try {
            if (data.intents[0].name == 'maths') {
                this.mathsExpression(data.entities['wit$math_expression:math_expression'][0]['value'])
            } else if (data.intents[0].name == 'aboutMe') {
                this.setState({mainRender: 'aboutMe'})
            } else if (data.intents[0].name == 'email') {
                this.setState({mainRender: 'email'})
            } else {
                this.genericSelection(data.intents[0].name)
                this.setState({mainRender: 'main'})
            }
        } 
        catch(err) {
            this.genericSelection('unknown')
        }
    }

    mainRender = () => {
        if (this.state.mainRender == 'main') {
            return(
                <React.Fragment>
                    <FadeIn delay="1000" transitionDuration="1000">
                        <AnimateOnChange>
                            <h1 style={header} className="bgCaptionHeading">{this.state.heading}</h1>
                        </AnimateOnChange>
                    </FadeIn>

                    <FadeIn delay="1500" transitionDuration="1200">
                        <p style={caption} className="bgCaptionPara">{this.state.caption}</p>
                    </FadeIn>
                </React.Fragment>
            )
        } else if (this.state.mainRender == 'aboutMe') {
            return(
                <React.Fragment>
                    <FadeIn delay="1000" transitionDuration="1000">
                        <AnimateOnChange>
                            <h1 style={header} className="bgCaptionHeading">
                                At this font size?
                            </h1>
                            <h1 style={headerSub} className="bgCaptionHeading">
                                Impossible. 😋
                            </h1>
                        </AnimateOnChange>
                    </FadeIn>

                    <FadeIn delay="1500" transitionDuration="1200">
                        <AnimateOnChange>
                            <p style={captionAboutMe} className="bgCaptionPara">But click <a href="#aboutme" className="highlight">HERE</a> to learn more about me! </p>
                        </AnimateOnChange>
                    </FadeIn>
                </React.Fragment>
            )
        } else if (this.state.mainRender == 'email') {
            return(
                <React.Fragment>
                    <FadeIn delay="1000" transitionDuration="1000">
                        <AnimateOnChange>
                            <h1 style={header} className="bgCaptionHeading inline">Sure... 👉  
                                    <a href="mailto:andrewgorman101@gmail.com">
                                        <Bounce top>
                                            <div className="inline" style={{paddingLeft: '20px'}}> ✉️</div>
                                        </Bounce> 
                                    </a>
                            </h1>
                        </AnimateOnChange>
                    </FadeIn>

                    <FadeIn delay="1500" transitionDuration="1200">
                        <p style={captionAboutMe} className="bgCaptionPara"></p>
                    </FadeIn>
                </React.Fragment>
            )
        }
    }

    render() {
        return(
            <div id="homepage" style={container}>
                <FadeIn transitionDuration="1400">
                    <div style={bg} className="bgMobile"></div>
                </FadeIn>
                <div style={dialog} className="bgCaptionContainer">
                    <div>
                        {this.mainRender()}
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
    marginBottom: '0',
    minWidth: '500px'
}

const headerSub = {
    fontSize: '6em',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '700',
    fontColor: 'grey',
    lineHeight: '0.8em',
    marginBottom: '30px',
    minWidth: '500px'
}

const caption = {
    width: '50%',
    height: '50px',
    fontSize: '1.2em',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '200',
    minWidth: '500px'
}

const captionAboutMe = {
    width: '50%',
    height: '50px',
    color: 'rgba(0, 0, 0, 0.87)',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: '1.5em',
    paddingTop: '10px',
    minWidth: '500px'
}

export default LandingDialog;
