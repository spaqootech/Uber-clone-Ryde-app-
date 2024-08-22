import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import className from 'twrnc'

const GoogleButton = () => {
  return (
    <Link href='/' style={className``}>
    <View style={className`flex-row border border-gray-300 p-4 w-[350px] rounded-full gap-1 justify-center items-center`}>
      <Image source={require('../assets/google.png')} style={className`h-5 w-5`}/>
      <Text style={className`text-md font-semibold`}>Log In with Google</Text>
    </View>
    </Link>
  )
}

export default GoogleButton