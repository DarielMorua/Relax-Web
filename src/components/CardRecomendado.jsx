import chivas from '../assets/chivas.png';
import patricio from '../assets/patricio.png';  

function CardRecomendado() {
    return (
        <div className="card-recomendados">
            <img src={patricio} alt="Patricio" />
            <h2>Ejercicio 1</h2>
            <p>Ejercicio chido xd</p>
        </div>
    );
}

export default CardRecomendado;