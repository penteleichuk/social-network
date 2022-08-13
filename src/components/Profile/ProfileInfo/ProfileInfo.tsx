import { Preloader } from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { ChangeEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfilePassport } from "./ProfilePassport";
import style from './ProfileInfo.module.css';
import authorImg from "../../../assets/images/author.jpeg";

export const ProfileInfo = (props: any) => {
    const { updatePhoto, isOwner, profile, status, updateStatus } = props;
    const dispatch = useDispatch();

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
            <div className={style.wrapper}>
                <div className={style.photo}>

                    <img src={profile.photos.small || authorImg} alt="" />
                    {isOwner && <input
                        ref={refImg}
                        type={"file"}
                        accept=".png, .jpg, .jpeg"
                        style={{ display: 'none' }}
                        onChange={uploadPhotoHandler} />}

                    {isOwner && <button className={style.update} onClick={() => refImg && refImg.current && refImg.current.click()}>
                        <FontAwesomeIcon icon={faCloudUploadAlt as IconProp} />
                    </button>}

                    <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus} />
                </div>
                <div className={style.descrition}>
                    <ProfilePassport profile={profile} />
                </div>
            </div>
        </div>
    )
}

