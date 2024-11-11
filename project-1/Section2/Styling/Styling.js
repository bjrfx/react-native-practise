import {
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { styles, textInput } from "./style";
import { useState } from "react";

export default function Styling() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("")
  }
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add goal" color={"crimson"} onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* This is a Scroll View ---- */}
        {/* <ScrollView>
          {courseGoals.map((goal, index) => {
            return (
              <Text style={styles.goalsList} key={index}>
                {" "}
                {goal}
              </Text>
            );
          })}
        </ScrollView> */}

        {/* This is a Flat List ---- */}
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => {
            return item.id
          }}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
              <Pressable android_ripple={{color: '#bbbbbb'}} onPress={() => deleteGoalHandler(itemData.item.id)}>
                <Text style={styles.goalText}>
                {itemData.index + 1}
                {". "}
                {itemData.item.text + " " + itemData.item.id}
              </Text>
              </Pressable>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
