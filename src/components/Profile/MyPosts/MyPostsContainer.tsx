import { Dispatch } from "redux";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/reducers/profile-reducer";
import { MyPosts } from "./MyPosts";
import { AppStateType } from "../../../redux/redux-store";
import { PostType } from "./Post/Post";
import { ProfilePropsType } from "../ProfileContainer";

// MyPosts type
export type mapStateToPropsType = {
    posts: Array<PostType>
    profile: ProfilePropsType
    status?: string
}
export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType;

// Dispatch type
type mapDispatchToPropsType = {
    addPost: (post: string) => void,
}

// Dispatch connect
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (post: string) => dispatch(addPostActionCreator(post)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);