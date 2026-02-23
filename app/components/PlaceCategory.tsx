import { StatusBar, StyleSheet, View, Text, FlatList, RefreshControl, StyleProp} from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import {  RelativePathString, useRouter, router, useLocalSearchParams  } from 'expo-router';
import ListEpmtyComponent from '@/app/components/ListEpmtyComponent';
import { TPlace } from "@/app/constants/types";
import PlaceItem from '@/app/components/items/PlaceItem';
import { useState, useEffect, useContext} from "react";
import {Context} from '../context/context';

type PlaceCategory = {title:string, horizontal:boolean, strArray?:string[],  placeArray:TPlace[],  setFavorite: ((id: string, favorite:boolean) => void)};//styles?: StyleProp<ViewStyle>,

const PlaceCategory = ({ title, horizontal, strArray, placeArray, setFavorite }: PlaceCategory) => {

    const { style } = useContext(Context);
    const styles = style;

    const handlePress = (id: string) => {
        /*router.push({pathname: '/components/cards/placeCard',params: { placeID: item.id, otherParam: 'anything you want here' }})*/
        router.push(('/components/cards/' + id) as RelativePathString)
    }
    const handleLongPress = (id: string, favorite: boolean) => {
        setFavorite(id, favorite)
    }   

    return (
        <View>
            <Text style={styles.text}>{title}</Text>
            <FlatList
                horizontal={horizontal}
                data={placeArray}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <PlaceItem
                    id={item.id}
                    name={item.name}
                    location={item.location}
                    favorite={item.favorite}
                    about={item.about}
                    url={item.url}
                    onPress={() => handlePress(item.id)}
                    onLongPress={() => handleLongPress(item.id, item.favorite)}
                />}
                ListEmptyComponent={() => (
                    <ListEpmtyComponent strArray={strArray} style={styles.container} />
                )}
                // refreshControl={
                //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                // }
            />
        </View>
    )
}

export default PlaceCategory