// import createContext and useState
import { createContext, useState } from 'react';
import { Dimensions, Platform } from "react-native";
// Initiate context
const Context = createContext();

const ContextProvider = ({ children }) => {
    // Manage theme state
    const [theme, setTheme] = useState('dark');
    const [language, setLanguage] = useState('ru');
    const [platform, setPlatform] = useState(Platform.OS);

    return (
        <Context.Provider value={{ theme, setTheme, language, setLanguage, platform, setPlatform }}>
            {children}
        </Context.Provider>
    )
}

export {
    Context,
    ContextProvider
}