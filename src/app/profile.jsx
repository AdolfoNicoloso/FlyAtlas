import { View, Text } from 'react-native'

export default function ProfileScreen() {
  return (
    <View className="flex-1">
      <View className="mx-auto w-full max-w-5xl px-4 py-8">
        <View className="rounded-2xl bg-fly-surface p-6">
          <Text className="text-2xl font-semibold text-fly-text">
            Profile / Settings
          </Text>
          <Text className="mt-2 text-fly-muted">
            Blank profile/settings — account, preferences, sync.
          </Text>
        </View>
      </View>
    </View>
  )
}
