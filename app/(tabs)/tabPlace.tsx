import {  RelativePathString, useRouter, router, useLocalSearchParams  } from 'expo-router';
import { useState, useEffect, useContext} from "react";
import {Context} from '../context/context';
import { StatusBar, StyleSheet, View, Text, FlatList, RefreshControl, StyleProp } from "react-native"; // TouchableOpacity,  FlatList, Image,Text, 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import PlaceItem from '@/app/components/items/PlaceItem';
// import ListEpmtyComponent from '@/app/components/ListEpmtyComponent';
import SearchInput from '@/app/components/SearchInput';
import { URL } from '@/app/constants/constants';
import { TPlace } from "@/app/constants/types";
//import {getCountries} from '@/app/api/api'
//import styles from '@/assets/themes/styleDark';
//import styleSetting from '@/app/tresh/style/styleSetting';
import PlaceCategory from '../components/PlaceCategory';
// import getObjectValue from '@/app/async-storage/getObjectValue';
// import setObjectValue from '@/app/async-storage/setObjectValue';
import AsyncStorage from '@react-native-async-storage/async-storage';


const place = () => {
  const [place, setPlace] = useState<TPlace[]>([])
  const [seacrchPlace, setSeacrchPlace] = useState('')
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const { theme, platform, style } = useContext(Context);

  //const styles = styleSetting[theme][platform]; 
  const styles = style
  const { otherParam, CountryId, country } = useLocalSearchParams();

  let strArray: string[] = [];
  let newDate = new Date().toLocaleDateString();

  // const onRefresh = async () => {
  //   setRefreshing(true);
  // };

  useEffect(() => {
    async function fetchData() {
      try{
        const jsonValue = await AsyncStorage.getItem('placeData')
        if(jsonValue != null)
        {
            console.log('dataFromStore != NULL')
            const dataFromStore = JSON.parse(jsonValue);
            if(dataFromStore.date && dataFromStore.date === newDate)
            {
              setPlace(dataFromStore.data);
              console.log('dataFromStore RETURN')
              setLoading(false);
              setRefreshing(false);              
              return;              
            }

        }
         
      }
      catch(e)
      {
        alert ('Ошибка при попытке получения данных из локалстора')
      }

      try {
        //let search = seacrchPlace ? '/search?q='+seacrchPlace+'&limit=10' : '';
        //let urlEnd = CountryId ? "/countries/"+CountryId+"/places"+search:"/places"+search;
        console.log('Place url CountryId = ' + CountryId)
        let seacrch = seacrchPlace ? '&search=' + seacrchPlace : '';
        let countryId = CountryId ? '&country=' + CountryId : '';
        console.log('Place url  = ' + URL + '?funName=GetPlace' + countryId + seacrch)
        //"http://best-place.online:8080"+urlEnd
        const response = await fetch(URL + '?funName=GetPlace' + countryId + seacrch, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setPlace(data);
        console.log(place)

        const jsonValue = JSON.stringify({"date": newDate, "data":[data[0]]})
        await AsyncStorage.setItem('placeData', jsonValue)
        
      } catch (e) {
        setPlace([]);
        console.log('error')
        setError((e as Error).message);

      }
      finally {
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
    strArray = ['Error...' + error]
  }
  else if (place && place.length == 0) {
    console.log('No Places Found')
    strArray = ["No Places Found", "No places found for this search query"]
  }

  const setFavorite = async (placeId: string, favorite: boolean) => {

    let urlFavorite = URL + '?funName=SetFavoritePlace' + '&favorite=' + placeId + '&link=' + !favorite;
    console.log('urlFavorite =' + urlFavorite)

    try {
      const response = await fetch(urlFavorite, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    catch (e) {
      console.log('urlFavorite catch(e)')
    } finally {
      setRefreshing(true);
    }
  }

  const handlePress = (id: string) => {
    /*router.push({pathname: '/components/cards/placeCard',params: { placeID: item.id, otherParam: 'anything you want here' }})*/
    router.push(('/components/cards/' + id) as RelativePathString)
  }


// setObjectValue('@key',{name:'Armen'})

// var obj = getObjectValue('@key')
//console.log('obj =', obj)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ maxWidth: 1260, width: 'auto', minWidth: '40%' }}>
          {refreshing && <Text style={styles.text}>Refresh: {refreshing ? 'true' : 'false'}</Text>}
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.textHeader}>Let`s Travel</Text>
             <Text style={styles.textHeader}>{newDate}</Text>                      
          </View>
          <SearchInput onChangeText={(text) => setSeacrchPlace(text)} placeholder="Search your place" value={seacrchPlace} />
          <PlaceCategory 
            horizontal = {true}
            placeArray={place}
            title='Popular Experiences'
            strArray={strArray}
            setFavorite={setFavorite}
          />  
          <PlaceCategory 
            horizontal = {false}
            placeArray={place}
            title='Popular Experiences'
            strArray={strArray}
            setFavorite={setFavorite}
          />           
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default place

          /* <Text style={styles.text}>Popular Experiences</Text>
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
          /> */