import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import OnboardingHeading from '@/components/OnboardingHeading'
import OnboardingPara from '@/components/OnboardingPara'
import Dotes from '@/components/Dotes'
import Button from '@/components/Button'
import OrText from '@/components/OrText'
import GoogleButton from '@/components/GoogleButton'
import { Link } from 'expo-router'

const onboarding4 = () => {
  return (
    <View style={className`p-5 flex-1 gap-5`}>
        <Image style={className`h-[400px] fixed w-[390px] top-[-20px] left-[-20px] right-[-100px] mb-[-100px]`}
         source={require('../assets/get-started.png')}/>
         <OnboardingHeading 
         text="Let's get started!" />
        <OnboardingPara text='
        Sign up or log in to find out the best car for you'/>
        <Button text='Sign Up' href='/(auth)/signUp'/>
        <OrText/>
        <GoogleButton/>
        <View>
            <Text style={className`text-center text-lg text-gray-500`}>
                Don't have an Account ?   
                 <Link href='/(auth)/signUp' style={className`text-blue-500 font-semibold`}> 
                  Sign Up</Link>
            </Text>
        </View>
    </View>
  )
}

export default onboarding4