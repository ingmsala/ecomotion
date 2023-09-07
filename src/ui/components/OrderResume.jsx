import {FREE_TEXT} from '../../constants/cart';

export default function OrderResume({orden}) {
  const {total, shipping, date, id} = orden;
  const subtotal = total - shipping;

  return (
    <section className='max-w-3xl bg-gradient-to-tr from-violet-50 from-80%  to-teal-50
    rounded shadow p-0 flex flex-col gap-2'>
      <header className='text-base font-semibold text-gray-700
          border-b-2 border-solid border-gray-200 py-4 text-center flex flex-col'>
        <div>Detalle de la Orden</div>
        <div className='text-xs text-gray-500 font-light px-5'>
          {
            date.toDate().toLocaleDateString('es-AR') + ' | # ' + id
          }
        </div>
      </header>
      <main className='flex flex-col p-4'>
        <div className='flex justify-between items-center gap-2'>
          <div className='text-gray-600'>Productos</div>
          <div className='text-gray-600'>$ {subtotal.toLocaleString('es-AR')}</div>
        </div>
        <div className='flex justify-between items-center gap-2 text-xs'>
          <div className='text-gray-600'>Envío</div>
          {
            shipping === 0
              ? <div className='text-green-600'>{FREE_TEXT}</div>
              : <div className='text-gray-600'>$ {shipping.toLocaleString('es-AR')}</div>
          }
        </div>
        <div className='flex justify-between items-start mt-5 gap-2 flex-1'>
          <div className='text-gray-600 font-bold text-lg'>Total</div>
          <div className='text-gray-600 font-bold text-lg'>
            $ {total.toLocaleString('es-AR')}
          </div>
        </div>
      </main>
    </section>
  );
}
