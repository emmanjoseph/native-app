import Chart from "@/componenets/chart";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';


export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full  bg-white/50 px-5 pt-5 pb-32">

          <View className="flex flex-row justify-between items-center"> 
            <View>
              <Text className="text-sm font-UrbanistMedium text-blue-500">Good morning</Text>        
              <Text className="text-xl text-gray-800 -mt-1 font-UrbanistSemibold">Emmanuel Muia</Text>
              </View>
            <View className="flex flex-row items-center gap-4">
              <TouchableOpacity className="w-14 h-14 shadow-lg shadow-gray-400 bg-white rounded-xl flex items-center justify-center">
                <Image source={require("@/assets/icons/notifications.png")} 
                resizeMode="contain"
                className="w-6 h-6"
                 tintColor="#7F8183"
                />
              </TouchableOpacity>

              <TouchableOpacity className="w-14 h-14 shadow-lg shadow-gray-400 bg-white rounded-xl flex items-center justify-center">
                <Image source={require("@/assets/images/avatar.jpg")} className="w-full h-full rounded-xl"/>
              </TouchableOpacity>
            </View>
          </View>
          {/* invoice details */}
          <View className="mt-6">
            <Text className="text-3xl w-1/2 text-neutral-800/90 py-3 font-UrbanistMedium text-pretty">My Internet</Text>

            <View className="bg-white/95 shadow-md shadow-gray-600/50 p-3 rounded-2xl">
              <View className="flex flex-row items-center justify-between">
                <View className="flex items-center flex-row gap-2">
                  <TouchableOpacity className="w-14 h-14 rounded-2xl border-2 border-secondary/30 flex items-center justify-center">
                    <Image source={require('@/assets/icons/invoice.png')} 
                    tintColor="#7F8183"
                    className="w-5 h-5"
                    resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <Text className="text-lg font-UrbanistMedium text-secondary">Invoice</Text>
                </View>

                {/* edit and open */}
                <View className="flex flex-row gap-2">
                  <TouchableOpacity className="w-14 h-14 shadow-lg shadow-gray-400 bg-white rounded-2xl flex items-center justify-center">
                     <Image source={require("@/assets/icons/edit.png")} 
                resizeMode="contain"
                className="w-6 h-6"
                 tintColor="#7F8183"
                />
                  </TouchableOpacity>

                  <TouchableOpacity className="w-14 h-14 shadow-lg shadow-gray-400 bg-white rounded-2xl flex items-center justify-center">
                     <Image source={require("@/assets/icons/explore.png")} 
                resizeMode="contain"
                className="w-6 h-6"
                 tintColor="#7F8183"
                />
                  </TouchableOpacity>
                </View>
              </View>

              {/* balance */}
              <View className="my-7">
                <Text className="font-UrbanistMedium text-4xl text-neutral-800 "><Text>kes</Text> 3,000.00</Text>
              </View>

              <View className="flex flex-row gap-1 my-1">
                <View className="px-4 py-3 border-[1px] border-secondary/30 rounded-2xl w-1/2">
                  <Text className="text-sm text-secondary font-UrbanistMedium">Internet Plan</Text>
                  <Text className="font-UrbanistSemibold text-xl">Basic Package</Text>
                </View>
                <View className="px-4 py-3 border-[1px] border-secondary/30 rounded-2xl w-1/2">
                  <Text className="text-sm text-secondary font-UrbanistMedium">Due date</Text>
                  <Text className="font-UrbanistSemibold text-lg text-blue-500">3/Feb/2025</Text>
                </View>
                
              </View>

              <View className="flex flex-row gap-1">
                <View className="px-4 py-3 border-[1px] border-secondary/30 rounded-2xl w-1/2">
                  <Text className="text-sm text-secondary font-UrbanistMedium">Days Outstanding</Text>
                  <Text className="font-UrbanistSemibold text-xl">30</Text>
                </View>
                <View className="px-4 py-3 border-[1px] border-secondary/30 rounded-2xl w-1/2">
                  <Text className="text-sm text-secondary font-UrbanistMedium">Status Flag</Text>
                  <View className="flex flex-row items-center gap-1">
                     
                    <Text className="font-UrbanistSemibold text-xl">
                    Paid</Text>

                    <Image source={require("@/assets/icons/flag.png")} 
                resizeMode="contain"
                className="w-6 h-6"
                 tintColor="green"
                />
                  </View>
                  
                </View>
              </View>

            </View>
          </View>

          <View className="flex flex-col gap-y-1">
          <Text className="text-xl  text-neutral-800/90 py-3 font-UrbanistSemibold text-pretty">Internet Usage</Text>
          {/* usage graph */}
          <View className="bg-white/95 shadow-md shadow-gray-600/50 p-3 rounded-2xl">
          <View className="flex flex-row items-center justify-between">
                <View className="flex items-center flex-row gap-2">
                  <TouchableOpacity className="w-14 h-14 rounded-2xl border-2 border-secondary/30 flex items-center justify-center">
                    <Image source={require('@/assets/icons/wifi.png')} 
                    tintColor="#7F8183"
                    className="w-5 h-5"
                    resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                  <Text className="text-lg font-UrbanistSemibold text-primary">Basic Package</Text>
                  <Text className="font-UrbanistMedium text-secondary text-sm">Internet speed 3mbps</Text>
                  </View>
                  

                </View>

                <View className="w-14 h-14 rounded-2xl border-2 border-secondary/30 flex items-center justify-center">
                    <Image source={require('@/assets/icons/wifi.png')} 
                    tintColor="green"
                    className="w-5 h-5"
                    resizeMode="contain"
                    />
                  </View>
              </View>
              {/* chart */}
              <View className="my-5">
              <Chart/>
              </View>
          </View>
          </View>


          <View className="mt-2">
          <View className="bg-white/95 shadow-md shadow-gray-600/50 p-3 rounded-2xl">
          {/* top */}
          <View className="flex flex-row items-center justify-between">
                <View className="flex items-center flex-row gap-2">
                  <TouchableOpacity className="w-14 h-14 rounded-2xl border-2 border-secondary/30 flex items-center justify-center">
                    <Image source={require('@/assets/icons/devices.png')} 
                    tintColor="#7F8183"
                    className="w-5 h-5"
                    resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                  <Text className="text-lg font-UrbanistSemibold text-primary">Connected Devices</Text>
                  
                  <View className="flex flex-row items-center gap-1">
                    {/* ping */}
                    <View className="w-4 h-4 border border-green-500 rounded-full flex items-center justify-center">
                      <View className="w-2 h-2 bg-green-400 rounded-full"/>
                    </View>
                  <Text className="text-sm font-UrbanistSemibold text-green-500 ">3 devices online</Text>
                  </View>
                  </View>
                   
                </View>

                <TouchableOpacity className="w-14 h-14 shadow-lg shadow-gray-400 bg-white rounded-2xl flex items-center justify-center">
                     <Image source={require("@/assets/icons/explore.png")} 
                resizeMode="contain"
                className="w-6 h-6"
                 tintColor="#7F8183"
                />
                  </TouchableOpacity>
              </View>


              {/* listing the connected devices */}
              <View className="mt-3 flex flex-col gap-y-2">
                <LinearGradient
                   colors={['#4c669f','#3b5998','#192f6a']}
                   style={{
                    borderRadius:20
                   }}
                   className="py-6 px-4"
                 >
                       <View className="flex flex-row gap-2 items-center">
                  <Image source={require("@/assets/icons/laptop.png")} className="w-10 h-10" resizeMode="contain"/>
                  <View>
                    <Text className="font-UrbanistMedium text-white">Personal Computer</Text>
                  </View>
                </View>
                </LinearGradient>

                <LinearGradient
                   colors={['#4c669f', '#3b5998', '#192f6a']}
                   style={{
                    borderRadius:20
                   }}
                   className="py-6 px-4"
                 >
                       <View className="flex flex-row gap-2 items-center">
                  <Image source={require("@/assets/icons/mobile-phone.png")} className="w-10 h-10" resizeMode="contain"/>
                  <View>
                    <Text className="font-UrbanistMedium text-white">Mobile Device</Text>
                  </View>
                </View>
                </LinearGradient>
              </View>
          </View>
           {/* last bit */}
           <View className="bg-white/95 shadow-md shadow-gray-600/50 p-3 rounded-2xl mt-2">
          <Text>Last bit</Text>
           </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
