export const createPokemonCard = (poke, pokeId) => {
    const div = document.createElement("div");
    div.classList.add("pokemon");

    const tipos = poke.types.map(type => `<p class="${type.type.name} tipo">${type.type.name.toUpperCase()}</p>`).join('');

    div.innerHTML = `
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other.dream_world.front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">Altura: ${(poke.height / 10).toFixed(2)} m</p> <!-- Formateamos a metros -->
                <p class="stat">Peso: ${(poke.weight / 10).toFixed(2)} kg</p> <!-- Formateamos a kg -->
            </div>
        </div>
    `;
    return div;
};

export const displayPokemonList = (pokemonList, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    if (pokemonList.length === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "No se encontraron Pokémon que coincidan con la búsqueda.";
        container.appendChild(noResultsMessage);
    } else {
        pokemonList.forEach(pokemon => {
            container.appendChild(pokemon);
        });
    }
};
