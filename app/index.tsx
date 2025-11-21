import { Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
   <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-2xl font-bold text-white">
        Welcome to Mobile Development
      </Text>
      <Text className="text-xl text-white mt-4">
       Patrick!
      </Text>
    </View>
  );
}
