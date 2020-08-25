import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cursor: '_',
            nextLine: false
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
        console.log(e.target[0].value)
        let payload = encodeURIComponent(e.target[0].value);
        this.postAPI(payload)
    } 

    inputLine = () => {
        if (this.state.nextLine == true) {
            return (
                <form onSubmit={this.handleSubmit} method="POST">
                    <i style={terminal} className="big angle right icon"></i>
                    <input style={searchBar} type="text" required="text"></input>
                    <button style={searchButton}>
                        <i className="angle right icon"></i>
                    </button>
                </form>
            )
        } else {
            return null
        }
    }

    render() {
        return(
            <div style={container}>
                <table>
                    <tr>
                        <td>
                            <i style={terminal} className="big angle right icon"></i>
                        </td>
                        <td>
                            <Typewriter
                                options={{
                                    cursor: '_'
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString('Ask Me Anything, or simply say Hi!')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                        this.setState({nextLine: true})
                                    })
                                    .start();
                                }}
                            />
                        </td>
                    </tr>
                </table>
                {this.inputLine()}
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

const searchBar = {
	width: '250px',
	borderRight: 'none',
	marginRight: '5px',
	padding: '5px',
	height: '50px',
	border: '0px solid rgba(0, 0, 0, 0.27)',
	backgroundColor: 'white',
	color: 'white',
	outline: 'none',
	color: 'rgba(0, 0, 0, 0.87)',
	borderRadius: '5px 5px 5px 5px',
    mozTransition: 'all 0.3s',
	transition: 'all 0.3s',

    fontFamily: 'monospace',
    fontSize: '1.5em',
}

const searchButton = {
    visibility: 'hidden',
	width: '80px',
    height: '50px',
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
