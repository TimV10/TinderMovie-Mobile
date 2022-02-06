import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import TinderCard from 'react-tinder-card'

 
export default function ThirdPage({navigation}) {

  
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

    const startButtonClicks = () =>{
        navigation.navigate("FourthPage");
    }

  return (
    <LinearGradient
    // Background Linear Gradient
    colors={['rgba(44, 41, 36, 0.8)','rgba(87, 68, 60, 0.8)', 'rgba(136, 87, 67, 0.8)', 'rgba(179, 87, 48, 0.8)', 'rgba(222, 79, 18, 0.8)']}
    style={styles.background}
  >
    <View style={styles.container}>
    <TouchableOpacity style={styles.checkButton}>
    <FontAwesomeIcon icon={ faCheck } size={50} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.crossButton}>
    <FontAwesomeIcon icon={ faTimes } size={50} />
    </TouchableOpacity>
    <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
        <Image
            style={{width: 100, height: 100}} 
            source={{
                uri: 'https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'
            }}
        />    
    </TinderCard>
        <Text>Vote Average</Text>
        <Text>Vote Count</Text>
        <Text>Overview</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text} onPress={startButtonClicks}>
                End Sessions
          </Text>
      </TouchableOpacity>
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

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  checkButton:{
      position:'absolute',
      top:'50%',
      left:'0%',
      marginLeft:30

  },

  crossButton:{
    position:'absolute',
    top:'50%',
    left:'95%',

}
});
