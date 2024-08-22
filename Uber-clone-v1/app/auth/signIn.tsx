import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'
import GoogleButton from '@/components/GoogleButton'

const signIn = () => {
    const [visible , setVisible] = useState(false)
    const toggleVisible = ()=>{
        if(!visible){
            setVisible(true)
        }
    }
  return (
    <View style={className`flex-1 p-5 gap-5`}>

      <Image source={require('../../assets/signup-car.png')} style={className`h-[250px] w-[390px] fixed top-[-100px] left-[-20px] right-[-20px]`} />

      <Text style={className`mt-[-170px] text-3xl font-semibold`}>
      Welcome
      </Text>


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

      <Link onPress={toggleVisible} href='/auth/signIn' style={className`bg-[#0286FF] p-4 w-[350px] rounded-full text-center text-white`}>
      Sign In
      </Link>

      <View style={className`flex-row justify-center items-center gap-2`}>
        <View style={className`h-[1px] w-40 rounded-full bg-gray-300`}></View>
        <Text>Or</Text>
        <View style={className`h-[1px] w-40 rounded-full bg-gray-300`}></View>
      </View>

      
        <GoogleButton/>
      
      <Text style={className`text-lg text-gray-500 text-center`}>
       Don't have an Account ? <Link href='/auth/signUp' style={className`text-[#0286FF] font-semibold`}>Sign Up</Link></Text>

       {visible && (
       <View style={className`bg-[rgba(000,000,000,0.45)] absolute  top-0 left-0 right-0 bottom-0 p-5 flex-col justify-center items-center`}>

        <View style={className`bg-white rounded-xl p-5 w-90 flex-col justify-center items-center gap-3 py-10`}>
            <Image source={require('../../assets/check.png')} style={className`h-20 w-20 bg-green-500 rounded-full p-10`}/>
            <Text style={className`text-3xl text-center font-semibold`}>Verified</Text>
            <Text style={className`text-gray-500 text-lg text-center`}>You have successfully veried your Account</Text>
      <Link onPress={()=>setVisible(!visible)} href='/(tabs)/home' style={className`bg-[#0286FF] p-4 w-[350px] rounded-full text-center text-white`}>
      Browse Home
      </Link>
       </View>



       </View>
       )}

    </View>
  )
}

export default signIn