import { useEffect, useLayoutEffect } from "react";
import { Profile } from "./Profile";
import { connect, useDispatch } from "react-redux";
import { getProfile, getStatus, updatePhoto, updateStatus } from "../../redux/reducers/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";
import { RouteMatch, useNavigate } from "react-router-dom";
import { ProfilePropsType } from "../../api/profileAPI";

type ProfileConatainerType = mapStateToPropsType & mapDispatchToPropsType & { match?: RouteMatch };

const ProfileContainer = (props: ProfileConatainerType) => {
    const userId = (props.match) ? props.match.params.userId : props.userId;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userId) {
            navigate('/login');
        } else {
            dispatch(props.getProfile(+userId));
            dispatch(props.getStatus(+userId));
        }
    }, [navigate])

    return (
        <Profile
            updatePhoto={updatePhoto}
            updateStatus={props.updateStatus}
            profile={props.profile}
            isOwner={!userId}
            status={props.status} />
    )
}

type mapStateToPropsType = {
    profile: ProfilePropsType
    status: string
    userId: number | null
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

const mapDispatchToProps = () => ({
    getProfile, getStatus, updateStatus, updatePhoto
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)
    (ProfileContainer)