import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import style from './Profile.module.css';

type ProfileProps = {

}

export const Profile = (props: any) => {
    const { updatePhoto, isOwner, profile, status, updateStatus } = props;

    return (
        <div className="content">
            <div className={style.profile}>
                <ProfileInfo updatePhoto={updatePhoto} isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} />
                <MyPostsContainer />
            </div>
        </div>
    )
}