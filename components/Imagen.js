import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native";

let pic = {
  uri:
    "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
};

export function Imagen(props) {
  return (
    <View style={styles.container}>
      <Image source={pic} style={{ width: 193, height: 110 }} />
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
