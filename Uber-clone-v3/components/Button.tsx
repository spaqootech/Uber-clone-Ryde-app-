import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import className from 'twrnc'

const Button = ({text , href}) => {
  return (
    <View>
      <Link href={href} 
      style={className`text-lg p-4 w-[350px] rounded-full bg-blue-500 text-center font-semibold text-white`}
      >
      {text}
      </Link>
    </View>
  )
}

export default Button