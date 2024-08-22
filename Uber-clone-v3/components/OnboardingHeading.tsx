import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'

const OnboardingHeading = ({text}) => {
  return (
    <View>
      <Text style={className`text-3xl font-bold text-center`}>
        {text}
      </Text>
    </View>
  )
}

export default OnboardingHeading