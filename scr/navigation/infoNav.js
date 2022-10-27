import { InfoApp, StoragePhoto } from "../screens";

import Colors  from "../constants/color";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const InfoNavigation = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Info"
            screenOptions={{
                headerTitleAlign: "center",
                headerStyle:{
                    backgroundColor: Colors.primary
                }
            }}
        >
            <Stack.Screen 
                name="Info" 
                component={InfoApp}
                options={{
                    title: "Bienvenido a La Camara",
                    headerStyle:{
                        color: Colors.letter,
                        backgroundColor: Colors.primary
                    },

                }}
            />
            <Stack.Screen
                name="StoragePhoto"
                component={StoragePhoto}
                options={{
                    title: "Fotos Guardadas",
                    headerStyle:{
                        color: Colors.letter,
                        backgroundColor: Colors.primary

                    },
                }}
            />
        </Stack.Navigator>
    )
}

export default InfoNavigation;