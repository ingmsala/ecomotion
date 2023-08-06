
import Item from './Item';

export default function ItemList({productos}) {
  return (

    <div className='grid md:grid-cols-4 gap-4 mt-5'>
      {
        productos.map(producto => <Item key={producto.id} producto={producto} />)
      }
    </div>

  );
}
