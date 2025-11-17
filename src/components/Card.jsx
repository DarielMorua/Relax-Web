import { useState } from 'react';
import chivas from '../assets/chivas.png';
import EmojiCard from './EmojiCard';

function Card(){
    const [activeCard, setActiveCard] = useState(null);

    return(
        <div className="card">
            <h2 className="card-title">¿Cómo te sientes hoy?</h2>
            <div className="emoji-cards-container">
                <EmojiCard 
                    type="sad" 
                    isActive={activeCard === 'sad'}
                    onActivate={() => setActiveCard('sad')}
                />
                <EmojiCard 
                    type="neutral" 
                    isActive={activeCard === 'neutral'}
                    onActivate={() => setActiveCard('neutral')}
                />
                <EmojiCard 
                    type="happy" 
                    isActive={activeCard === 'happy'}
                    onActivate={() => setActiveCard('happy')}
                />
            </div>
        </div>
    );
}

export default Card;