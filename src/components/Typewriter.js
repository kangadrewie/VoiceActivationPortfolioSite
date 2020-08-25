import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
 
class Type extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cursor: '_'
        }
    }

    render() {
        return(
            <Typewriter
                options={{
                    cursor: this.state.cursor
                }}
                onInit={(typewriter) => {
                    typewriter.typeString('Ask Me Anything, or simply say Hi!')
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .start();
                }}
            />
        )
    }
};

export default Type;
