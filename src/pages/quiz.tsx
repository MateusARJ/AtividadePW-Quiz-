import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Quest } from './../data/dataMock';
import { quizData } from './../data/dataMock';

const Quiz = () => {
  const [questions, setQuestions] = useState<Quest[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedQuestions = localStorage.getItem('@quiz_questions');
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    } else {
      setQuestions(quizData);
    }
  }, []);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
      setCorrectCount(prev => prev + 1);
    } else {
      setIncorrectCount(prev => prev + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      navigate('/resultado', { 
        state: { 
          correctCount: selectedAnswer === currentQuestion.answer ? correctCount + 1 : correctCount, 
          incorrectCount: selectedAnswer === currentQuestion.answer ? incorrectCount : incorrectCount + 1 
        } 
      });
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-quiz-purple border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-yellow-400 text-xl font-semibold">Carregando...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex justify-center pt-6 pb-4 px-4">
        <img 
          src="/logoQuiz.png" 
          alt="Quiz Logo" 
          className="w-40 md:w-52 h-auto"
        />
      </div>
      
      <div className="flex-1 bg-quiz-purple rounded-t-3xl p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-xl w-full">
          <div className="bg-white rounded-2xl p-4 md:p-6 mb-8 md:mb-12 shadow-lg">
            <div className="flex items-start gap-3 md:gap-4">
              <img 
                src="/traced-brain.png" 
                alt="Brain Icon" 
                className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
              />
              <h2 className="text-quiz-dark text-lg md:text-xl font-bold leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {currentQuestion.options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full text-left p-3 md:p-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all bg-white text-black hover:bg-gray-100 ${
                  selectedAnswer === option 
                    ? 'ring-4 ring-yellow-400 bg-yellow-100' 
                    : ''
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedAnswer && (
            <button
              onClick={handleNext}
              className="w-full mt-6 md:mt-8 py-3 md:py-4 bg-black text-yellow-400 font-bold text-base md:text-lg rounded-xl md:rounded-2xl hover:bg-gray-900 transition-all"
            >
              {currentQuestionIndex + 1 === questions.length ? 'Finalizar' : 'Próxima'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
