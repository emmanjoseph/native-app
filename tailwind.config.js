/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        UrbanistExtraBold:["Urbanist-ExtraBold","sans-serif"],
        UrbanistBold:["Urbanist-Bold","sans-serif"],
        UrbanistSemibold:["Urbanist-SemiBold","sans-serif"],
        UrbanistRegular:["Urbanist-Regular","sans-serif"],
        UrbanistMedium:["Urbanist-Medium","sans-serif"],
        UrbanistLight:["Urbanist-Light","sans-serif"],
        UrbanistThin:["Urbanist-Light","sans-serif"],

      },
      colors:{
        secondary:"#7F8183",
        luminousgreen:"#66FF4C"
      }
    },
  },
  plugins: [],
}