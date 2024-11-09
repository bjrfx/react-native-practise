import { StyleSheet, View, Text } from "react-native";
import SectionTwo from "./Section2/SectionTwo";

export default function App() {
  return (
    <View style = {styles.main}>
      <Text style = {{color: "white", textAlign: 'center', marginTop: "15%", fontSize: 40, fontWeight: "bold"}}>BDOT SOFTWARE</Text>
      <SectionTwo />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    height: "100%",
  }
})
