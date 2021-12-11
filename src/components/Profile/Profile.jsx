import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;