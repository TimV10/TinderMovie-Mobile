import { StyleSheet, Text, Touchable, View , Image } from 'react-native';
import React, { useState } from "react";
import { TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity } from 'react-native-web';

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
<View>
    <Image
         style={{width: 400, height: 620, borderRadius: 35, borderWidth: 5}} 
        source={require('../assets/TinderMovieLogo.jpg')
        }
      />
    {showHomeButton && <View style={styles.container}>
    <Image
         style={{width: 400, height: 400}} 
        source={{
          uri: './assets/icon.png',
        }}
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
    {showCreateForm && <View>
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

      {showJoinForm && <View>
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

  input: {
    backgroundColor: '#cba',
    paddingVertical: 10
  },


  fixToText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
});
