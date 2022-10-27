import { Dimensions, StyleSheet } from "react-native";

import  Colors  from '../../constants/color';

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.primary,
        //justifyContent: "center",
        alignItems: "center",
    },
    containerImage:{
        backgroundColor: Colors.primary,
        width: width * 1,
        height: height * 0.3,
        borderColor: Colors.letter,
        color: Colors.letter,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03,
    },
    button:{
        backgroundColor: Colors.primary,
        width: '100%',
        height: height * 0.06,
        borderRadius: 15,
        borderColor: Colors.letter,
        color: Colors.letter,
        borderWidth: 2,
        backgroundColor: Colors.secondary,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    image:{
        width: "100%",
        height: "100%",
    },
})

