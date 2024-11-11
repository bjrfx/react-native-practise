import { StyleSheet, View, Text } from "react-native";
import SectionTwo from "./Section2/SectionTwo";
import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light"/>
      <View style = {styles.main}>
      <Text style = {{color: "white", textAlign: 'center', marginTop: "15%", fontSize: 40, fontWeight: "bold"}}>BDOT SOFTWARE</Text>
      <SectionTwo />
    </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    height: "100%",
  }
})
