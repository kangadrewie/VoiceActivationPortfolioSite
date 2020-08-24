import React, { Component } from 'react';
import CodeBlock from './CodeBlocks.js';
import FileExplorer from './FileExplorer.js';
import { Base64 } from 'js-base64';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            codeContent : ' ',
            hasError: false
        }
    }

    viewCodeContent = (base64) => {
        try {
            let fileContent = Base64.decode(base64)
            console.log(fileContent)
            this.setState({hasError: false, codeContent : fileContent});
        } catch(error) {
            this.setState({hasError: true})
            console.log('INVALID FILE TYPE')
        }
    }

    retrieveFileInformation = (repoName, branchID) => {
        fetch(`https://api.github.com/repos/kangadrewie/${repoName}/git/blobs/${branchID}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                return this.viewCodeContent(data.content)
            })
    }

    fileAction = (obj) => {
        if (obj.action.type == 'blobs') {
            this.retrieveFileInformation(this.props.selectedProject.gitRepo, obj.action.branchID)
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedProject !== this.props.selectedProject) {
            this.setState({codeContent: ''})
        }
    }

    render() {
        return(
            <div style={container}>
                <FileExplorer fileAction={this.fileAction} selectedProject={this.props.selectedProject}></FileExplorer>
                <CodeBlock code={this.state.codeContent} error={this.state.hasError}></CodeBlock>
            </div>
        );
    }
}

const container = {
    position: 'relative'
}

export default App;
