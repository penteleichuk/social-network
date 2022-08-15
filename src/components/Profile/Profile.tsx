import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css';
import { ProfilePropsType } from "../../api/profileAPI";

export type ProfileComponentPropsType = {
    profile: ProfilePropsType
    isOwner: boolean
    status: string
    updateStatus: (value: string) => void
    updatePhoto: (files: string) => void
}

export const Profile = (props: ProfileComponentPropsType) => {
    const { updatePhoto, updateStatus, profile, isOwner, status } = props;

    return (
        <div className="content">
            <div className={styles.profile}>
                <ProfileInfo updatePhoto={updatePhoto} isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} />
                <MyPostsContainer />
            </div>
        </div>
    )
}