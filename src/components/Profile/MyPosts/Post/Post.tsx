import style from './Post.module.css'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import authorImg from '../../../../assets/images/author.jpeg'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ProfilePropsType } from '../../ProfileContainer';

export type PostType = {
    id?: number
    profile?: ProfilePropsType
    message: string
    likesCount: number
}

export const Post = (props: PostType) => {
    const photo = props.profile?.photos?.small ? props.profile.photos.small : authorImg;

    return (
        <div className={style.item}>
            <div className={style.itemImg}>
                {photo && <img src={photo} alt="" />}
            </div>
            <div className={style.itemText}>
                <div className={style.itemName}>
                    {props.profile?.fullName || 'Khaby Lame'}
                </div>
                <div className={style.itemMessage}>
                    {props.message}
                </div>
            </div>
            <div className={style.itemLike}>
                <FontAwesomeIcon icon={faHeart as IconProp} /> {props.likesCount}
            </div>
        </div>
    )
}
