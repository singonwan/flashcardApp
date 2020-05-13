import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';

function App() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
    return <FlashcardList flashcards={flashcards} />;
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'what is 2 + 2?',
        answer: '4',
        mc: ['2', '3', '4', '5'],
    },
    {
        id: 2,
        question: 'what is 3 + 3?',
        answer: '6',
        mc: ['2', '3', '4', '6'],
    },
    {
        id: 3,
        question: 'what is 4 + 4?',
        answer: '8',
        mc: ['2', '8', '4', '5'],
    },
];

export default App;
