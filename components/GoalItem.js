import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

function GoalItem(props) {
  function handleOnDelete() {
    props.onDeleteItem(props.id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={handleOnDelete}
        android_ripple={{ color: "#5875a3" }}
        style={({ pressed }) => (pressed ? styles.pressed : 0)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#31A6AB",
    margin: 5,
    color: "white",
    borderRadius: 8,
  },
  goalText: {
    color: "white",
    textAlign: "center",
    padding: 5,
  },
  pressed: {
    opacity: 0.5,
  },
});
