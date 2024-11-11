import { StyleSheet } from "react-native";
let textInput = " Tap to enter Your Goal";
textInput = textInput.toLocaleUpperCase();
const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    // paddingHorizontal: 16,
    flex: 1
  },

  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 24,
    // borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
    padding: 16
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    marginRight: 10,
    padding: 8,
    backgroundColor: 'rgba(220, 20, 60, 0.3)',
    color: '#fff',
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
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },

  button: {
    width: 100,
    marginHorizontal: 8
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'black', // Semi-transparent overlay background
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  }
});

export {styles, textInput}
