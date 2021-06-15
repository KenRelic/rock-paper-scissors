import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Pressable, Image } from "react-native";

import Header from "./components/Header";
import Pieces from "./components/Pieces";
import Button from "./components/Button";
import CustomModal from "./components/Modal";

export default function App() {
  const alertUser = () => {
    Alert.alert("hello");
  };

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar
          style="auto"
          barStyle={"light-content"}
          backgroundColor="#61dafb"
        />
        <Header />
        <Pieces />
        <CustomModal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}>
          <Image
            style={styles.rules}
            source={require("./assets/image-rules1.png")}
          />
        </CustomModal>
        <Button title="RULES" onPress={() => setModalVisible(true)} />
      </View>
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
