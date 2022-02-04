import style from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img src="https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg" alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </>
    )
}