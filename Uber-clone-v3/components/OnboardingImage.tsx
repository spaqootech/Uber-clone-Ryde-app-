import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'

const OnboardingImage = ({source}) => {
  return (
    <View>
        <Image source={source}
        style={className`h-[350px] w-[350px]`}
        />
    </View>
  )
}

export default OnboardingImage