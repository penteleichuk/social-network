import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            const state = store.getState();

            const addPost = () => {
                const action = addPostActionCreator();
                store.dispatch(action)
            }

            const onPostChange = (text) => {
                const action = UpdateNewPostActionCreator(text)
                store.dispatch(action)
            }

            return <MyPosts
                addPost={addPost}
                updateNewPostText={onPostChange}
                postsData={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
            />
        }}
    </StoreContext.Consumer>
}