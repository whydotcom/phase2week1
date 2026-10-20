import './App.css'
import PokemonCard from './PokemonCard.jsx'

const pokemon = [
  { id: 25, name: "Pikachu", type: "Electric"},
  { id: 5, name: "Charmander", type: "Fire"},
  { id: 8, name: "Squirtle", type: "Water"}
];

function App() {
  return <div>
    <h1>My Pokemon Team</h1>
    <p>Welcome to my Team!</p>  

    {pokemon.map(item => {
        return <PokemonCard 
        key={item.id}
        name={item.name}
        type={item.type}
        />
})}
  </div>
}

export default App
