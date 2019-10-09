import React, { Component } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	Platform,
} from "react-native";

import { Images } from "../Themes";

const headerHeight = Platform.select({
	android: 56,
	ios: 44,
});

const { width, height } = Dimensions.get("window");

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.icon} source={Images.settings} />
				<Image
					style={styles.tinder}
					resizeMode="contain"
					source={Images.logo}
				/>
				<Image style={styles.icon} source={Images.chat} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: headerHeight,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		borderBottomColor: "#bbbbbb",
		borderBottomWidth: 1,
	},
	icon: {
		height: 32,
		width: 32,
		tintColor: "gray",
	},
	tinder: {
		height: 38,
		width: width * 0.3,
	},
});

export default Header;
