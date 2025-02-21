import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PackageCard from './PackageCard'

const InternetPlans = () => {

  const data = [
    {id:1,plan:"Customized Package"},
    {id:2,plan:"Bronze Package"},
    {id:3,plan:"Silver Package"},
    {id:4,plan:"Gold Package"},
    {id:5,plan:"Corporate Package"},
  ]
  
  return (
    <FlatList
    data={data}
    showsHorizontalScrollIndicator={false}
    renderItem={({item})=>(
          <PackageCard />
          )}
     horizontal     
    />
  )
}

export default InternetPlans