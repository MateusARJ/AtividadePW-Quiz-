import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Quest } from './../data/dataMock';
import { quizData } from './../data/dataMock';

const Adm = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Quest[]>([]);
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  });

  useEffect(() => {
    const storedQuestions = localStorage.getItem('@quiz_questions');
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    } else {
      setQuestions(quizData);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewQuestion(prev => ({ ...prev, [name]: value }));
  };

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    
    const question: Quest = {
      id: Date.now(),
      question: newQuestion.question,
      options: [newQuestion.option1, newQuestion.option2, newQuestion.option3, newQuestion.option4],
      answer: newQuestion.answer
    };

    const updatedQuestions = [...questions, question];
    setQuestions(updatedQuestions);
    localStorage.setItem('@quiz_questions', JSON.stringify(updatedQuestions));

    setNewQuestion({
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: ''
    });
  };

  const handleDeleteQuestion = (id: number) => {
    const updatedQuestions = questions.filter(q => q.id !== id);
    setQuestions(updatedQuestions);
    localStorage.setItem('@quiz_questions', JSON.stringify(updatedQuestions));
  };

  const handleReset = () => {
    if (window.confirm('Tem certeza que deseja resetar todas as perguntas para o padrão?')) {
      setQuestions(quizData);
      localStorage.setItem('@quiz_questions', JSON.stringify(quizData));
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex justify-center pt-8 pb-4">
        <img 
          src="/logoQuiz.png" 
          alt="Quiz Logo" 
          className="w-40 h-auto"
        />
      </div>
      
      <div className="flex-1 bg-quiz-purple rounded-t-3xl p-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-yellow-400 text-2xl font-bold">Administração</h1>
            <div className="flex gap-3">
              <button 
                onClick={() => navigate('/')}
                className="px-5 py-2 bg-white text-quiz-purple font-bold rounded-full hover:bg-gray-100 transition-all"
              >
                Voltar
              </button>
              <button 
                onClick={handleReset}
                className="px-5 py-2 bg-black text-yellow-400 font-bold rounded-full hover:bg-gray-900 transition-all"
              >
                Resetar
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 mb-8">
            <h2 className="text-quiz-purple text-xl font-bold mb-6">Adicionar Nova Pergunta</h2>
            <form onSubmit={handleAddQuestion} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pergunta</label>
                <input
                  type="text"
                  name="question"
                  value={newQuestion.question}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-full focus:border-quiz-purple focus:outline-none transition-all"
                  placeholder="Digite a pergunta"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Opção 1</label>
                  <input
                    type="text"
                    name="option1"
                    value={newQuestion.option1}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-full focus:border-quiz-purple focus:outline-none transition-all"
                    placeholder="Opção 1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Opção 2</label>
                  <input
                    type="text"
                    name="option2"
                    value={newQuestion.option2}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-full focus:border-quiz-purple focus:outline-none transition-all"
                    placeholder="Opção 2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Opção 3</label>
                  <input
                    type="text"
                    name="option3"
                    value={newQuestion.option3}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-full focus:border-quiz-purple focus:outline-none transition-all"
                    placeholder="Opção 3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Opção 4</label>
                  <input
                    type="text"
                    name="option4"
                    value={newQuestion.option4}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-full focus:border-quiz-purple focus:outline-none transition-all"
                    placeholder="Opção 4"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Resposta Correta</label>
                <select
                  name="answer"
                  value={newQuestion.answer}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-full focus:border-quiz-purple focus:outline-none transition-all"
                >
                  <option value="">Selecione a resposta correta</option>
                  <option value={newQuestion.option1}>{newQuestion.option1 || 'Opção 1'}</option>
                  <option value={newQuestion.option2}>{newQuestion.option2 || 'Opção 2'}</option>
                  <option value={newQuestion.option3}>{newQuestion.option3 || 'Opção 3'}</option>
                  <option value={newQuestion.option4}>{newQuestion.option4 || 'Opção 4'}</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black text-yellow-400 font-bold text-lg rounded-full hover:bg-gray-900 transition-all"
              >
                Adicionar Pergunta
              </button>
            </form>
          </div>

          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-quiz-purple text-xl font-bold mb-6">Perguntas Existentes ({questions.length})</h2>
            <div className="space-y-4">
              {questions.map((q, index) => (
                <div key={q.id} className="p-4 border-2 border-gray-200 rounded-2xl">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-quiz-purple">Questão {index + 1}: {q.question}</h3>
                    <button
                      onClick={() => handleDeleteQuestion(q.id)}
                      className="text-red-500 hover:text-red-700 font-semibold transition-all"
                    >
                      Excluir
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p><strong>Opções:</strong> {q.options.join(', ')}</p>
                    <p><strong>Resposta:</strong> <span className="text-green-600 font-semibold">{q.answer}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adm;
