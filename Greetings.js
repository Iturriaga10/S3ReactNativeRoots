import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export const Greetings = (props) => {
    const text = props.someText;
    var styleText = styles.textColorRed;
    if(props.switchEneabled) {
      var styleText = styles.textColorYellow;
    }
    return(
      <View style={styles.container}>
        <Text style={styleText}>Bienvenidos a la Clase {AddingText(text)} </Text>
      </View>
    
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
  