document.getElementById("cerrar-sesion").addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    window.location.href = "../index.html";
});

import { getPokemonData } from '../utils/apiPokemon.js';
import { createPokemonCard, displayPokemonList } from '../utils/cartasPokemon.js';

const loadPokemons = async () => {
    const pokemonList = [];
    for (let i = 1; i <= 151; i++) { 
        const pokeData = await getPokemonData(i);
        const pokeCard = createPokemonCard(pokeData, i);
        pokemonList.push(pokeCard);
    }
    displayPokemonList(pokemonList, 'listaPokemon');
};

loadPokemons();

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

const searchInput = document.getElementById('pokemon-name');
const pokemonInfo = document.getElementById('pokemon-info');

searchInput.addEventListener('input', async () => {
    const inputValue = searchInput.value.trim();
    
    if (inputValue.length > 0) {
        const filteredPokemons = [];

        if (isNaN(inputValue)) {
            for (let i = 1; i <= 151; i++) {
                const pokeData = await getPokemonData(i);
                if (pokeData.name.toLowerCase().includes(inputValue.toLowerCase())) {
                    const pokeCard = createPokemonCard(pokeData, i);
                    filteredPokemons.push(pokeCard);
                }
            }
        } else {
            const pokeId = parseInt(inputValue);
            if (pokeId >= 1 && pokeId <= 151) {
                const pokeData = await getPokemonData(pokeId);
                const pokeCard = createPokemonCard(pokeData, pokeId);
                filteredPokemons.push(pokeCard);
            }
        }

        displayPokemonList(filteredPokemons, 'listaPokemon');

        if (filteredPokemons.length === 0) {
            pokemonInfo.innerHTML = '<p>No se encontraron Pokémon.</p>';
        } else {
            pokemonInfo.innerHTML = '';
        }
    } else {
        loadPokemons();
    }
})
