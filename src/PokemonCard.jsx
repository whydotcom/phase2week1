function PokemonCard(props){
    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.type}</p>
            <button onClick= {() => props.removePokemon(props.id)}>Remove</button>
            <button onClick= {() => props.selectPokemon(props.item)}>Select</button>
        </>
    )
}

export default PokemonCard;