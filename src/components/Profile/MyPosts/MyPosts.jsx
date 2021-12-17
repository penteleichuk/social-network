import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    const postsData = [
        {id: 1, message: 'Hi, how are you ?', likesCount: 20},
        {id: 2, message: 'It\'s my first post', likesCount: 12}
    ];

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