import React from "react";
import { AppStateType } from "../../redux/redux-store";
import { Settings } from "./Settings";
import { ProfilePropsType } from "../Profile/ProfileContainer";
import { compose } from "redux";
import { connect } from 'react-redux';
import { getProfile } from "../../redux/reducers/profile-reducer";

class SettingsContainer extends React.Component<any, mapStateToPropsType> {

	componentDidMount(): void {
		this.props.getProfile(this.props.userId);
	}

	render(): React.ReactNode {
		return <Settings profile={this.props.profile} userId={this.props.userId} />
	}
}

type mapStateToPropsType = {
	profile: ProfilePropsType,
	userId: number | null
}

type mapDispatchToPropsType = {
	getProfile: (userId: number) => void
}

// Props connect
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		profile: state.profilePage.profile,
		userId: state.auth.userId,
	}
}

const mapDispatchToProps: mapDispatchToPropsType = {
	getProfile
};

export type SettingsPropsType = mapDispatchToPropsType & mapStateToPropsType;

export default compose<any>(connect(mapStateToProps, mapDispatchToProps))(SettingsContainer);