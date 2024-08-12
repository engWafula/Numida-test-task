import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      color: Colors.secondary,
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: Colors.borderColor,
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
    },
    errorText: {
      color: Colors.warning,
      fontSize: 12,
      marginTop: -12,
      marginBottom: 16,
    },
  });