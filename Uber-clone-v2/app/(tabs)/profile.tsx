import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'

const profile = () => {
  return (
    <View style={className`flex-1 gap-5 p-5`}>
      <Text style={className`text-3xl font-semibold`}>Your profile</Text>

      <View style={className`flex-row justify-center items-center`}>
        <Image source={require('../../assets/profile-pic.png')} style={className`h-30 w-30 rounded-full border border-2 border-blue-300 shadow-xl`}/>
      </View>

      <View style={className`bg-gray-100 p-5 gap-3 rounded-lg`}>

      <View>
            <Text style={className`text-md font-semibold text-gray-500`}>First name</Text>
            <View style={className`bg-white p-3 py-2 mt-1 rounded-full flex-row justify-between items-center`}>
                <Text style={className`text-xl font-semibold`}>Sapqoo</Text>
                <Image source={require('../../assets/Edit.png')}/>
            </View>
        </View>

        <View>
            <Text style={className`text-md font-semibold text-gray-500`}>Last name</Text>
            <View style={className`bg-white p-3 py-2 mt-1 rounded-full flex-row justify-between items-center`}>
                <Text style={className`text-xl font-semibold`}>Meer</Text>
                <Image source={require('../../assets/Edit.png')}/>
            </View>
        </View>

        <View>
            <Text style={className`text-md font-semibold text-gray-500`}>Email</Text>
            <View style={className`bg-white p-3 py-2 mt-1 rounded-full flex-row justify-between items-center`}>
                <Text style={className`text-xl font-semibold`}>spaqoo@gmail.com</Text>
                <Image source={require('../../assets/Edit.png')}/>
            </View>
        </View>

        <View>
            <Text style={className`text-md font-semibold text-gray-500`}>Email status</Text>
            <View style={className`bg-white p-3 py-2 mt-1 rounded-full flex-row justify-between items-center`}>
                <View style={className`flex-row justify-start items-center border border-green-500 rounded-full bg-green-100 px-3`}>
                &#10004;
                <Text style={className`text-lg font-semibold mx-1`}>Verified</Text>
                </View>
            </View>
        </View>

        <View>
            <Text style={className`text-md font-semibold text-gray-500`}>Phone number</Text>
            <View style={className`bg-white p-3 py-2 mt-1 rounded-full flex-row justify-between items-center`}>
                <Text style={className`text-xl font-semibold`}>+92340512304</Text>
                <Image source={require('../../assets/Edit.png')}/>
            </View>
        </View>

      </View>
    </View>
  )
}

export default profile