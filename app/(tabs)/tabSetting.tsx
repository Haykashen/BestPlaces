import { useState, useEffect, useContext} from "react";
import {Context} from '../context/context';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//import styleSetting from '@/app/tresh/style/styleSetting';
import themeDark from '@/assets/themes/themeDark';
import themeLight from "@/assets/themes/themeLight";
import styleAndroid from '@/assets/themes/styleAndroid';
import styleWeb from "@/assets/themes/styleWeb";
import AsyncStorage from '@react-native-async-storage/async-storage';

const settings = () => {
  const { theme, setTheme, language, setLanguage, platform, setPlatform, style, setStyle} = useContext(Context);
  const styles = style
  //const styles = styleSetting[theme][platform]; 
  
  
  const handleThemeChange = () => {
   // setTheme(theme === 'light' ? 'dark' : 'light');
    //alert(themeNew.name)
    //alert(themeNew.name === 'light' ? themeDark.name : themeLight.name)
    const curretTheme = theme.name === 'dark' ? themeLight : themeDark;
    setTheme(curretTheme);
    //const setTheme = 
    async() => await AsyncStorage.setItem('theme', JSON.stringify(curretTheme))    
    setStyle(styleAndroid(curretTheme))
  }

  const handleLanguageChange = () => {
    const curretLanguage = (language === 'ru') ? 'en' : 'ru';
    setLanguage(curretLanguage);
    async() => await AsyncStorage.setItem('language', JSON.stringify(curretLanguage)) 
  }
  
  const handlePlatformChange = () => {
    setPlatform(platform === 'web' ? 'android' : 'web');
    setStyle(platform === 'web' ? styleAndroid(theme) : styleWeb(theme))
  }
  

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ maxWidth:1260, width:'auto', minWidth:'40%'}}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.textHeader}>Setting</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>Theme</Text>
          <TouchableOpacity onPress={handleThemeChange}>
            <Text style={styles.text}>{theme.name}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>Language</Text>
          <TouchableOpacity onPress={handleLanguageChange}>
            <Text style={styles.text}>{language}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>Platform</Text>
          <TouchableOpacity onPress={handlePlatformChange}>
            <Text style={styles.text}>{platform}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={{ borderRadius: 15, borderStyle: 'solid', borderWidth: 2, borderColor: '#ff0000ff', paddingHorizontal: 15, paddingVertical: 10 }}>
            <Text style={styles.text}>Log out</Text>
          </TouchableOpacity>
        </View>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default settings

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.bg_Primary,
//     alignContent:'center',
//     padding:10
//   },
//   text:{
//     color:Colors.text_Secondary
//   },
//   textHeader:{
//     color:Colors.text_Secondary, 
//     fontSize:22
//   }
// });