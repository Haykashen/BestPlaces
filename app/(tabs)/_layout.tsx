import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
//import { Image } from "react-native"; (({focused, color, size})=><Image source={require('@expo/snack-static/react-native-logo.png')}/>)
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from "react-native";
//'#63B4FF'
export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#4894FE',
        }}>
        <Tabs.Screen name="index" options={{
          headerShown: false,
          title: 'Country',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'map-sharp' : 'map-outline'} color={color} size={24} />
          ),
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: 'tomato',
            color: 'white'
          }
        }} />
        <Tabs.Screen name="tabPlace" options={{
          headerShown: false,
          title: 'Place',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'location-sharp' : 'location-outline'} color={color} size={24} />
          ),
          href:{
            pathname:'/(tabs)/tabPlace',
            params:{
               CountryId: ''                     
            }
          }
        }
        } />
        <Tabs.Screen name="tabFavorite" options={{
          headerShown: false,
          title: 'Favorite',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'star-sharp' : 'star-outline'} color={color} size={24} />
          ),

        }} />
        <Tabs.Screen name="tabSetting" options={{
          headerShown: false,
          title: 'Setting',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24} />
          ),
          }}
        />
      </Tabs>
    </>
  ) 
    
}
