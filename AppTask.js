import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// -------------------APP-TASK-----------------------------

function AppTask({ navigation }) {
  const [taskItems, settaskItems] = useState([]);
  function addTask(task,id) {
    settaskItems([...taskItems, [task,id]]);
  }
  function deleteTask(id) {
    let copyItems = [...taskItems];
    settaskItems(copyItems.filter(task=>task[0]!==id));
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>TODO APP</Text>
      </View>

      <View style={styles.newTaskButton}>
        <Button
          title=" New task"
          onPress={() => {
            navigation.navigate("AddTask", {
              addTask: addTask,
            });
          }}
        />
      </View>

      <View style={styles.myTasksButton}>
        <Button
          title="Show my Tasks"
          onPress={() => {
            navigation.navigate("DisplayTask", {
              taskItems: taskItems,
              deleteTask: deleteTask,
            });
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
  newTaskButton: {
    alignItems: "center",
    justifyContent: "center",
    // flexDirection:'row',
  },
  myTasksButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default AppTask;
