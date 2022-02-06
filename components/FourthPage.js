import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function FourthPage() {

  return (
    <LinearGradient
    // Background Linear Gradient
    colors={['rgba(44, 41, 36, 0.8)','rgba(87, 68, 60, 0.8)', 'rgba(136, 87, 67, 0.8)', 'rgba(179, 87, 48, 0.8)', 'rgba(222, 79, 18, 0.8)']}
    style={styles.background}
  >
    <View style={styles.container}>
        <View style={styles.resultTable}>
            
        </View>
    </View>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

  resultTable: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  text:{
    fontFamily:''
  }
});
