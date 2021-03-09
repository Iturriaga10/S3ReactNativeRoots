import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

let counter = "";
export function CambiarColor() {
  const [count, setCount] = useState(0);
  counter = count;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ab" + counter + "".toString(),
      }}
    >
      <Text>Open up App.js to start working on your app!</Text>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {"#ff" + counter + "".toString()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff" + counter,
    alignItems: "center",
    justifyContent: "center",
  },
});
