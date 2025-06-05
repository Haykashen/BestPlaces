import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const settings = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>settings</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default settings