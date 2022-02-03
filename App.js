import { StatusBar } from "expo-status-bar";
import React from "react";

import AddTask from "./AddTask";
import TaskList from "./TaskList";
import AppTask from "./AppTask";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// ----------------------------APP---------------------------------------------------
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppTask"
          component={AppTask}
          options={{ title: "Todo App" }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{ title: "Add Tasks" }}
        />
        <Stack.Screen
          name="TaskList"
          component={TaskList}
          options={{ title: "My Tasks" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
