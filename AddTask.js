import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
} from "react-native";

// ----------------------ADD NEW TASK-------------------------

function AddTask({ route, navigation }) {
  const { addTask } = route.params;
  const [task, setTask] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Today's Task</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInputButton}
          value={task}
          placeholder="Add task"
          onChangeText={(text) => setTask(text)}
        />
        <Button
          title="add task"
          onPress={() => {
            addTask(task);
            setTask(null);
            Keyboard.dismiss();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerView: {
    padding: 40,
    alignItems: "center",
  },
  headerText: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
  },
  inputView: {
    alignItems: "center",
    justifyContent: "center",
  },
  textInputButton: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddTask;
