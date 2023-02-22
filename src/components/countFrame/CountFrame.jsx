import { useState } from 'react'

const Count = () => {

    const [count, setCount] = useState(0)

    const methods = {
        increment: function()  {
            setCount(count + 1)
        },
        decrement: function() {
            setCount(count - 1)
        },
        reset: function() {
            setCount(0)
        }
    }

    return (
        <div className="countFrame">
            <p>Count: {count}</p>
            <button onClick={methods.increment}>+</button>
            <button onClick={methods.decrement}>-</button>
            <button onClick={methods.reset}>Reset</button>
        </div>
    );
}

export default Count;