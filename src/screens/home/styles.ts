import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
  },

  logo: {
    marginTop: 70,
    marginBottom: 70,
  },

  tasks: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 32,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    gap: 32
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
    marginTop: -28,
  },
  
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    color: '#F2F2F2',
    backgroundColor: '#262626',
    borderRadius: 6,
  },

  button: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },

  tasksContainer: {
    gap: 20
  },

  tasksSummary: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  tasksSummaryDetails: {
    flexDirection: 'row',
    gap: 8
  },

  createdTasksSummaryText: {
    color: '#4EA8DE',
    fontWeight: 'bold'
  },

  completedTasksSummaryText: {
    color: '#8284FA',
    fontWeight: 'bold'
  },

  tasksSummaryCount: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    color: '#D9D9D9',
    backgroundColor: '#333333',
    borderRadius: 9999,
    fontWeight: 'bold'
  },

  emptyList: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#333333'
  },

  emptyListTitle: {
    fontWeight: 'bold',
    color: '#808080'
  },

  emptyListDescription: {
    color: '#808080',
  }
})