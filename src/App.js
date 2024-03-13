import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import PlannerPage from './components/PlannerPage/PlannerPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import KnowledgeBasePage from './components/KnowledgeBasePage/KnowledgeBasePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <header className='container'>
        <ul>
          <li>
              <Link to="/">Планнер</Link>
            </li>
            <li>
              <Link to="/projects">Проекты</Link>
            </li>
            <li>
              <Link to="/knowledge-base">База знаний</Link>
            </li>
        </ul>
      </header>

      <Routes >
        <Route path="/" element={<PlannerPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
