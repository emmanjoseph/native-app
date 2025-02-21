import { View, Text, Image } from 'react-native'
import React from 'react'

interface Props{
    description:string,
    amount:number,
    date:string
}
const MessageBox = ({description,amount,date}:Props) => {
    
  return (
    <View className='w-full my-1 bg-white p-3 rounded-2xl shadow-md shadow-secondary'>
          <View className="flex flex-row items-center justify-between">
            <View className='flex items-center flex-row gap-2'>

            <View className="w-14 h-14 shadow-lg shadow-gray-400 bg-white rounded-2xl flex items-center justify-center">
                             <Image source={require("@/assets/icons/invoice.png")} 
                        resizeMode="contain"
                        className="w-6 h-6"
                         tintColor="#7F8183"
                        />
             </View>
              <Text className='text-green-500 text-lg font-UrbanistBold'>kes {amount}</Text>
            </View>

            <Text className='text-sm font-UrbanistSemibold text-secondary'>{date}</Text>
                        </View>
       <Text className='text-[14px] font-UrbanistMedium text-secondary py-2'>{description}</Text>
    </View>
  )
}

export default MessageBox

