import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';

export default function FourthPage() {
  return (
    <View style={styles.container}>
        <View style={styles.resultTable}>
            <View>
                <Text>
                    Picture
                </Text>
            </View>
            <View>
                <Text>
                    Votes
                </Text> 
            </View>
        </View>
        
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

  resultTable: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text:{
    fontFamily:''
  }
});
