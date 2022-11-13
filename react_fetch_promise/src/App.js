import React from "react";

function App() {
  const [fruits, setFruits] = React.useState(["apple", "oranges", "grapes"]);

  // function fetchCharacters() {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((apple) => {
  //       apple.json().then((data) => {
  //         console.log(data.results);
  //       });
  //     })
  //     .catch((grapes) => {
  //       console.error(grapes);
  //     });
  // }

  async function nicerFetchCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
  }

  nicerFetchCharacters();

  return (
    <>
      {fruits.map((f) => {
        return <h1>{f}</h1>;
      })}
    </>
  );
}

export default App;
