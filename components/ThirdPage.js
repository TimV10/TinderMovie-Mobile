import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';

export default function ThirdPage({navigation}) {

    const startButtonClicks = () =>{
        navigation.navigate("FourthPage");
    }
    
  return (
    <View style={styles.container}>
        <Image
            style={{width: 100, height: 100}} 
            source={{
                uri: 'https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'
            }}
        />     
        <Text>Vote Average</Text>
        <Text>Vote Count</Text>
        <Text>Overview</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text} onPress={startButtonClicks}>
                End Sessions
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

  text:{
    fontFamily:''
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
    width:'50%',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    margin:5
  },

});
