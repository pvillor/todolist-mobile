import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles";

export function Task() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="circle" size={20} color="#4EA8DE" />
      </TouchableOpacity>

      <Text style={styles.taskName}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>

      <TouchableOpacity>
        <Feather name="trash" size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}