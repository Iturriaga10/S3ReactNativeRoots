import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Switch, TextInput } from "react-native";

export function clienList() {
  let clients = ["D4 Soweto", "Road Freight Provident Fund", "Internal Cafe"];
  return clients;
}

export function Textos() {
  return <h1>Please sign up.</h1>;
}

export function Mapeo() {
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers);
  const doubled = numbers.map((number) => number * 2);
  return doubled;
}

