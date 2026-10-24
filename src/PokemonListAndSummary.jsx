import PokemonList from './PokemonList.jsx'
import TeamSummary from './TeamSummary.jsx'

function PokemonListAndSummary(props) {
    return (
        <>
            <PokemonList array={props.array} />
            <TeamSummary array={props.array} />
        </>
    );
}

export default PokemonListAndSummary;