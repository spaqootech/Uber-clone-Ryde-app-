import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'

const GoogleButton = () => {
  return (
    <View style={className`flex-row justify-center items-center p-4 border border-gray-300 rounded-full gap-2`}>
        <Image source={require('../assets/google.png')} style={className`h-6 w-6`}/>
      <Text style={className`text-lg font-semibold`}>
        Log In with Google</Text>
    </View>
  )
}

export default GoogleButton