import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Linking,
} from "react-native";
import { clienList, Textos, Mapeo } from "./components/customdata";

export default function App(props) {
  // Switch Variables.
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // yhis is a function
  clienList();

  // simple conditional
  if (!isEnabled) {
    console.log("iniciando: off");
  } else {
    console.log("iniciando: on");
  }

  (a) => {
    if (!isEnabled) {
      return "is not enabled";
    } else {
      return "is enabled";
    }
  };

  // Text Inputs Variables.
  const [value, onChangeText] = React.useState("Anonimus");

  //especial function
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }

  //especial function
  function GuestGreeting(props) {
    return <Textos />;
  }

  //especial function
  function Greeting(props) {
    if (isEnabled) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  //especial function
  function SimpleGreeting(params) {
    return (
      <div>
        The user {value} is <b>{isEnabled ? " currently" : "not"}</b> logged in.
      </div>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Greeting />
      <SimpleGreeting logged={"Ruben"} />

      {isEnabled == true ? console.log("on") : console.log("off")}

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />

      {Mapeo().map((n, key) => (
        <li key={key}>{n}</li>
      ))}

      
      {
      
      Data.map(
                dato => 
                        console.log(dato)
              )    
              
      }
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
