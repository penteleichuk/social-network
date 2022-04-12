import style from './Post.module.css'
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import authorImg from '../../../../assets/images/author.jpeg'
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export type PostType = {
    id?: number
    message: string
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className={style.item}>
            <div className={style.itemImg}>
                <img src={authorImg} alt=""/>
            </div>
            <div className={style.itemText}>
                <div className={style.itemName}>
                    Khaby Lame
                </div>
                <div className={style.itemMessage}>
                    {props.message}
                </div>
            </div>
            <div className={style.itemLike}>
                <FontAwesomeIcon icon={faHeart as IconProp}/> {props.likesCount}
            </div>
        </div>
    )
}
