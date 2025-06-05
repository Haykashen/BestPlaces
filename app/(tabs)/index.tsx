//import { CountryData } from '@/app/testData/Country';
import { useRouter } from 'expo-router';
import { useState, useEffect, ErrorInfo } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, RefreshControl } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CountryItem  from '@/app/components/CountryItem';
import { TCountry } from '../constants/types';
//import {getCountries} from '@/app/api/api'


export default function Index() {
  
  const [countries, setCountries] = useState<TCountry[]>([{id:'test', capital:'test', currency:'test', name:'test', description:'test', language:'asa', url:'sdsdsd'}])
  const [searchCountry, setSearchCountry] =  useState('')
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let baseURL = "http://best-place.online:8080/countries";
        let url = searchCountry? baseURL+'/search?q='+searchCountry+'&limit=5': baseURL; 
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setCountries(data);
        setLoading(false);
        setRefreshing(false);
      } catch (error) {
        setError(JSON.stringify(error));
        setLoading(false);
      }
    }

    fetchData();
  }, [searchCountry, refreshing]);

  if (loading) {
    return <View><Text>Loading...</Text></View>;
  }

  if (error) {
    return <View><Text>Error: {error}</Text></View>;
  }

  return (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
       <Text>Refresh: {refreshing? 'true': 'false'}</Text>
      <FlatList style = {styles.list}
        data={countries}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CountryItem 
          name = {item.name} 
          currency = {item.currency} 
          capital = {item.capital} 
          language = {item.language} 
          description={item.description}
          url={item.url}
          onPress = {() => router.push({pathname: '/place',params: { CountryId: item.id, country: item.name, otherParam: 'anything you want here' }})}
          />}  
          ListHeaderComponent={() => (
            <View style={styles.search}>
              <TextInput onChangeText={(text) => setSearchCountry(text)} placeholder="Search country ..." value={searchCountry} />
            </View>
          )}              
        ListEmptyComponent={() => (
          <View>
            <Text>"No Countries Found"</Text>  
            <Text>"No countries found for this search query"</Text>  
          </View> 
          )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }                          
      />    
    </SafeAreaView>
  </SafeAreaProvider>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
    alignContent:'center',
    alignItems:'center'
  },
  search:{
    backgroundColor:'white',
    borderRadius:20,
    marginBottom: 15,
    marginTop: 5,
    padding:5,
    width:'90%',
    borderColor:'#63B4FF',
    borderWidth:2,
   
  },
  list:{
    flex:1,
    alignContent:'center',
    backgroundColor:'smoke'    
  }
});
