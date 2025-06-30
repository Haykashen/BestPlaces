import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const settings = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor:'#1b1725', padding:10}}>
        <View style = {{alignItems:'center'}}>
          <Text style = {{color:'#4894FE', fontSize:22}}>Setting</Text>
        </View>
        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style = {{color:'white'}}>Language</Text>
          <Text style = {{color:'white'}}>En</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent:'center',
    alignItems:'center',
    
  },
});