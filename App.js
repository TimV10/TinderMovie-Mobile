import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstPage from './components/FirstPage';
import { NavigationContainer, DefaultTheme   } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'green',
    background: 'white',
    card: 'black',
    text: 'yellow',
    border: 'green',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName='FirstPage' >
        <Stack.Screen
         name="FirstPage"
         component={FirstPage}
         options={{ title: 'Create Room' }}
        />
        <Stack.Screen name="SecondPage" component={SecondPage} options={{ title: 'Room Made' }}/>
        <Stack.Screen name="ThirdPage" component={ThirdPage} options={{ title: 'Movie Room' }}/>
        <Stack.Screen name="FourthPage" component={FourthPage} options={{ title: 'Result Room' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    background: 'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
