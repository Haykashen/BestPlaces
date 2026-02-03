import { window } from "../../constants/sizes";
import renderItem from "../../utils/render-item";
import { useState, useEffect } from "react";
import { StatusBar, StyleSheet, View, Text, ImageURISource  } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useLocalSearchParams } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { TPlace} from "../../constants/types";
import { URL } from '../../constants/constants';
import Theme from '@/assets/themes/themeDark';
// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// // Set the animation options. This is optional.
// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });

const placeCard = () => {
  const [place, setPlace] = useState<TPlace>({id:'', name:'Bad network', about: 'Try refresh', longitude:'', latitude:'', url:[require("@/assets/images/errorImage.png")], favorite: false});
  const { otherParam, placeID } = useLocalSearchParams();
  const progress = useSharedValue<number>(0);
  const [cardIsReady, setCardIsReady] = useState(false);

  console.log('placeCard http://vc.inform.ivanovo.ru:9105/node/70401024379406?funName=GetPlace'+'&placeID='+placeID)

  useEffect(() => {
    async function fetchData() {
      try {
        //"http://best-place.online:8080/places/" + placeID
        console.log('placeCard2 http://vc.inform.ivanovo.ru:9105/node/70401024379406?funName=GetPlace'+'&placeID='+placeID)
        const response = await fetch(URL+'?funName=GetPlace'+'&placeID='+placeID, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log('data = '+JSON.stringify(data))
        setPlace(data[0]);
        setCardIsReady(true)

        console.log('place = '+JSON.stringify(place))
        // setLoading(false);
      } catch (e) {
        // setError(JSON.stringify(error));
        // setLoading(false);
        console.log((e as Error).message)
      }
      finally{
        console.log('finally')
      }
    }

    fetchData();
  }, []);

  // if(cardIsReady)
  //   SplashScreen.hide();

   return (
     <SafeAreaProvider>
       <SafeAreaView style={styles.container}>
         <View style={{ flexDirection: 'row',  justifyContent:'space-between', width:'100%', paddingHorizontal:10 }}>
           <Ionicons name='arrow-back' color="white" size={24} onPress={()=> router.back()}/>
           <Text style={styles.textHeader}>{place?.name}</Text>
           <Ionicons name='star-sharp' color="white" size={24} />
         </View>
         {cardIsReady && <Carousel
           autoPlayInterval={2000}
           data={place.url}
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
           renderItem={renderItem({ rounded: true, source: place.url })}
         />}
         <View style={{ flexDirection: 'row' }}>
           <Ionicons name="location-outline" size={24} color="white" />
           <Text style={styles.text}>{place?.name}</Text>
         </View>
         <View>
           <Text style={styles.text}>About place</Text>
           <Text style={styles.text}>{place?.about}</Text>
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
    backgroundColor: Theme.colors.bg_Primary,
    alignContent:'center',
    padding:10,
    alignItems:'center'
  },
  title: {
    fontSize: 32,
    fontWeight:'bold'
  },
  text:{
    fontSize: 16,
    color: Theme.colors.text_Secondary
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
    borderColor: Theme.colors.border_color,
    borderWidth:2
  },
  textHeader:{
    color: Theme.colors.text_Secondary, 
    fontSize:22
  }
});