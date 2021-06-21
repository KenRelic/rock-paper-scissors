import "react-native-gesture-handler";
import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Pressable, Image } from "react-native";

// import Header from "../Header";
import Button from "../Button";
// import Img from "../../assets/rps-bg2.png";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        style="auto"
        barStyle={"light-content"}
        backgroundColor="#61dafb"
      />
      <Image style={styles.img} source={require("../../assets/rps-bg2.png")} />
      <Button
        title="Play"
        style={styles.button}
        onPress={() =>
          navigation.navigate("Main", {
            paramKey: "",
          })
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d3251",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    paddingTop: 48,
  },
  text: {
    color: "#fff",
  },
  img: {
    // width: 700,
    // height: "75%",
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
  button: {
    backgroundColor: "red",
  },
});
