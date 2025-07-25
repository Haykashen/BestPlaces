import { window } from "./constants/sizes";
import { renderItem } from "./utils/render-item";
import { useState, useEffect } from "react";
import { StatusBar, StyleSheet, View, Text, ImageURISource  } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useLocalSearchParams } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { TPlace, TCountry } from "./constants/types";
import Colors from '@/assets/Colors';
// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// // Set the animation options. This is optional.
// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });

const placeCard = () => {
  const [place, setPlace] = useState<TPlace>();
  const { otherParam, placeID } = useLocalSearchParams();
  const progress = useSharedValue<number>(0);
  const [cardIsReady, setCardIsReady] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://best-place.online:8080/places/" + placeID, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setPlace(data);
        setCardIsReady(true)
        // setLoading(false);
      } catch (error) {
        // setError(JSON.stringify(error));
        // setLoading(false);
      }
    }

    fetchData();
  }, []);

  // if(cardIsReady)
  //   SplashScreen.hide();

   return (
     <SafeAreaProvider>
       <SafeAreaView style={styles.container}>
         <View style={{ flexDirection: 'row' }}>
           <Ionicons name='arrow-back' color="white" size={24} />
           <Text style={styles.text}>{place?.name}</Text>
           {/* <Text>placeID = {placeID}</Text> */}
           <Ionicons name='star-sharp' color="white" size={24} />
         </View>
         <Carousel
           autoPlayInterval={2000}
           data={place?.url ? place.url : []}
           height={258}
           loop={true}
           pagingEnabled={true}
           snapEnabled={true}
           width={window.width}
           style={{
             width: window.width,
           }}
           mode="parallax"
           modeConfig={{
             parallaxScrollingScale: 0.9,
             parallaxScrollingOffset: 50,
           }}
           onProgressChange={progress}
           renderItem={renderItem({ rounded: true, source: place?.url })}
         />
         <View style={{ flexDirection: 'row' }}>
           <Ionicons name="location-outline" size={24} color="white" />
           <Text style={styles.text}>{place?.name}</Text>
         </View>
         <View>
           <Text style={styles.text}>About place</Text>
           <Text style={styles.text}>{place?.description}</Text>
         </View>
         <View>
           <Text style={styles.text}>Location</Text>

           <Text style={styles.text}>Карта места</Text>
         </View>
       </SafeAreaView>
     </SafeAreaProvider> 
   );
}

export default placeCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: Colors.bg_Primary,
    alignContent:'center',
    alignItems:'center'
  },
  title: {
    fontSize: 32,
    fontWeight:'bold'
  },
  text:{
    fontSize: 16,
    color:Colors.text_Secondary
  },
  tinyLogo: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
  },
  search:{
    backgroundColor:'white',
    borderRadius:20,
    marginVertical: 15,
    padding:5,
    width:'90%',
    borderColor:Colors.text_Primary,
    borderWidth:2
  },
});