import { TextInput, Button, View, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }

  function addGoalHandler() {
    if (enteredGoalText != "") {
      props.addGoalHandler(enteredGoalText);
    } else {
      alert("Enter text!");
      return;
    }
    setEnteredGoalText("");
    props.endModal();
  }

  return (
    <Modal
      visible={props.isVisible}
      animationType="slide"
      style={{ margin: 0, flex: 1 }}
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        ></Image>
        <TextInput
          style={styles.textInput}
          placeholder="Insert your goal here!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color="#a96afc"
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.endModal}
              color="#f02e51"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = {
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#311b6b",
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    borderColor: "#957ca3",
    backgroundColor: "#d3a1ed",
    width: "100%",
    padding: 16,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
};
