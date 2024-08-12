import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { Colors } from "@/constants/Colors";

type CustomLinkButtonProps = {
  title: string;
};

export default function CustomLinkButton({ title }: CustomLinkButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
      <FontAwesome name="arrow-right" size={10} color={Colors.buttonColor} />
    </TouchableOpacity>
  );
}
