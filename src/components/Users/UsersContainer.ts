import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, initialStateType, setUsersAC, unFollowAC} from "../../redux/reducers/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from "redux";

// Dispatch type
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
type mapStateToPropsType = initialStateType

// User type
type UserLocation = {
    country: string
    city: string
}
type UserPhoto = {
    large: string | null
    small: string | null
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: UserPhoto
    status: string | null
    followed?: boolean
    location?: UserLocation
}
export type UsersPropsType = mapDispatchToPropsType & mapStateToPropsType

// Dispatch connect
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
