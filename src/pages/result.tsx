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
            className="w-full py-4 bg-quiz-purple text-yellow-400 font-bold text-lg rounded-xl hover:bg-quiz-purple/90 transition-all"
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

  const getPerformance = () => {
    if (percentage === 100) return { emoji: '🏆', label: 'Perfeito!', msg: 'Você é um verdadeiro especialista!' };
    if (percentage >= 80) return { emoji: '🌟', label: 'Excelente!', msg: 'Você mandou muito bem!' };
    if (percentage >= 60) return { emoji: '💪', label: 'Bom trabalho!', msg: 'Continue assim!' };
    if (percentage >= 40) return { emoji: '📚', label: 'Quase lá!', msg: 'Pratique mais um pouco!' };
    return { emoji: '🌱', label: 'Continue tentando!', msg: 'Todo começo é difícil!' };
  };

  const { emoji, label, msg } = getPerformance();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex justify-center pt-6 pb-4 px-4">
        <img src="/logoQuiz.png" alt="Quiz Logo" className="w-40 md:w-52 h-auto" />
      </div>

     <div className="flex-1 bg-quiz-purple rounded-t-3xl pt-10 px-6 pb-6 md:px-10 md:pb-10 flex items-start justify-center">
        <div className="max-w-md w-full flex flex-col gap-6">

          {/* Card principal com porcentagem */}
          <div className="bg-black rounded-xl p-6 mt-4 text-center flex flex-col items-center gap-2 ring-4 ring-quiz-purple ring-offset-4 ring-offset-quiz-purple">
            <span className="text-5xl">{emoji}</span>
            <span className="text-yellow-400 text-5xl md:text-6xl font-extrabold">{percentage}%</span>
            <p className="text-yellow-400 text-xl font-bold">{label}</p>
            <p className="text-white/70 text-sm">{msg}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 text-center flex flex-col items-center gap-1">
              <span className="text-3xl">✅</span>
              <span className="text-3xl font-extrabold text-quiz-purple">{correctCount}</span>
              <span className="text-gray-500 text-sm font-semibold">Acertos</span>
            </div>
            <div className="bg-white rounded-xl p-5 text-center flex flex-col items-center gap-1">
              <span className="text-3xl">❌</span>
              <span className="text-3xl font-extrabold text-quiz-purple">{incorrectCount}</span>
              <span className="text-gray-500 text-sm font-semibold">Erros</span>
            </div>
          </div>

          {/* Barra de progresso */}
          <div className="bg-black/30 rounded-xl p-4 flex flex-col gap-2">
            <div className="flex justify-between text-white text-sm font-semibold">
              <span>Aproveitamento</span>
              <span>{percentage}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-lg h-3">
              <div
                className="bg-yellow-400 h-3 rounded-lg transition-all duration-700"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="text-white/60 text-xs text-center">{correctCount} de {totalQuestions} questões corretas</p>
          </div>

          {/* Botões */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/quiz')}
              className="w-full py-4 bg-yellow-400 text-black font-bold text-lg rounded-xl hover:bg-yellow-300 transition-all hover:cursor-pointer"
            >
              Jogar Novamente
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full py-4 bg-black text-yellow-400 font-bold text-lg rounded-xl hover:bg-gray-900 transition-all hover:cursor-pointer"
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