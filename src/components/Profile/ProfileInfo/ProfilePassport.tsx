import { ProfileContactsType } from '../../../api/profileAPI';
import style from './ProfileInfo.module.css';

type ProfilePassportItemProps = {
	title: string
	value: string | boolean
	isTrue?: string
	isFalse?: string
}

type ProfilePassportPropsType = {
	fullName: string
	aboutMe: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	contacts: ProfileContactsType
}

export const ProfilePassport = (props: ProfilePassportPropsType) => {
	const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } = { ...props };

	return <div className={style.info}>
		<div>
			<ProfilePassportItem title={'Full Name'} value={fullName} isTrue={fullName} isFalse={"-"} />
			<ProfilePassportItem title={'About Me'} value={aboutMe} isTrue={aboutMe} isFalse={"-"} />
			<ProfilePassportItem title={'Looking for a job'} value={lookingForAJob} isTrue={'Yes'} isFalse={"No"} />
			<ProfilePassportItem title={'Description'} value={lookingForAJobDescription} isTrue={lookingForAJobDescription} isFalse={"-"} />
		</div>

		<div>
			<ProfilePassportContacts title={'Facebook'} value={contacts.facebook} />
			<ProfilePassportContacts title={'Twitter'} value={contacts.twitter} />
			<ProfilePassportContacts title={'Github'} value={contacts.github} />
			<ProfilePassportContacts title={'Youtube'} value={contacts.youtube} />
		</div>
	</div>
}

export const ProfilePassportItem = (props: ProfilePassportItemProps) => {
	return <div className={style.children}>
		<b className={style.title}>{props.title}</b><span className={style.text}>{props.value ? props.isTrue : props.isFalse}</span>
	</div>
}

export const ProfilePassportContacts = (props: ProfilePassportItemProps) => {
	return <div className={style.children}>
		<b className={style.title}>{props.title}</b><span className={style.text}>{props.value ? props.value : '-'}</span>
	</div>
}