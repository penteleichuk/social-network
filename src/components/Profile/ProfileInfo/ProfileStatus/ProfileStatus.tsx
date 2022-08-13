import React, { ChangeEvent } from "react";
import style from './../../ProfileInfo/ProfileInfo.module.css';

// type PropsType = {
//     status: string
// }

class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    editModeActivate = () => {
        this.setState({
            editMode: true
        })
    }

    editModeDeactivate = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            // debugger
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div className={style.status}>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.editModeActivate}>{this.props.status ? this.props.status : 'status'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} type="text" value={this.state.status} autoFocus={true}
                        onBlur={this.editModeDeactivate} />
                </div>
            }
        </div>
    }
}

export default ProfileStatus;