import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'
import Button from '@/components/Button'
import Dotes from '@/components/Dotes'
import SkipText from '@/components/SkipText'
import OrText from '@/components/OrText'
import GoogleButton from '@/components/GoogleButton'

const onboarding4 = () => {
  return (
    <View style={className`flex-1 gap-5 p-5`}>

        {/* Car Image */}
        <Image source={require('../assets/get-started.png')} 
         style={className`h-[400px] w-[390px] fixed top-[-20px] right-[-20px] left-[-20px]`}/>
        {/* Car Image */}


        {/* Texts */}
        <Text style={className`text-3xl font-semibold text-center px-10 mt-[-70px]`}>
        Let's get started!
        </Text>

        <Text style={className`text-center text-gray-500 text-lg px-5`}>
        Sign up or log in to find out the best car for you.
        </Text>
        {/* Texts */}



        {/* Button */}
        <Button href='/(auth)/signUp' title='Sign Up'/>
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


    </View>
  )
}

export default onboarding4