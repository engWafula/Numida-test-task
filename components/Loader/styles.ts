import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,                
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary, 
    },
    center: {
      justifyContent: 'center', 
      alignItems: 'center',     
    },
    text: {
      fontSize: 16,             
      color: Colors.secondary,
      textAlign: 'center',    
    },
  });