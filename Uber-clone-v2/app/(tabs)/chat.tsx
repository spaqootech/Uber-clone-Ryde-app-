import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
const chat = () => {
  return (
    <View style={className`p-5 flex-1 gap-5`}>  
    <View style={className`flex-row justify-between items-center`}>
    <Text style={className`text-2xl font-semibold`}>Chat List</Text>
    <Image source={require('../../assets/out.png')} style={className`h-6 w-6 `}/>
    </View>

    <View style={className`flex-1 flex-col justify-center items-center gap-3`}>
        <Image source={require('../../assets/message.png')} style={className`h-40 w-90`}/>
        <Text style={className`text-3xl font-semibold `}>No Messages, yet.</Text>
        <Text style={className`text-lg text-gray-500`}>No Messages in your inbox, yet.</Text>
    </View>

    </View>
  )
}

export default chat