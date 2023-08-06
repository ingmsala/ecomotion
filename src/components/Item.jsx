export default function Item({producto}) {
  let classEtiqueta = '';

  if (producto.categoria === 'bicicletas') {
    classEtiqueta = 'bg-purple-100';
  } else if (producto.categoria === 'accesorios') {
    classEtiqueta = 'bg-orange-100';
  } else {
    classEtiqueta = 'bg-teal-100';
  }

  const image = (producto.imagen)
    ? require(`../assets/products/${producto.imagen}`)
    : '';

  return (
    <a href='#' className='bg-white rounded shadow-2xl p-0
      flex flex-col relative justify-between
      hover:scale-105 transition-all '>

      <div className={`absolute top-4 left-0
        ${classEtiqueta}
         rounded-r py-1 px-4 text-xs uppercase text-gray-800`}>
        {producto.categoria}
      </div>

      <img className='h-64 w-64 rounded-t bg-cover ' src={image} alt={producto.nombre} />

      <div className='text-base uppercase text-gray-800 font-bold text-center flex-1 self-center py-4'>
        {producto.nombre}
      </div>

      <div className=' py-2 px-3 bg-teal-700/50 text-white rounded-b text-center'>
        <span className='font-bold text-lg'>$ {producto.precio}</span>
      </div>

    </a>
  );
}
