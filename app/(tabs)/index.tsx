//import { CountryData } from '@/app/testData/Country';
import {  RelativePathString, useRouter, router, useLocalSearchParams  } from 'expo-router';
import { useState, useEffect, useContext} from "react";
import {Context} from '../context/context';
import { StatusBar, StyleSheet, View, Text, FlatList, RefreshControl } from "react-native"; // TouchableOpacity,  FlatList, Image,Text, 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import PlaceItem from '@/app/components/items/PlaceItem';
import ListEpmtyComponent from '@/app/components/ListEpmtyComponent';
import SearchInput from '@/app/components/SearchInput';
import { URL } from '@/app/constants/constants';
import { TPlace } from "@/app/constants/types";
//import {getCountries} from '@/app/api/api'
//import styles from '@/assets/themes/styleDark';
import styleDark from '@/assets/themes/styleDark';
import styleLight from '@/assets/themes/styleLight';


export default function Index() {
  const {theme } = useContext(Context);
  const styles = (theme == 'dark') ? styleDark : styleLight;
  const { otherParam, CountryId, country } = useLocalSearchParams();
  const [place, setPlace] = useState<TPlace[]>()
  const [seacrchPlace, setSeacrchPlace] = useState('')
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  let strArray:string[] = [];

  const onRefresh = async () => {
    setRefreshing(true);   
  };

  useEffect(() => {
    async function fetchData() {
      try {
        //let search = seacrchPlace ? '/search?q='+seacrchPlace+'&limit=10' : '';
        //let urlEnd = CountryId ? "/countries/"+CountryId+"/places"+search:"/places"+search;
        console.log('Place url CountryId = '+CountryId)
        let seacrch = seacrchPlace ? '&search='+seacrchPlace:'';
        let countryId = CountryId ? '&country='+CountryId:'';
        console.log('Place url  = '+URL+'?funName=GetPlace'+countryId+seacrch)
        //"http://best-place.online:8080"+urlEnd
        const response = await fetch(URL+'?funName=GetPlace'+countryId+seacrch, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setPlace(data);
        console.log(place)
      } catch (e) {
        setPlace([]);
        console.log('error')
        setError((e as Error).message);
        
      }
      finally{
        setLoading(false);
        setRefreshing(false);
        console.log('finally')
      }      
    }

    fetchData();
  }, [CountryId, seacrchPlace, refreshing]);

  if (loading) {
    strArray = ['Loading...']
     console.log('Loading')
  }
  else if (error) {
    console.log('error')
    strArray = ['Error...'+error]
  }
   else if(place && place.length == 0){
     console.log('No Places Found')
    strArray = ["No Places Found", "No places found for this search query"] 
  }

  const setFavorite = async(placeId:string, favorite:boolean)=>{

    let urlFavorite = URL+'?funName=SetFavoritePlace'+'&favorite='+placeId+'&link='+!favorite;
    console.log('urlFavorite ='+urlFavorite)

    try{
        const response = await fetch(urlFavorite, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    }
    catch(e){
      console.log('urlFavorite catch(e)')
    }finally{
      setRefreshing(true);  
    }
  }

  const handlePress = (id:string)=>{
/*router.push({pathname: '/components/cards/placeCard',params: { placeID: item.id, otherParam: 'anything you want here' }})*/  
    router.push(('/components/cards/'+id) as RelativePathString)
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{height:'auto', width:'80%', display:'flex', flexDirection:'column', margin:'10%'}}>
          {refreshing && <Text style={styles.text}>Refresh: {refreshing ? 'true' : 'false'}</Text>}
          <Text style={[styles.title, { color: 'white' }]}>Let’s Travel</Text>
          <SearchInput onChangeText={(text) => setSeacrchPlace(text)} placeholder="Search your place" value={seacrchPlace} />
          <Text style={styles.text}>Popular Experiences</Text>
          <FlatList
            horizontal={true}
            data={place}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PlaceItem
              id={item.id}
              name={item.name}
              location={item.location}
              favorite={item.favorite}
              about={item.about}
              url={item.url}
              onPress={() => handlePress(item.id)}
              onLongPress={() => setFavorite(item.id, item.favorite)}
            />}
            ListEmptyComponent={() => (
              <ListEpmtyComponent strArray={strArray} style={styles.container} />
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
          <Text style={styles.text}>Nearest Places</Text>
          <FlatList
            data={place}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PlaceItem
              id={item.id}
              name={item.name ? item.name : 'test'}
              location={item.location}
              favorite={item.favorite}
              about={item.about}
              url={item.url}
              onPress={() => handlePress(item.id)}
              onLongPress={() => setFavorite(item.id, item.favorite)}
            />}
            ListEmptyComponent={() => (
              <ListEpmtyComponent strArray={strArray} style={styles.container} />
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider> 
  );
}