function CardEmojiHora({ emoji = '😊', hora = '16:00' }) {
    return (
        <div className="card-emoji-hora">
            <span className="emoji-hora">{emoji}</span>
            <span className="hora-texto">{hora}</span>
        </div>
    );
}

export default CardEmojiHora;