import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

export const MyPostsContainer = (props) => {
    const state = props.store.getState();

    const addPost = () => {
        const action = addPostActionCreator();
        props.store.dispatch(action)
    }

    const onPostChange = (text) => {
        const action = UpdateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            postsData={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}