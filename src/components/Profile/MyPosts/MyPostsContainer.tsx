import {Dispatch} from "redux";
import {connect} from "react-redux";
import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../redux/reducers/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {PostType} from "./Post/Post";

// MyPosts type
export type MyPostType = {
    posts: Array<PostType>
    newPostText: string
}
export type MyPostPropsType = MyPostType & dispatchColBackType;

// Dispatch type
type dispatchColBackType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

// Dispatch connect
const dispatchProps = (state: AppStateType): MyPostType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const dispatchColBack = (dispatch: Dispatch): dispatchColBackType => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text: string) => dispatch(UpdateNewPostActionCreator(text)),
    }
}

export const MyPostsContainer = connect(dispatchProps, dispatchColBack)(MyPosts);