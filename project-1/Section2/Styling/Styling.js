import {
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
  Modal,
  Image,
} from "react-native";
import { styles, textInput } from "./style";
import { useState } from "react";

export default function Styling() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    endAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false)
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add Goal"
        color={"green"}
        onPress={startAddGoalHandler}
      />
      <Modal visible={modalIsVisible} animationType="slide" transparent={false}>
        <View style={styles.modalOverlay}>
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../../assets/images/goal.png')}/>
        <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 30, marginBottom: '15%'}}>Add your Goals</Text>
          <TextInput
            style={styles.textInput}
            placeholder={textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            placeholderTextColor="white"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Add"
                color={"green"}
                onPress={addGoalHandler}
              />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" color={"crimson"} onPress={() => {endAddGoalHandler()}}/>
            </View>
          </View>
        </View>
        </View>
      </Modal>
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
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Pressable
                  android_ripple={{ color: "#bbbbbb" }}
                  onPress={() => deleteGoalHandler(itemData.item.id)}
                >
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
