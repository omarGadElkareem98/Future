
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Clients from './Components/Clients/Clients';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header />
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<About />} />
      
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
