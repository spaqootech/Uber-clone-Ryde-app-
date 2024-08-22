import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import SkipText from '@/components/SkipText'
import OnboardingImage from '@/components/OnboardingImage'
import OnboardingHeading from '@/components/OnboardingHeading'
import OnboardingPara from '@/components/OnboardingPara'
import Dotes from '@/components/Dotes'
import Button from '@/components/Button'

const onboarding3 = () => {
  return (
    <View style={className`p-5 flex-1 gap-5`}>
        <SkipText/>
        <OnboardingImage 
         source={require('../assets/onboarding3.png')}/>
         <OnboardingHeading 
         text="Your ride, your way. Let's get started!" />
        <OnboardingPara text='
        Enter your destination, sit back, and let us take care of the rest.'/>
        <Dotes color1='gray' color2='gray' color3='blue'/>
        <Button text='Next' href='/onboarding4'/>
    </View>
  )
}

export default onboarding3