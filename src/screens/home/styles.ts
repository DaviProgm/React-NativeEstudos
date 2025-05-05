import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 24
  },
  eventName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 48
  },
  eventDate: {
    fontFamily: 'sans',
    color: '#1f1',
    fontWeight: 'bold',
    fontSize: 22
  },
  input: {
    marginRight: 17,
    flex: 1,
    height: 56,
    padding: 16,
    backgroundColor: '#1F1e25',
    borderRadius: 10,
    marginTop: 20,
    color: '#1f1',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonText: {
    color: 'black',
    fontSize: 20
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42

  },
  listEmptyText: {
    color: 'white',
    fontSize:20
  }
});