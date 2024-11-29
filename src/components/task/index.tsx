import { Text, TouchableOpacity, View } from "react-native";
import { Feather, FontAwesome6 } from "@expo/vector-icons"
import { styles } from "./styles";

interface TaskProps {
  title: string
  isCompleted: boolean
}

export function Task({ title, isCompleted }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ padding: 8 }}>
        {isCompleted ? (
          <FontAwesome6 name="check" size={10} color="#fff" style={styles.completedIcon} />
        ) : (
          <Feather name="circle" size={20} color="#4EA8DE" />
        )}
      </TouchableOpacity>

      <Text style={isCompleted ? styles.completedTaskTitle : styles.taskTitle}>
        {title}
      </Text>

      <TouchableOpacity style={{ padding: 8 }}>
        <Feather name="trash" size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}