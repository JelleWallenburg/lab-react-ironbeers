import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/random-beer" element={<HomePage/>}/>
        <Route path="/new-beer" element={<HomePage/>}/>

      </Routes>
    </div>
  );
}

export default App;
