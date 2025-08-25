import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-fly-bg">
      {/* Top nav for all screens */}
      {require('../components/NavBar').default()}
      {/* Current route content */}
      <Slot />
    </SafeAreaView>
  )
}
