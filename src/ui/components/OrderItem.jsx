import {Link} from 'react-router-dom';
import DetailCounter from './DetailCounter';

export default function OrderItem({item, index}) {
  return (
    <article className={`w-full border-solid border-gray-200
      flex flex-row justify-start items-center gap-5
                          min-w-3xl py-1 px-4 ` + (index === 0 ? '' : 'border-t')}>

      <div className='flex md:grid md:grid-cols-3 gap-3 justify-between items-center w-full'>
        <div className='flex flex-col items-start gap-2'>
          <Link to={`/item/${item.id}`}>
            <div className='flex flex-wrap font-semibold text-gray-600'>{item.title}</div>

          </Link>

        </div>
        <Link to={`/item/${item.id}`}>
          <DetailCounter personalization={item.personalization} cantidad={item.quantity} />
        </Link>
        <Link to={`/item/${item.id}`}>
          <div className='text-right font-semibold text-gray-600'>
          $ {(item.price * item.quantity).toLocaleString('es-AR')}
          </div>
        </Link>
      </div>
    </article>
  );
}
