import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import className from 'twrnc'

const SkipText = () => {
  return (
    <View style={className`flex-row justify-end items-center`}>
        <Link href='/onboarding4'>
        <Text style={className`text-lg font-semibold`}>Skip</Text>
        </Link>
    </View>
  )
}

export default SkipText