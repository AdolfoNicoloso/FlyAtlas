import { View, Text, StatusBar } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar />
      <Text className="text-3xl font-bold text-blue-600">FlyAtlas 🚀</Text>
      <Text className="mt-2 text-base text-gray-700">Expo + NativeWind is live</Text>
    </View>
  )
}

