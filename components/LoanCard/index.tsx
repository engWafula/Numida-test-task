import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";
import CustomLinkButton from "../CustomLinkButton";

interface LoanCardProps {
	title: string;
	maxAmount: string;
	interestRate: string;
	backgroundColor: string;
}

const LoanCard: React.FC<LoanCardProps> = ({
	title,
	maxAmount,
	interestRate,
	backgroundColor,
}) => {
	return (
		<View style={[styles.card, { backgroundColor }]}>
			<View style={styles.content}>
				<View style={styles.textContainer}>
					<Text style={styles.cardTitle}>{title}</Text>
					<Text>Maximum Amount: </Text>
					<Text style={styles.cardAmount}>{maxAmount}</Text>
					<View style={styles.bottomRow}>
						<Text style={styles.cardInterest}>
							Interest: {interestRate}
						</Text>
						<CustomLinkButton
							title="Learn More"
						/>
					</View>
				</View>
			</View>
		</View>
	);
};



export default LoanCard;
