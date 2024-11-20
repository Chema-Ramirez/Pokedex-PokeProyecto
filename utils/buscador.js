export async function buscarPokemon(pokeId, pokemonInfo) {
    if (!pokeId) {
        pokemonInfo.innerHTML = "Por favor, ingresa un nombre o ID de Pokémon.";
        return;
    }

    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);

        if (!respuesta.ok) {
            pokemonInfo.innerHTML = "Pokémon no encontrado. Intenta con otro nombre o ID.";
            return;
        }

        const data = await respuesta.json();

        pokemonInfo.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}" />
        <p>ID: ${data.id}</p>
        <p>Tipo(s): ${data.types.map(type => type.type.name).join(", ")}</p>
        <p>Altura: ${data.height / 10} m</p>
        <p> Peso: ${data.weight / 10} kg</p>
    `;
    } catch (error) {
        pokemonInfo.innerHTML = "Hubo un error al obtener la información. Intenta de nuevo más tarde.";
        console.error(error);
    }
}
