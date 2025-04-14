export default class pokemonCard {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
    this.link = this.createLink();
  }
  createLink() {
    let tempName = this.name.toLowerCase();
    return `https://pokeapi.co/api/v2/pokemon/${tempName}`;
  }
}
