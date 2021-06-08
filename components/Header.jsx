import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScoreBoard from './ScoreBoard';


const Header =()=>{

    return (
        <View style={styles.container}>
                <Text style={styles.text}>ROCK {"\n"}PAPER {"\n"}SCISSORS</Text>
                <ScoreBoard />
         </View>
    )
}


const styles = StyleSheet.create({
  container: {
    minHeight:60,
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderRadius: 10,
    maxWidth: 300,
    width: '100%', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    // flex: 1

  },
  text:{
    color:"#fff",
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
  }
});

export default Header;