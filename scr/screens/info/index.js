import * as ImagePicker from "expo-image-picker";

import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import {Buttons, MenuAlt}from "../../components/";
import React, {useState} from "react";

import  Colors from "../../constants/color";
import { ImageSave } from "../../store/actions/photoAction";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const InfoApp = ({navigation}) =>{

    const [pickUrl, setPickUrl] = useState();
    const [imagePatch, setImage] = useState("");
    const dispatch = useDispatch();

    const verifyPermissions = async () =>{
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted"){
            Alert.alert("you need to grant camera permissions to use this app", [{ text: "Okay" }]);
            return false;
        }
        return true;
    };

    const onHandleTakePhoto = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) return;
    
        const image = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [16, 9],
          quality: 0.5,
        });

        setPickUrl(image.uri);
        setImage(image.uri);
    };

    const savePhoto = () =>{
        dispatch(ImageSave(imagePatch));
        navigation.navigate("StoragePhoto");
        setPickUrl();
    }

    const galeryPhotos = () =>{
        navigation.navigate("StoragePhoto")
    }

    return(
        <View style={styles.container}>
            <MenuAlt title = {'Camara'} />
            <View style={styles.containerImage}>
                {!pickUrl ? (
                    <Text>there is no photo</Text>
                ) : (
                    <Image style={styles.image} source={{uri: pickUrl}} />
                )}
            </View>
            <View style ={styles.container}>
                <Buttons title = {'Tomar Froto'} onPress={onHandleTakePhoto} bkcolor= {Colors.primary} color = {Colors.letter} />
                <Buttons title = {'Salvar Foto'} onPress={savePhoto} bkcolor= {!pickUrl ? Colors.grey : Colors.primary} color = {Colors.letter} disabled = "{!pickUrl}"/>
                <Buttons title = {'Galeria'} onPress={galeryPhotos} bkcolor= {Colors.primary} color = {Colors.letter} />
            </View>
        </View>
    )
}

export default InfoApp;

