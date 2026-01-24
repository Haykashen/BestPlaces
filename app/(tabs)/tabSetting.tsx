import React from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/assets/Colors';

const settings = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.textHeader}>Setting</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>Language</Text>
          <Text style={styles.text}>En</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={{ borderRadius: 15, borderStyle: 'solid', borderWidth: 2, borderColor: '#ff0000ff', paddingHorizontal:15, paddingVertical:10}}>
            <Text style={styles.text}>Log out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_Primary,
    alignContent:'center',
    padding:10
  },
  text:{
    color:Colors.text_Secondary
  },
  textHeader:{
    color:Colors.text_Secondary, 
    fontSize:22
  }
});