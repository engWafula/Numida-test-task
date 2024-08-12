import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,                
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary, 
    paddingHorizontal: 20, 
  },
  center: {
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  text: {
    fontSize: 16,            
    color: Colors.primary, 
    textAlign: 'center',      
  },
  retryButton: {
    marginTop: 20,            
    paddingVertical: 10,      
    paddingHorizontal: 20,    
    backgroundColor: Colors.background, 
    borderRadius: 5,         
  },
  retryButtonText: {
    color: Colors.primary, 
    fontSize: 16,             
    textAlign: 'center',     
  },
});
