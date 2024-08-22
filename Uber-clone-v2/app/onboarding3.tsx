import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'
import Button from '@/components/Button'
import Dotes from '@/components/Dotes'
import SkipText from '@/components/SkipText'

const onboarding3 = () => {
  return (
    <View style={className`flex-1 gap-5 p-5`}>
        {/* skip text */}
        <SkipText/>
        {/* skip text */}



        {/* Car Image */}
        <Image source={require('../assets/onboarding3.png')} style={className`h-[330px] w-[330px]`}/>
        {/* Car Image */}


        {/* Texts */}
        <Text style={className`text-3xl font-semibold text-center px-10`}>
        Your ride, your way. Let's get started!
        </Text>

        <Text style={className`text-center text-gray-500 text-lg px-10`}>
        Enter your destination, sit back, and let us take care of the rest.
        </Text>
        {/* Texts */}



        {/* Dotes */}
        <Dotes color3='[#0286FF]' color1='gray-300' color2='gray-300'/>
        {/* Dotes */}


        {/* Button */}
        <Button href='/onboarding4' title='Next'/>
        {/* Button */}


    </View>
  )
}

export default onboarding3