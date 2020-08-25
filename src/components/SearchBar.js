import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.terminal = React.createRef();

        this.state = {
            cursor: '_',
            nextLine: false,
            startType: false,
            rows: [],
            intent: 'null'
        }
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
                console.log(intent.name)
                this.setState({"intent": intent.name});
                this.props.intent(intent);
            })
            
    }

    handleSubmit= (e) => {
        e.preventDefault() 
        let payload = encodeURIComponent(e.target[0].value);
        this.postAPI(payload)
        
        if (this.state.rows.length > 3) {
            this.terminal.current.deleteRow(0)
        }
        this.setState({ rows: [...this.state.rows, '0'] })
    } 

    render() {
        return(
            <div style={container} intent={this.state.intent}>
                <table ref={this.terminal}>
                    <tr>
                        <td>
                            <i style={terminal} className="big angle right icon"></i>
                        </td>
                        <td>
                            <Typewriter
                                options={{
                                    cursor: '',
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString('Ask Me Anything, or simply say Hi!')
                                    .callFunction(() => {
                                        this.setState({ rows: [...this.state.rows, '0'] })
                                    })
                                    .start();
                                }}
                            />
                        </td>
                        <td>
                            <h1 className={this.state.nextLine ? "hide": "blink cursor"}>_</h1>
                        </td>
                    </tr>
                    {
                        this.state.rows.map((row) => {
                            return (
                                <tr>
                                    <td>
                                        <i style={terminal} className="big angle right icon"></i>
                                    </td>
                                    <td>
                                        <form onSubmit={this.handleSubmit} method="post">
                                            <input style={searchBar} type="text" required="text" autofocus="autofocus" onfocus="this.select()"></input>
                                        </form>
                                    </td>
                                    <td>
                                        <i className="window minimize outline icon blink"></i>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
};

const terminal = {
    color: 'orange'
}

const container = {
    minWidth: '550px !important',
    marginTop: '40px',
    transform: 'translateX(-12px)'
}

const tableStyle = {
}

const searchBar = {
	width: '100%',
	borderRight: 'none',
	marginRight: '5px',
	padding: '0px',
	height: '30px',
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
