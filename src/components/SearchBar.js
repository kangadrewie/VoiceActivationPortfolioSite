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
            rows: []
        }
    }

    postAPI = (payload) => {
        console.log(process.env.REACT_APP_WIT_API_KEY)
        const headers = {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_WIT_API_KEY}`,
            },
        }

        fetch(`https://api.wit.ai/message?v=20200513&q=${payload}`,  headers)
            .then(response => {
                console.log(response.json())
            })
            
    }

    handleSubmit= (e) => {
        e.preventDefault() 
        console.log(e.target.parentNode.parentNode)
        let payload = encodeURIComponent(e.target[0].value);
        this.postAPI(payload)
        
        this.terminal.current.deleteRow(0)

        console.log(e.currentTarget.onfocus)


        this.setState({ rows: [...this.state.rows, '0'] })
    } 

    render() {
        return(
            <div style={container}>
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
                                        console.log('String typed out!');
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
                            console.log('HELLO')
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
    marginTop: '40px',
    transform: 'translateX(-12px)'
}

const tableStyle = {
}

const searchBar = {
	width: '100%',
	borderRight: 'none',
	marginRight: '5px',
	padding: '5px',
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
