import React from "react";


export function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

//especial function
export function GuestGreeting(props) {
  return <SimpleTexto />;
}


//especial function
export function Greeting(props) {
  if (isEnabled) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


export function SimpleTexto() {
  return <h1>Please sign up.</h1>;
}

export function ClienList() {
  let clients = ["D4 Soweto", "Road Freight Provident Fund", "Internal Cafe"];
  return clients;
}

export function MapeoDeDatos() {
  let numbers = [0];
  const doubled = numbers.map((n, key) => <li key={key}>{n * 2}</li>);
  return doubled;
}
