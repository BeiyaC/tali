import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Problem from './components/problem';
import Quizz from "./components/quizz";
import Game from "./components/game";
import './App.css';
import './Timer.css';
import './Shifumi.css';

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/quizz" element={<Quizz />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
