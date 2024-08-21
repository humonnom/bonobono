import React from 'react';
import { Question } from '../types';

interface Props {
    question: Question;
    onAnswer: (character: 'bonobo' | 'porori' | 'nuburi') => void;
}

const QuestionCard: React.FC<Props> = ({ question, onAnswer }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">{question.text}</h2>
            {question.answers.map((answer, index) => (
                <button
                    key={index}
                    className="w-full text-left p-2 mb-2 bg-blue-100 hover:bg-blue-200 rounded"
                    onClick={() => onAnswer(answer.character)}
                >
                    {answer.text}
                </button>
            ))}
        </div>
    );
};

export default QuestionCard;