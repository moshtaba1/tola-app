import './App.css';
import Hero from '../Hero Section/Hero';
import Navbar from '../Navbar/Navbar.js'
import Product from '../Product section/Product';
import Features from '../Features Section/Features';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <img className='container img-section' src='./images/abovethefunnel-main.webp'></img>
      <Product/>
      <Features/>
    </div>
  );
}

export default App;
