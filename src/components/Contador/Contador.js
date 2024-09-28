import { useState } from 'react';

export default function Contador() {
    const [ counter, setCounter] = useState(0);

    function handleClick() {
        setCounter(counter + 1);
    }

    return(
        <div id="Contador" onClick={handleClick}>
            <button>Clicou: {counter} vezes</button>
        </div>
    );
}

