import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Switch, TextInput, Button } from 'react-native';

const listElements = ["Juan"];

export default function App() {
  // Switch Variables.
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // Text Inputs Variables.
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [list, onChangeList] = React.useState(["Juan"]);
  // Button.
  
  const valueButton = () => onChangeList(list => listElements.push(value));


  // Array of elements.
  const Greetings = (props) => {
    var styleText = styles.textColorRed;
    if(isEnabled) {
      var styleText = styles.textColorYellow;
    }
    return(
      <View style={styles.container}>
        <Text style={styleText}>Bienvenidos a la Clase {AddingText(props.someText)} </Text>
        <ListPerson />
      </View>

    );
  }

  const ListPerson = () => listElements.map( person => {
    return(
    <Text >{person} </Text>
    );
  })

  

  return (
    <>
    <Greetings someText ="con Ruben y David "/>
    
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      />
      <Button 
      title="Press me"
      color="#f194ff"
      onPress={valueButton}
      />
    </View>
    </>
  );
}

function AddingText(someText){
  return someText + 'de dsipositivos móviles ! Con los alumnos:';
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColorRed:{
    color: '#FF0000',
  },
  textColorYellow:{
    color: '#FFFF00',
  },
});
