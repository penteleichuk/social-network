import {Dispatch} from "redux";
import {connect} from "react-redux";
import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../redux/reducers/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {PostType} from "./Post/Post";

// MyPosts type
export type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
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
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text: string) => dispatch(UpdateNewPostActionCreator(text)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);