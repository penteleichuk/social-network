import React from "react";

type PropsType = {
    status: string
}

class ProfileStatus extends React.Component<PropsType, any> {

    state = {
        editMode: false
    }

    editModeActivate() {
        this.setState({
            editMode: true
        })
    }

    editModeDeactivate() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.editModeActivate.bind(this)}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input type="text" value={this.props.status} autoFocus={true} onBlur={this.editModeDeactivate.bind(this)}/>
                </div>
            }
        </div>
    }
}

export default ProfileStatus;