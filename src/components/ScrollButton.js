import React, {Component} from 'react'
import ScrollButton from 'react-scroll-button'
 
class ScrollComponent extends Component {
        render() {
            return (
                <div className="scrollBackUp">
                    <ScrollButton 
                        className="scrollBackUp"
                        targetId={'homepage'}
                        behavior={'smooth'} 
                        buttonBackgroundColor={'orange'}
                        buttonColor={'white'}
                        iconType={'arrow-up'}
                        style= {{fontSize: '24px'}}
                    />
                </div>
        );
    }
}

export default ScrollComponent;
