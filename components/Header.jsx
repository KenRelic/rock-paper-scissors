import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScoreBoard from "./ScoreBoard";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const customFonts = {
  "Poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
  "Poppins-medium": require("../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
};

const Header = ({ userSCore }) => {
  // const [isLoaded] = useFonts(customFonts);

  // if (!isLoaded) {
  //   <AppLoading />;
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ROCK {"\n"}PAPER {"\n"}SCISSORS
      </Text>
      <ScoreBoard userSCore={userSCore} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: 10,
    maxWidth: 300,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // flex: 1
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    fontFamily: "monospace",
  },
});

export default Header;
