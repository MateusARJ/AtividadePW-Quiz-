import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md flex flex-col items-center">
        <img 
          src="/logoQuiz.png" 
          alt="Quiz Logo" 
          className="w-64 h-auto mb-12"
        />
        <div className="text-center mb-10">
          <p className="text-yellow-400 text-xl font-bold mb-2">
            Está na hora de ser o especialista
          </p>
          <p className="text-yellow-400 text-xl font-bold">
            oficial em... nada específico!
          </p>
        </div>
        <div className="space-y-4 w-full">
          <button 
            onClick={() => navigate('/quiz')}
            className="w-full py-4 bg-quiz-purple text-yellow-400 font-bold text-lg rounded-full hover:bg-quiz-purple/90 transition-all hover: cursor-pointer"
          >
            Começar
          </button>
          <button 
            onClick={() => navigate('/adm')}
            className="w-full py-4 bg-gray-800 text-white font-bold text-lg rounded-full hover:bg-gray-700 transition-all hover: cursor-pointer"
          >
            Administrar Perguntas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
