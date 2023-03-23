import react, { useState } from "react";

function StateAssignmentOne() {
    const [count, setcount] = useState(0);
    function incrementCount () {
        setcount(count + 1);
    }
    return (
        <section className="state1">
            <button onClick={incrementCount}>{count}</button>
        </section>
    );
}

export default StateAssignmentOne