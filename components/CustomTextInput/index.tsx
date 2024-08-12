import React from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Colors } from "@/constants/Colors";

interface CustomTextInputProps {
  label: string;
  placeholder: string;
  value: string;
  keyboardType: KeyboardTypeOptions | undefined;
  onChangeText: (text: string) => void;
  error?: string;
  touched?: boolean;
}

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  error,
  touched,
}: CustomTextInputProps) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.textPlaceholder}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
        />
      </View>
      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;
