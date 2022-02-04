import {MyPostType} from "../../components/Profile/MyPosts/MyPostsContainer";

// Const action
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// Action type
type AddPostActionType = {
    type: typeof ADD_POST
}
type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
type ActionsType = AddPostActionType | UpdateNewPostTextActionType;

// Init
type initialStateType = MyPostType
const initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you ?', likesCount: 20},
        {id: 2, message: 'It\'s my first post', likesCount: 12}
    ],
    newPostText: ''
}

// Reducer
export const profileReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: state.newPostText, likesCount: 0};
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
        }
        default: {
            return state;
        }
    }
}

// Action creator
export const addPostActionCreator = () => ({type: ADD_POST})
export const UpdateNewPostActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})