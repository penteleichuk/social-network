import {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import style from './MyPosts.module.css'

export const MyPosts = (props: MyPostPropsType) => {
    const postsElements = props.posts.map((p, key) =>
        <Post key={key} message={p.message} likesCount={p.likesCount}/>);

    const onAddPost = () => props.addPost();
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.updateNewPostText(e.currentTarget.value);

    return (
        <div className={style.postsBlock}>
            My posts
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}