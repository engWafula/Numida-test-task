import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

type CustomButtonProps = {
	title: string;
};

export default function CustomButton({ title }: CustomButtonProps) {
	return (
		<TouchableOpacity
			style={styles.button}
		>
			<Text style={styles.buttonText}>{title}</Text>
			<FontAwesome
				name="arrow-right"
				size={10}
				color="#30C2E3"
			/>
		</TouchableOpacity>
	);
}


