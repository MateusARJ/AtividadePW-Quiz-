import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Quest } from './../data/dataMock';
import { quizData } from './../data/dataMock';

const AdminQuestions = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Quest[]>(() => {
    const storedQuestions = localStorage.getItem('@quiz_questions');
    return storedQuestions ? JSON.parse(storedQuestions) : quizData;
  });
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  });

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

    setNewQuestion({ question: '', option1: '', option2: '', option3: '', option4: '', answer: '' });
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

  const inputClass = "w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-quiz-purple focus:outline-none transition-all font-semibold text-gray-800 placeholder:font-normal placeholder:text-gray-400";

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex justify-center pt-6 pb-4 px-4">
        <img src="/logoQuiz.png" alt="Quiz Logo" className="w-40 md:w-52 h-auto" />
      </div>

      <div className="flex-1 bg-quiz-purple rounded-t-3xl p-4 md:p-8 overflow-y-auto flex justify-center">
        <div className="max-w-xl w-full flex flex-col gap-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-yellow-400 text-xl md:text-2xl font-bold">Administração</h1>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-white text-quiz-purple font-bold rounded-lg hover:bg-gray-100 transition-all text-sm md:text-base"
              >
                Voltar
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-black text-yellow-400 font-bold rounded-lg hover:bg-gray-900 transition-all text-sm md:text-base"
              >
                Resetar
              </button>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg">
            <h2 className="text-quiz-purple text-lg md:text-xl font-bold mb-4 md:mb-5">Adicionar Nova Pergunta</h2>
            <form onSubmit={handleAddQuestion} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Pergunta</label>
                <input
                  type="text"
                  name="question"
                  value={newQuestion.question}
                  onChange={handleInputChange}
                  required
                  className={inputClass}
                  placeholder="Digite a pergunta"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['option1', 'option2', 'option3', 'option4'].map((opt, i) => (
                  <div key={opt}>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Opção {i + 1}</label>
                    <input
                      type="text"
                      name={opt}
                      value={newQuestion[opt as keyof typeof newQuestion]}
                      onChange={handleInputChange}
                      required
                      className={inputClass}
                      placeholder={`Opção ${i + 1}`}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Resposta Correta</label>
                <select
                  name="answer"
                  value={newQuestion.answer}
                  onChange={handleInputChange}
                  required
                  className={inputClass}
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
                className="w-full py-3 md:py-4 bg-black text-yellow-400 font-bold text-base md:text-lg rounded-lg hover:bg-gray-900 transition-all mt-2"
              >
                Adicionar Pergunta
              </button>
            </form>
          </div>

          {/* Lista de perguntas */}
          <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg">
            <h2 className="text-quiz-purple text-lg md:text-xl font-bold mb-4 md:mb-5">
              Perguntas Existentes ({questions.length})
            </h2>
            <div className="flex flex-col gap-3">
              {questions.map((q, index) => (
                <div key={q.id} className="p-4 border-2 border-gray-100 rounded-lg">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-bold text-quiz-purple text-sm md:text-base">
                      {index + 1}. {q.question}
                    </h3>
                    <button
                      onClick={() => handleDeleteQuestion(q.id)}
                      className="text-red-500 hover:text-red-700 font-bold text-sm shrink-0 transition-all"
                    >
                      Excluir
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">{q.options.join(' · ')}</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">✓ {q.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminQuestions;