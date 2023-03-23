import React, {useState} from "react";

function StateAssignmentTwo() {
    const [count, setcount] = useState([]);
    function anecdotes() {
        setcount([...count, Math.floor(Math.random()*10)])
    }
    return (
        <section className="state2">
            <button onClick={anecdotes}>Click me!</button>
            {count.map((cnt) => (
                <li>{cnt}</li>
            ))} 
        </section>
    );
}

export default StateAssignmentTwo