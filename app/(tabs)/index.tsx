import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
  return (
   <View className="flex-1 items-center justify-center bg-yellow-500">
      <Text className="text-5xl font-bold text-dark-200">
        Welcome!
      </Text>
      <Text className="text-xl text-white mt-4">
       Patrick!
      </Text>
      
    </View>
  );
}
