import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ({postsData, ...props}) => {
    return (
        <div className={style.postsBlock}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                {postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;