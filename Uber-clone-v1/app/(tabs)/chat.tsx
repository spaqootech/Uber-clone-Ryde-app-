import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
const chat = () => {
  return (
    <View style={className`flex-1 p-5 gap-5`}>
      <View style={className`flex-row justify-between items-center`}>
      <Text style={className`text-xl font-semibold`}>Chat List</Text>
      <Image source={require('../../assets/out.png')} style={className`h-5 w-5`}/>
      </View>

      <View style={className`flex-1 flex-col justify-center items-center gap-3`}>
      <Image source={require('../../assets/message.png')} style={className`h-40 w-80`}/>
      <Text style={className`text-3xl font-semibold`}>No Messages, yet.</Text>
      <Text style={className`text-lg text-gray-500`}>No messages in your inbox, yet!</Text>
      </View>


    </View>
  )
}

export default chat