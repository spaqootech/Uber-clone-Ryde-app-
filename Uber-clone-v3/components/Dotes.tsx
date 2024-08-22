import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'

const Dotes = ({color1 , color2 , color3}) => {
  return (
    <View style={className`flex-row justify-center items-center gap-1`}>
        <View style={className`h-2 w-10 bg-${color1}-300 rounded-full`}></View>
        <View style={className`h-2 w-10 bg-${color2}-300 rounded-full`}></View>
        <View style={className`h-2 w-10 bg-${color3}-300 rounded-full`}></View>
    </View>
  )
}

export default Dotes