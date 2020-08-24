import React, { Component } from 'react';

class FeaturedImage extends Component {
    render() {
        let alignment = this.props.alignment;
        return(
            <div className={(alignment == 'left') ? 'right floated right aligned eight wide column' : 'left floated left aligned eight wide column'}>
                <div className="ui large rounded image featuredImageMobile">
                    <img src={process.env.PUBLIC_URL + this.props.image} style={image}/> 
                </div>
            </div>
        )
    }
};

const image = {
    height: '350px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '100%'
}

export default FeaturedImage;
