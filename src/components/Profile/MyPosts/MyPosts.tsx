import { Post } from "./Post/Post";
import { MyPostPropsType } from "./MyPostsContainer";
import { PostForm } from "../../Form/PostForm";
import styles from './MyPosts.module.css'

export const MyPosts = (props: MyPostPropsType) => {
    const postsElements = props.posts.map((p, key) =>
        <Post key={key} profile={props.profile} message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={styles.postsBlock}>
            <PostForm onSubmit={props.addPost} />
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}
