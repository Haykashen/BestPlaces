import { useRouter } from 'expo-router';
import { useState, useEffect } from "react";
import { StatusBar, StyleSheet, TextInput, View, Text, FlatList } from "react-native"; // TouchableOpacity,  FlatList, Image,Text, 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from "expo-router";
import PlaceItem from '../components/PlaceItem';
import { TPlace, TCountry } from "../constants/types";

const places = () => {
  const { otherParam, CountryId, country } = useLocalSearchParams();
  const [place, setPlace] = useState('')
  const [seacrchPlace, setSeacrchPlace] = useState('')
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
        setPlace(JSON.stringify(data));
        setLoading(false);
      } catch (error) {
        setError(JSON.stringify(error));
        setLoading(false);
      }
    }

    fetchData();
  }, [CountryId, seacrchPlace]);

  if (loading) {
    return (<SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>)
  }

  if (error) {
    return (<SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Error: {error}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>    
        <Text>{country? country :'test'}</Text>
        <FlatList
        data={JSON.parse(place)}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PlaceItem 
          name = {item.name} 
          country = {country? country :'test'} 
          description={item.description}
          url={item.url}
          onPress = {() => router.push({pathname: '/placeCard',params: { placeID: item.id, otherParam: 'anything you want here' }})}
          />} 
          ListHeaderComponent={() => (
            <View style={styles.search}>
              <TextInput onChangeText={(text) => setSeacrchPlace(text)} placeholder="Search place ..." value={seacrchPlace} />
            </View>
          )}   
        ListEmptyComponent={() => (
          <View>
            <Text>"No Places Found"</Text>  
            <Text>"No places found for this search query"</Text>  
          </View> 
          )}               
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
