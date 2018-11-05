let pokemonInstances = []
let submitForm = document.querySelector('#pokemon-search-form')

const addPokemons = pokemons =>
pokemons.forEach(pokemon => {
  const pokemonInstance = new Pokemon(pokemon)
  pokemonInstances.push(pokemonInstance)
  pokemonInstance.addPokemon()
})

getPokemons()
  .then(pokemons => addPokemons(pokemons))

const SearchPokemon = () => {
  let searchTerm = document.querySelector('#pokemon-search-input').value
  // Added .value above so that it returns just the exact value (element) rather than the whole object.
  let matches = pokemonInstances.filter(pokemon => pokemon.name.includes(searchTerm))
  document.querySelector('#pokemon-container').innerHTML = ''
  // Removes everything except for our matches from our page
  return matches.forEach(pokemon => pokemon.addPokemon())
  // Adds our matches to the page
}

submitForm.addEventListener('keyup', (event) => {
  //The 'keyup' keyword means that everytime we type, the form is submitted and our search updated.
  event.preventDefault()
  SearchPokemon()
})

