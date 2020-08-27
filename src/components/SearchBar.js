import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import ReactTypingEffect from 'react-typing-effect';


let increment = 0;
let len = 0;

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.terminal = React.createRef();
        this.inputText = React.createRef();

        this.state = {
            nextLine: false,
            startType: false,
            rows: [],
            intent: 'null',
            firstName: 'andrew',
            searchWidth: '20px',
            activeID: 'row0',
            lastItem: '',
            terminalHeading: true,
            type: {}
        }
    }

    componentDidUpdate() {
    // I was not using an li but may work to keep your div scrolled to the bottom as li's are getting pushed to the div
        const objDiv = document.getElementById('messageBox');
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    postAPI = (payload) => {
        const headers = {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_WIT_API_KEY}`,
            },
        }

        fetch(`https://api.wit.ai/message?v=20200513&q=${payload}`,  headers)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                try {
                    this.props.intent(data);
                } catch(err) {
                    this.props.intent({name: 'unknown'})
                }
            })
    }

    clear = (event) => {
        event.target.value = "";
    }

    handleSubmit= (event) => {
        event.preventDefault() 
        let payload = encodeURIComponent(event.target[0].value);
        let counter = 0
        this.postAPI(payload)
        let row = 'row' + (parseInt(event.target.id) + 1).toString()
        this.setState({type: { ...this.state.type, [row]: ''}})
        this.setState({activeID: row})
        let last = Object.keys(this.state.type)[Object.keys(this.state.type).length - 1]
        this.setState({lastItem: last})
    } 

    updateType = (event) => {
        let row = event.currentTarget.id
        this.setState({ type: { ...this.state.type, [event.currentTarget.id]: event.target.value} });
        let last = Object.keys(this.state.type)[Object.keys(this.state.type).length - 1]
        this.setState({lastItem: last})
        this.setState({activeID: row})
    }

    checkMessage = (event) => {
        console.log(event, 'EVENT DISABLED')
    }

    render() {
        return(
            <div className="terminal" intent={this.state.intent} ref={this.terminal}>
                <div className={this.state.terminalHeading ? "ui items" : "ui items hide"}>
                    <div className="item">
                        <div style={terminalLeft}>
                            <i className="big angle right icon"></i>
                        </div>
                        <div style={terminalMiddle}>
                            <Typewriter
                              options={{
                                  cursor: '_',
                              }}
                              onInit={(typewriter) => {
                                typewriter.typeString('Ask Me Anything, or simply say Hi!')
                                  .callFunction(() => {
                                      this.setState({type: { ...this.state.type, row0: ''}})
                                  })
                                  .pauseFor(2500)
                                  .deleteAll()
                                typewriter.typeString('favourite programming language?')
                                  .pauseFor(1500)
                                  .deleteAll()
                                typewriter.typeString('how do I contact you?')
                                  .pauseFor(1500)
                                  .deleteAll()
                                  .callFunction(() => {
                                    console.log('All strings were deleted');
                                  })
                                typewriter.typeString('Ask Me Anything, or simply say Hi!')
                                  .start();
                              }}
                            />
                        </div>
                    </div>
                </div>
                <div className={(Object.keys(this.state.type).length > 4) ? "ui items messageBox overflown" : "ui items messageBox"} style={messageBox} id="messageBox">
                { 
                    Object.keys(this.state.type).map((rows, index) => {
                        let row = 'row' + index
                        let lastItem = Object.keys(this.state.type)[Object.keys(this.state.type).length - 1]
                        console.log(this.state.activeID, 'ACTIVE', lastItem, 'LAST ITEM')
                        return(
                            <div className="item" style={rowItem}>
                                <div style={terminalLeft}>
                                    <i className="big angle right icon"></i>
                                </div>
                                <div style={terminalMiddle}>
                                    <form id={index} onSubmit={this.handleSubmit} method="post">
                                        <input className="inputBox" id={'row' + index} type="text" onChange={this.updateType} autoFocus onFocus={this.updateType} style={inputBox} maxLength="60" required="required" readOnly={(this.state.activeID == this.state.lastItem) ? false : true}></input>
                                            <ReactTypingEffect
                                                style={typewriterStyle}
                                                staticText={this.state.type[row]}
                                                speed={250}
                                                typingDelay={250}
                                                cursor={(row == lastItem) ? '_' : ' '}
                                            />
                                    </form>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
};

const messageBox = {
    width: '500px',
    height: '170px',
    overflowY: 'auto',
    overflowX: 'hidden'
}

const rowItem = {
    width: '100%'
}

const typewriterStyle = {
    fontFamily: 'monospace',
    fontSize: '1.5em',

}

const inputBox = {
    position: 'absolute',
    left: '0',
    bottom: '0',
    backgroundColor: 'transparent',
    color: 'transparent',
    caretColor: 'transparent',
    border: '0px',
    outline: 'none',
    transform: 'translateY(-5px)',
    padding: '0px',
    margin: '0px',
    width: '350px',
    height: '30px',
    whiteSpace: 'no-wrap',
    zIndex: '99'
}

const terminalRow = {
    textAlign: 'left',
    width: '100%'
}

const terminalLeft = {
    color: 'orange',
    float: 'left',
    textAlign: 'left',
    width: '25px',
    marginRight: '10px'
}

const terminalMiddle = {
    position: 'relative',
    float: 'left',
    paddingTop: '3px',
    width: 'auto'
}

const terminalRight = {
    float: 'left',
    width: '25px'
}

const botRows = {
    width: '502px !important',
    minWidth: '502px !important'
}

const container = {
    marginTop: '40px',
    transform: 'translateX(-12px)'
}

const tableStyle = {
}

const searchBar = {
	width: '500px',
	borderRight: 'none',
	marginRight: '5px',
	padding: '0px',
	height: '100%',
	border: '0px solid rgba(0, 0, 0, 0.27)',
	backgroundColor: 'white',
	color: 'white',
	outline: 'none',
	color: 'rgba(0, 0, 0, 0.87)',
	borderRadius: '5px 5px 5px 5px',
    mozTransition: 'all 0.3s',
	transition: 'all 0.3s',
    caretColor: 'transparent',
    fontFamily: 'monospace',
    fontSize: '1.5em',
}

const searchButton = {
    visibility: 'hidden',
	width: '10px',
    height: '10px',
	border: '0px solid rgba(0, 0, 0, 0.27)',
	textAlign: 'center',
	borderRadius: '5px 5px 5px 5px',
	cursor: 'pointer',
	fontSize: '25px',
	marginLeft: '7px',

	backgroundColor: 'orange',
	color: 'white'
}

export default SearchBar;
