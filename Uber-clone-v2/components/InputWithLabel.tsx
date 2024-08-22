import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'

const InputWithLabel = ({label , placeholder , icon}) => {
  return (
    <View>
      <Text style={className`text-lg `}>{label}</Text>
      <View style={className`flex-row justify-start items-center bg-gray-100 p-1 rounded-full mt-1`}>
        <Image source={icon} style={className`h-5 w-5 mx-2 ml-3`}/>
        <TextInput placeholder={placeholder}  style={className`text-lg text-gray-500 p-3 flex-1 rounded-r-full`}/>
      </View>
    </View>
  )
}

export default InputWithLabel