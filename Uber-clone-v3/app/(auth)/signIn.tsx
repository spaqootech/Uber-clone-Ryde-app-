import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc'
import Button from '@/components/Button'
import OrText from '@/components/OrText'
import GoogleButton from '@/components/GoogleButton'
import { Link } from 'expo-router'
import InputWithIconAndLabel from '@/components/InputWithIconAndLabel'
import Popup from '@/components/Popup'

const signIn = () => {
    const [visible , setVisible] = useState(false)
    const toggleVisible = ()=>{
        setVisible(!visible)
    }
  return (
    <View style={className`p-5 flex-1 gap-3`}>
        <Image style={className`h-[350px] fixed w-[390px] top-[-20px] left-[-20px] right-[-100px] mb-[-200px]`}
         source={require('../../assets/get-started.png')}/>
         
         <Text style={className`text-3xl font-semibold`}>
         Welcome
         </Text>

         <InputWithIconAndLabel label='Email' placeholder='Enter email' 
         icon={require('../../assets/email.png')}/>
         
         <InputWithIconAndLabel label='Password' placeholder='Enter password' 
         icon={require('../../assets/lock.png')}/>

        <Pressable onPress={toggleVisible}>
        <Button text='Sign In' href='/(auth)/signIn'/>
        </Pressable>
        <OrText/>
        <GoogleButton/>
        <View>
            <Text style={className`text-center text-lg text-gray-500`}>
                Don't have an Account ?   
                 <Link href='/(auth)/signUp' style={className`text-blue-500 font-semibold`}> 
                  Sign Up</Link>
            </Text>
        </View>

        {/* popup */}
        {visible && (
            <Popup setVisble={setVisible} visible={visible}/>
        )}
        {/* popup */}
    </View>
  )
}

export default signIn