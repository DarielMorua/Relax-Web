function CardResumen() {
    return(
        <div className="card-resumen">
            <h2 className="titulo-resumen">Resumen de Emociones</h2>
            
            <div className="card-resumen-emocion">
                <span className="emoji-resumen">😊</span>
                <span className="porcentaje-resumen">45%</span>
            </div>
            
            <div className="card-resumen-emocion">
                <span className="emoji-resumen">😐</span>
                <span className="porcentaje-resumen">30%</span>
            </div>
            
            <div className="card-resumen-emocion">
                <span className="emoji-resumen">😔</span>
                <span className="porcentaje-resumen">25%</span>
            </div>
        </div>
    );
}

export default CardResumen;