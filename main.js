//Imports de los diferentes ar
import { getPokemonData } from './utils/apiPokemon.js';

import { createPokemonCard, displayPokemonList } from './utils/cartasPokemon.js';

import { buscarPokemon } from './utils/buscador.js';


const loadPokemons = async () => {
    const pokemonList = [];
    for (let i = 1; i <= 151; i++) {  // Por ejemplo, cargar los primeros 151 Pokémon
        const pokeData = await getPokemonData(i);
        const pokeCard = createPokemonCard(pokeData, i);
        pokemonList.push(pokeCard);
    }
    displayPokemonList(pokemonList, 'listaPokemon');
};

loadPokemons();



document.getElementById('ver-todos').addEventListener('click', () => loadPokemons());

const addFilterListener = (buttonId, type) => {
    document.getElementById(buttonId).addEventListener('click', async () => {
        const pokemonList = [];
        for (let i = 1; i <= 151; i++) {
            const pokeData = await getPokemonData(i);
            if (pokeData.types.some(t => t.type.name === type)) {
                const pokeCard = createPokemonCard(pokeData, i);
                pokemonList.push(pokeCard);
            }
        }
        displayPokemonList(pokemonList, 'listaPokemon');
    });
};


addFilterListener('normal', 'normal');
addFilterListener('water', 'water');
addFilterListener('fire', 'fire');
addFilterListener('ice', 'ice');
addFilterListener('grass', 'grass');
addFilterListener('electric', 'electric');
addFilterListener('rock', 'rock');
addFilterListener('steel', 'steel');
addFilterListener('bug', 'bug');
addFilterListener('poison', 'poison');
addFilterListener('flying', 'flying');
addFilterListener('ghost', 'ghost');
addFilterListener('psychic', 'psychic');
addFilterListener('ground', 'ground');
addFilterListener('dragon', 'dragon');
addFilterListener('fighting', 'fighting');
addFilterListener('fairy', 'fairy');




document.getElementById('buscar-btn').addEventListener('click', () => {
    const nombrePokemon = document.getElementById('pokemon-name').value.toLowerCase();
    const pokemonInfo = document.getElementById('pokemon-info');

    buscarPokemon(nombrePokemon, pokemonInfo);
});
