import "./grid.css";
import Botao from '../Botao'
import { useState } from "react";

const Grid = () => {
    const [reset, setReset] = useState(false);
    const [turno, setTurno] = useState(1);
    const handleReset = () => {
        setReset(!reset);
        setTurno(1); 

    };
    const alternarTurno = () => {
        setTurno(turno === 1 ? 2 : 1)
    }

    return(
        <div >
            <div className="grid">
                <Botao reset={reset} turno={turno} alternarTurno={alternarTurno} />
                <Botao reset={reset} turno={turno} alternarTurno={alternarTurno} />
                <Botao reset={reset} turno={turno} alternarTurno={alternarTurno} />
                <Botao reset={reset} turno={turno} alternarTurno={alternarTurno} />
                <Botao reset={reset} turno={turno} alternarTurno={alternarTurno} />
                <Botao reset={reset} turno={turno} alternarTurno={alternarTurno} />
                <Botao reset={reset} turno={turno} alternarTurno={alternarTurno} />
                <Botao reset={reset} turno={turno} alternarTurno={alternarTurno} />
                <Botao reset={reset} turno={turno} alternarTurno={alternarTurno} />
            </div>
            <button onClick={handleReset}>RESET</button>
        </div>
    )
}

export default Grid 

/*   <button  label="RESET" onClick={redefinir}/>*/