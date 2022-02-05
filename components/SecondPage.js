import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';

export default function SecondPage({navigation}) {

    const startButtonClicks = () =>{
        navigation.navigate("ThirdPage");
    }


  return (
    <View style={styles.container}>
      <Text style={styles.Logo}>Logo</Text>
      <Text style={styles.sharedLink}>Shared Code</Text>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.text} onPress={startButtonClicks}>
                Start
          </Text>
      </TouchableOpacity>
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

});
