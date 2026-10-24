import './App.css'
import Counter from './Counter.jsx'
import ShowTeam from './ShowTeam.jsx'

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

        <ShowTeam array={pokemon} />

        <Counter />

      </div>
  );
}

export default App;
