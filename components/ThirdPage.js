import React, { useState, childRefs, useMemo, useEffect  } from 'react';
import { StyleSheet} from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import TinderCard from 'react-tinder-card'

import styled from 'styled-components/native'


const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Header = styled.Text`
    color: #000;
    font-size: 30px;
    margin-bottom: 30px;
`

const CardContainer = styled.View`
    width: 90%;
    max-width: 260px;
    height: 300px;
`

const Card = styled.View`
    position: absolute;
    background-color: #fff;
    width: 100%;
    max-width: 260px;
    height: 300px;
    shadow-color: black;
    shadow-opacity: 0.2;
    shadow-radius: 20px;
    border-radius: 20px;
    resize-mode: cover;
`

const CardImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
`

const CardTitle = styled.Text`
    position: absolute;
    bottom: 0;
    margin: 10px;
    color: #fff;
`

const Buttons = styled.View`
    margin: 20px;
    z-index: -100;
`

const InfoText = styled.Text`
    height: 28px;
    justify-content: center;
    display: flex;
    z-index: -100;
`

 
export default function ThirdPage({navigation,route }) {

  const {data,groupID} = route.params;

  const db = data;
  const alreadyRemoved = []
  let charactersState = db

  const Advanced = () => {

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
    charactersState = charactersState.filter(character => character.title !== name)
    
    if (charactersState.length === 0){
      navigation.navigate("FourthPage",{    
        data: data,
        groupID
        });
    }
    setCharacters(charactersState)

  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.title))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].title // Find the card object to be removed
      const index = db.map(person => person.title).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }


  return (
    <LinearGradient
    // Background Linear Gradient
    colors={['rgba(44, 41, 36, 0.8)','rgba(87, 68, 60, 0.8)', 'rgba(136, 87, 67, 0.8)', 'rgba(179, 87, 48, 0.8)', 'rgba(222, 79, 18, 0.8)']}
    style={styles.background}
  >
    <Container>
      <Header>Movinder</Header>
      <CardContainer>
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} key={character.title} onSwipe={(dir) => swiped(dir, character.title)} onCardLeftScreen={() => outOfFrame(character.title)}>
            <Card>
              <CardImage source={"https://image.tmdb.org/t/p/original"+character.poster_path}>
                <CardTitle>{character.title}</CardTitle>
              </CardImage>
            </Card>
          </TinderCard>
        )}
      </CardContainer>
      <Buttons>
        <Button onPress={() => swipe('left')} title='Swipe left!' />
        <Button onPress={() => swipe('right')} title='Swipe right!' />
      </Buttons>
      {lastDirection ? <InfoText key={lastDirection}>You swiped {lastDirection}</InfoText> : <InfoText>Swipe a card or press a button to get started!</InfoText>}
    </Container>
        </LinearGradient>
  );
}

return (<Advanced ></Advanced>)
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
