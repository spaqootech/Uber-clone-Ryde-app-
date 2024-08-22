import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'

const Rides = () => {
  return (
    <View style={className`bg-gray-100 p-2 rounded-lg gap-5 my-2`}>
        <View style={className`flex-row justify-between items-center`}>
            <Image style={className`border border-gray-300 rounded-lg`} source={require('../assets/recent-rides.png')}/>
            <View style={className`gap-4`}>
                <View style={className`flex-row justify-between items-center gap-5 flex-1`}>
                    <Image source={require('../assets/to.png')} style={className`h-4 w-5`}/>
                    <Text style={className`text-lg`}>1923 Numaish Karachi</Text>
                </View>
                <View style={className`flex-row justify-between items-center gap-5 flex-1`}>
                    <Image source={require('../assets/point.png')} style={className`h-4 w-5`}/>
                    <Text style={className`text-lg`}>1923 Saddar Karachi</Text>
                </View>
            </View>
        </View>

        <View style={className`flex-col bg-white p-2 rounded-lg gap-5`}>
            <View style={className`flex-row justify-between items-center py-1 border-b border-gray-200`}>
                <Text style={className`text-gray-500 font-semibold text-lg`}>Date & Time</Text>
                <Text style={className`font-semibold text-lg`}>22 Aug 2024, 06 : 30 AM</Text>
            </View>

            <View style={className`flex-row justify-between items-center py-1 border-b border-gray-200`}>
                <Text style={className`text-gray-500 font-semibold text-lg`}>Driver</Text>
                <Text style={className`font-semibold text-lg`}>Elon Musk</Text>
            </View>

            <View style={className`flex-row justify-between items-center py-1 border-b border-gray-200`}>
                <Text style={className`text-gray-500 font-semibold text-lg`}>Car Seats</Text>
                <Text style={className`font-semibold text-lg`}> 22</Text>
            </View>

            <View style={className`flex-row justify-between items-center py-1`}>
                <Text style={className`text-gray-500 font-semibold text-lg`}>Payment Status</Text>
                <Text style={className`font-semibold text-lg text-green-500`}>Paid</Text>
            </View>

        </View>
    </View>
  )
}

export default Rides