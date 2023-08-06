import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='h-full min-h-full bg-gradient-to-tr from-teal-50 from-30% via-violet-200 via-95% to-violet-100'>
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContainer greeting='No hay productos en el carrito' />
      </main>
    </div>
  );
}

export default App;
