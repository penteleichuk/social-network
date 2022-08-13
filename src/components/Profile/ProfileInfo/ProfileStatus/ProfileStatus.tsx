import React, { ChangeEvent } from "react";
import style from './../../ProfileInfo/ProfileInfo.module.css';

class ProfileStatus extends React.Component<any, any> {

    state = {
        isOwner: this.props.isOwner,
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            // debugger
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    editModeActivateHandler = () => {
        if (!this.props.isOwner) return
        this.setState({
            editMode: true
        })
    }

    editModeDeactivateHandler = () => {
        if (!this.props.isOwner) return
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    render() {
        return <div className={style.status}>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.editModeActivateHandler}>{this.props.status ? this.props.status : 'status'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChangeHandler} type="text" value={this.state.status} autoFocus={true}
                        onBlur={this.editModeDeactivateHandler} />
                </div>
            }
        </div>
    }
}

export default ProfileStatus;