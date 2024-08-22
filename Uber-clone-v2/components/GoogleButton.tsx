import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'

const GoogleButton = () => {
  return (
    <View style={className`border border-gray-200 rounded-full p-4 w-[350px] flex-row justify-center items-center gap-2`}>
      <Image source={require('../assets/google.png')}  style={className`h-5 w-5`}/>
      <Text style={className`text-lg font-semibold`}>GoogleButton</Text>
    </View>
  )
}

export default GoogleButton