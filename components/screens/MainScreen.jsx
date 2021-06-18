import "react-native-gesture-handler";
import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Pressable, Image } from "react-native";

import Header from "../Header";
import Pieces from "../Pieces";
import Button from "../Button";
import CustomModal from "../Modal";

const MainScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
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
          source={require("../../assets/image-rules1.png")}
        />
      </CustomModal>
      <Button title="RULES" onPress={() => setModalVisible(true)} />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d3251",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    paddingTop: 48,
    width: "100%",
  },
  text: {
    color: "#fff",
  },
  rules: {
    width: "100%",
    height: 300,
  },
});
