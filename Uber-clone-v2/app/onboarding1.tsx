import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'
import Button from '@/components/Button'
import Dotes from '@/components/Dotes'
import SkipText from '@/components/SkipText'

const onboarding1 = () => {
  return (
    <View style={className`flex-1 gap-5 p-5`}>
        {/* skip text */}
        <SkipText/>
        {/* skip text */}



        {/* Car Image */}
        <Image source={require('../assets/onboarding1.png')} style={className`h-[330px] w-[330px]`}/>
        {/* Car Image */}


        {/* Texts */}
        <Text style={className`text-3xl font-semibold text-center px-5`}>
            The best car in your hand with <Text style={className`text-[#0286FF]`}>Ride</Text>
        </Text>

        <Text style={className`text-center text-gray-500 text-lg px-5`}>
        Discover the convenience of finding your perfect ride with our Ryde App
        </Text>
        {/* Texts */}



        {/* Dotes */}
        <Dotes color1='[#0286FF]' color2='gray-300' color3='gray-300'/>
        {/* Dotes */}


        {/* Button */}
        <Button href='/onboarding2' title='Next'/>
        {/* Button */}


    </View>
  )
}

export default onboarding1