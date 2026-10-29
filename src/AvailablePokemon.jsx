
function AvailablePokemon(props){

    const addedPokemon = {
        name:"Bulbasaur",
        type:"Grass",
        id: 1
    }

    return(
        <>
            <button onClick= {() => props.addPokemon(addedPokemon)}>Add Pokemon</button>
        </>
    )
};

export default AvailablePokemon;