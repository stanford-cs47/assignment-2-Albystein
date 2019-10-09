import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

class ProfileImage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const {
			profile: { image, name, age, occupation },
		} = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.profileImageContainer}>
					<Image source={image} style={styles.profilePicture} />
					<View style={styles.footer}>
						<Text style={styles.name}>
							<Text style={{ fontWeight: "500" }}>
								{`${name}, `}
							</Text>
							{`${age}`}
						</Text>
						<Text style={styles.occupation}>{occupation}</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 6,
	},

	profileImageContainer: {
		marginHorizontal: 20,
		marginVertical: 30,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderColor: "#bbbbbb",
		borderWidth: 1,
	},
	profilePicture: {
		width: "100%",
		height: height * 0.6,
	},

	footer: {
		padding: 10,
		backgroundColor: "white",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},

	name: {
		fontSize: 24,
	},

	occupation: {
		fontSize: 16,
		color: "gray",
	},
});

export default ProfileImage;
