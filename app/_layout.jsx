import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-fly-bg">
      <NavBar />
      <Slot />
    </SafeAreaView>
  );
}
