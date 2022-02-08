import style from './ProfileInfo.module.css';
import defaultBG from '../../../assets/images/default-bg.jpg'
import authorImg from '../../../assets/images/author.jpeg'
import {Preloader} from "../../common/Preloader/Preloader";

export const ProfileInfo = (props: any) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.profile} >
            <div className={style.profile__background}>
                <img src={defaultBG} alt=""/>
            </div>
            <div className={style.profile__description}>
                <div className={style.profile__photo}>
                    <img src={props.profile.photos.small || authorImg} alt=""/>
                </div>
                <div className={style.profile__fullname}>Khaby Lame</div>
            </div>
        </div>
    )
}