import React, { useState } from 'react';
function Counter() {
    const [ count, setCount ] = useState(0);
    function increment()
    {
        setCount(count +1);
    };
    const decrement=()=>{
        setCount(count-1);
    };
    return(
        <div>
        <p>count;{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
}
export default Counter;