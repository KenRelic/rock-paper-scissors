import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Alert, Pressable } from "react-native";
import Button from "./Button";

const Pieces = ({ setSelectionModal, selectionModal, navigation, route }) => {
  const [CPUPick, setCPUPick] = React.useState("default");
  const piece = route.params.paramKey;
  const icons = {
    Spaper: <Image source={require(`../assets/icon-paper.png`)} />,
    Srock: <Image source={require(`../assets/icon-rock.png`)} />,
    Sscissors: <Image source={require(`../assets/icon-scissors.png`)} />,
  };

  const optionList = [
    "Srock",
    "Sscissors",
    "Spaper",
    "Sscissors",
    "Spaper",
    "Srock",
  ];

  const userSelect = (e) => {
    // Alert.alert(e);
    navigation.navigate("Main", {
      paramKey: e,
    });
    randomize();
  };

  const randomize = () => {
    const index = Math.floor(Math.random() * 5);
    const cpuPick = optionList[index];
    setCPUPick((prev) => cpuPick);
  };

  return (
    <View style={styles.container}>
      {piece ? (
        <View>
          <View style={styles.selectionContainer}>
            <View style={styles.selectedPiece}>
              <Pressable
                style={styles[piece]}
                onPress={() => userSelect("paper")}>
                {icons[piece]}
              </Pressable>
              <Text style={styles.text}>YOUR CHOICE</Text>
            </View>

            <View style={styles.selectedPiece}>
              <Pressable style={styles[CPUPick]}>
                {CPUPick !== "default" && icons[CPUPick]}
              </Pressable>
              <Text style={styles.text}>CPU Choice</Text>
            </View>
          </View>

          <View style={styles.notice}>
            <Text style={styles.verdict}>You Win</Text>
            <Pressable style={styles.playAgain}>
              <Button title="PLAY AGAIN" filled />
            </Pressable>
          </View>
        </View>
      ) : (
        <View>
          <Image source={require("../assets/bg-triangle.png")} />
          <Pressable style={styles.paper} onPress={() => userSelect("Spaper")}>
            <Image source={require("../assets/icon-paper.png")} />
          </Pressable>
          <Pressable style={styles.rock} onPress={() => userSelect("Srock")}>
            <Image source={require("../assets/icon-rock.png")} />
          </Pressable>
          <Pressable
            style={styles.scissors}
            onPress={() => userSelect("Sscissors")}>
            <Image source={require("../assets/icon-scissors.png")} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  verdict: {
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 32,
    fontWeight: "bold",
  },
  notice: {
    marginTop: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    width: "100%",
    position: "relative",
    marginTop: 30,
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 30,
    fontWeight: "bold",
  },
  selectionContainer: {
    display: "flex",
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedPiece: {
    flexDirection: "column",
    // flex: 1,
  },
  default: {
    display: "block",
    margin: "auto",
    backgroundColor: "#888",
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#555",
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
  Srock: {
    display: "block",
    margin: "auto",
    backgroundColor: "#fff",
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  Spaper: {
    backgroundColor: "#fff",
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#eca015",
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
  Sscissors: {
    backgroundColor: "#fff",
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#de3c5b",
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
  rock: {
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
  paper: {
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
  scissors: {
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
