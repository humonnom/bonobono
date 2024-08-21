import React, { useState } from 'react';
import { questions } from './data/questions';
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';
import { Result } from './types';

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState<Result>({ bonobo: 0, porori: 0, nuburi: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (character: 'bonobo' | 'porori' | 'nuburi') => {
    setResult(prev => ({ ...prev, [character]: prev[character] + 1 }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md p-4">
          {!showResult ? (
              <QuestionCard
                  question={questions[currentQuestion]}
                  onAnswer={handleAnswer}
              />
          ) : (
              <ResultCard result={result} />
          )}
        </div>
      </div>
  );
};

export default App;