import React from 'react';
import {CgSpinner} from 'react-icons/cg';

export default function Loading() {
  return (
    <div className='
           flex flex-col justify-center items-center'>
      <CgSpinner className='animate-spin h-16 w-16 mt-10 text-gray-500/80' />
    </div>
  );
}
