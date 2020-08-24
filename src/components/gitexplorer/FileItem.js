import React, { Component } from 'react';

class FileItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            explorerAction: {
                type: 'tree',
                branchID: '',

            }
        }

        this.fileItemActions = this.fileItemActions.bind(this);
    }

    fileItemActions(e) {
        console.log('Clicked', e.currentTarget.getAttribute('type'),  e.currentTarget.id);
        console.log(this.props.fileState);
        if (e.currentTarget.getAttribute('type') === 'blob') {
            this.props.fileAction({action:
                {
                    type: 'blobs',
                    branchID: e.currentTarget.id
                }
            })
        } else {
            console.log(e.currentTarget.id); 
            this.props.updateDirectory(e.currentTarget.id)
        }
    }

    render() {
        const fileItem = this.props.fileState;
        return Object.keys(this.props.fileState).map((obj, i) => {

            // Define File Extension for conditional statement
            let fileExt = fileItem[obj].path.substr(fileItem[obj].path.indexOf(".") + 1);
            
            return (
                <React.Fragment key={fileItem[obj].sha}>
                    <tr style={trStyle} className="inactive" id={fileItem[obj].sha} type={(fileItem[obj].type)} onClick={this.fileItemActions}>
                        <td className="left aligned" style={fileName}>
                            <i style={iconStyle} className={
                                 // Conditional File Extension Icon
                                (fileItem[obj].type == 'tree') ? 'folder icon' :
                                (fileExt === 'py' || fileExt == 'pyc') ? 'python icon' :
                                (fileExt === 'html') ? 'html5 icon' :
                                (fileExt === 'js') ? 'js icon' :
                                (fileExt === 'sh') ? 'server icon' :
                                (fileExt === 'json') ? 'file alternate icon' :
                                (fileExt === 'css') ? 'css3 alternate icon' :
                                (fileExt === 'txt') ? 'file outline icon' :
                                (fileExt === 'zip') ? 'zip icon' :
                                (fileItem[obj].type == 'tree') ? '' : 'file icon'
                            }></i>
                            {fileItem[obj].path}
                        </td>
                    </tr>
                </React.Fragment>
            );
        })
    }
};

const trStyle = {
    display: 'table',
    width: '100%',
    whiteSpace: 'no-wrap'
}

const iconStyle = {
    marginRight: '20px'
}

const fileName = {
    width: '100%',
    cursor: 'pointer'
}

export default FileItem;
