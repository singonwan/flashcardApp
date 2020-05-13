import React, { useState } from 'react';

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false);
    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip, console.log(flip))}
        >
            <div className="front">
                {flashcard.question}
                <div className="flashcard-options">
                    {flashcard.mc.map((option) => {
                        return <div className="flashcard-option">{option}</div>;
                    })}
                </div>
            </div>

            <div className="back">{flashcard.answer}</div>
        </div>
    );
}
