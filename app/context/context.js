// import createContext and useState
import styleAndroid from '@/assets/themes/styleAndroid';
import themeDark from '@/assets/themes/themeDark';

import { createContext, useState } from 'react';
import { Dimensions, Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initiate context
const Context = createContext();

const ContextProvider = ({ children }) => {
    let storeTheme = null;
    let storeLanguage = null;
    try{
      storeTheme = async()=> await AsyncStorage.getItem('theme')
      storeLanguage = async()=> await AsyncStorage.getItem('language')        
    }
    catch(e){
      alert(e)  
      console.log(e)
    }
    // Manage theme state
    const [theme, setTheme] = useState(themeDark);//theme, setTheme,
    const [platform, setPlatform] = useState(Platform.OS);
    const [language, setLanguage] = useState('ru');//storeLanguage? storeLanguage :
    //const [themeNew, setThemeNew] = useState(themeDark)//storeTheme? storeTheme:
    const [style, setStyle] = useState(styleAndroid(themeDark))//storeTheme? storeTheme:

    return (
        <Context.Provider value={{ language, setLanguage, platform, setPlatform, theme, setTheme, style, setStyle }}>
            {children}
        </Context.Provider>
    )
}

export {
    Context,
    ContextProvider
}