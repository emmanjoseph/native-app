import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { BarChart } from "react-native-gifted-charts";

const weeklyData = [
  { value: 15 },
  { value: 12 },
  { value: 26 },
  { value: 40 },
  { value: 33 },
  { value: 40 },
  { value: 23 },
];

const monthlyData = [
  { value: 80 },
  { value: 60 },
  { value: 90 },
  { value: 70 },
  { value: 85 },
  { value: 75 },
  { value: 95 },
];

const Chart = () => {
  const [selected, setSelected] = useState('Weekly');
  const options = ['Weekly', 'Monthly'];
  const [barData, setBarData] = useState(weeklyData);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handlePress = (option: string, index: number) => {
    setSelected(option);

    // Animate transition
    Animated.timing(animatedValue, {
      toValue: index * 100, // Adjust based on width
      duration: 250, 
      useNativeDriver: false,
    }).start();

    // Change dataset based on selected option
    setBarData(option === 'Weekly' ? weeklyData : monthlyData);
  };

  return (
    <View>
      <View className='my-5'>
        <Text className='text-lg font-UrbanistSemibold'>{selected} usage</Text>

        <BarChart 
          data={barData}
          backgroundColor="#FFFFFF"
          barWidth={10}
          roundedBottom
          roundedTop
          yAxisThickness={0}
          xAxisThickness={0}
          noOfSections={3}
        />
      </View>

      <View className='flex flex-row rounded-xl bg-white shadow shadow-secondary p-2'>
        {options.map((option, index) => (
          <TouchableOpacity
            key={option}
            onPress={() => handlePress(option, index)}
            className={`flex-1 ${selected === option ? "bg-blue-500":"bg-primary"} items-center rounded-xl w-1/2`}
            style={{ padding:10 }}
          >
            <Text className={`${selected === option ? "text-white":"text-black"} font-UrbanistSemibold`}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Chart;
