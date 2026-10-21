function TeamSummary(props){
    return (
        <>
            <h2>Team Summary</h2>
            <p>{props.array.length>0 ? `First Pokemon: ${props.array[0].name}`: "No Pokemon Yet" }</p>
            <p>Total Pokemon: {props.array.length}</p>
            <p>{props.array.length>=3 ? "Team Ready!" : "Need More Pokemon!"}</p>

        </>
    )
};

export default TeamSummary;