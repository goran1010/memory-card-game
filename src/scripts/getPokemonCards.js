import pokemonCard from "./PokemonCard";

export default function getPokemonCards() {
  const pokemonList = [
    { id: "0460", name: "Abomasnow" },

    { id: "0063", name: "Abra" },

    { id: "0359", name: "Absol" },

    { id: "0617", name: "Accelgor" },

    { id: "0681", name: "Pikachu" },

    { id: "0142", name: "Aerodactyl" },

    { id: "0306", name: "Aggron" },

    { id: "0190", name: "Aipom" },

    { id: "0065", name: "Alakazam" },

    { id: "0869", name: "Alcremie" },

    { id: "0594", name: "Alomomola" },

    { id: "0334", name: "Altaria" },

    { id: "0698", name: "Amaura" },

    { id: "0424", name: "Ambipom" },

    { id: "0591", name: "Amoonguss" },

    { id: "0181", name: "Ampharos" },
  ];
  const pokemonCards = [];
  pokemonList.map((pokemon) => {
    pokemonCards.push(new pokemonCard(pokemon));
  });
  return pokemonCards;
}
