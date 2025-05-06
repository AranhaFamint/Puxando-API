import fetch from 'node-fetch';

const BASE_URL = 'https://pokeapi.co/api/v2/';

async function getPokemons() {
    try {
        const response = await fetch(`${BASE_URL}pokemon?limit=150`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const pokemons = data.results;

   
        const pokemonNames = pokemons.map(pokemon => pokemon.name);

       
        console.log(pokemonNames);

    } catch (error) {
        console.error("Erro ao buscar os Pokemons:", error);
    }
}

getPokemons();