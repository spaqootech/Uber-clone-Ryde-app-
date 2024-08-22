import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'
import Button from '@/components/Button'
import Dotes from '@/components/Dotes'
import SkipText from '@/components/SkipText'
import OrText from '@/components/OrText'
import GoogleButton from '@/components/GoogleButton'
import InputWithLabel from '@/components/InputWithLabel'

const signUp = () => {
  return (
    <View style={className`flex-1 gap-3 p-5`}>

        {/* Car Image */}
        <Image source={require('../../assets/signup-car.png')} 
         style={className`h-[200px] w-[390px] fixed top-[-20px] right-[-20px] left-[-20px]`}/>
        {/* Car Image */}


        {/* Texts */}
        <Text style={className`text-3xl font-semibold mt-[-70px]`}>
        Create Your  Account
        </Text>

        {/* Texts */}


        {/* inputs with label */}
        <InputWithLabel 
        placeholder='Enter your name'
        icon={require('../../assets/person.png')}
        label='Name'
        />
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
        <Button href='/(auth)/signIn' title='Sign Up'/>
        {/* Button */}

        {/* or text */}
        <OrText/>
        {/* or text */}

        {/* Google Button */}
        <GoogleButton/>
        {/* Google Button */}

        {/* signin or sign up */}
            <Text style={className`text-center text-lg text-gray-500`}>Already have an Account? 
                <Link href='/(auth)/signIn' style={className`font-semibold text-[#0286FF]`}> Sign In</Link>
            </Text>
        {/* signin or sign up */}


    </View>
  )
}

export default signUp