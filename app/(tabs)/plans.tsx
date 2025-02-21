import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InternetPlans from '@/componenets/InternetPlans'
import EmptyState from '@/componenets/EmptyState'
import MessageBox from '@/componenets/MessageBox'
import CurrentPlan from '@/componenets/CurrentPlan'

const transactions = [
  { id: 1, amount: 3000, date: 'Feb 20, 2025', description: 'Custom package paid' },
  { id: 2, amount:2500, date: 'Feb 18, 2025', description: "Silver Package paid " },
  { id: 3, amount: 7000, date: 'Feb 15, 2025', description: 'Broadband Payment' },
]

const Plans = () => {
  return (
    <SafeAreaView className='bg-white/50 px-5 flex-1 '>
    <FlatList 
      data={transactions}
      keyExtractor={(item) => item.id.toString()}
      className='p-2 bg-transparent h-auto'
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <>
          <View className="flex my-3 space-y-8">
            <View className='flex flex-row gap-2 items-center'>
            <Text className='text-2xl font-UrbanistSemibold pb-2'>Internet plans</Text>
            </View>
            {/* my current plan */}
            <Text className='text-secondary font-UrbanistSemibold text-xl py-2'>My current plan</Text>
            <CurrentPlan/>
            <Text className='text-secondary font-UrbanistSemibold text-lg py-2'>Other internet plans</Text> 
            <InternetPlans/>
          </View>
          <Text className="mt-6 text-xl font-UrbanistSemibold pb-2">My Transactions</Text>
        </>
      )}
      renderItem={({ item }) => (
        <MessageBox 
          description={item.description}
          amount={item.amount}
          date={item.date}
        />
      )}
      ListEmptyComponent={() => (
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