import React, { Component } from 'react';

class FeaturedContent extends Component {
    render() {
        let alignment = this.props.alignment;
        return(
            <div style={container} className={(alignment == "left") ? "eight wide column left floated left aligned" : "eight wide column right floated right aligned"}>
                <div className="row" style={featured}>Featured Project</div>
                <div className="row" style={title}>{this.props.title}</div>
                <div className="row" style={desc}>{this.props.caption}</div>
            </div>
        )
    }
};

const featured = {
    fontFamily: 'monospace',
    marginBottom: '12%'
}

const container = {
    maxWidth: '100%',
    paddingTop: '35px',
    paddingLeft: '15px',
    paddingRight: '15px',
}

const title = {
    position: 'relative',
    height: 'auto',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: '2.7em',
    lineHeight: '1.2em',
    fontWeight: '800',
    marginBottom: '7%'
}

const desc = {
    position: 'relative',
    height: 'auto',
    lineHeight: '1.1em',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '200',
    fontSize: '1.3em',
}

const explore = {

}

const icon = {
    color: 'white',
    position: 'absolute',
    bottom: '12%',
    right: '12%'
}

export default FeaturedContent;
