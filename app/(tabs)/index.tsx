//import { CountryData } from '@/app/testData/Country';
import { useRouter } from 'expo-router';
import { useState, useEffect, ErrorInfo } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, RefreshControl } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CountryItem  from '@/app/components/CountryItem';
import { TCountry } from '../constants/types';
import ListEpmtyComponent from '../components/ListEpmtyComponent';
import SearchInput from '../components/SearchInput';
import Colors from '@/assets/Colors';


//import {getCountries} from '@/app/api/api'


export default function Index() {
  
  const [countries, setCountries] = useState<TCountry[]>([{id:'test', capital:'test', currency:'test', name:'test', description:'test', language:'asa', url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/34/e8/75/caption.jpg?w=1200'}]);
  const [searchCountry, setSearchCountry] =  useState('');
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
        let baseURL = "http://vc.inform.ivanovo.ru:9105/node/70401024379406?funName=GetCountries";//http://best-place.online:8080/countries
        let url = searchCountry? baseURL+'/search?q='+searchCountry+'&limit=5': baseURL; 
        console.log(url)
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setCountries(data);
        
      } catch (e) {
        setCountries([]);
        setError((e as Error).message);
        console.log('countries'+JSON.stringify(countries))
      }
      finally{
        setLoading(false);
        setRefreshing(false);
        console.log('countries2'+JSON.stringify(countries))
      }
    }

    fetchData();
  }, [searchCountry, refreshing]);

   if (loading) {
     strArray = ['Loading...']
   }
   else if (error) {
     strArray = ['Error...'+error]
   }
   else{
    strArray = ["No Countries Found", "No countries found for this search query"] 
   }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {refreshing && <Text style={{ color: Colors.text_Secondary }}>Refresh: {refreshing ? 'true' : 'false'}</Text>}
        <SearchInput onChangeText={(text) => setSearchCountry(text)} placeholder="Search country ..." value={searchCountry}/>
        <FlatList style={styles.list}
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
        ListEmptyComponent={() => (
           <ListEpmtyComponent strArray={strArray} style={styles.container}/>  
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
    backgroundColor: Colors.bg_Primary,
    alignContent:'center',
  },
  list:{
    flex:1,
    alignContent:'center', 
  }
});
