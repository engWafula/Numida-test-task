import { Colors } from "@/constants/Colors";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./styles";

const Loader = () => {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color={Colors.background} />
        <Text style={[styles.text, { marginTop: 10 }]}>Loading...</Text>
      </View>
    );
  };

  export default Loader