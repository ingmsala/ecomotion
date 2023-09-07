import {CgSpinner} from 'react-icons/cg';

export default function Loading() {
  return (
    <div className='w-screen h-screen absolute top-0 flex justify-center items-start z-50 bg-gray-50/30'>
      <div className='flex flex-col justify-center items-center md:mt-20 my-auto'>
        <CgSpinner className='animate-spin h-16 w-16 mt-10 text-gray-500/80' />
      </div>
    </div>
  );
}
