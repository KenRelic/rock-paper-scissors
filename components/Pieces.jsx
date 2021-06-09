import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const Pieces =()=>{

    return (
        <View style={styles.container}>    
             <Image source={require('../assets/bg-triangle.png')} />            
             <View style={styles.pieceP}>  
             <Image source={require('../assets/icon-paper.png')} />
             </View>            
             <View style={styles.pieceR}> 
             <Image source={require('../assets/icon-rock.png')} />
              </View>
             <View style={styles.pieceS}> 
             <Image source={require('../assets/icon-scissors.png')} />
             </View>
             
         </View>
    )
}


const styles = StyleSheet.create({
  container: {
    width:'100%',
    position:'relative'
  },
  pieceR:{
    position: 'absolute',
    backgroundColor:"#fff",
    height: 100,
    width:100,
    borderRadius: 100/2,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    top:-40,
    right:0
  },
   pieceP:{
    position: 'absolute',
    backgroundColor:"#fff",
    height: 100,
    width:100,
    borderRadius: 100/2,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    top:-40,
  },
   pieceS:{
    position: 'absolute',
    backgroundColor:"#fff",
    height: 100,
    width:100,
    borderRadius: 100/2,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
   left:'33%',
    bottom: 0
  }

});

export default Pieces;