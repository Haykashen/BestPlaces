import { useState, useEffect, useContext} from "react";
import {Context} from '../context/context';
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styleDark from '@/assets/themes/styleDark';
import styleLight from '@/assets/themes/styleLight';

const settings = () => {
  const { theme, setTheme, language, setLanguage, platform, setPlatform } = useContext(Context);
  const styles = (theme == 'dark') ? styleDark : styleLight;
  
  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const handleLanguageChange = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  }
  
  const handlePlatformChange = () => {
    setPlatform(platform === 'web' ? 'android' : 'web');
  }
  

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.textHeader}>Setting</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>Theme</Text>
          <TouchableOpacity onPress={handleThemeChange}>
            <Text style={styles.text}>{theme}</Text>
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