import { View, Text, FlatList } from 'react-native'
import React from 'react'

const InternetPlans = () => {
  return (
    <FlatList
    data={[{id:1,plan:"Customized"},{id:2,plan:"Bronze"},{id:3,plan:"Silver"}]}
    // keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
            <Text>{item.plan}</Text>
          )}
     horizontal     
    />
  )
}

export default InternetPlans