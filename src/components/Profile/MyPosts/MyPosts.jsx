import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {useRef} from "react";

const MyPosts = (props) => {
    const postsElements = props.postsData.map((p, key) =>
        <Post key={key} message={p.message} likesCount={p.likesCount}/>);

    const newPostElement = useRef(null);

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'})
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