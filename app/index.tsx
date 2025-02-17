import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaView>
      <View className="bg-white h-full py-6 px-4">
        <Text>Welcome</Text>
        <TouchableOpacity
        onPress={()=> router.push("/(tabs)/home")} 
        className="bg-blue-500 py-5 rounded-2xl flex items-center justify-center">
          <Text className="text-white font-UrbanistMedium">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
