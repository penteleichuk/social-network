import React, { ChangeEvent } from "react";
import styles from './../../ProfileInfo/ProfileInfo.module.css';

type ProfileStatusPropsType = {
    isOwner: boolean
    status: string
    updateStatus: (value: string) => void
}
class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        isOwner: this.props.isOwner,
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: { status: string }, prevState: { status: string }) {
        if (prevProps.status !== this.props.status) {
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
        return <div className={styles.status}>
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