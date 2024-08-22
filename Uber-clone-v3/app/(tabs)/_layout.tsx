import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import className from 'twrnc'
const TabIcon = ({source}) => {
    return(
        <Image source={source} style={className`h-10 w-10`}/>
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
            margin:15,
            height:70,
            borderRadius:100,
            backgroundColor:'rgba(000,000,000,0.9)'
        }
    }}
    >
    <Tabs.Screen name='home' 
     options={{tabBarIcon:()=>(
        <TabIcon source={('../../assets/home.png')}/>
     )}}/>
     <Tabs.Screen name='history' 
      options={{tabBarIcon:()=>(
         <TabIcon source={('../../assets/list.png')}/>
      )}}/>
      <Tabs.Screen name='chat' 
       options={{tabBarIcon:()=>(
          <TabIcon source={('../../assets/chat.png')}/>
       )}}/>
       <Tabs.Screen name='profile' 
        options={{tabBarIcon:()=>(
           <TabIcon source={('../../assets/profile.png')}/>
        )}}/>
    </Tabs>
  )
}

export default _layout