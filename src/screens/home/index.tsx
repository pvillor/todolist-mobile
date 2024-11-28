import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons"

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />

      <View style={styles.tasks}>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Adicione uma nova tarefa" placeholderTextColor="#808080" />

          <TouchableOpacity style={styles.button}>
            <Feather name="plus-circle" color="#F2F2F2" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
