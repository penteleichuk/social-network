import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/reducers/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "../../vendor/withRouter";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getProfile((this.props.match) ? this.props.match.params.userId : 2);
    }

    render() {
        if(!this.props.isAuth) {
            return <Navigate to={'/login'}/>
        }

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

const mapStateToProps = (state: AppStateType): { profile: ProfilePropsType, isAuth: boolean } => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer));