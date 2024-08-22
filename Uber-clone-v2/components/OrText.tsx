import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'

const OrText = () => {
  return (
    <View style={className`flex-row justify-between items-center`}>
        <View style={className`border border-gray-200 w-40`}></View>
        <Text style={className`text-lg`}>Or</Text>
        <View style={className`border border-gray-200 w-40`}></View>
    </View>
  )
}

export default OrText