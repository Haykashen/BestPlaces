import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from "expo-router";

const plase = () => {
  const { otherParam, itemId } = useLocalSearchParams();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Ionicons name='arrow-back' color="green" size={24} />
          <Text>Place name</Text>
          <Ionicons name='star-sharp' color="green" size={24} />
        </View>
        <View>
          <Text>Pictures karusel</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name='map-sharp' color="green" size={24} />
          <Text>Иконка места</Text>
          <Text>Бали+,+Инндонезия</Text>
        </View>
        <View>
          <Text>About place</Text>
          <Text>text about</Text>
        </View>
        <View>
          <Text>Location</Text>

          <Text>Карта места</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  )
}

export default plase

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
    alignContent:'center',
    alignItems:'center'
  },
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
  search:{
    backgroundColor:'white',
    borderRadius:20,
    marginVertical: 15,
    padding:5,
    width:'90%',
    borderColor:'#63B4FF',
    borderWidth:2
  },
});