import './global.css'
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {

  const [loaded] = useFonts({
    "Urbanist-Bold": require("@/assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-ExtraBold": require("@/assets/fonts/Urbanist-ExtraBold.ttf"),
    "Urbanist-SemiBold": require("@/assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Medium": require("@/assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-Regular": require("@/assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-Light": require("@/assets/fonts/Urbanist-Light.ttf"),
    "Urbanist-Thin": require("@/assets/fonts/Urbanist-Thin.ttf"),
  });

  useEffect(()=>{
    if (loaded) {
      SplashScreen.hideAsync();
    }
  },[loaded]);

  if (!loaded) {
    return null;
  }
  return(
     <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
     </Stack>
  )
  
}
