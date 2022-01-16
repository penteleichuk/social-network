import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {useRef} from "react";

const MyPosts = (props) => {
    const postsElements = props.postsData.map((p, key) => <Post key={key} message={p.message} likesCount={p.likesCount}/>);
    const newPostElement = useRef(null);

    const onAddPost = () => props.addPost();
    const onPostChange = () => props.updateNewPostText(newPostElement.current.value);

    return (
        <div className={style.postsBlock}>
            My posts
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;