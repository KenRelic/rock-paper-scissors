import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d3251',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 24
  },
  text:{
    color:"#fff"
  }
});
