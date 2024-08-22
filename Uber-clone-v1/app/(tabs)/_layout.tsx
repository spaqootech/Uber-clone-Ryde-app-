import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import className from 'twrnc'

const TabIcon = ({source})=>{
    return(
        <Image source={source} style={className`h-6 w-6`}/>
    )
}

const _layout = () => {
  return (
    <Tabs
    sceneContainerStyle={className`bg-white`}
    screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{
            backgroundColor:'#333333',
            margin:20,
            borderRadius:100,
            height:70
        }
    }}
    >
        <Tabs.Screen name='home' 
        options={{tabBarIcon:()=>(
            <TabIcon source={require('../../assets/home.png')}/>
        )}}
        />
        <Tabs.Screen name='history' 
        options={{tabBarIcon:()=>(
            <TabIcon source={require('../../assets/list.png')}/>
        )}}
        />
        <Tabs.Screen name='chat' 
        options={{tabBarIcon:()=>(
            <TabIcon source={require('../../assets/chat.png')}/>
        )}}
        />
        <Tabs.Screen name='profile' 
        options={{tabBarIcon:()=>(
            <TabIcon source={require('../../assets/profile.png')}/>
        )}}
        />

    </Tabs>
  )
}

export default _layout