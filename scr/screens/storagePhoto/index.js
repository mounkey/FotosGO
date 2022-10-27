import { FlatList, Text, View } from "react-native";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoadPhoto } from "../../store/actions/photoAction";
import { MenuAlt } from "../../components";
import { PhotoContainer } from "../../components";
import { styles } from "./styles";

const StoragePhoto = () =>{

    const dispatch = useDispatch();
    const photo = useSelector((state) => state.photoReducer.photos)

    useEffect(() => {
        dispatch(LoadPhoto());
      }, [dispatch]);

    const renderItem = ({item}) => (<PhotoContainer item={item} image={item.image} />)

    return(
        <View style={styles.container}>
          <MenuAlt title = {'Galerias'} />
          <FlatList
            style={styles.container}
            data={photo}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            />
        </View>
    )
}

export default StoragePhoto;