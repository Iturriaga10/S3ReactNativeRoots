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
