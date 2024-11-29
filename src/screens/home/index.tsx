import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import { Task } from "../../components/task";
import { useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState<{ id: number, title: string, isCompleted: boolean}[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  function handleCreateTask(title: string) {
    setTasks(prevState => [{ 
      id: tasks.length + 1,
      title,
      isCompleted: false
     }, ...prevState])

     setNewTaskTitle('')
  }
  
  function handleDeleteTask(taskId: number) {
    setTasks(prevState => prevState.filter(task => task.id !== taskId))
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />

      <View style={styles.tasks}>
        <View style={styles.form}>
          <TextInput 
            style={styles.input} 
            placeholder="Adicione uma nova tarefa" 
            placeholderTextColor="#808080" 
            value={newTaskTitle}
            onChangeText={setNewTaskTitle}
          />

          <TouchableOpacity style={styles.button} onPress={() => handleCreateTask(newTaskTitle)}>
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
            data={tasks}
            renderItem={({ item }) => <Task title={item.title} isCompleted={item.isCompleted} onDelete={() => handleDeleteTask(item.id)} />}
            keyExtractor={(_, index) => `task${index}`}
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
