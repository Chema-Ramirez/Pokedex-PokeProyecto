// Función para crear el HTML de un Pokémon
export const createPokemonCard = (poke, pokeId) => {
    const div = document.createElement("div");
    div.classList.add("pokemon");

    // Crear el contenido HTML
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
                <p class="stat">Altura:${poke.height}m</p>
                <p class="stat">Peso:${poke.weight}kg</p>
            </div>
        </div>
    `;
    return div;
};

// Función para actualizar la lista de Pokémon en el DOM
export const displayPokemonList = (pokemonList, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpiar la lista antes de añadir los nuevos Pokémon
    pokemonList.forEach(pokemon => {
        container.appendChild(pokemon);
    });
};