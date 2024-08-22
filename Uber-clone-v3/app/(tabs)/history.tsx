import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Rides from '@/components/Rides'

const history = () => {
  return (
    <View style={className`flex-1 gap-5 p-5`}>
      <View style={className`flex-row justify-between items-center`}>
      <Text style={className`text-xl font-semibold`}>Popular Car</Text>
      <View style={className`flex-row justify-end items-center gap-1`}>
      <Text style={className`text-lg text-blue-500 font-semibold`}>Ascending</Text>
      <Image source={require('../../assets/arrow-down.png')} style={className`h-6 w-6`}/>
      </View>
      </View>

<ScrollView showsVerticalScrollIndicator={false}>
  
      <Rides/>
      <Rides/>
</ScrollView>
    </View>
  )
}

export default history