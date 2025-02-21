import { View, Text, TouchableOpacity ,Image } from 'react-native'
import React from 'react'

const CurrentPlan = () => {
  return (
    <View className="bg-white/95 shadow-md shadow-gray-600/50 p-3 rounded-2xl my-4">
        {/* top */}
    <View className="flex flex-row items-center justify-between">
                   <View className="flex items-center flex-row gap-2">
                     <TouchableOpacity className="w-14 h-14 rounded-2xl border-2 border-secondary/30 flex items-center justify-center">
                       <Image source={require('@/assets/icons/invoice.png')} 
                       tintColor="#7F8183"
                       className="w-5 h-5"
                       resizeMode="contain"
                       />
                     </TouchableOpacity>
                     <Text className="text-lg font-UrbanistBold text-primary">Basic Package</Text>
                   </View>
   
                 
         <View className='flex flex-row gap-2 items-center'>
             <Text className='text-primary font-UrbanistMedium text-lg underline'>Paid</Text>
             <Image source={require('@/assets/icons/status-flag.png')}
             className='w-5 h-5'
             tintColor="green"
             />
        </View>
                 
    </View>

     {/* balance */}
     <View className="my-5">
                <Text className="font-UrbanistMedium text-4xl text-neutral-800 "><Text>kes</Text> 3,000.00</Text>
              </View>
 </View>
  )
}

export default CurrentPlan