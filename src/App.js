import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HeaderNav from './components/Header/HeaderNav';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import DashBoard from './components/DashBoard/DashBoard';
import Reviews from './components/Reviews/Reviews';
import HomeReviews from './components/Reviews/HomeReviews';

function App() {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
