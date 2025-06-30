import { View, Text, StyleProp } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';


type TListEpmtyProps = {strArray?: string[], style?: StyleProp<ViewStyle>};

const CountryListEpmtyComponent = ({strArray, style}: TListEpmtyProps) => {
  return (
       <SafeAreaProvider>
        <SafeAreaView style={style}>
          <View>
            {strArray?.map((value:string, index:number)=> <Text key={index}>{value}</Text>)}
          </View>
        </SafeAreaView>
      </SafeAreaProvider>   
  )
}

export default CountryListEpmtyComponent