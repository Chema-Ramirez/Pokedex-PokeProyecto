export const getPokemonData = async (pokeId) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
        if (!response.ok) throw new Error('Error al obtener los datos del Pokémon');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};
