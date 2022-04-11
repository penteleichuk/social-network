import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/reducers/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getProfile((this.props.match) ? this.props.match.params.userId : 2);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
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

const mapStateToProps = (state: AppStateType): { profile: ProfilePropsType } => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose<any>(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)