import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'

const home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      
    <View style={className`p-5 flex-1 gap-5`}>  
      <View style={className`flex-row justify-between items-center`}>
      <Text style={className`text-2xl font-semibold`}>Welcome John</Text>
      <Image source={require('../../assets/out.png')} style={className`h-6 w-6 `}/>
      </View>

      {/* Search */}
      <View style={className`bg-gray-100 p-1 flex-row justify-start items-center rounded-full`}>
        <Image source={require('../../assets/search.png')} style={className`h-6 w-6 mx-3 `}/>
        <TextInput placeholder='Where do you want to go?' style={className`text-lg flex-1 rounded-r-full text-gray-500 p-3`}/>
      </View>
      {/* Search */}

      <Text style={className`text-xl font-semibold`}>Your current location</Text>
      <Image source={require('../../assets/map2.png')} style={className`h-60 w-87`}/>
      <Text style={className`text-xl font-semibold`}>Recent Rides</Text>

      <View style={className`bg-gray-100 rounded-lg p-5 gap-1 fex-1`}>
        <View style={className`flex-row justify-between`}>
          <Image source={require('../../assets/recent-rides.png')} style={className`rounded-lg border border-gray-400`}/>
          <View style={className`flex-col justify-evenly items-center flex-1`}>
            <View style={className`flex-row justify-between items-center`}>
              <Image source={require('../../assets/to.png')} style={className`h-6 w-6`}/>
              <Text style={className`text-md`}>1901 Numaish Karachi , pk</Text>
            </View>
            <View style={className`flex-row justify-between items-center`}>
              <Image source={require('../../assets/point.png')} style={className`h-6 w-6`}/>
              <Text style={className`text-md`}>1901 Kharadar Karachi , pk</Text>
            </View>
          </View>
        </View>

        <View style={className`bg-white flex-row justify-between items-center p-3 rounded-lg mt-3`}>
          <Text style={className`text-md font-semibold `}>Date & Time</Text>
          <Text style={className`text-md font-semibold `}>16 July 2023, 10:30 PM</Text>
        </View>
        <View style={className`bg-white flex-row justify-between items-center p-3 rounded-lg`}>
          <Text style={className`text-md font-semibold `}>Drivere</Text>
          <Text style={className`text-md font-semibold `}>Spaqoo</Text>
        </View>
        <View style={className`bg-white flex-row justify-between items-center p-3 rounded-lg`}>
          <Text style={className`text-md font-semibold `}>Car Seats</Text>
          <Text style={className`text-md font-semibold `}>8</Text>
        </View>
        <View style={className`bg-white flex-row justify-between items-center p-3 rounded-lg`}>
          <Text style={className`text-md font-semibold `}>Payment Status</Text>
          <Text style={className`text-md font-semibold text-green-500`}>Paid</Text>
        </View>
      </View>

    </View>
    </ScrollView>
  )
}

export default home