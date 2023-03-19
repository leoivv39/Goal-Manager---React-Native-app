import { useState, useRef } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { v4 as uuidv4 } from "uuid";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  function setModalVisibilityTrue() {
    setModalVisibility(true);
  }

  function setModalVisibilityFalse() {
    setModalVisibility(false);
  }

  function addGoalHandler(enteredGoalText) {
    if (goals.length === 20) {
      alert("Too many goals! Goal has not been added!");
      return;
    }
    setGoals((prevGoals) => {
      return [...prevGoals, { text: enteredGoalText, id: uuidv4() }];
    });
  }

  function deleteGoalHandler(id) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <View style={styles.appContainer}>
        <GoalInput
          addGoalHandler={addGoalHandler}
          isVisible={modalVisibility}
          endModal={setModalVisibilityFalse}
        />
        <View style={styles.addGoalButton}>
          <Button
            title="Add new Goal"
            onPress={setModalVisibilityTrue}
            color="#8c1bcc"
          ></Button>
        </View>

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#343769",
  },
  goalsContainer: {
    marginTop: 30,
  },
  addGoalButton: {
    paddingTop: 100,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
