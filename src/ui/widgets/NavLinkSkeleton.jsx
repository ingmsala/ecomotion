import {BiSolidCircle} from 'react-icons/bi';

export default function NavLinkSkeleton() {
  return (
    <li className='p-2 flex flex-col justify-center items-center
      border-b-2 border-transparent text-teal-700/40 animate-pulse'>
      <div className='mb-2'><BiSolidCircle /></div>
      <div className='h-2 w-10 rounded bg-slate-300'></div>
    </li>
  );
}
