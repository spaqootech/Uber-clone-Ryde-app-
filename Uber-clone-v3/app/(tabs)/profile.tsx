import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import InputWithEditIcon from '@/components/InputWithEditIcon'

const profile = () => {
  return (
    <View style={className`flex-1 gap-5 p-5`}>
      <Text style={className`text-2xl font-semibold`}>Your profile</Text>

      <View style={className`flex-row justify-center items-center`}>
        <Image source={require('../../assets/profile-pic.png')} style={className`h-30 w-30 rounded-full border border-2 border-gray-400 p-1`}/>
      </View>

      <View style={className`bg-gray-100 rounded-lg p-3`}>
        <InputWithEditIcon label='First name' text='Spaqoo'/>
        <InputWithEditIcon label='Last name' text='Meer'/>
        <InputWithEditIcon label='Email' text='spaqo@gmail.com'/>
        <InputWithEditIcon label='Email status' text='Verified'/>
        <InputWithEditIcon label='Phone Number' text='+9832394'/>
      </View>
    </View>
  )
}

export default profile