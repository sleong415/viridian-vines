import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Plants from './components/PlantPage/Plants';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/plants" element={<Plants />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
