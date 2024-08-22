import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'

const onboarding3 = () => {
  return (
    <View style={className`flex-1 p-5 gap-5`}>
      
      <View style={className`flex-row justify-end items-center`}>
      <Text style={className`font-semibold text-lg`}>Skip</Text>
      </View>

      <Image source={require('../assets/onboarding3.png')} style={className`h-[350px] w-[350px]`}/>

      <Text style={className`text-3xl font-semibold text-center px-5`}>
      Your ride, your way. Let's get started!
      </Text>

      <Text style={className`text-gray-500 text-lg text-center px-5`}>
      Enter your destination, sit back, and let us take care of the rest.
      </Text>

      <View style={className`flex-row justify-center items-center gap-1`}>
        <View style={className`h-1 w-10 rounded-full bg-gray-300`}></View>
        <View style={className`h-1 w-10 rounded-full bg-gray-300`}></View>
        <View style={className`h-1 w-10 rounded-full bg-[#0286FF]`}></View>
      </View>

      <Link href='/onboarding4' style={className`bg-[#0286FF] p-3 w-[350px] rounded-full text-center text-white`}>
      Next
      </Link>
    </View>
  )
}

export default onboarding3