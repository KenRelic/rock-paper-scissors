import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, Pressable  } from 'react-native';

import Header from "./components/Header";
import Pieces from "./components/Pieces";
import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Pieces/>
      <Button title="RULES" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d3251',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:  24,
    paddingTop: 48,
  },
  text:{
    color:"#fff"
  }
});
