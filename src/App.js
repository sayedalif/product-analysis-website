import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HeaderNav from './components/Header/HeaderNav';

function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
      <Routes></Routes>
    </div>
  );
}

export default App;
