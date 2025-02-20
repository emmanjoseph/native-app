import { View, Text, Image } from 'react-native'
import React from 'react'

interface Props{
    title:string,
    subtitle:string
}
const EmptyState = ({title,subtitle}:Props) => {
  return (
    <View className='flex items-center'>
        <Image 
        source={require('@/assets/images/empty-box.png')}
        className='w-14 h-14'
        resizeMode='contain'
        />
      <Text className='text-2xl font-UrbanistBold'>{title}</Text>
      <Text className='text-sm font-UrbanistMedium text-secondary'>{subtitle}</Text>
    </View>
  )
}

export default EmptyState