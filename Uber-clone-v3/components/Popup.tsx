import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Button from './Button'
import className from 'twrnc'

const Popup = ({setVisble , visible}) => {
  return (
    <View style={className`bg-[rgba(000,000,000,0.45)] absolute top-0 bottom-0 right-0 left-0 flex-col  justify-center items-center`}>
        <View style={className`p-3 bg-white rounded-2xl flex-col gap-3 justify-center items-center w-93 py-10`}>
            <Image source={require('../assets/check.png')} style={className`h-20 w-20 bg-green-500 rounded-full`}/>
            <Text style={className`text-3xl font-semibold`}>
                Verified</Text>
                <Text style={className`text-lg text-gray-500 text-center px-10`}>
You have successfully verified your account
                </Text>
                <Pressable onPress={()=>setVisble(!visible)}>
                <Button text='Browse Home' href='/(tabs)/home'/>
                </Pressable>
        </View>
    </View>
  )
}

export default Popup