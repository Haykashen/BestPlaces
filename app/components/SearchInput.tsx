import { View, StyleSheet, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import Theme from '@/assets/themes/themeDark';

const SearchInput = (props: TextInputProps) => {
    return (
        <View style={styles.search}>
            <TextInput 
              style={styles.search_input} 
              placeholderTextColor={Theme.colors.text_Secondary} 
              {...props}
            />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    search: {
        backgroundColor: Theme.colors.bg_input,
        borderRadius: 15,
        margin: 10,
        height: 45,
        padding: 10,
        borderColor: Theme.colors.border_color,
        borderWidth: 2,
        maxWidth:860,
        minWidth:400
    },
    search_input: {
        flex: 1,
        textDecorationColor: 'white',
        color: 'white',
    }
});
