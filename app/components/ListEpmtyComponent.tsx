import { View, Text, StyleProp } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';


type TListEpmtyProps = {strArray?: string[], style?: StyleProp<ViewStyle>};

const ListEpmtyComponent = ({ strArray, style }: TListEpmtyProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style}>
        <View style={{alignContent:'center'}}>
          {strArray?.map((value: string, index: number) => <Text style={{color:'white', justifyContent:'center', alignContent:'center'}} key={index}>{value}</Text>)}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default ListEpmtyComponent