import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center'
  },

  logo: {
    marginTop: 70,
    marginBottom: 70,
  },

  tasks: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1A1A1A',
    alignItems: 'center'
  },

  form: {
    width: '100%',
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'row',
    gap: 4,
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
})