import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View  style={className`flex-1 justify-center items-center bg-[#2F80ED]`}>
        <Link href='/onboarding1'>
        <Image source={require('../assets/logo.png')}/>
        </Link>
    </View>
  )
}

export default index