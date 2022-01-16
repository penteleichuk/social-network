import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {useRef} from "react";
import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    const postsElements = props.postsData.map((p, key) => <Post key={key} message={p.message}
                                                                likesCount={p.likesCount}/>);
    const newPostElement = useRef(null);
    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.dispatch(UpdateNewPostActionCreator(text))
    }
    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
        <div className={style.postsBlock}>
            My posts
            <div>x
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;