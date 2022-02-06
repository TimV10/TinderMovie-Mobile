import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function FourthPage({route, navigation}) {
    const { groupID,code } = route.params;
    const [data, setData] = useState([]);

    const getResults = async () => {
        try {
         const response = await fetch('https://tinder-for-movies-rhv5.herokuapp.com/api/group/'+ groupID +'/movies/ratings');
         const json = await response.json();
         console.log(json);
         setData(json);
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }

     useEffect(() => {
        getResults();
      }, []);

  return (
    <LinearGradient
    // Background Linear Gradient
    colors={['rgba(44, 41, 36, 0.8)','rgba(87, 68, 60, 0.8)', 'rgba(136, 87, 67, 0.8)', 'rgba(179, 87, 48, 0.8)', 'rgba(222, 79, 18, 0.8)']}
    style={styles.background}
  >
    <View style={styles.container}>
      <Text> WINNER: {data[0].title}</Text>
      <Text> Votes: {data[0].votes}</Text>
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
