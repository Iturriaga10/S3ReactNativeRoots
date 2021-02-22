import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Switch, TextInput } from 'react-native';

export default function App() {
  // Switch Variables.
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // Text Inputs Variables.
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={styles.container}>
      <Greetings someText ="con Ruben y David "/>
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
    </View>
  );
}

function AddingText(someText){
  return someText + 'de dsipositivos móviles';
}

const Greetings = (props) => {
  var styleText = styles.textColorRed;
  return(
  <Text style={styleText}>Bienvenidos a la Clase {AddingText(props.someText)} !</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColorRed:{
    alignItems: 'right',
    color: '#FF0000',
  },
  textColorYellow:{
    color: '#FFFF00',
  },
});
