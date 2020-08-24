import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Base64 } from 'js-base64';
import { AnimateOnChange } from 'react-animation';

//  Fetch Repos - https://api.github.com/users/kangadrewie/repos
//  Fetch Repo Files - https://api.github.com/repos/kangadrewie/amazoncurrencyconverter/git/trees/master
//  Return Files Content in Base64 using file url from above, for example - https://api.github.com/repos/kangadrewie/AmazonCurrencyConverter/git/blobs/f872dc0e12fa295e5aad94b3e286e915ffe218ef

class CodeBlock extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        if (this.props.error == true) {
            return(
                <AnimateOnChange>
                    <div className="ui segment codeBlockMobile" style={errorContainer}>
                        <p style={errorMessage}>Unsupported File Type. To view, please visit github.com/kangadrewie</p>
                    </div>
                </AnimateOnChange>
            );
        } else if (this.props.code === ' ') {
            return(
                 <AnimateOnChange>
                    <div className="ui segment codeBlockMobile" style={errorContainer}>
                        <p style={errorMessage}>Select a file</p>
                    </div>
                </AnimateOnChange>       
            );
        } else {
            return( 
                <AnimateOnChange>
                    <div className="ui segment codeBlockMobile" style={container}>
                        <SyntaxHighlighter 
                            language="javascript"
                            showLineNumbers={true}
                            wrapLines={true}
                            style={tomorrowInline}>
                                {this.props.code}
                        </SyntaxHighlighter>
                    </div>
                </AnimateOnChange>
            );
        }
    }
}

const tomorrowInline = {
  "hljs-comment": {
    "color": "#8e908c"
  },
  "hljs-quote": {
    "color": "#8e908c"
  },
  "hljs-variable": {
    "color": "#c82829"
  },
  "hljs-template-variable": {
    "color": "#c82829"
  },
  "hljs-tag": {
    "color": "#c82829"
  },
  "hljs-name": {
    "color": "#c82829"
  },
  "hljs-selector-id": {
    "color": "#c82829"
  },
  "hljs-selector-class": {
    "color": "#c82829"
  },
  "hljs-regexp": {
    "color": "#c82829"
  },
  "hljs-deletion": {
    "color": "#c82829"
  },
  "hljs-number": {
    "color": "#f5871f"
  },
  "hljs-built_in": {
    "color": "#f5871f"
  },
  "hljs-builtin-name": {
    "color": "#f5871f"
  },
  "hljs-literal": {
    "color": "#f5871f"
  },
  "hljs-type": {
    "color": "#f5871f"
  },
  "hljs-params": {
    "color": "#f5871f"
  },
  "hljs-meta": {
    "color": "#f5871f"
  },
  "hljs-link": {
    "color": "#f5871f"
  },
  "hljs-attribute": {
    "color": "#eab700"
  },
  "hljs-string": {
    "color": "#718c00"
  },
  "hljs-symbol": {
    "color": "#718c00"
  },
  "hljs-bullet": {
    "color": "#718c00"
  },
  "hljs-addition": {
    "color": "#718c00"
  },
  "hljs-title": {
    "color": "#4271ae"
  },
  "hljs-section": {
    "color": "#4271ae"
  },
  "hljs-keyword": {
    "color": "#8959a8"
  },
  "hljs-selector-tag": {
    "color": "#8959a8"
  },
  "hljs": {
    "display": "block",
    "overflowX": "none",
    "overflowY": "scroll",
    "maxHeight": "660px",
    "margin": "0px",
    "height": "660px",
    "background": "transparent",
    "color": "rgba(255,255,255,0.87)",
    "padding": "0em"
  },
  "hljs-emphasis": {
    "fontStyle": "italic"
  },
  "hljs-strong": {
    "fontWeight": "bold"
  }

}

const codeBlockStyle = {
    width: '50px'
}

const container = {
    position: 'absolute',
    top: '0px',
    right: '0',
    width: '79%',
    display: 'block',
    overflowX: 'auto',
    backgroundColor: '#121212',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderBottomRightRadius: '0 !important',
    borderBottomLeftRadius: '0 !important',
    borderBottom: '0 none !important',
    boxShadow: 'none'
}

const errorContainer = {
    position: 'absolute',
    top: '0px',
    right: '0',
    width: '79%',
    minHeight: '694px',
    height: '694px',
    display: 'table',
    backgroundColor: '#121212',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderBottomRightRadius: '0 !important',
    borderBottomLeftRadius: '0 !important',
    borderBottom: '0 none !important',
    boxShadow: 'none'

}

const errorMessage = {
    height: '100%',
    width: '100%',
    display: 'inline-grid',
    justifyContents: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.87)',
}


export default CodeBlock;
