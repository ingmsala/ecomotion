
import Item from './Item';

export default function ItemList({productos}) {
  return (

    <section className='flex flex-wrap justify-center gap-3 mt-5 '>
      {
        productos.map(producto => (
          <article key={producto.id}>
            <Item producto={producto} />
          </article>
        ))
      }
    </section>

  );
}
