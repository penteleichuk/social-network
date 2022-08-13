import style from './ProfileInfo.module.css';

type ProfilePassportItemProps = {
	title: string
	value: string | null
	isTrue?: string
	isFalse?: string
}

export const ProfilePassport = (props: any) => {
	return <div className={style.info}>
		<div>
			<ProfilePassportItem title={'Full Name'} value={props.profile.fullName} isTrue={props.profile.fullName} isFalse={"-"} />
			<ProfilePassportItem title={'About Me'} value={props.profile.aboutMe} isTrue={props.profile.aboutMe} isFalse={"-"} />
			<ProfilePassportItem title={'Looking for a job'} value={props.profile.lookingForAJob} isTrue={'Yes'} isFalse={"No"} />
			<ProfilePassportItem title={'Description'} value={props.profile.lookingForAJobDescription} isTrue={props.profile.lookingForAJobDescription} isFalse={"-"} />
		</div>
		<div>
			<ProfilePassportContacts title={'Facebook'} value={props.profile.contacts.facebook} />
			<ProfilePassportContacts title={'Twitter'} value={props.profile.contacts.twitter} />
			<ProfilePassportContacts title={'Github'} value={props.profile.contacts.github} />
			<ProfilePassportContacts title={'Youtube'} value={props.profile.contacts.youtube} />
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