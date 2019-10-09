import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { Images, Profiles } from "./App/Themes";

import Header from "./App/Components/Header";
import ProfileImage from "./App/Components/ProfileImage";
import BottomNavigator from "./App/Components/BottomNavigator";

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentProfile: Profiles.harold,
		};
	}

	nextProfile = () => {
		this.setState({ currentProfile: Profiles.random() });
	};

	previousProfile = () => {
		this.setState({ currentProfile: Profiles.random() });
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Header />
				<ProfileImage profile={this.state.currentProfile} />
				<BottomNavigator
					onPrevious={this.previousProfile}
					onNext={this.nextProfile}
				/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f0f0f0",
	},
});
