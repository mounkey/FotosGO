import Color from '../../constants/color';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  button: {
  
    width: '100%',
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',  
    marginTop: 20,  
    borderWidth: 1,
    borderColor: Color.letter,
    borderRadius: 5,
  },

  textButton: {
    fontSize: 20,
  },  

});