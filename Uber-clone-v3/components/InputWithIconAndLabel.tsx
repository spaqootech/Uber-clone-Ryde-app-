import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'

const InputWithIconAndLabel = ({label , placeholder , icon}) => {
  return (
    <View>
      <Text style={className`text-lg font-semibold`}>
        {label}</Text>
      <View style={className`flex-row justify-start items-center p-1 rounded-full bg-gray-100 mt-1`}>
        <Image source={icon} style={className`h-7 w-7 mx-2`}/>
        <TextInput placeholder={placeholder} style={className`text-lg text-gray-500 p-3 rounded-r-full flex-1`}/>
      </View>
    </View>
  )
}

export default InputWithIconAndLabel