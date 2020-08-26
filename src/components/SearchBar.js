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
            terminalHeading: true,
            type: {
                row0: ''
            }
        }
    }

    componentDidMount() {
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
                return data.intents[0]
            })
            .then((intent) => {
                try {
                    this.props.intent(intent);
                } catch(err) {
                    this.props.intent({name: 'unknown'})
                }
            });
            
    }

    handleSubmit= (e) => {
        e.preventDefault() 
        let payload = encodeURIComponent(e.target[0].value);
        this.postAPI(payload)
        this.setState({ rows: [...this.state.rows, '0'] })

        if (this.state.rows.length > 3) {
            this.setState({terminalHeading: false})
        }
    } 

    updateType = (event) => {
        let row = event.currentTarget.id
        this.setState({ type: { ...this.state.type, [event.currentTarget.id]: event.target.value} });
        this.setState({activeID: event.currentTarget.id})
        console.log(this.state.activeID)
    }

    render() {
        return(
            <div className="terminal" style={terminal} intent={this.state.intent} ref={this.terminal}>
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
                                    this.setState({ rows: [...this.state.rows, '0'] })
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
                <div className="ui items" style={messageBox}>
                {
                    this.state.type.map((rows, index) => {
                        let row = 'row' + index
                        return(
                            <div className="item" style={rowItem}>
                                <div style={terminalLeft}>
                                    <i className="big angle right icon"></i>
                                </div>
                                <div style={terminalMiddle}>
                                    <form onSubmit={this.handleSubmit} method="post">
                                        <input id={'row' + index} type="text" onChange={this.updateType} autoFocus onFocus={this.updateType} disabled={(this.state.activeID == this.id) ? "disabled" : ""} style={inputBox} maxlength="80" required="required"></input>
                                            <ReactTypingEffect
                                                style={typewriterStyle}
                                                staticText={this.state.type[row]}
                                                speed={250}
                                                typingDelay={250}
                                                cursor={(this.state.activeID == row) ? '_' : ' '}
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
    height: '150px',
    overflow: 'hidden'
}

const rowItem = {
    width: '100%'
}

const terminal = {
    transform: 'translateX(-10px)',
    maxWidth: '500px',
}

const typewriterStyle = {
    fontFamily: 'monospace',
    fontSize: '1.5em',

}

const inputBox = {
    position: 'absolute',
    caretColor: 'transparent',
    backgroundColor: 'transparent',
    color: 'transparent',
    fontColor: 'transparent',
    border: '0px',
    outline: 'none',
    transform: 'translateY(-5px)',
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
