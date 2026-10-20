function PokemonCard(props){
    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.type}</p>
        </>
    )
}

export default PokemonCard;