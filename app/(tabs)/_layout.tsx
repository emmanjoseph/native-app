import { View, Text, ImageSourcePropType, Image, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Tabs } from 'expo-router'

interface Props {
    icon:ImageSourcePropType,
    color:string,
    name:string,
    focused:boolean
}
const TabIcon =({icon, color, name, focused}:Props)=>{
    const scaleAnim = useRef(new Animated.Value(focused ? 1 : 0)).current;

    useEffect(()=>{
        Animated.timing(scaleAnim, {
            toValue:focused ? 1 : 0 ,
            duration:200,
            useNativeDriver:false
        }).start();
    },[focused])
    return (
        <View className={`rounded-[20px] flex flex-row items-center justify-center ${focused ? "bg-blue-500":"bg-white"} w-[53px] h-[53px] -mt-8 px-4`}>
            <Image 
            source={icon}
            tintColor={focused ? "white" : "#7F8183"}
            resizeMode='contain'
            className='w-6 h-6'
            />

        </View>
    )
}

const _layout = () => {
  return (
   <Tabs
   initialRouteName='home'
    screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#E1E1E1",
          borderRadius:20,
          paddingBottom: 0, // ios only
          overflow: "hidden",
          marginHorizontal:50,
          marginBottom: 20,
          height: 65,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          elevation: 5, // Android shadow
          position: "absolute",
        },
      }}
   >

    <Tabs.Screen 
    name='home'
    options={{
        headerShown:false,
        tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={require("@/assets/icons/house-blank.png")}
            name='home'
            color={color}
            focused={focused}
            />
        )
    }}
    />

    <Tabs.Screen 
    name='devices'
    options={{
        headerShown:false,
        tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={require("@/assets/icons/devices.png")}
            name='Devices'
            color={color}
            focused={focused}
            />
        )
    }}
    />

    <Tabs.Screen 
    name='plans'
    options={{
        headerShown:false,
        tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={require("@/assets/icons/walet.png")}
            name='Invoices'
            color={color}
            focused={focused}
            />
        )
    }}
    />

    <Tabs.Screen 
    name='schedule'
    options={{
        headerShown:false,
        tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={require("@/assets/icons/calendar-minus.png")}
            name='Invoices'
            color={color}
            focused={focused}
            />
        )
    }}
    />
    
   </Tabs>
  )
}

export default _layout