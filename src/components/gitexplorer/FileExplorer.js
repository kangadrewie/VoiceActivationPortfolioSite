import React, { Component } from 'react';
import FileItem from './FileItem.js';
import { Spring } from 'react-spring/renderprops';

class FileExplorer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            project: '',
            files: {},
            date: '',
            cachedDirectory: [],
            homeSha: 'DEFAULTSHA',
            goBackDirectory: false
        };
    };

    updateProject = (repoName) => {
        this.setState({files: {}});
        let branchID = 'master';
        console.log('UPDATED')

        fetch(`https://api.github.com/repos/kangadrewie/${repoName}/git/trees/${branchID}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({files: data.tree, cachedDirectory: [], homeSha: data.sha});
                return data.tree;
            })
            .catch((err) => {
                console.log('Git Hub Path Not Found');
            })
    };
    
    componentDidMount = () => {
        console.log('component did update')
        this.updateProject(this.props.selectedProject.gitRepo);
        this.setState({project: this.props.selectedProject.gitRepo});
    };

    updateDirectory = (directory) => {
        if (this.state.project.length > 0) {

            fetch(`https://api.github.com/repos/kangadrewie/${this.state.project}/git/trees/${directory}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({files: data.tree});
                //Temp store of file directory in an array
                this.state.cachedDirectory.push(directory);
                this.setState({goBackDirectory: true});
                return data.tree;
            });
        };
   };

    goBackDirectory = () => {
        if (this.state.cachedDirectory.length > 1) {
            console.log(this.state.cachedDirectory.pop());
            let prevDirectory = this.state.cachedDirectory.pop();
            this.updateDirectory(prevDirectory);
        } else {
            this.updateProject(this.state.project);
            this.setState({goBackDirectory: false});
        };
    };

    render() {
        console.log(this.props.selectedProject)
        return(
                <div style={container} className="mobileFileExplorer">
                    <table style={explorerSidebar} className="ui celled striped table fileTable">
                        <thead>
                            <tr><th colSpan="3" style={heading}>
                                File Explorer
                                <i style={backIcon} className={(this.state.goBackDirectory == true) ? 'arrow alternate circle left icon' : ''} onClick={this.goBackDirectory}></i>
                                </th>
                            </tr>
                        </thead>
                        <Spring
                            from={{opacity: 0}}
                            to={{opacity: 1}}
                            config={{delay: 500, duration: 1000}}
                        >
                            { props => (
                                <div style={props}>
                                    <tbody style={tbodyStyle} className="fileExplorerList">
                                        <FileItem fileState={this.state.files} fileAction={this.props.fileAction} updateDirectory={this.updateDirectory}></FileItem>
                                    </tbody>
                                </div>
                            )}
                        </Spring>
                    </table>
                </div>
        );
    }
};

const explorerSidebar = {
    backgroundColor: '#1f1f1f',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: 'rgba(255, 255, 255, 0.87)',
    width: '100%',
    maxHeight: '650px',
    overflowX: 'auto',
    overflowY: 'auto'
}

const heading = {
    backgroundColor: '#121212',
    color: 'rgba(255, 255, 255, 0.87)',
}

const tbodyStyle = {
    display: 'block',
    width: '100%',
    maxHeight: '650px',
    overflowY: 'scroll',
    overflow: 'auto'
}

const backIcon = {
    float: 'right',
    color: 'rgba(255, 255, 255, 0.87)',
    cursor: 'pointer'
}

const container = {
    width: '20%',
    height: '1200px',
    overflow: 'hidden'
}

export default FileExplorer;
