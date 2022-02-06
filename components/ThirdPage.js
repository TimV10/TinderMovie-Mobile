import React, { useState, childRefs, useMemo, useEffect  } from 'react';
import { StyleSheet, Text, View, Image, Card, CardContainer, CardTitle,} from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import TinderCard from 'react-tinder-card'

 
export default function ThirdPage({navigation,route }) {

  const {code} = route.params;

    const [data, setData] = useState([]);

    const getMovies = async () => {
         const response = await fetch('https://tinder-for-movies-rhv5.herokuapp.com/api/group/'+ code +'/movies');
         const json = await response.json();
        console.log(json)
         setData(json.movies);

     }

     useEffect(() => {
        getMovies();
      }, []);
    
   const db = data

const alreadyRemoved = []
let charactersState = db    

  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.movie_id !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.movie_id))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].movie_id // Find the card object to be removed
      const index = db.map(person => person.movie_id).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
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
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} key={character.movie_id} onSwipe={(dir) => swiped(dir, character.movie_id)} onCardLeftScreen={() => outOfFrame(character.movie_id)}>
            <Image
            style={{width: 100, height: 100}} 
            source={{
                uri: 'https://image.tmdb.org/t/p/original'+character.poster_path
            }}
        />  
          </TinderCard>
        )}
         {lastDirection ? <Text key={lastDirection}>You swiped {lastDirection}</Text> : <Text>Swipe a card or press a button to get started!</Text>}
    <TouchableOpacity onPress={() => swipe('left')} style={styles.checkButton}>
    <FontAwesomeIcon icon={ faCheck } size={50} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => swipe('right')} style={styles.crossButton}>
    <FontAwesomeIcon icon={ faTimes } size={50} />
    </TouchableOpacity>
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
