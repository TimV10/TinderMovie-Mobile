import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, View, Image } from 'react-native';
import {TouchableOpacity } from 'react-native-web';
import { LinearGradient } from 'expo-linear-gradient';

export default function SecondPage({route,navigation}) {

    const { groupID,code } = route.params;
    const startButtonClicks = () =>{
        navigation.navigate("ThirdPage",{    
        code: code,
        });
    }


  return (
    <LinearGradient
    // Background Linear Gradient
    colors={['rgba(44, 41, 36, 0.8)','rgba(87, 68, 60, 0.8)', 'rgba(136, 87, 67, 0.8)', 'rgba(179, 87, 48, 0.8)', 'rgba(222, 79, 18, 0.8)']}
    style={styles.background}
  >
    <View style={styles.container}>
    <Image
         style={styles.logo} 
        source={require('../assets/TinderMovie2.jpg')
        }
      />
      <Text>Code: {JSON.stringify(groupID)}</Text>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.text} onPress={startButtonClicks}>
                Start
          </Text>
      </TouchableOpacity>
    </View>
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  logo:
  {
      marginTop:10,
      width: '50%',
      height: 500,
      borderRadius: 35,
      borderWidth: 5
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width:30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    margin:5
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
