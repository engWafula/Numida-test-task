import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 4,
		borderWidth: 1,
		borderColor: Colors.buttonColor,
		backgroundColor: "transparent",
		borderRadius: 50,
		width: 150,
	},
	buttonText: {
		color: Colors.buttonColor,
		fontSize: 13,
        marginRight: 8,
        marginLeft:7
	},
});