export default function randomizeImgPositions(allPokemonCards) {
  return allPokemonCards.sort(() => Math.random() - 0.5);
}
