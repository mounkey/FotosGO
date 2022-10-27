import { Dimensions, StyleSheet } from "react-native";

import Color from "../../constants/color";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Color.primary,
    },
    
})