
import Item from './Item';

export default function ItemList({productos}) {
  return (

    <section className='flex flex-wrap justify-center gap-3 mt-5 '>
      {
        productos.length === 0
          ? <div className='text-2xl font-semibold text-gray-500 mt-4'>No hay productos para mostrar</div>
          : productos.map(producto => (
            <article key={producto.id}>
              <Item producto={producto} />
            </article>
          ))
      }
    </section>

  );
}
