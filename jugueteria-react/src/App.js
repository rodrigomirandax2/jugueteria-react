import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer msg='Aqui irá el contenido de mi componente'/>
    </div>
  );
}

export default App;
