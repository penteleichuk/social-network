import {Dispatch} from "redux";
import {connect} from "react-redux";
import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../redux/reducers/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {PostType} from "./Post/Post";
import {ProfilePropsType} from "../ProfileContainer";

// MyPosts type
export type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfilePropsType
    status?: string
}
export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType;

// Dispatch type
type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

// Dispatch connect
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text: string) => dispatch(UpdateNewPostActionCreator(text)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);