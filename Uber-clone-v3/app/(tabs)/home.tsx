import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Rides from '@/components/Rides'
const home = () => {
  return (
    <View style={className`flex-1 gap-5 p-5`}>
      <View style={className`flex-row justify-between items-center`}>
      <Text style={className`text-2xl font-semibold`}>Welcome Spaqoo</Text>
      <Image source={require('../../assets/out.png')} style={className`h-7 w-7`}/>
      </View>

{/* search */}
      <View style={className`bg-gray-100 rounded-full p-1 flex-row justify-start items-center`}>
        <Image source={require('../../assets/search.png')} style={className`h-5 w-5 mx-3`}/>
        <TextInput placeholder='Where you want to go?' style={className`text-gray-500 rounded-r-full flex-1 text-lg p-3 `}/>
      </View>
{/* search */}
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={className`gap-5`}>
          
      <Text style={className`text-xl font-semibold`}>Your current location</Text>
      <Image source={require('../../assets/map2.png')}/>
      <Text style={className`text-xl font-semibold`}>Recent Rides</Text>

      <Rides/>
      <Rides/>
        </View>
      </ScrollView>
    </View>
  )
}

export default home