import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc'
import OrText from '@/components/OrText'
import GoogleButton from '@/components/GoogleButton'
import InputWithLabel from '@/components/InputWithLabel'
import { Link } from 'expo-router'
import Button from '@/components/Button'

const signIn = () => {
    const [visible , setVisible] = useState(false)
    const toggleVisible = () => {
        setVisible(!visible)
    }
  return (
    <View style={className`flex-1 gap-3 p-5`}>

        {/* Car Image */}
        <Image source={require('../../assets/signup-car.png')} 
         style={className`h-[200px] w-[390px] fixed top-[-20px] right-[-20px] left-[-20px]`}/>
        {/* Car Image */}


        {/* Texts */}
        <Text style={className`text-3xl font-semibold mt-[-70px]`}>
        Welcome
        </Text>

        {/* Texts */}


        {/* inputs with label */}
        <InputWithLabel 
        placeholder='Enter email'
        icon={require('../../assets/email.png')}
        label='Email'
        />
        <InputWithLabel 
        placeholder='Enter your password'
        icon={require('../../assets/lock.png')}
        label='Password'
        />
        {/* inputs with label */}



        {/* Button */}
        <Pressable onPress={toggleVisible}>
        <Button href='/home' title='Sign In'/>
        </Pressable>
        {/* Button */}

        {/* or text */}
        <OrText/>
        {/* or text */}

        {/* Google Button */}
        <GoogleButton/>
        {/* Google Button */}

        {/* signin or sign up */}
            <Text style={className`text-center text-lg text-gray-500`}>Don't have an Account? 
                <Link href='/(auth)/signUp' style={className`font-semibold text-[#0286FF]`}> Sign Up</Link>
            </Text>
        {/* signin or sign up */}


        {/* popup */}
        {visible && (
        <View style={className`bg-[rgba(000,000,00,0.45)] absolute top-0 bottom-0 left-0 right-0 flex-col justify-center items-center`}>
            <View style={className`bg-white p-5 rounded-lg w-93 py-10 flex-col justify-center items-center gap-3`}>
                <Image source={require('../../assets/check.png')} style={className`bg-[#0286FF] h-20 w-20 rounded-full`}/>
                <Text style={className`text-3xl font-semibold`}>Verified</Text>
                <Text style={className`text-lg text-gray-500 text-center px-10`}>
                    You have successfully verified your account.</Text>
                    <Button title='Browse home' href='/home'/>
            </View>
        </View>)}
        {/* popup */}


    </View>
  )
}

export default signIn