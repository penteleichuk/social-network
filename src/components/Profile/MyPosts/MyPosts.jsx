import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {useRef} from "react";

const MyPosts = (props) => {

    const postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    const newPostElement = useRef(null);

    const addPost = () => {
        props.addPost(newPostElement.current.value);
    }

    return (
        <div className={style.postsBlock}>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;