import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import className from 'twrnc'
const Button = ({title , href}) => {
  return (
    <View>
        <Link href={href} style={className` rounded-full bg-[#0286FF] p-4 w-[350px] text-center text-white text-lg`}>
        {title}
        </Link>
    </View>
  )
}

export default Button