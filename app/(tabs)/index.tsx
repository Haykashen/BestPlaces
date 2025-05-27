//import { CountryData } from '@/app/testData/Country';
import { useRouter } from 'expo-router';
import { useState, useEffect, ErrorInfo } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CountryItem  from '@/app/components/CountryItem';
//import {getCountries} from '@/app/api/api'


export default function Index() {
  
  const [countries, setCountries] = useState('')
  const [state, setState] =  useState('')
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://best-place.online:8080/countries", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setCountries(JSON.stringify(data));
        setLoading(false);
      } catch (error) {
        setError(JSON.stringify(error));
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <View><Text>Loading...</Text></View>;
  }

  if (error) {
    return <View><Text>Error: {error}</Text></View>;
  }

  return (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <TextInput onChangeText={(text)=>setState(text)} placeholder="Search country ..." value={state}/> 
      </View>
      <FlatList
        data={JSON.parse(countries)}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CountryItem 
          name = {item.name} 
          currency = {item.currency} 
          capital = {item.capital} 
          language = {item.language} 
          description={item.description}
          url={item.url}
          onPress = {() => router.push({pathname: '/place',params: { itemId: item.id, country: item.name, otherParam: 'anything you want here' }})}
          />}    
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
    marginVertical: 15,
    padding:5,
    width:'90%',
    borderColor:'#63B4FF',
    borderWidth:2
  },
});
