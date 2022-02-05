import style from './ProfileInfo.module.css';
import defaultBG from '../../../assets/images/default-bg.jpg'
import authorImg from '../../../assets/images/author.jpeg'

export const ProfileInfo = () => {
    return (
        <div className={style.profile} >
            <div className={style.profile__background}>
                <img src={defaultBG} alt=""/>
            </div>
            <div className={style.profile__description}>
                <div className={style.profile__photo}>
                    <img src={authorImg} alt=""/>
                </div>
                <div className={style.profile__fullname}>Khaby Lame</div>
            </div>
        </div>
    )
}