import authorImg from "../../../assets/images/user.png";
import { Preloader } from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { ChangeEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './ProfileInfo.module.css';

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
            <div className={style.wrapper}>
                <div className={style.photo}>

                    <img src={profile.photos.small || authorImg} alt="" />
                    {isOwner && <input
                        ref={refImg}
                        type={"file"}
                        accept=".png, .jpg, .jpeg"
                        style={{ display: 'none' }}
                        onChange={uploadPhotoHandler} />}

                    <button className={style.update} onClick={() => refImg && refImg.current && refImg.current.click()}>
                        <FontAwesomeIcon icon={faCloudUploadAlt as IconProp} />
                    </button>

                    <ProfileStatus status={status} updateStatus={updateStatus} />
                </div>
                <div className={style.descrition}>
                    <ProfilePassport profile={profile} />
                </div>
            </div>
        </div>
    )
}

export const ProfilePassport = (props: any) => {
    return <div className={style.info}>
        <div>
            <ProfilePassportItem title={'Full Name'} value={props.fullName} isTrue={props.fullName} isFalse={"-"} />
            <ProfilePassportItem title={'About Me'} value={props.aboutMe} isTrue={props.aboutMe} isFalse={"-"} />
            <ProfilePassportItem title={'Looking for a job'} value={props.lookingForAJob} isTrue={'Yes'} isFalse={"No"} />
            <ProfilePassportItem title={'Description'} value={props.lookingForAJobDescription} isTrue={props.lookingForAJobDescription} isFalse={"-"} />
        </div>
        <div>
            <ProfilePassportContacts title={'Facebook'} value={props.profile.contacts.facebook} />
            <ProfilePassportContacts title={'Twitter'} value={props.profile.contacts.twitter} />
            <ProfilePassportContacts title={'Github'} value={props.profile.contacts.github} />
            <ProfilePassportContacts title={'Youtube'} value={props.profile.contacts.youtube} />
        </div>
    </div>
}

type ProfilePassportItemProps = {
    title: string
    value: string | null
    isTrue?: string
    isFalse?: string
}

const ProfilePassportItem = (props: ProfilePassportItemProps) => {
    return <div className={style.children}>
        <b className={style.title}>{props.title}</b><span className={style.text}>{props.value ? props.isTrue : props.isFalse}</span>
    </div>
}

const ProfilePassportContacts = (props: ProfilePassportItemProps) => {
    return <div className={style.children}>
        <b className={style.title}>{props.title}</b><span className={style.text}>{props.value ? props.value : '-'}</span>
    </div>
}