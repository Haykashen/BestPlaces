import { StatusBar, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const placeCard = () => {

  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
      <Text>1</Text>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
    alignContent:'center',
    alignItems:'center'
  },
})
export default placeCard

// import { window } from "@/constants/sizes";
// import { renderItem } from "@/utils/render-item";
// import * as React from "react";
// import { View } from "react-native";
// import { useSharedValue } from "react-native-reanimated";
// import Carousel from "react-native-reanimated-carousel";

// const defaultDataWith6Colors = ["#B0604D", "#899F9C", "#B3C680", "#5C6265", "#F5D399", "#F1F1F1"];

// function Index() {
//   const progress = useSharedValue<number>(0);

//   return (
//     <View id="carousel-component" dataSet={{ kind: "basic-layouts", name: "parallax" }}>
//       <Carousel
//         autoPlayInterval={2000}
//         data={defaultDataWith6Colors}
//         height={258}
//         loop={true}
//         pagingEnabled={true}
//         snapEnabled={true}
//         width={window.width}
//         style={{
//           width: window.width,
//         }}
//         mode="parallax"
//         modeConfig={{
//           parallaxScrollingScale: 0.9,
//           parallaxScrollingOffset: 50,
//         }}
//         onProgressChange={progress}
//         renderItem={renderItem({ rounded: true })}
//       />
//     </View>
//   );
// }

// export default Index;