
function PokemonDetails(props){
    return (
        <>
            <h1>{props.pokemon.name}</h1>
            <p>Type: {props.pokemon.type}</p>
        </>
    )
}

export default PokemonDetails