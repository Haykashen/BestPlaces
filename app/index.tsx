//import { CountryData } from '@/app/testData/Country';
import {  RelativePathString, useRouter, router, useLocalSearchParams  } from 'expo-router';
import { useState, useEffect, useContext} from "react";
import {Context} from './context/context';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity } from "react-native"; // TouchableOpacity,  FlatList, Image,Text, 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { TPlace } from "@/app/constants/types";


export default function Index() {
  const [place, setPlace] = useState<TPlace[]>()
  const [seacrchPlace, setSeacrchPlace] = useState('')
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const {theme, platform, style } = useContext(Context);

  //const styles = styleSetting[theme][platform]; 
  const styles = style
  const { otherParam, CountryId, country } = useLocalSearchParams();


  const handlePress = ()=>{
/*router.push({pathname: '/components/cards/placeCard',params: { placeID: item.id, otherParam: 'anything you want here' }})*/  
    router.push(('/(tabs)/tabPlace') as RelativePathString)
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ maxWidth:1260, width:'auto', minWidth:'40%'}}>
           <TouchableOpacity style={{ backgroundColor:'white'}} onPress={handlePress}>
             <Text>Click me</Text>
           </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider> 
  );
}