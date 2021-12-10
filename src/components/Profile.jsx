import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>New post</div>
            </div>
            <div className={style.posts}>
                <div className={style.item}>post 1</div>
                <div className={style.item}>post 2</div>
            </div>
        </div>
    )
}

export default Profile;