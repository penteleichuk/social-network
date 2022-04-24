import { useEffect } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../redux/reducers/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";
import { useNavigate } from "react-router-dom";

const ProfileContainer = (props: any) => {
    const navigate = useNavigate();

    useEffect(() => {
        let userId = (props.match) ? props.match.params.userId : null;

        if (!userId) {
            userId = props.userId;

            if (userId) {
                props.getProfile(userId);
                props.getStatus(userId);
            } else {
                navigate('/login');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    )
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

const mapStateToProps = (state: AppStateType): { profile: ProfilePropsType, status: string | undefined, userId: number | null, isAuth: boolean } => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose<any>(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)