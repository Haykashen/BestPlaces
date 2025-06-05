import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const favorite = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Favorite</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default favorite