import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import { Task } from "../../components/task";

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

        <View style={styles.tasksContainer}>
          <View style={styles.tasksSummary}>
            <View style={styles.tasksSummaryDetails}>
              <Text style={styles.createdTasksSummaryText}>Criadas</Text>
              <Text style={styles.tasksSummaryCount}>0</Text>
            </View>

            <View style={styles.tasksSummaryDetails}>
              <Text style={styles.completedTasksSummaryText}>Concluídas</Text>
              <Text style={styles.tasksSummaryCount}>0</Text>
            </View>
          </View>

          <FlatList
            data={Array.from({ length: 12 })}
            renderItem={() => <Task title="Task" isCompleted={true} />}
            keyExtractor={(_, index) => `${index}`}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 70 }}
            ListEmptyComponent={() => (
              <View style={styles.emptyList}>
                <FontAwesome5 name="clipboard-list" color="#333333" size={56} style={{ marginBottom: 16 }} />
                <Text style={styles.emptyListTitle}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.emptyListDescription}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  )
}
