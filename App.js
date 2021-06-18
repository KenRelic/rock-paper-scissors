import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Pressable, Image } from "react-native";

import Header from "./components/Header";
import Pieces from "./components/Pieces";
import Button from "./components/Button";
import CustomModal from "./components/Modal";
import MainScreen from "./components/screens/MainScreen";
import HomeScreen from "./components/screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  const alertUser = () => {
    Alert.alert("hello");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="card"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          // options={{ title: "Welcome" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d3251",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    paddingTop: 48,
  },
  text: {
    color: "#fff",
  },
  rules: {
    width: "100%",
    height: 300,
  },
});
