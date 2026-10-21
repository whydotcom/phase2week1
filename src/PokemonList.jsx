import PokemonCard from './PokemonCard.jsx'

function PokemonList(props){

    return (
        <>
            {props.array.map(item => {
                return (
                    <PokemonCard 
                    key={item.id}
                    name={item.name}
                    type={item.type}
                    />

                    
                )
            })}
        </>
    );
}

export default PokemonList