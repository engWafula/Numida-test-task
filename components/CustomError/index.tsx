import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Colors } from "@/constants/Colors";

interface CustomErrorProps{
    message: string;
    onRetry?:()=>void
}

const CustomError = ({ message, onRetry }:CustomErrorProps) => {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={[styles.text, { color: Colors.warning, marginTop: 10 }]}>
          {message || 'Something went wrong!'}
        </Text>
        {onRetry && (
          <TouchableOpacity onPress={onRetry} style={styles.retryButton}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  export default CustomError
  