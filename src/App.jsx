import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='h-screen min-h-screen bg-gradient-to-tr from-teal-50 from-30% via-violet-200 via-95% to-violet-100'>
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContainer greeting='No hay productos disponibles' />
      </main>
    </div>
  );
}

export default App;
