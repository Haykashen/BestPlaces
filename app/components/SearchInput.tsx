import { View, StyleSheet, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import Colors from '@/assets/Colors';

const SearchInput = (props: TextInputProps) => {
    return (
        <View style={styles.search}>
            <TextInput 
              style={styles.search_input} 
              placeholderTextColor={Colors.text_Secondary} 
              {...props}
            />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg_Primary,
        alignContent: 'center',
    },
    search: {
        backgroundColor: Colors.bg_input,
        borderRadius: 15,
        margin: 10,
        height: 60,
        padding: 5,
        borderColor: Colors.text_Primary,
        borderWidth: 2,
    },
    search_input: {
        flex: 1,
        textDecorationColor: 'white',
        color: 'white'
    },

    list: {
        flex: 1,
        alignContent: 'center',
    }
});
