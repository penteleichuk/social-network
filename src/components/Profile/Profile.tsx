import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import style from './Profile.module.css';

export const Profile = (props: any) => {
    return (
        <div className="content">
            <div className={style.profile}>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
                <MyPostsContainer />
            </div>
        </div>
    )
}