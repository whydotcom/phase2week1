import './App.css'
import PokemonList from './PokemonList.jsx'
import TeamSummary from './TeamSummary.jsx'

const pokemon = [
  { id: 25, name: "Pikachu", type: "Electric"},
  { id: 5, name: "Charmander", type: "Fire"},
  { id: 8, name: "Squirtle", type: "Water"}
];

function App() {
  return (
      <div>
        <h1>My Pokemon Team</h1>
        <p>Welcome to my Team!</p>  

        <PokemonList 
          array={pokemon}
        />

        <TeamSummary 
          array={pokemon}
        />

      </div>
  );
}

export default App;
