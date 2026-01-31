import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground, ImageSourcePropType } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TPlace } from '../../constants/types';
import Colors from '@/assets/Colors';
import { BlurView } from 'expo-blur';

const PlaceItem = ({ name, location, url, favorite, onPress,onLongPress }: TPlace) => {
  console.log('PlaceItem url = ' + url)
  let urlNew = "data:image/png;base64,"+url[0];
  location = 'Garni, Armenia'
  return (
    <TouchableOpacity style={[styles.item, favorite?styles.favorite_item_border:{}]} onPress={onPress} onLongPress={onLongPress}>
      <ImageBackground style={styles.image} source={urlNew as ImageSourcePropType}>
        <BlurView intensity={50} tint="light" style={styles.image_view}>
          <Text style={styles.image_text}>{name}</Text>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Ionicons name='location-outline' color={Colors.bg_input} size={24} />
            <Text style={styles.item_adress}>{location}</Text>            
          </View>
        </BlurView>
      </ImageBackground>
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
    maxWidth:860,
    minWidth:400
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
    minWidth:'60%',
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
    color: Colors.bg_Primary,
    fontSize: 22,
    fontWeight: 'bold',
    textAlignVertical: "center",
    textAlign: "center"
  },
  item_adress: {
    fontFamily:'Nunito',
    color: Colors.bg_input,
    fontSize: 13,
    fontWeight: 'semibold',
    textAlignVertical: "center",
    textAlign: "center"
  }

});