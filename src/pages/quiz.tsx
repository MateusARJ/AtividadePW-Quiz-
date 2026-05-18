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
        <div className="max-w-xl w-full flex flex-col gap-6">
          <div className="mb-6 text-center">
            <span className="text-white font-bold text-lg md:text-xl">
              {`Questão: ${currentQuestionIndex + 1} de ${questions.length}`}
            </span>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
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

        <div className="flex flex-col gap-4 md:gap-6">
          {currentQuestion.options.map((option: string, index: number) => {
            const isSelected = selectedAnswer === option;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full text-left px-5 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-200 bg-white text-black shadow-md hover:shadow-xl hover:-translate-y-0.5 ${
                  isSelected
                    ? 'ring-4 ring-yellow-400 bg-yellow-50 shadow-yellow-200'
                    : 'hover:bg-gray-50'
                }`}
              >
                {option}
              </button>
            );
          })}

          {selectedAnswer && (
            <button
              onClick={handleNext}
              className="w-full py-3 md:py-4 bg-black text-yellow-400 font-bold text-base md:text-lg rounded-xl hover:bg-gray-100 transition-all"
            >
              {currentQuestionIndex + 1 === questions.length ? 'Finalizar' : 'Próxima'}
            </button>
          )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Quiz;
