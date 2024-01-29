import './App.css';
import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import { Routes, Route} from 'react-router-dom';
import Inicio from './components/Inicio/Inicio.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Empresa from './components/Empresa/Empresa.jsx';
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="figuras" element={ <ItemListContainer /> } />
        <Route path="empresa" element={ <Empresa /> } />
      </Routes>
    </div>
  );
}

export default App;
