import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

import Task from "./Task";
// -------------------DISPLAY TASK--------------------------

function ShowTask({ route, navigation }) {
  const { taskItems, deleteTask } = route.params;
  
  return (
    <View style={styles.displayView}>
      {taskItems.map((item) => {
        return (
          <View style={styles.box}>
            <Task key={item[1]} text={item[0]} />
            <Button
              style={styles.deleteButton}
              title="Delete"
              onPress={() => {
                deleteTask(item[0]);
              }}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  displayView: {
    alignItems: "center",
    margin: 20,
  },
  box: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default ShowTask;
