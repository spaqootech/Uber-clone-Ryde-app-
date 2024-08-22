import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'
import GoogleButton from '@/components/GoogleButton'

const signUp = () => {
  return (
    <View style={className`flex-1 p-5 gap-5`}>

      <Image source={require('../../assets/signup-car.png')} style={className`h-[250px] w-[390px] fixed top-[-100px] left-[-20px] right-[-20px]`} />

      <Text style={className`mt-[-170px] text-3xl font-semibold`}>
      Create Your Account
      </Text>

{/*  */}
<View>
    <Text style={className`font-semibold text-lg`}>Name</Text>
      <View style={className`flex-row justify-start items-center bg-gray-200 rounded-full p-2 my-1`}>
        <Image source={require('../../assets/person.png')} style={className`h-5 w-5 mx-2`}/>
        <TextInput placeholder='Enter Name' style={className`p-2 text-lg text-gray-500 flex-1`}/>
      </View>
</View>
{/*  */}

{/*  */}
<View>
    <Text style={className`font-semibold text-lg`}>Email</Text>
      <View style={className`flex-row justify-start items-center bg-gray-200 rounded-full p-2 my-1`}>
        <Image source={require('../../assets/person.png')} style={className`h-5 w-5 mx-2`}/>
        <TextInput placeholder='Enter Email' style={className`p-2 text-lg text-gray-500 flex-1`}/>
      </View>
</View>
{/*  */}

{/*  */}
<View>
    <Text style={className`font-semibold text-lg`}>Password</Text>
      <View style={className`flex-row justify-start items-center bg-gray-200 rounded-full p-2 my-1`}>
        <Image source={require('../../assets/person.png')} style={className`h-5 w-5 mx-2`}/>
        <TextInput placeholder='Enter Password' style={className`p-2 text-lg text-gray-500 flex-1`}/>
        <Image source={require('../../assets/eyecross.png')} style={className`h-5 w-5 mx-2`}/>
      </View>
</View>
{/*  */}

      <Link href='/auth/signIn' style={className`bg-[#0286FF] p-4 w-[350px] rounded-full text-center text-white`}>
      Sign Up
      </Link>

      <View style={className`flex-row justify-center items-center gap-2`}>
        <View style={className`h-[1px] w-40 rounded-full bg-gray-300`}></View>
        <Text>Or</Text>
        <View style={className`h-[1px] w-40 rounded-full bg-gray-300`}></View>
      </View>

      
        <GoogleButton/>
      
      <Text style={className`text-lg text-gray-500 text-center`}>
       Already have an Account ? <Link href='/auth/signIn' style={className`text-[#0286FF] font-semibold`}>Sign In</Link></Text>

    </View>
  )
}

export default signUp