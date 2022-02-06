import { StyleSheet, Text, Touchable, View , Image } from 'react-native';
import React, { useState } from "react";
import { TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-web';
import { LinearGradient } from 'expo-linear-gradient';

export default function FirstPage({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          roomName: '',
          numberOfMovie: '',
          roomNumber: '',
        }
      });
      const onSubmit = (data) => {
            navigation.navigate("SecondPage");
            console.log(data)
        
        };

     const [showCreateForm, setShowCreateForm] = useState(false);
     const [showJoinForm, setShowJoinForm] = useState(false);
     const [showHomeButton, setShowHomeButton] = useState(true);

     const createButtonClick = () =>{
        setShowCreateForm(!showCreateForm)
        setShowHomeButton(!showHomeButton)
     }

     const joinButtonClick = () =>{
        setShowJoinForm(!showJoinForm)
        setShowHomeButton(!showHomeButton)
     }
      
     const backButtonClick = () =>{
        setShowHomeButton(true)
        if(showJoinForm){
            setShowJoinForm(false)
        }
        if(showCreateForm){
            setShowCreateForm(false)
        }

     }
      
  return (

<LinearGradient
        // Background Linear Gradient
        colors={['rgba(44, 41, 36, 0.8)','rgba(87, 68, 60, 0.8)', 'rgba(136, 87, 67, 0.8)', 'rgba(179, 87, 48, 0.8)', 'rgba(222, 79, 18, 0.8)']}
        style={styles.background}
      >
    {showHomeButton && <View style={styles.container}>
    <Image
         style={styles.logo} 
        source={require('../assets/TinderMovie2.jpg')
        }
      />
    <View style={styles.fixToText}>
    <TouchableOpacity style={styles.button} onPress={createButtonClick}>
        <Text style={styles.text}>Create</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={joinButtonClick}>
        <Text style={styles.text}>Join</Text>
    </TouchableOpacity>
    </View>
    </View> }
    {showCreateForm && <View style={styles.form}>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Room Name"
          />
        )}
        name="roomName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Number Of Movie"
          />
        )}
        name="numberOfMovie"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      <TouchableOpacity style={styles.button} onPress={backButtonClick}>
        <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
      </View>}

      {showJoinForm && <View style={styles.form}>
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Room Number"
          />
        )}
        name="roomNumber"
      />
      {errors.firstName && <Text>This is required.</Text>}

     
      <Button title="Join" onPress={handleSubmit(onSubmit)} />
      <TouchableOpacity style={styles.button} onPress={backButtonClick}>
        <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
    
      </View>}


    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
    logo:
    {
        marginTop:10,
        width: '50%',
        height: 500,
        borderRadius: 35,
        borderWidth: 5
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },

input: {
    backgroundColor: '#cba',
    paddingVertical: 10,
    margin: 10,
    textAlign: 'center'
  },

  fixToText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  form:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
