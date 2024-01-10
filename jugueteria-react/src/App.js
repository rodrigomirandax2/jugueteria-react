import './App.css';
import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer msg='Aqui irá el contenido de mi componente'/>
      <Footer className='Footer'/>
    </div>
  );
}

export default App;
