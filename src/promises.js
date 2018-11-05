//This promise will fetch the API data (in this case db.json)

const getPokemons = () =>
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())

const getPokemon = pokemon =>
    fetch(`http://localhost:3000/pokemon/${pokemon}`)
    .then(resp => resp.json())