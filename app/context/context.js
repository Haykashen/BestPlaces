// import createContext and useState
import styleAndroid from '@/assets/themes/styleAndroid';
import themeDark from '@/assets/themes/themeDark';

import { createContext, useState } from 'react';
import { Dimensions, Platform } from "react-native";

// Initiate context
const Context = createContext();

const ContextProvider = ({ children }) => {
    // Manage theme state
    const [theme, setTheme] = useState('dark');
    const [language, setLanguage] = useState('ru');
    const [platform, setPlatform] = useState(Platform.OS);

    const [themeNew, setThemeNew] = useState(themeDark)
    const [style, setStyle] = useState(styleAndroid(themeDark))

    return (
        <Context.Provider value={{ theme, setTheme, language, setLanguage, platform, setPlatform, themeNew, setThemeNew, style, setStyle }}>
            {children}
        </Context.Provider>
    )
}

export {
    Context,
    ContextProvider
}