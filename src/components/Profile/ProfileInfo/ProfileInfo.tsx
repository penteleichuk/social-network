import style from './ProfileInfo.module.css';
import defaultBG from '../../../assets/images/default-bg.jpg'
import authorImg from "../../../assets/images/user.png";
import { Preloader } from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { ChangeEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProfileInfo = (props: any) => {
    const { updatePhoto, isOwner, profile, status, updateStatus } = props;
    const dispatch = useDispatch();

    // upload img
    const refImg = useRef<HTMLInputElement>(null);

    if (!profile) {
        return <Preloader />
    }

    const uploadPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files && e.target.files[0];
        if (files) {
            dispatch(updatePhoto(files))
        }
    }

    return (
        <div className={style.profile} >
            <div className={style.profile__background}>
                <img src={defaultBG} alt="" />
            </div>
            <div className={style.profile__description}>
                <div className={style.profile__photo}>
                    <img src={profile.photos.small || authorImg} alt="" />
                    {isOwner && <input ref={refImg} type={"file"} accept=".png, .jpg, .jpeg" style={{ display: 'none' }} onChange={uploadPhotoHandler} />}
                    <button className={style.profile__update} onClick={() => refImg && refImg.current && refImg.current.click()}>
                        <FontAwesomeIcon icon={faCloudUploadAlt as IconProp} />
                    </button>
                </div>
                <div className={style.profile__fullname}>{profile.fullName}</div>
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}