import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Theme, Images } from "../Themes";

class BottomNavigator extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { onNext, onPrevious } = this.props;
		return (
			<View style={styles.container}>
				<TouchableOpacity>
					<View style={styles.iconSmall}>
						<Image
							source={Images.rewind}
							resizeMode="center"
							style={styles.iconImage}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={onPrevious}>
					<View style={styles.iconLarge}>
						<Image
							source={Images.nope}
							resizeMode="center"
							style={styles.iconImage}
						/>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.iconSmall}>
						<Image
							source={Images.boost}
							resizeMode="center"
							style={styles.iconImage}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={onNext}>
					<View style={styles.iconLarge}>
						<Image
							source={Images.like}
							resizeMode="center"
							style={styles.iconImage}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.iconSmall}>
						<Image
							source={Images.superLike}
							resizeMode="center"
							style={styles.iconImage}
						/>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	iconSmall: {
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		height: 40,
		width: 40,
		backgroundColor: "white",
		borderRadius: 30,
	},
	iconLarge: {
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		height: 50,
		width: 50,
		backgroundColor: "white",
		borderRadius: 30,
	},
	iconImage: {
		height: 20,
		width: 20,
	},
});

export default BottomNavigator;
