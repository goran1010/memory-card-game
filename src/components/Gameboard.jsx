export default function Gameboard({ allPokemonCards }) {
  return (
    <div>
      {allPokemonCards.map((pokemonCard) => {
        return <img key={pokemonCard.id} src={pokemonCard.image} alt="" />;
      })}
    </div>
  );
}
