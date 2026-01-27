import { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, StatusBar, RefreshControl } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import PlaceItem from '../components/items/PlaceItem';
import ListEpmtyComponent from '../components/ListEpmtyComponent';
import SearchInput from '../components/SearchInput';
import Colors from '@/assets/Colors';
import { TPlace, TCountry } from "../constants/types";
import { RelativePathString, useRouter } from 'expo-router';
import { URL } from '../constants/constants';

const favorite = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [place, setPlace] = useState<TPlace[]>()
  const [seacrchPlace, setSeacrchPlace] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');  
  const router = useRouter();

  let strArray:string[] = [];

  const onRefresh = async () => {
    setRefreshing(true);   
  };

  const handlePress = (id:string)=>{
/*router.push({pathname: '/components/cards/placeCard',params: { placeID: item.id, otherParam: 'anything you want here' }})*/  
    router.push(('/components/cards/'+id) as RelativePathString)
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

  useEffect(() => {
    async function fetchData() {
      try {
        let seacrch = seacrchPlace ? '&search='+seacrchPlace:'';
  
        console.log('Place url  = '+URL+'?funName=GetFavoritePlace'+seacrch)
        //"http://best-place.online:8080"+urlEnd
        const response = await fetch(URL+'?funName=GetFavoritePlace'+seacrch, {
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
  }, [seacrchPlace, refreshing]);

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

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.textHeader}>Favorite</Text>
          {refreshing && <Text style={styles.text}>Refresh: {refreshing ? 'true' : 'false'}</Text>}
          <SearchInput onChangeText={(text) => setSeacrchPlace(text)} placeholder="Search place ..." value={seacrchPlace} />
          <FlatList
            data={place}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PlaceItem
              name={item.name ? item.name : 'test'}
              country={'country'}
              description={item.description ? item.description : 'description'}
              favorite={item.favorite}
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
  )
}

export default favorite

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_Primary,
    alignContent:'center',
    padding:10
  },
  search:{
    backgroundColor:'white',
    borderRadius:20,
    margin: 20,
    padding:5,
    flex:1,
    borderColor:'#63B4FF',
    borderWidth:2,
    alignItems:'center'
  },
  search_input:{
    width:'100%',
    height:'100%'
  },
  list:{
    flex:1,
    alignContent:'center', 
  },
  textHeader:{
    color:Colors.text_Secondary, 
    fontSize:22
  },
  text:{
    fontSize: 16,
    color: Colors.text_Secondary
  },
});