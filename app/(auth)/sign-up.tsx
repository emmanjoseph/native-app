import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <SafeAreaView className='bg-white/50 h-full px-5 py-7 flex flex-col items-center justify-center'>
      <View className='flex flex-col items-center'>
        <Image source={require('@/assets/images/manage.jpg')} className='w-[100px] h-[100px] rounded-3xl my-3' resizeMode='contain'/>
        <View className='w-full mt-3 flex items-center gap-y-1'>
          <Text className='text-3xl font-UrbanistBold text-primary'>Sign up</Text>
          <Text className='text-lg font-UrbanistMedium text-secondary/90'>Enter your credentials to continue</Text>

          <View className='w-full px-5 flex flex-col gap-y-5 mt-5 items-center'>
            <View className='bg-white shadow-xl shadow-secondary flex flex-row items-center gap-2 px-7 py-3 w-full rounded-3xl'>
              <Image
              source={require('@/assets/icons/user.png')}
              className='w-5 h-5'
              resizeMode='contain'
              tintColor="gray"
              />

              <TextInput className='w-full font-UrbanistMedium'
              placeholder='Username'
              
              />
            </View>
            <View className='bg-white shadow-xl shadow-secondary flex flex-row items-center gap-2 px-7 py-3 w-full rounded-3xl'>
              <Image
              source={require('@/assets/icons/email.png')}
              className='w-5 h-5'
              resizeMode='contain'
              tintColor="gray"
              />

              <TextInput className='w-full font-UrbanistMedium'
              placeholder='Example@gmail.com'
              
              />
            </View>

            <View className='bg-white shadow-xl shadow-secondary flex flex-row items-center gap-2 px-7 py-3 w-full rounded-3xl'>
              <Image
              source={require('@/assets/icons/lock.png')}
              className='w-6 h-6'
              resizeMode='contain'
              tintColor="gray"
              />

              <TextInput className='w-full font-UrbanistMedium'
              placeholder='Enter your password'
              />
            </View>

            <TouchableOpacity className='w-[300px] bg-blue-500 py-5 mt-3 rounded-full flex items-center'>
            <Text className='text-white font-UrbanistSemibold'>Sign Up</Text>
          </TouchableOpacity>
          </View>

          <View className='my-3 flex items-center'>
          <Text className='text-secondary font-UrbanistBold'>OR</Text>
          <TouchableOpacity className='mt-3 bg-white w-full px-16 py-5 flex items-center gap-2 flex-row rounded-full shadow shadow-secondary'>
            <Image source={require('@/assets/icons/search.png')} className='w-6 h-6' resizeMode='contain'/>
            <Text className='font-UrbanistSemibold text-primary'>Continue with Google</Text>
          </TouchableOpacity>
          </View>

          <View className='flex flex-row items-center gap-1 mt-1'>
            <Text className='text-secondary font-UrbanistSemibold'>Already have an account ?</Text>
            <Link href="/(auth)/sign-in" className='font-UrbanistBold text-blue-500'>Sign in</Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp