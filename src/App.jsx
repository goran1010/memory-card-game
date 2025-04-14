import { useEffect, useState } from "react";
import "./App.css";
import getPokemonList from "./scripts/getPokemonCards";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";

function App() {
  const [allPokemonCards, setAllPokemonCards] = useState([]);

  useEffect(() => {
    async function getPokemonCardImages() {
      try {
        const allPokemonList = getPokemonList();

        const fetchedCards = await Promise.all(
          allPokemonList.map(async (pokemon) => {
            const response = await fetch(pokemon.link);
            const cardImage = await response.json();
            return { ...pokemon, image: cardImage.sprites.front_default };
          })
        );
        console.log(fetchedCards);
        setAllPokemonCards(fetchedCards);
      } catch (error) {
        console.error(error);
      }
    }
    getPokemonCardImages();
  }, []);

  return (
    <div>
      <Scoreboard />
      <Gameboard allPokemonCards={allPokemonCards} />
    </div>
  );
}

export default App;
