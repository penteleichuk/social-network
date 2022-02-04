import style from './Post.module.css'

export type PostType = {
    id?: number
    message: string
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className={style.item}>
            <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-1024.png"
                alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}
