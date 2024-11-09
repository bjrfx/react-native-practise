import { StyleSheet } from "react-native";
const size = "auto";
const styles = StyleSheet.create({
  boxOne: {
    backgroundColor: "red",
    width: size,
    height: size,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  boxTwo: {
    backgroundColor: "green",
    width: size,
    height: size,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  boxThree: {
    backgroundColor: "blue",
    width: size,
    height: size,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  container: {
    padding: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
    height: 300,
    alignItems: 'center',
  },
});

export { styles };
