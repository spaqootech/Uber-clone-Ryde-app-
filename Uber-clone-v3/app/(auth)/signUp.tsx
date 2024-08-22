import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Button from '@/components/Button'
import OrText from '@/components/OrText'
import GoogleButton from '@/components/GoogleButton'
import { Link } from 'expo-router'
import InputWithIconAndLabel from '@/components/InputWithIconAndLabel'

const signUp = () => {
  return (
    <View style={className`p-5 flex-1 gap-3`}>
        <Image style={className`h-[350px] fixed w-[390px] top-[-20px] left-[-20px] right-[-100px] mb-[-200px]`}
         source={require('../../assets/get-started.png')}/>
         
         <Text style={className`text-3xl font-semibold`}>
         Create Your Account
         </Text>

         <InputWithIconAndLabel label='Name' placeholder='Enter name' 
         icon={require('../../assets/person.png')}/>
         
         <InputWithIconAndLabel label='Email' placeholder='Enter email' 
         icon={require('../../assets/email.png')}/>
         
         <InputWithIconAndLabel label='Password' placeholder='Enter password' 
         icon={require('../../assets/lock.png')}/>

        <Button text='Sign Up' href='/(auth)/signIn'/>
        <OrText/>
        <GoogleButton/>
        <View>
            <Text style={className`text-center text-lg text-gray-500`}>
                Already have an Account ?   
                 <Link href='/(auth)/signIn' style={className`text-blue-500 font-semibold`}> 
                  Sign In</Link>
            </Text>
        </View>
    </View>
  )
}

export default signUp