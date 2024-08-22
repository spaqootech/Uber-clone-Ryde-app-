import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import className from 'twrnc'

const TabIcon = ({source}) => {
    return(
        <Image source={source} style={className`h-10     w-10`}/>
    )
}
const _layout = () => {

    return (
    <Tabs
    sceneContainerStyle={className`bg-white`}
    screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
            backgroundColor:'black',
            height:80,
            margin:15,
            borderRadius:100
        }
    }}
    >
    <Tabs.Screen name='home' options={{
        tabBarIcon:()=>(
            <TabIcon source={require('../../assets/home.png')}/>
        )}}/>
        <Tabs.Screen name='history' options={{
            tabBarIcon:()=>(
                <TabIcon source={require('../../assets/list.png')}/>
            )}}/>
            <Tabs.Screen name='chat' options={{
                tabBarIcon:()=>(
                    <TabIcon source={require('../../assets/chat.png')}/>
                )}}/>
                <Tabs.Screen name='profile' options={{
                    tabBarIcon:()=>(
                        <TabIcon source={require('../../assets/profile.png')}/>
                    )}}/>
    </Tabs>
  )
}

export default _layout