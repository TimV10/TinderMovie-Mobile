import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';

export default function FourthPage() {
  return (
    <View style={styles.container}>
        <View>
        <Image
            style={{width: 400, height: 400}} 
            source={{
                uri: 'https://image.tmdb.org/t/p/original/'+ poster_path
            }}
        />     
        <Text>{vote_average}</Text>
        <Text>{vote_count}</Text>
        <Text>{overview}</Text>
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

  text:{
    fontFamily:''
  }
});
