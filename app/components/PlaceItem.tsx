import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TPlaceItemProps } from '../constants/types';

const PlaceItem = ({ name, country, description, url, onPress }: TPlaceItemProps) => {
  console.log('PlaceItem url = ' + url)
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      {url && <Image style={styles.tinyLogo} source={{ uri: url[0] ? url[0] : 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', }}/>}
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Your overlay text</Text>
      </View>
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name='location-outline' color="green" size={24} />
          <Text>{country}</Text>
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
    borderRadius: 15,
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
  },
  tinyLogo: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
  },
});