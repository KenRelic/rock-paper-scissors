import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Alert, Pressable } from "react-native";

const Pieces = () => {
  const alertUser = (e) => {
    Alert.alert("hello");
    // console.log(e.target.left);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/bg-triangle.png")} />
      <Pressable style={styles.pieceP} onPress={alertUser}>
        <Image source={require("../assets/icon-paper.png")} />
      </Pressable>
      <Pressable style={styles.pieceR} onPress={alertUser}>
        <Image source={require("../assets/icon-rock.png")} />
      </Pressable>
      <Pressable style={styles.pieceS} onPress={alertUser}>
        <Image source={require("../assets/icon-scissors.png")} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    marginTop: 30,
  },
  pieceR: {
    position: "absolute",
    backgroundColor: "#fff",
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: -40,
    right: 0,
    borderColor: "#4f6bf3",
    shadowColor: "#4f6baa",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    // shadowRadius: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 10,
  },
  pieceP: {
    position: "absolute",
    backgroundColor: "#fff",
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: -40,
    borderColor: "#eca015",
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 10,
  },
  pieceS: {
    position: "absolute",
    backgroundColor: "#fff",
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: "33%",
    bottom: 0,
    borderColor: "#de3c5b",
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 10,
  },
});

export default Pieces;
