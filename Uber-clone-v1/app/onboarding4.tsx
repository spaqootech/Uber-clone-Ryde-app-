import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'
import GoogleButton from '@/components/GoogleButton'

const onboarding4 = () => {
  return (
    <View style={className`flex-1 p-5 gap-5`}>

      <Image source={require('../assets/get-started.png')} style={className`h-[500px] w-[390px] fixed top-[-100px] left-[-20px] right-[-20px]`} />

      <Text style={className`mt-[-170px] text-3xl font-semibold text-center px-5`}>
      Let’s get started
      </Text>

      <Text style={className`text-gray-500 text-lg text-center px-5`}>
      Sign up or log in to find out the best car for you
      </Text>

      <Link href='/auth/signUp' style={className`bg-[#0286FF] p-4 w-[350px] rounded-full text-center text-white`}>
      Sign Up
      </Link>

      <View style={className`flex-row justify-center items-center gap-2`}>
        <View style={className`h-[1px] w-40 rounded-full bg-gray-300`}></View>
        <Text>Or</Text>
        <View style={className`h-[1px] w-40 rounded-full bg-gray-300`}></View>
      </View>

      
        <GoogleButton/>
      
      <Text style={className`text-lg text-gray-500 text-center`}>
        Don't have an Account ? <Link href='/auth/signUp' style={className`text-[#0286FF] font-semibold`}>Sign Up</Link></Text>

    </View>
  )
}

export default onboarding4