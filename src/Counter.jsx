import { useState } from 'react'

function Counter(){
    const [count, setCount] = useState(0);

    function IncreaseCounter(){
        setCount(previousCount => previousCount +1);
        setCount(previousCount => previousCount +1);

    }
    function DecreaseCounter(){
        setCount(previousCount => previousCount -1);
    }

    return (
        <>
            <h2>Count: {count}</h2>

            <button onClick={IncreaseCounter}>Increase</button>
            <button onClick={DecreaseCounter}>Decrease</button>
        </>
    );
}

export default Counter;