import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'

const history = () => {
  return (
    <View style={className`flex-1 gap-5 p-5`}>
        <View style={className`flex-row justify-between items-center`}>
      <Text style={className`text-2xl font-semibold`}>Popular Car</Text>
      <View style={className`flex-row justify-end items-center`}>
        <Text style={className`text-lg font-semibold text-blue-500`}>Ascending</Text>
        <Image source={require('../../assets/arrow-down.png')} style={className`h-6 w-6`}/>
      </View>
        </View>

    <ScrollView showsVerticalScrollIndicator={false}>
        
      <View style={className`bg-gray-100 rounded-lg p-5 gap-1 fex-1 my-3`}>
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
      </ScrollView>

    </View>
  )
}

export default history