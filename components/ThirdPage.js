import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';

export default function ThirdPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.Logo}>Logo</Text>
      <TouchableOpacity>
        Create
      </TouchableOpacity>
      <TouchableOpacity>
        Join
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontFamily:''
  }
});
