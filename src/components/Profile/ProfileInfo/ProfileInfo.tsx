import { ChangeEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Preloader } from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfilePassport } from "./ProfilePassport";
import authorImg from "../../../assets/images/author.jpeg";
import { ProfileComponentPropsType } from '../Profile';
import styles from './ProfileInfo.module.css';


export const ProfileInfo = (props: ProfileComponentPropsType) => {
    const { profile, isOwner, status, updatePhoto, updateStatus } = props;
    const dispatch = useDispatch();

    const refImg = useRef<HTMLInputElement>(null);

    if (!profile) {
        return <Preloader />
    }

    const uploadPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const files: File | null = e.target.files && e.target.files[0];
        if (files) {
            dispatch(updatePhoto(files.name))
        }
    }

    return (
        <div className={styles.profile} >
            <div className={styles.wrapper}>

                <div className={styles.photo}>
                    <img src={profile.photos.small || authorImg} alt="" />
                    {isOwner && <input
                        ref={refImg}
                        type={"file"}
                        accept=".png, .jpg, .jpeg"
                        style={{ display: 'none' }}
                        onChange={uploadPhotoHandler} />}

                    {isOwner && <button className={styles.update} onClick={() => refImg && refImg.current && refImg.current.click()}>
                        <FontAwesomeIcon icon={faCloudUploadAlt as IconProp} />
                    </button>}

                    <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus} />
                </div>

                <div className={styles.descrition}>
                    <ProfilePassport
                        fullName={profile.fullName}
                        aboutMe={profile.aboutMe}
                        lookingForAJob={profile.lookingForAJob}
                        lookingForAJobDescription={profile.lookingForAJobDescription}
                        contacts={profile.contacts} />
                </div>
            </div>
        </div>
    )
}

