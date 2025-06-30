import { useRouter } from 'expo-router';
import { useState, useEffect } from "react";
import { StatusBar, StyleSheet, TextInput, View, Text, FlatList, RefreshControl } from "react-native"; // TouchableOpacity,  FlatList, Image,Text, 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from "expo-router";
import PlaceItem from '../components/PlaceItem';
import { TPlace, TCountry } from "../constants/types";
import ListEpmtyComponent from '../components/ListEpmtyComponent';

const places = () => {
  const { otherParam, CountryId, country } = useLocalSearchParams();
  const [place, setPlace] = useState<TPlace[]>([
    {"id":"3","name":"Перекрёсток Сибуя","description":"Самый оживлённый пешеходный переход в мире в Токио.",
      "longitude":"139.7002","latitude":"35.6595","country":{"id":"1","name":"Япония","capital":"Токио","language":"Японский",
      "currency":"JPY","description":"Страна контрастов, где древние традиции сочетаются с футуристическими инновациями.",
      "url":"https://images.unsplash.com/photo-1528164344705-47542687000d?q=80\u0026w=2692\u0026auto=format\u0026fit=crop\u0026ixlib=rb-4.1.0\u0026ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      "url":["https://images.unsplash.com/photo-1528164344705-47542687000d?q=80\u0026w=2692\u0026auto=format\u0026fit=crop\u0026ixlib=rb-4.1.0\u0026ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]}])
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
        let search = seacrchPlace ? '/search?q='+seacrchPlace+'&limit=10' : '';
        let urlEnd = CountryId ? "/countries/"+CountryId+"/places"+search:"/places"+search;
        const response = await fetch("http://best-place.online:8080"+urlEnd, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setPlace(data);
      } catch (error) {
        setError(JSON.stringify(error));
      }
      finally{
        setLoading(false);
        setRefreshing(false);
      }      
    }

    fetchData();
  }, [CountryId, seacrchPlace]);

  if (loading) {
    strArray = ['Loading...']
  }
  else if (error) {
    strArray = ['Error...'+error]
  }
  else{
   strArray = ["No Places Found", "No places found for this search query"] 
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>    
        <Text>{country? country :'test country '}</Text>
        {refreshing && <Text>Refresh: {refreshing? 'true': 'false'}</Text>}
        <FlatList
          data={place}
          keyExtractor={item => item.id}
          renderItem={({item}) => <PlaceItem 
            name = {item.name} 
            country = {country? country :'test'} 
            description={item.description}
            url={item.url[0]}
            onPress = {() => router.push({pathname: '/placeCard',params: { placeID: item.id, otherParam: 'anything you want here' }})}
          />} 
          ListHeaderComponent={() => (
            <View style={styles.search}>
              <TextInput onChangeText={(text) => setSeacrchPlace(text)} placeholder="Search place ..." value={seacrchPlace} />
            </View>
          )}    
          ListEmptyComponent={() => (
            <ListEpmtyComponent strArray={strArray} style={styles.container}/>  
           )}
         refreshControl={
           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
         }                           
      />  
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default places

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
    alignContent:'center',
    alignItems:'center'
  },
  item: {
    backgroundColor: 'white',
    borderColor: 'whitesmoke',
    borderWidth: 2,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems:'center'    
  },
  title: {
    fontSize: 32,
    fontWeight:'bold'
  },
  text:{
    fontSize: 16,
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
    borderColor:'#63B4FF',
    borderWidth:2
  },
});
