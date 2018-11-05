class Pokemon {
    constructor(pokemon) {
        this.id = pokemon.id
        this.name = pokemon.name
        this.spriteFront = pokemon.sprites.front
        this.spriteBack = pokemon.sprites.back
        this.pokemonContainer = document.querySelector('#pokemon-container')
    }

    addPokemon () {
        const pokemonElement = document.createElement('div')
        pokemonElement.innerHTML = `
        <div class='row'>
            <h4>${this.name.toUpperCase()}</h4>
            <img id='${this.id}' src='${this.spriteFront}'>
        </div>
        `
        this.pokemonContainer.appendChild(pokemonElement)

        let image = document.getElementById(this.id)
        image.addEventListener('mouseover', () => image.src=`${this.spriteBack}`)
        image.addEventListener('mouseout', () => image.src = `${this.spriteFront}`)
    }
}