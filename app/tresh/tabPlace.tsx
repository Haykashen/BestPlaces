// import { RelativePathString, useRouter } from 'expo-router';
// import { useState, useEffect } from "react";
// import { StatusBar, StyleSheet, TextInput, View, Text, FlatList, RefreshControl } from "react-native"; // TouchableOpacity,  FlatList, Image,Text, 
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { router, useLocalSearchParams } from "expo-router";
// import PlaceItem from '../components/items/PlaceItem';
// import ListEpmtyComponent from '../components/ListEpmtyComponent';
// import SearchInput from '../components/SearchInput';
// import { TPlace, TCountry } from "../constants/types";
// import Colors from '@/assets/Colors';
// import { URL } from '../constants/constants';

// const places = () => {
//   const { otherParam, CountryId, country } = useLocalSearchParams();
//   const [place, setPlace] = useState<TPlace[]>()
//   const [seacrchPlace, setSeacrchPlace] = useState('')
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [refreshing, setRefreshing] = useState(false);

//   let strArray:string[] = [];

//   const onRefresh = async () => {
//     setRefreshing(true);   
//   };

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         //let search = seacrchPlace ? '/search?q='+seacrchPlace+'&limit=10' : '';
//         //let urlEnd = CountryId ? "/countries/"+CountryId+"/places"+search:"/places"+search;
//         console.log('Place url CountryId = '+CountryId)
//         let seacrch = seacrchPlace ? '&search='+seacrchPlace:'';
//         let countryId = CountryId ? '&country='+CountryId:'';
//         console.log('Place url  = '+URL+'?funName=GetPlace'+countryId+seacrch)
//         //"http://best-place.online:8080"+urlEnd
//         const response = await fetch(URL+'?funName=GetPlace'+countryId+seacrch, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         const data = await response.json();
//         setPlace(data);
//         console.log(place)
//       } catch (e) {
//         setPlace([]);
//         console.log('error')
//         setError((e as Error).message);
        
//       }
//       finally{
//         setLoading(false);
//         setRefreshing(false);
//         console.log('finally')
//       }      
//     }

//     fetchData();
//   }, [CountryId, seacrchPlace, refreshing]);

//   if (loading) {
//     strArray = ['Loading...']
//      console.log('Loading')
//   }
//   else if (error) {
//     console.log('error')
//     strArray = ['Error...'+error]
//   }
//    else if(place && place.length == 0){
//      console.log('No Places Found')
//     strArray = ["No Places Found", "No places found for this search query"] 
//   }

//   const setFavorite = async(placeId:string, favorite:boolean)=>{

//     let urlFavorite = URL+'?funName=SetFavoritePlace'+'&favorite='+placeId+'&link='+!favorite;
//     console.log('urlFavorite ='+urlFavorite)

//     try{
//         const response = await fetch(urlFavorite, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//     }
//     catch(e){
//       console.log('urlFavorite catch(e)')
//     }finally{
//       setRefreshing(true);  
//     }
//   }

//   const handlePress = (id:string)=>{
// /*router.push({pathname: '/components/cards/placeCard',params: { placeID: item.id, otherParam: 'anything you want here' }})*/  
//     router.push(('/components/cards/'+id) as RelativePathString)
//   }

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.container}>
//         {country && <Text>{country}</Text>}
//         {refreshing && <Text style={styles.text}>Refresh: {refreshing ? 'true' : 'false'}</Text>}
//         <SearchInput onChangeText={(text) => setSeacrchPlace(text)} placeholder="Search place ..." value={seacrchPlace}/>
//         <FlatList
//           data={place}
//           keyExtractor={item => item.id}
//           renderItem={({item}) => <PlaceItem 
//             name = {item.name? item.name: 'test'} 
//             country = {country? country :'country'} 
//             description={item.description? item.description:'description'}
//             favorite = {item.favorite}
//             url= {item.url}
//             onPress = {() => handlePress(item.id)}
//             onLongPress={()=> setFavorite(item.id, item.favorite)}
//           />}    
//           ListEmptyComponent={() => (
//             <ListEpmtyComponent strArray={strArray} style={styles.container}/>  
//           )}
//          refreshControl={
//            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//          }                           
//       />  
//       </SafeAreaView>
//     </SafeAreaProvider>
//   )
// }

// export default places

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.bg_Primary,
//     alignContent:'center',
//   },
//   item: {
//     backgroundColor: Colors.text_Secondary,
//     borderColor: 'whitesmoke',
//     borderWidth: 2,
//     padding: 20,
//     marginVertical: 10,
//     marginHorizontal: 20,
//     borderRadius: 15,
//     alignItems:'center'    
//   },
//   title: {
//     fontSize: 32,
//     fontWeight:'bold'
//   },
//   text:{
//     fontSize: 16,
//     color: Colors.text_Secondary
//   },
//   tinyLogo: {
//     resizeMode: 'cover',
//     width: '100%',
//     height: 200,
//   },
// });
