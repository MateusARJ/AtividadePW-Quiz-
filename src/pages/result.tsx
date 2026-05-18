import { useNavigate, useLocation } from 'react-router-dom';

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { correctCount: number; incorrectCount: number } | undefined;

  if (!state) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="max-w-md w-full text-center p-8">
          <div className="flex justify-center mb-8">
            <img src="/logoQuiz.png" alt="Quiz Logo" className="w-40 h-auto" />
          </div>
          <h2 className="text-yellow-400 text-2xl font-bold mb-4">Nenhum resultado encontrado</h2>
          <p className="text-white mb-8">Complete o quiz para ver seus resultados!</p>
          <button 
            onClick={() => navigate('/')}
            className="w-full py-4 bg-quiz-purple text-yellow-400 font-bold text-lg rounded-full hover:bg-quiz-purple/90 transition-all"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  const { correctCount, incorrectCount } = state;
  const totalQuestions = correctCount + incorrectCount;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex justify-center pt-8 pb-4">
        <img 
          src="/logoQuiz.png" 
          alt="Quiz Logo" 
          className="w-40 h-auto"
        />
      </div>
      
      <div className="flex-1 bg-quiz-purple rounded-t-3xl p-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-10">
            <div className="w-40 h-40 mx-auto rounded-full bg-white flex items-center justify-center mb-6">
              <div className="text-center">
                <span className="text-5xl font-extrabold text-quiz-purple">{percentage}%</span>
              </div>
            </div>
            <p className="text-yellow-400 text-2xl font-bold">
              {percentage >= 80 ? 'Parabéns!' : percentage >= 50 ? 'Bom trabalho!' : 'Continue praticando!'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6">
              <div className="text-4xl mb-2">✅</div>
              <div className="text-3xl font-extrabold text-quiz-purple">{correctCount}</div>
              <div className="text-gray-600 font-semibold">Acertos</div>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <div className="text-4xl mb-2">❌</div>
              <div className="text-3xl font-extrabold text-quiz-purple">{incorrectCount}</div>
              <div className="text-gray-600 font-semibold">Erros</div>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => navigate('/quiz')}
              className="w-full py-4 bg-black text-yellow-400 font-bold text-lg rounded-full hover:bg-gray-900 transition-all"
            >
              Jogar Novamente
            </button>
            <button 
              onClick={() => navigate('/')}
              className="w-full py-4 bg-white text-quiz-purple font-bold text-lg rounded-full hover:bg-gray-100 transition-all"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default Result;
