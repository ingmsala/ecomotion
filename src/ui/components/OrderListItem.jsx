import OrderItem from './OrderItem';

export default function OrderListItem({order}) {
  return (
    <section className='max-w-3xl'>
      <div className='bg-gradient-to-tr from-violet-50 from-80%  to-teal-50
                   rounded shadow p-0 flex flex-col gap-2'>
        <div className='flex items-center px-4 py-2 border-b-2
                   border-solid border-gray-200 text-center justify-center'>
          <h3 className='text-base font-semibold text-gray-700'>
            Productos
          </h3>

        </div>
        {
          order?.items.length > 0
          && order?.items.map((item, index) => (
            <OrderItem key={item.id} item={item} index={index} />
          ))
        }
      </div>
    </section>
  );
}
