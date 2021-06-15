import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
// import Modal from "react-native-modal";

const CustomModal = (props) => {
  const { modalVisible, setModalVisible } = props;
  return (
    <GestureRecognizer
      style={{ flex: 0 }}
      // onSwipeUp={() => setModalVisible(true)}
      onSwipeDown={() => setModalVisible(false)}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onSwipeComplete={(e) => setModalVisible(false)}
        // onSwipe={(e) => setModalVisible(false)}
        // onSwipeThreshold={20}
        // swipeDirection="down"
        // onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {props.children}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    // padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 24,
    elevation: 2,
    position: "absolute",
    top: -25,
    right: "46%",
    backgroundColor: "#2196F3",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CustomModal;
