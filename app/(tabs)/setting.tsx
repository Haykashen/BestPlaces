import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/assets/Colors';

const settings = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style = {{alignItems:'center'}}>
          <Text style = {styles.textHeader}>Setting</Text>
        </View>
        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style = {styles.text}>Language</Text>
          <Text style = {styles.text}>En</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignContent:'center',
    padding:10
  },
  text:{
    color:Colors.text
  },
  textHeader:{color:Colors.textHeader, fontSize:22}
});