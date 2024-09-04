import circulo from './download.png'
import X from './X.avif'
import { useEffect, useState } from 'react'
const Botao = ({reset, turno, alternarTurno}) => {
    const [visivel,nVisivel] = useState(0)
    
    const xis = () => {
        if (visivel === 0) {
            nVisivel(turno);
            alternarTurno();
        }
    }
    useEffect(() => {
        nVisivel(0);
    }, [reset]);

    return(
        <div className='botao'>
            <button onClick={xis}>
                {visivel === 1 ? <img src={X} alt='X FODA'/> : null}
                {visivel === 2 ? <img src={circulo} alt='CIRCULO FODA'/> : null}
                
            </button>
           
        </div>
    )
}

export default Botao