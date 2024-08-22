import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'

const home = () => {
  return (
    <View style={className`flex-1 p-5 gap-5`}>
      <View style={className`flex-row justify-between items-center`}>
      <Text style={className`text-xl font-semibold`}>Welcome Spaqoo</Text>
      <Image source={require('../../assets/out.png')} style={className`h-5 w-5`}/>
      </View>

      <View style={className`flex-row justify-start items-center p-1 rounded-full bg-gray-100`}>
      <Image source={require('../../assets/search.png')} style={className`mx-2 h-5 w-5`}/>
      <TextInput placeholder='Where do you want to go' style={className`text-lg p-2 rounded-r-full flex-1`}/>
      </View>

      <View>
      <Text style={className`text-xl font-semibold`}>Your current location</Text>
      <Text style={className`text-xl font-semibold`}>Recent Rides</Text>
      </View>

      <View style={className`p-3 bg-gray-100 rounded-lg gap-1`}>
        <View style={className`flex-row justify-between items-center gap-3`}>
          <Image source={require('../../assets/recent-rides.png')} style={className`h-20 w-20 border rounded-lg mb-2 border-gray-300`}/>
          <View style={className`gap-3 flex-1`}>
            <View style={className`flex-row justify-between items-center`}>
              <Image source={require('../../assets/to.png')} style={className`h-5 w-5`}/>
              <Text style={className`text-lg`}>1930 Numaish , Karachi</Text>
            </View>
            <View style={className`flex-row justify-between items-center`}>
              <Image source={require('../../assets/point.png')} style={className`h-5 w-5`}/>
              <Text style={className`text-lg`}>Mehmoodabad , Karachi</Text>
            </View>
          </View>
        </View>

        <View style={className`flex-row justify-between items-center bg-white p-3 rounded-lg`}>
          <Text style={className`text-md font-semibold text-gray-500`}>Date & Time</Text>
          <Text style={className`text-md font-semibold`}>16 July 2024 , 10:30 PM</Text>
        </View>
        <View style={className`flex-row justify-between items-center bg-white p-3 rounded-lg`}>
          <Text style={className`text-md font-semibold text-gray-500`}>Drive</Text>
          <Text style={className`text-md font-semibold`}>Spaqoo</Text>
        </View>
        <View style={className`flex-row justify-between items-center bg-white p-3 rounded-lg`}>
          <Text style={className`text-md font-semibold text-gray-500`}>Car Seats</Text>
          <Text style={className`text-md font-semibold`}>4</Text>
        </View>
        <View style={className`flex-row justify-between items-center bg-white p-3 rounded-lg`}>
          <Text style={className`text-md font-semibold text-gray-500`}>Payment Status</Text>
          <Text style={className`text-md font-semibold text-green-500`}>Paid</Text>
        </View>
      </View>

    </View>
  )
}

export default home