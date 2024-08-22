import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'
const SkipText = () => {
  return (
    <View style={className`flex-row justify-end items-center`}>
      <Link 
      style={className`text-lg font-semibold`}
      href='/onboarding4'>
      Skip
      </Link>
    </View>
  )
}

export default SkipText