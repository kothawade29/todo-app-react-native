import { StatusBar } from "expo-status-bar";
import React from "react";

import AddTask from "./AddTask";
import DisplayTask from "./DisplayTask";
import AppTask from "./AppTask";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// ----------------------------APP---------------------------------------------------
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppTask" component={AppTask} />
        <Stack.Screen name="AddTask" component={AddTask} />
        <Stack.Screen name="DisplayTask" component={DisplayTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
