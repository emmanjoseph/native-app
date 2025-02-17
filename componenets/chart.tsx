import { View, Text } from 'react-native'
import React from 'react'
import { LineChart } from "react-native-gifted-charts";
const Chart = () => {
    const lineData = [
        {value: 23},
        {value: 20},
        {value: 48},
        {value: 40},
        {value: 56},
        {value: 40},
        {value: 34},
        {value: 24},
        {value: 34},
        {value: 44},
        
      ];
  return (
    <LineChart
    areaChart
    stepChart
    hideDataPoints
    isAnimated
    animationDuration={1200}
    startFillColor="#0BA5A4"
    startOpacity={2}
    endOpacity={0.3}
    initialSpacing={0}
    data={lineData}
    spacing={40}
    thickness={5}
    hideRules
    hideYAxisText
    yAxisColor="#0BA5A4"
    showVerticalLines={false}
    verticalLinesColor="rgba(14,164,164,0.5)"
    xAxisColor="#0BA5A4"
    color="#0BA5A4"
    height={200}
    width={270}
  />
    
  )
}

export default Chart