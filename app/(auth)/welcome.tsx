import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from "react-native-swiper";
import { router } from 'expo-router';



const onBoarding = [
  {
    id:1,
    title:"Manage Your Internet, Effortlessly!",
    description:"Stay on top of your usage, payments, and plans—all in one place.",
    image:"manage.jpg"
  },
  {
    id:1,
    title:"Monitor Your Usage",
    description:"Track your data, check your speed, and manage connected devices with ease.",
    image:"monitor.jpg"
  },
  {
    id:1,
    title:"Easy Payments & Support",
    description:"Pay bills in seconds and get instant help when you need it.",
    image:"payment.jpg"
  },
]
const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onBoarding.length - 1;
  return (
    <SafeAreaView>
      <View className='h-full flex items-center justify-center bg-white'>
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-primary font-UrbanistBold text-lg">Skip</Text>
      </TouchableOpacity>
      
        <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-12 h-2 mx-1 bg-secondary rounded-3xl" />
        }
        activeDot={
          <View className="w-12 h-2 mx-1 bg-blue-500/90 rounded-3xl" />
        }
        onIndexChanged={((index)=> setActiveIndex(index))}
        >
         {onBoarding.map((item)=>(
          <View key={item.id} className='flex items-center space-y-2 px-4'>
            <Image source={require(`@/assets/images/monitor.jpg`)}
            className='w-[200px] h-[300px]'
            resizeMode='contain'
            />
            <Text className='text-3xl text-center font-UrbanistExtraBold mx-10 w-3/5 text-primary'>{item.title}</Text>
            <Text className='text-secondary font-UrbanistSemibold text-lg text-center mx-10 w-9/12'>{item.description}</Text>
          </View>
         ))}
        </Swiper>

        <TouchableOpacity 
        className='mt-4 mb-5 w-9/12 py-5 rounded-full flex items-center shadow-black shadow-xl bg-white'
        onPress={()=>
          isLastSlide ? router.replace('/(auth)/sign-up')
          : swiperRef.current?.scrollBy(1)
        }
        >
          <Text className='text-lg font-UrbanistBold text-secondary'>
          {isLastSlide ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
    
  )
}

export default Welcome