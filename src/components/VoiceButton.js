import React, {Component} from 'react';
import { ReactMic } from 'react-mic';

class VoiceButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false
        }
    }

    postAPI = (payload) => {
        const headers = {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer LRDKVN42MTLEPBNTFSLNKPX6C4ZB6W2G",
            },
        }

        fetch('https://api.wit.ai/speech?v=20200513', payload,  headers)
            .then(response => {
                console.log(response.json())
            })
            
    }

    startRecording = () => {
        this.setState({ record: true });
    }

    stopRecording = () => {
        this.setState({ record: false });
    }

    onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
        console.log(recordedBlob.blobURL)
    }

    render() {
        return(
            <table>
                <tr>
                    <td>
                        <ReactMic
                            record={this.state.record}
                            className="landingVisualiser"
                            mineType="audio/wav"
                            autoGainControl={true}
                            onStop={this.onStop}
                            onData={this.onData}
                            strokeColor="orange"
                            backgroundColor="white" 
                        />
                    </td>
                    <td>
                        <button id="actionButton" style={btnAction} className="actionButtonMobile" onClick={this.startRecording}>
                            <i style={icon} className="microphone icon"></i>
                            Ask Me Anything
                        </button>
                        <button onClick={this.stopRecording}>STOP</button>
                    </td>
                </tr>
           </table>
        )
    }
}

const icon = {}

const btnAction = {
    height: '50px',
    width: '220px',
    borderRadius: '70px',
    borderWidth: '0',
    backgroundColor: 'orange',
    marginTop: '2em',
    zIndex: '999',

    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: '1.4em',
    fontWeight: '700',
    color: 'white',
    cursor: 'pointer',
    transition: 'none'
}

export default VoiceButton;
