import React from "react";
import { AppStateType } from "../../redux/redux-store";
import { Settings } from "./Settings";
import { compose } from "redux";
import { connect } from 'react-redux';
import { getProfile, updateProfile } from "../../redux/reducers/profile-reducer";
import { ProfilePropsType, UpdateRequestType } from "../../api/profileAPI";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class SettingsContainer extends React.Component<SettingsPropsType, mapStateToPropsType> {

	profile = {
		fullName: this.props.profile.fullName,
		aboutMe: this.props.profile.aboutMe,
		lookingForAJob: this.props.profile.lookingForAJob,
		lookingForAJobDescription: this.props.profile.lookingForAJobDescription,
		contacts: {
			facebook: this.props.profile.contacts.facebook,
			twitter: this.props.profile.contacts.twitter,
			github: this.props.profile.contacts.github,
			youtube: this.props.profile.contacts.youtube,
		},
	}

	// componentDidMount(): void {
	// 	this.props.getProfile(this.props.userId);
	// }

	render(): React.ReactNode {
		return <Settings
			userId={this.props.userId}
			updateHandler={this.props.updateProfile}
			getProfile={this.props.getProfile}
			profile={this.profile} />
	}
}

type mapStateToPropsType = {
	profile: ProfilePropsType,
	userId: number
}

type mapDispatchToPropsType = {
	getProfile: (userId: number) => void
	updateProfile: (data: UpdateRequestType) => void
}

// Props connect
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		profile: state.profilePage.profile,
		userId: state.auth.userId,
	}
}

const mapDispatchToProps: mapDispatchToPropsType = {
	getProfile, updateProfile
};

export type SettingsPropsType = mapDispatchToPropsType & mapStateToPropsType;
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(SettingsContainer);