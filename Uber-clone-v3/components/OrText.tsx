import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'

const OrText = () => {
  return (
    <View style={className`flex-row justify-between items-center`}>
        <View style={className`h-1 w-40 bg-gray-200`}></View>
      <Text style={className`text-lg`}>
        Or
      </Text>
      <View style={className`h-1 w-40 bg-gray-200`}></View>
    </View>
  )
}

export default OrText