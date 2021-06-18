import "react-native-gesture-handler";
import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Pressable, Image } from "react-native";

import Header from "../Header";
import Button from "../Button";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        style="auto"
        barStyle={"light-content"}
        backgroundColor="#61dafb"
      />
      <Header />

      <Button title="Play" onPress={() => navigation.navigate("Main")} />
    </View>
  );
};

export default HomeScreen;

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
