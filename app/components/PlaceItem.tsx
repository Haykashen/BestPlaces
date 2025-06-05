import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TPlaceItemProps } from '../constants/types';

const PlaceItem = ({name, country, description, url, onPress}: TPlaceItemProps) => {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Text style={styles.title}>{name}</Text>
            {/* <Image style={styles.tinyLogo} source={{ uri: url, }} alt="Picture" /> */}
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name='location-outline' color="green" size={24} />
                    <Text>Иконка места</Text>
                    <Text>Бали+, {country}</Text>
                </View>
                <Text style={styles.text}>{description}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaceItem


const styles = StyleSheet.create({
    item: {
      backgroundColor: 'white',
      borderColor: 'whitesmoke',
      borderWidth: 2,
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 20,
      borderRadius: 20,
      alignItems:'center'    
    },
    title: {
      fontSize: 32,
      fontWeight:'bold'
    },
    text:{
      fontSize: 16,
    },
    tinyLogo: {
      resizeMode: 'cover',
      width: '100%',
      height: 200,
    },
  });