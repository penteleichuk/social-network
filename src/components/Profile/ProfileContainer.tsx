import { useEffect, useLayoutEffect } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, updatePhoto, updateStatus } from "../../redux/reducers/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";
import { useNavigate } from "react-router-dom";

const ProfileContainer = (props: any) => {
    const userId = (props.match) ? props.match.params.userId : props.userId;
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            navigate('/login');
        }
    }, [navigate, userId])

    useLayoutEffect(() => {
        props.getProfile(userId);
        props.getStatus(userId);
    }, [userId])

    return (
        <Profile updatePhoto={updatePhoto} isOwner={!userId} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    )
}

export type ProfilePhotosType = {
    small: string | null
    large: string | null | undefined
}
type ProfileContactsType = {
    facebook: string | null | undefined
    website: string | null | undefined
    vk: string | null | undefined
    twitter: string | null | undefined
    instagram: string | null | undefined
    youtube: string | null | undefined
    github: string | null | undefined
    mainLink: string | null | undefined
}
export type ProfilePropsType = {
    aboutMe?: string | null | undefined
    contacts?: ProfileContactsType,
    lookingForAJob?: boolean
    lookingForAJobDescription?: string | undefined
    fullName?: string | undefined
    userId?: number
    photos?: ProfilePhotosType
} | null

const mapStateToProps = (state: AppStateType): { profile: ProfilePropsType, status: string | undefined, userId: number | null, isAuth: boolean } => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose<any>(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, updatePhoto }), withRouter)(ProfileContainer)