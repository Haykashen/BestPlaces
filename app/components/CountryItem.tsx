import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TCountryItemProps } from '../constants/types';

const CountryItem = ({name, capital, currency, language, description, url, onPress}: TCountryItemProps) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{name}</Text>
    <Image style={styles.tinyLogo} source={{uri: url,}}  alt="Picture"/>
    <View>
      <Text style={styles.text}>Столица: {capital}</Text>
      <Text style={styles.text}>Язык: {language}</Text>
      <Text style={styles.text}>Валюта: {currency}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  </TouchableOpacity>
);

export default CountryItem

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