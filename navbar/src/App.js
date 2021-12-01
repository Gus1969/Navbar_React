
import './App.css';
import NavbarPage from './common/NavbarPage';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <NavbarPage />
       <Index />
      <About />
      <Contact /> 
      
    </div>
  );
}

export default App;
