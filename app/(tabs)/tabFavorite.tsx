import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/assets/Colors';

const favorite = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style = {{alignItems:'center'}}>
          <Text style = {styles.textHeader}>Favorite</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default favorite

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_Primary,
    alignContent:'center',
    padding:10
  },
  search:{
    backgroundColor:'white',
    borderRadius:20,
    margin: 20,
    padding:5,
    flex:1,
    borderColor:'#63B4FF',
    borderWidth:2,
    alignItems:'center'
  },
  search_input:{
    width:'100%',
    height:'100%'
  },
  list:{
    flex:1,
    alignContent:'center', 
  },
  textHeader:{
    color:Colors.text_Secondary, 
    fontSize:22
  }
});