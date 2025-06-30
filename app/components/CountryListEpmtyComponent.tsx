import { View, Text, StyleProp } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { TCountry, TEmptyListTextArray } from '../constants/types';

type TListEpmtyProps = {str: string, strArray?: TEmptyListTextArray, style?: StyleProp<ViewStyle>};

const CountryListEpmtyComponent = ({str, strArray, style}: TListEpmtyProps) => {
  return (
       <SafeAreaProvider>
        <SafeAreaView style={style}>
          <View>
            {/* {strArray?.map((value:string)=> <Text>{value}</Text>)} */}
            <Text>{str}</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>   
  )
}

export default CountryListEpmtyComponent