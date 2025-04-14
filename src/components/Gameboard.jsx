import { useEffect, useState } from "react";
import getPokemonList from "../scripts/getPokemonCards";
import randomizeImgPositions from "../scripts/randomizeImgPositions";

export default function Gameboard({ changeCurrentScore, endGame }) {
  const [allPokemonCards, setAllPokemonCards] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function getPokemonCardImages() {
      try {
        const allPokemonList = getPokemonList();

        const fetchedCards = await Promise.all(
          allPokemonList.map(async (pokemon) => {
            const response = await fetch(pokemon.link);
            const cardImage = await response.json();
            return {
              ...pokemon,
              image: cardImage.sprites.front_default,
              isClicked: false,
            };
          })
        );

        setAllPokemonCards(fetchedCards);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("failed");
      }
    }
    getPokemonCardImages();
  }, []);

  if (status === "loading") {
    return <div className="spinner"></div>;
  }

  if (status === "failed") {
    return <div>Failed Loading Images...</div>;
  }

  function resetIsClicked() {
    allPokemonCards.map((pokemon) => (pokemon.isClicked = false));
  }

  return (
    <div className="gameboard">
      {allPokemonCards.map((pokemonCard) => {
        return (
          <div key={pokemonCard.id}>
            <img
              src={pokemonCard.image}
              alt={pokemonCard.name}
              onClick={() => {
                if (pokemonCard.isClicked) {
                  endGame();
                  resetIsClicked();
                } else {
                  changeCurrentScore();
                  pokemonCard.isClicked = true;
                }
                setAllPokemonCards(randomizeImgPositions(allPokemonCards));
              }}
            />
            <p>{pokemonCard.name}</p>
          </div>
        );
      })}
    </div>
  );
}
