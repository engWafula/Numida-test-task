import { StyleSheet } from "react-native";





export  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "white",
    },
    container: {
      flex: 1,
      backgroundColor: "white",
      justifyContent: "center",
      paddingHorizontal: 24,
    },
    headerText: {
      fontSize: 39,
      fontWeight: "bold",
      marginBottom: 56,
      fontFamily: "Poppins-Bold",
    },
    form: {
      justifyContent: "center",
    },
    inputContainer: {
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      color: "#000",
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: "#d3d3d3",
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
    },
    submitButton: {
      backgroundColor: "#00BCD4",
      borderRadius: 8,
      paddingVertical: 16,
      marginTop: 24,
    },
    submitButtonText: {
      color: "white",
      textAlign: "center",
      fontSize: 16,
      fontWeight: "bold",
    },
    errorText: {
      color: "red",
      fontSize: 12,
      marginTop: -12,
      marginBottom: 16,
    },
  });
  