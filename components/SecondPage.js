import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';

export default function SecondPage() {

    const [onLoadText, setText] = useState("");
    
  return (
    <View style={styles.container}>
      <Text style={styles.Logo}>Logo</Text>
      <Text style={styles.sharedLink}>sharedLink</Text>
      <View style={styles.userStatus}>

      </View>
      <TouchableOpacity>
        Start
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
