import { useState } from 'react'
import PokemonListAndSummary from './PokemonListAndSummary.jsx'


function ShowTeam(props){
    const [showTeam, setShowTeam] = useState(true)

    function toggler(){
        setShowTeam(previousState => (!previousState))
    }

    return (
        <>
            <button onClick={toggler}> {showTeam ? "Hide Team" : "Show Team"} </button>
            {showTeam ? <PokemonListAndSummary array={props.array}/> : ""}
        </>
    )
}

export default ShowTeam