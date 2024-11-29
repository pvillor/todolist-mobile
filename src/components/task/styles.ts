import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    paddingRight: 8,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 8
  },

  taskTitle: {
    color: '#F2F2F2',
    fontWeight: '400',
    fontSize: 14,
    flex: 1
  },

  completedTaskTitle: {
    color: '#808080',
    fontWeight: '400',
    fontSize: 14,
    flex: 1,
    textDecorationLine: 'line-through'
  },

  completedIcon: {
    backgroundColor: '#5E60CE',
    borderRadius: 9999,
    paddingHorizontal: 4,
    paddingVertical: 3
  }
})
