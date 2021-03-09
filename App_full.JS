import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Switch, TextInput } from "react-native";
import { ClienList, SimpleTexto, MapeoDeDatos } from "./components/Customdata";
import { Imagen } from "./components/Imagen";
import { CambiarColor } from "./components/CambiarColor";
import { Image, Keyboard } from "react-native";

export default function App(props) {
  // Switch Variables.
  const [isEnabled, setIsEnabled] = useState(false);
  const [numbers, updateMyArray] = useState([]);
  const [newValue, onChange] = useState();
  const [value, onChangeText] = useState("Anonimus");
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // simple conditional
  if (!isEnabled) {
    console.log("iniciando: off");
  } else {
    console.log("iniciando: on");
  }

  // Text Inputs Variables.

  //especial function
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }

  //especial function
  function GuestGreeting(props) {
    return <SimpleTexto />;
  }

  //especial function
  function Greeting(props) {
    if (isEnabled) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  function handleKeyDown(e) {
    if (e.nativeEvent.key == "Enter") {
      updateMyArray((prevItems) => [
        ...prevItems,
        {
          id: prevItems.length,
          value: getRandomNumber(),
          newValue: newValue,
        },
      ]);
    }
  }

  const getRandomNumber = () => {
    return Math.random().toString().substring(2, 8);
  };

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
      <Greeting />

      <SimpleGreeting logged={"Ruben"} />

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

      <p>{JSON.stringify(numbers, null, 2)}</p>

      {numbers.map((e, key) => (
        <li key={key}>{e.value}</li>
      ))}

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(value) => onChange(value)}
        keyboardType="default"
        returnKeyType="done"
        onKeyPress={handleKeyDown}
        placeholder="Enter text here..."
        autoFocus={true}
      />
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
