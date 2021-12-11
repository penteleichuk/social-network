import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message='Hi, how are you ?' likesCount='20'/>
                <Post message="It's my first post" likesCount='45'/>
            </div>
        </div>
    )
}

export default MyPosts;