import { useState, useEffect } from 'react';

function EmojiCard({ type = 'happy', isActive, onActivate }) {
    const [sliderValue, setSliderValue] = useState(0);

    // Configuraciones para cada tipo de card
    const cardConfigs = {
        happy: {
            emojis: ['😊', '😄', '😁', '😃', '😆'],
            labels: ['Feliz', 'Muy feliz', 'Alegre', 'Emocionado', 'Eufórico']
        },
        neutral: {
            emojis: ['😐', '😑', '😶', '😪', '😴'],
            labels: ['Neutro', 'Indiferente', 'Pensativo', 'Cansado', 'Agotado']
        },
        sad: {
            emojis: ['😟', '😔', '😢', '😞', '😩', '😰'],
            labels: ['Preocupado', 'Triste', 'Deprimido', 'Ansioso', 'Estresado', 'Nervioso']
        }
    };

    const config = cardConfigs[type];

    // Resetear el slider cuando se desactiva
    useEffect(() => {
        if (!isActive) {
            setSliderValue(0);
        }
    }, [isActive]);

    const handleEmojiClick = () => {
        onActivate();
    };

    const handleSliderChange = (e) => {
        setSliderValue(Number(e.target.value));
    };

    return (
        <div className={`emoji-card emoji-card-${type}`}>
            <div 
                className="emoji-display" 
                onClick={handleEmojiClick}
                style={{ cursor: 'pointer' }}
            >
                <span className="emoji-large">{config.emojis[sliderValue]}</span>
            </div>
            
            {isActive && (
                <div className="emoji-slider-container">
                    <input 
                        type="range" 
                        min="0" 
                        max={config.emojis.length - 1}
                        value={sliderValue}
                        onChange={handleSliderChange}
                        className="emoji-slider"
                    />
                    <p className="emoji-label">{config.labels[sliderValue]}</p>
                </div>
            )}
        </div>
    );
}

export default EmojiCard;
