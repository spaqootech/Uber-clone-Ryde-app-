import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={className`bg-blue-500 flex-1 justify-center items-center`}>
        <Link href='/onboarding1'>
        <Image source={require('../assets/logo.png')}/>
        </Link>
    </View>
  )
}

export default index