import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css';

export const Profile = (props: any) => {
    const { updatePhoto, isOwner, profile, status, updateStatus } = props;

    return (
        <div className="content">
            <div className={styles.profile}>
                <ProfileInfo updatePhoto={updatePhoto} isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} />
                <MyPostsContainer />
            </div>
        </div>
    )
}