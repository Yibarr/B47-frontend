import axios from 'axios';


export const pokemon = {
  getPokemonByid: (id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
}
