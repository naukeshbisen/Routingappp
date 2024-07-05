import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CTO from './components/CTO';
import CEO from './components/CEO';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Understanding Routing Hooks</h1>
      <Home/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<AboutUs/>}/>
        <Route path="contact" element={<ContactUs/>}/>
        <Route path="ceo" element={<CEO/>}/>
        <Route path="cto" element={<CTO/>}/>


      </Routes>
      <h1>Thanks for visiting</h1>
    </div>
  );
}

export default App;
