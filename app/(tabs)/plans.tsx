import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InternetPlans from '@/componenets/InternetPlans'

 const plans = [
    {
      id:1,
      plan:"message1"
    },
    {
      id:2,
      plan:"message2"
    },
    {
      id:3,
      plan:"message3"
    },
    {
      id:4,
      plan:"message4"
    },
    
  ]

const Plans = () => {
 
  return (
    <SafeAreaView>
      <ScrollView>
        <View className='w-full bg-white/50 px-5 pt-5 pb-32'>
        <FlatList
        data={plans}
        // keyExtractor={({id})=>id}
        renderItem={({item})=>(
        <View>
          <Text>{item.plan}</Text>
        </View>
        )}
        // header component
        ListHeaderComponent={()=>{
          return (
            <View className='mb-4'>
              <Text className='text-xl font-UrbanistSemibold'>My payments</Text>
              <View>
                <Text>Offers</Text>
                <InternetPlans />
              </View>
            </View>


          )
        }}
        />

        <View>

        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Plans