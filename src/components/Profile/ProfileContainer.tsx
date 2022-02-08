import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import { withRouter } from "../../vendor/withRouter";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        const userId = (this.props.match) ? this.props.match.params.userId : 2;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
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

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));