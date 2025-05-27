import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
//import { Image } from "react-native"; (({focused, color, size})=><Image source={require('@expo/snack-static/react-native-logo.png')}/>)
import Ionicons from '@expo/vector-icons/Ionicons';
//'#63B4FF'
export default function RootLayout() {
  return(
    <React.Fragment>
      <StatusBar style="auto"/>
      
      <Tabs       
        screenOptions={{
        tabBarActiveTintColor: '#4894FE',
      }}>
        <Tabs.Screen name="index" options={{
          headerShown:false,
          title:'Countries', 
          tabBarIcon:({ color, focused }) => (
            <Ionicons name={focused ? 'map-sharp' : 'map-outline'} color={color} size={24} />
          ),
          tabBarBadge:2,
          tabBarBadgeStyle:{
            backgroundColor:'tomato',
            color:'white'
          }
          }}/>
        <Tabs.Screen name="places" options={{
          headerShown:false,
          title:'Places', 
          tabBarIcon:({ color, focused }) => (
            <Ionicons name={focused ? 'location-sharp' : 'location-outline'} color={color} size={24} />
          ),
          
          }}/>
        <Tabs.Screen name="save" options={{
          headerShown:false,
          title:'Save', 
          tabBarIcon:({ color, focused }) => (
            <Ionicons name={focused ? 'star-sharp' : 'star-outline'} color={color} size={24} />
          ),
          }}/>
        <Tabs.Screen name="settings" options={{
          headerShown:false,
          title:'Settings', 
          tabBarIcon:({ color, focused }) => (
            <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24} />
          ),
          
          }}/>
      </Tabs>
    </React.Fragment>  
  ) 
    
}
