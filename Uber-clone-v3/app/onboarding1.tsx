import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import SkipText from '@/components/SkipText'
import OnboardingImage from '@/components/OnboardingImage'
import OnboardingHeading from '@/components/OnboardingHeading'
import OnboardingPara from '@/components/OnboardingPara'
import Dotes from '@/components/Dotes'
import Button from '@/components/Button'

const onboarding1 = () => {
  return (
    <View style={className`p-5 flex-1 gap-5`}>
        <SkipText/>
        <OnboardingImage 
         source={require('../assets/onboarding1.png')}/>
         <OnboardingHeading 
         text='
        The best car in your hands with Ryde' />
        <OnboardingPara
        text='
        Discover the convenience of finding your perfect ride with our Ryde App'
        />
        <Dotes color1='blue' color2='gray' color3='gray'/>
        <Button text='Next' href='/onboarding2'/>
    </View>
  )
}

export default onboarding1