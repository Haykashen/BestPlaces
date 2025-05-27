import { useRouter } from 'expo-router';
import { useState } from "react";
import { StatusBar, StyleSheet, TextInput, View, Text } from "react-native"; // TouchableOpacity,  FlatList, Image,Text, 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from "expo-router";

const places = () => {
  const { otherParam, itemId, country } = useLocalSearchParams();
  const [place, setPlace] = useState('')
  const [seacrchPlace, setSeacrchPlace] = useState('')
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <TextInput onChangeText={(text) => setSeacrchPlace(text)} placeholder="Search place ..." value={seacrchPlace} />
        </View>
        <Text>{itemId}</Text>
        <Text>{country}</Text>
        <Text>{otherParam}</Text>
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
