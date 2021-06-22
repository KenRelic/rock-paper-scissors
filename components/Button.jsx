import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Button(props) {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable
      style={[styles.button, props.outline ? styles.outline : styles.filled]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,

    width: "100%",
    maxWidth: 150,
    margin: "auto",
  },
  filled: {
    backgroundColor: "#4499ddee",
    elevation: 3,
    // maxWidth: ,
  },
  outline: {
    backgroundColor: "transparent",
    paddingHorizontal: 12,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#4499ddee",
    margin: "auto",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "monospace",
  },
});
