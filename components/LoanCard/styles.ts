import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
	card: {
		padding: 16,
		borderRadius: 8,
		marginBottom: 16,
		borderWidth: 1,
		borderColor: Colors.borderColor,
		backgroundColor: Colors.primary,
		overflow: "hidden",
	},
	content: {
		flexDirection: "column",
		justifyContent: "space-between",
		height: 110,
	},
	textContainer: {
		flex: 1,
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 8,
	},
	cardAmount: {
		color: Colors.buttonColor,
		fontSize: 20,
		fontWeight: "bold",
	},
	bottomRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	cardInterest: {
		fontSize: 14,
		fontWeight: "bold",
	},
	buttonContainer: {
		marginTop: 16,
	},
});