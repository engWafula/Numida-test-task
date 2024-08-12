import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?:boolean
}
export default function Button( {title,onPress,loading}:ButtonProps){
    return (
        <TouchableOpacity
        style={styles.submitButton}
        onPress={onPress}
      >
        <Text style={styles.submitButtonText}>
          {loading ? "Loading.." : title}
        </Text>
      </TouchableOpacity>
    )
}