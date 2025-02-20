import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InternetPlans from '@/componenets/InternetPlans'
import EmptyState from '@/componenets/EmptyState'
import MessageBox from '@/componenets/MessageBox'

const transactions = [
  { id: 1, amount: 3000, date: 'Feb 20, 2025', description: 'Custom package paid' },
  { id: 2, amount:2500, date: 'Feb 18, 2025', description: 'Data Top-up' },
  { id: 3, amount: 7000, date: 'Feb 15, 2025', description: 'Broadband Payment' }
]

const Plans = () => {
  return (
    <SafeAreaView className='bg-white/50 flex-1 w-full px-5 pt-5 pb-32'>
      <FlatList 
      data={transactions}
      keyExtractor={(item)=>item.id.toString()}
      className='p-2 bg-transparent h-auto'
      showsVerticalScrollIndicator={false}
      renderItem={({item})=>{
        return(
          <MessageBox 
        description={item.description}
        amount={item.amount}
        date={item.date}
        />
        ) 
      }  
      }
      ListHeaderComponent={()=>(
        <View>
          <Text className='text-2xl font-UrbanistSemibold pb-2'>Internet plans</Text>
          <View className='my-4'>
            <Text className='py-2 text-secondary font-UrbanistSemibold text-lg'>Discover other internet plans</Text>
            <InternetPlans/>
          </View>
        </View>
      )}

      ListEmptyComponent={()=>(
        <EmptyState
        title="No Transactions made"
        subtitle="Make a transaction"
        />
      )}
      />
    </SafeAreaView>
  )
}

export default Plans