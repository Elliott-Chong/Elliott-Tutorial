import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import NewComponent from "./components/NewComponent";

export default function App() {
  const [number, setNumber] = React.useState(5);
  const [characters, setCharacters] = React.useState([]);
  const [charIndex, setCharIndex] = useState(0);

  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((data) => {
        setTimeout(() => {
          setCharacters(data.results);
        }, 2000);
      });
  }, []);

  React.useEffect(() => {
    console.log("either characters has changed or charIndex has changed");
  }, [characters, charIndex]);
  React.useEffect(() => {
    console.log("charIndex has changed");
  }, [charIndex]);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! {number}</Text>
      <Button
        onPress={() => {
          setNumber(number + 1);
          let random_index = Math.floor(Math.random() * characters.length);
          setCharIndex(random_index);
          setCharIndex((updated) => random_index);
        }}
      ></Button>
      {characters.length === 0 && <Text>Loading...</Text>}
      {characters[charIndex]?.name}

      <NewComponent />
      <StatusBar style="auto" />
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
