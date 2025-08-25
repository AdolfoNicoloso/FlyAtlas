import { View, Text, Pressable } from "react-native";
import { Link, usePathname } from "expo-router";

function NavItem({ href, label }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} asChild>
      <Pressable className={`px-3 py-2 rounded-xl ${active ? "bg-white/10" : "bg-transparent"}`}>
        <Text className={`${active ? "text-fly-text" : "text-fly-muted"} text-sm font-medium`}>
          {label}
        </Text>
      </Pressable>
    </Link>
  );
}

export default function NavBar() {
  return (
    <View className="bg-fly-surface/80 border-b border-white/10">
      <View className="h-16 px-4 w-full self-center flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View className="w-8 h-8 rounded-xl" style={{ backgroundColor: "#3B82F6" }} />
          <Text className="ml-2 text-fly-text font-semibold tracking-wide">FlyApp</Text>
        </View>
        <View className="flex-row">
          <NavItem href="/" label="Home" />
          <NavItem href="/study" label="Study / Practice" />
          <NavItem href="/test" label="Test" />
          <NavItem href="/profile" label="Profile / Settings" />
        </View>
      </View>
    </View>
  );
}
