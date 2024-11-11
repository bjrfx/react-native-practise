import { StyleSheet } from "react-native";
const textInput = " Your Goal..!";
const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    // paddingHorizontal: 16,
    flex: 1
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 20,
    padding: 8,
    backgroundColor: 'white',
  },

  goalsContainer: {
    flex:5
  },

  // goalsList: {
  //   color: "#fff",
  //   borderColor: '#cccccc',
  //   borderWidth: 1,
  //   marginBottom: 10,
  //   padding: 10,
  //   backgroundColor: 'crimson'
  // },
  goalText: {
    color: '#fff',
    padding: 10
  },

  goalItem: {
    margin: 10,
    borderRadius: 6,
    backgroundColor: 'crimson',
  }
});

export {styles, textInput}
