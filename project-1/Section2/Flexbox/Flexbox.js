import { View, Text } from "react-native";
import { styles } from "./style";
export default function Flexbox() {
    return (
        <View style={styles.container}>
            <View style = {styles.boxOne}><Text>1</Text></View>
            <View style = {styles.boxTwo}><Text>2</Text></View>
            <View style = {styles.boxThree}><Text>3</Text></View>
        </View>
    )
} 