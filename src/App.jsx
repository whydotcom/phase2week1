import { useState } from 'react'
import './App.css'
import PokemonList from './PokemonList.jsx'
import AvailablePokemon from './AvailablePokemon.jsx'
import PokemonDetails from './PokemonDetails.jsx'

const pokemon = [
  { id: 25, name: "Pikachu", type: "Electric"},
  { id: 5, name: "Charmander", type: "Fire"},
];

function App() {

  const [team, setTeam] = useState([...pokemon]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function removePokemon(pokemonId){
    const newTeam = team.filter(item => item.id !== pokemonId)
    if (selectedPokemon != null && selectedPokemon.id === pokemonId){
      setSelectedPokemon(null);
    }
    
    setTeam(newTeam);
  }

  function addPokemon(addedPokemon){
   const alreadyExists = team.some(pokemon => pokemon.id === addedPokemon.id);
    if (!alreadyExists){
      const newTeam = [...team, addedPokemon]
      setTeam(newTeam);
    }
  }

  function selectPokemon(pokemon){
    setSelectedPokemon(pokemon);
  }

  return (
      <div>
        <h1>My Pokemon Team</h1>
        <p>Welcome to my Team!</p>  

        <PokemonList removePokemon={removePokemon} selectPokemon={selectPokemon} array={team} />

        <p> Selected: {selectedPokemon ? <PokemonDetails pokemon={selectedPokemon} /> : "No Pokemon Selected"} </p>

        <AvailablePokemon addPokemon={addPokemon}/>

      </div>
  );
}

export default App;
