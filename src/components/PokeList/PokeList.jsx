import React, { useState, useEffect } from 'react'
import { pokemon } from '../../services/index.js';
import './PokeList.css'



function PokeList({ defaultPokemon }) {
  const [pokeReference, setPokeref] = useState(defaultPokemon || 1);
  const [pokename, setPokemon] = useState('')
  const [moves, setMoves] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getPokemon()
  }, [])

  const changePokemon = (e) => {
    setPokeref(e.target.value);
  }

  const getPokemon = async () => {
    setLoading(true)
    const response = await pokemon.getPokemonByid(pokeReference)
    setPokemon(response.data.name);
    const movesList = response.data
      .moves
      .map( move => move.move.name)
    setMoves(movesList)
    setLoading(false)
  }

  return (
    <div>
      <div className="name-container">
          <input onChange={changePokemon} />
          <button onClick={getPokemon}>
          Search
          </button>
        {
          loading
            ? (
              <h4>Loading...</h4>
            ) 
            : (
              <div>
                <h4>{ pokename }</h4>
                <ul>
                  {
                    moves.map((move, idx) => {
                      return (
                        <li key={`${move}_${idx}`}>{ move }</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
        }
        
        
      </div>
    </div>
  );
}

export default PokeList;
