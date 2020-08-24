import React, {Component} from 'react';

class SplashScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({visible: true});
        }, 500)

        setTimeout(() => {
            this.setState({visible: false})
        }, 2000)
    }

    render() {
        return(
            <div className={this.state.visible ? 'fadeIn' : 'fadeOut'} style={container}>
                <div style={flashStyle}>Hi, there</div>
            </div>
        );
    }
}

const container = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'block'
}

const flashStyle = {
    textAlign: 'center',
    lineHeight: '100vh',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '200',
    fontSize: '60px',
}

export default SplashScreen;
