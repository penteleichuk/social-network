import React from "react";
import { AppStateType } from "../../redux/redux-store";
import { Settings } from "./Settings";
import { compose } from "redux";
import { connect } from 'react-redux';
import { getProfile, updateProfile } from "../../redux/reducers/profile-reducer";
import { ProfilePropsType, UpdateRequestType } from "../../api/profileAPI";

class SettingsContainer extends React.Component<any, mapStateToPropsType> {

	componentDidMount(): void {
		this.props.getProfile(this.props.userId);
	}

	render(): React.ReactNode {
		return <Settings updateHandler={this.props.updateProfile} profile={this.props.profile} userId={this.props.userId} />
	}
}

type mapStateToPropsType = {
	profile: ProfilePropsType,
	userId: number | null
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
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps))(SettingsContainer);