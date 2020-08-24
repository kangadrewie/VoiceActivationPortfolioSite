import React, {Component} from 'react';
import { ReactMic } from 'react-mic';

class VoiceButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false
        }
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
    }

    render() {
        return(
            <React.Fragment>
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    onData={this.onData}
                    strokeColor="#000000"
                    backgroundColor="#FF4081" />
                <button id="actionButton" style={btnAction} className="actionButtonMobile" onClick={this.startRecording}>
                    <i style={icon} className="microphone icon"></i>
                    Ask Me Anything
                </button>
                <button onClick={this.stopRecording}></button>
            </React.Fragment>
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
