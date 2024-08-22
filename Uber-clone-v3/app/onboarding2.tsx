import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import SkipText from '@/components/SkipText'
import OnboardingImage from '@/components/OnboardingImage'
import OnboardingHeading from '@/components/OnboardingHeading'
import OnboardingPara from '@/components/OnboardingPara'
import Dotes from '@/components/Dotes'
import Button from '@/components/Button'

const onboarding2 = () => {
  return (
    <View style={className`p-5 flex-1 gap-5`}>
        <SkipText/>
        <OnboardingImage 
         source={require('../assets/onboarding2.png')}/>
         <OnboardingHeading 
         text='
        The perfect ride is just a tab away!' />
        <OnboardingPara
        text='
        Your journey begins with Ryde. Find your ideal ride effortlessly'
        />
        <Dotes color1='gray' color2='blue' color3='gray'/>
        <Button text='Next' href='/onboarding3'/>
    </View>
  )
}

export default onboarding2