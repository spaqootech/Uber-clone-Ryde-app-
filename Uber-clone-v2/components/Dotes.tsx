import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'

const Dotes = ({color1 , color2 , color3}) => {
  return (
<View style={className`flex-row justify-center items-center gap-1 my-5`}>
    <View style={className`h-2 w-10 rounded-full bg-${color1}`}></View>
    <View style={className`h-2 w-10 rounded-full bg-${color2}`}></View>
    <View style={className`h-2 w-10 rounded-full bg-${color3}`}></View>
</View>
  )
}

export default Dotes