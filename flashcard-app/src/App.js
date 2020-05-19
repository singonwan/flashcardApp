import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';
import axios from 'axios';

function App() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

    useEffect(() => {
        axios.get('https://opentdb.com/api.php?amount=10').then((res) => {
            setFlashcards(
                res.data.results.map((questionItem, index) => {
                    const answer = questionItem.correct_answer;
                    const options = [
                        ...questionItem.incorrect_answers.map((a) =>
                            decodeString(a)
                        ),
                        decodeString(answer),
                    ];
                    return {
                        id: `${index}-${Date.now()}`,
                        question: decodeString(questionItem.question),
                        answer: answer,
                        options: options.sort(() => Math.random() - 0.5),
                    };
                })
            );
            // console.log(res.data);
        });
    }, []);

    function decodeString(str) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = str;
        return textArea.value;
    }

    return <FlashcardList flashcards={flashcards} />;
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'what is 2 + 2?',
        answer: '4',
        options: ['2', '3', '4', '5'],
    },
    {
        id: 2,
        question: 'what is 3 + 3?',
        answer: '6',
        options: ['2', '3', '4', '6'],
    },
    {
        id: 3,
        question: 'what is 4 + 4?',
        answer: '8',
        options: ['2', '8', '4', '5'],
    },
];

export default App;
