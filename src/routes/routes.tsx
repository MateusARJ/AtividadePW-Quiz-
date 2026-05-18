import { Routes, Route } from 'react-router-dom';
import Home from './../pages/home';
import Quiz from './../pages/quiz';
import Result from './../pages/result';
import Adm from './../pages/adm';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/resultado" element={<Result />} />
      <Route path="/adm" element={<Adm />} />
    </Routes>
  );
};
