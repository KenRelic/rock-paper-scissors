import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ScoreBoard = ({ userSCore }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SCORE</Text>
      <Text style={styles.score}>{userSCore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height:'100%',
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderRadius: 10,
    maxWidth: 200,
    width: "30%",
    // display:'flex',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // flex: 1
  },
  text: {
    color: "#1d3251",
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  score: {
    fontSize: 56,
    color: "#1d3251",
    fontWeight: "bold",
  },
});

export default ScoreBoard;
