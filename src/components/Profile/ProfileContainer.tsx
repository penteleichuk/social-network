import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/reducers/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        const userId = (this.props.match) ? this.props.match.params.userId : 22092;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

type ProfilePhotosType = {
    small: string | null
    large: string | null
}
type ProfileContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type ProfilePropsType = {
    aboutMe: string | null
    contacts: ProfileContactsType,
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotosType
} | null

const mapStateToProps = (state: AppStateType): { profile: ProfilePropsType, status: string | undefined } => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose<any>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)