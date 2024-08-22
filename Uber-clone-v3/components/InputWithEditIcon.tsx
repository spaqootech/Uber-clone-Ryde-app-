import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'

const InputWithEditIcon = ({label , text}) => {
  return (
    <View style={className`gap-1`}>
      <Text style={className`text-lg font-semibold text-gray-500`}>{label}</Text>
      <View style={className`bg-white p-3 rounded-full flex-row justify-between items-cenetr`}>
        <Text style={className`text-xl font-semibold`}>{text}</Text>
        <Image source={require('../assets/Edit.png')}/>
      </View>
    </View>
  )
}

export default InputWithEditIcon