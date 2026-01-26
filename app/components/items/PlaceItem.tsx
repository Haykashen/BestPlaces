import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground, ImageSourcePropType } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TPlaceItemProps } from '../../constants/types';
import Colors from '@/assets/Colors';
import { BlurView } from 'expo-blur';

const PlaceItem = ({ name, country, description, url, favorite, onPress,onLongPress }: TPlaceItemProps) => {
  console.log('PlaceItem url = ' + url)
  // const defaultURL = 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  // if (!url)
  //   url = [defaultURL]
  //source={{ uri: url[0] ? url[0] : defaultURL, }} 
  let urlNew = "data:image/png;base64,"+url[0];
  
  return (
    <TouchableOpacity style={[styles.item, favorite?styles.favorite_item_border:{}]} onPress={onPress} onLongPress={onLongPress}>
      <ImageBackground style={styles.image} source={urlNew as ImageSourcePropType}>
        <BlurView intensity={60} tint="light" style={styles.image_view}>
          <Text style={styles.image_text}>{name}</Text>
        </BlurView>
      </ImageBackground>
      {/* <Ionicons name='location-outline' color="green" size={24} />*/}
    </TouchableOpacity>
  )
}

export default PlaceItem

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.bg_input,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    height: 300,
    width: '90%'
  },
  favorite_item_border:{
    borderColor:'#ff0000ff',
    borderWidth:2,
    borderStyle:'solid'
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 15,
  },
  image_view: {
    height: 'auto',
    width: 'auto',
    borderRadius: 15,
    overflow:'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginBlockEnd: 5,
    marginStart:5,
    marginEnd:5   
  },
  image_text: {
    color: Colors.text_Secondary,
    fontSize: 26,
    fontWeight: 'bold',
    textAlignVertical: "center",
    textAlign: "center"
  }
});