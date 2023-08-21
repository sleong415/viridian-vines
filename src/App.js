import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Plants from './components/PlantPage/Plants';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { CartItemProvider } from './components/CartItemContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartItemProvider>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/plants" element={<Plants />}></Route>
      </Routes>
      <Footer />
    </CartItemProvider>
  );
}

export default App;
