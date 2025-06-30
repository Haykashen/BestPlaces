//import { CountryData } from '@/app/testData/Country';
import { useRouter } from 'expo-router';
import { useState, useEffect, ErrorInfo } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, RefreshControl } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CountryItem  from '@/app/components/CountryItem';
import { TCountry } from '../constants/types';
import CountryListEpmtyComponent from '../components/CountryListEpmtyComponent';
//import {getCountries} from '@/app/api/api'


export default function Index() {
  
  const [countries, setCountries] = useState<TCountry[]>([{id:'test', capital:'test', currency:'test', name:'test', description:'test', language:'asa', url:'sdsdsd'}])
  const [searchCountry, setSearchCountry] =  useState('')
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  var strArray:string[] = [];
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
        setCountries(data);
        setLoading(false);
        setRefreshing(false);
      } catch (error) {
        setCountries([]);
        setError(JSON.stringify(error));
        setLoading(false);
      }
    }

    fetchData();
  }, [searchCountry, refreshing]);

   if (loading) {
     strArray = ['Loading...']
   }
   else if (error) {
     strArray = ['Error...']
   }
   else{
    strArray = ["No Countries Found", "No countries found for this search query"] 
   }


  return (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      {refreshing && <Text>Refresh: {refreshing? 'true': 'false'}</Text>}
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
           <CountryListEpmtyComponent strArray={strArray} style={styles.container}/>  
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
  list:{
    flex:1,
    alignContent:'center',
    backgroundColor:'grey'    
  }
});
