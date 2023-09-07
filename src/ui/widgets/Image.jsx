import {useState} from 'react';
import {ImSpinner2} from 'react-icons/im';

export default function Image({src, className, alt = 'Imagen'}) {
  const [loading, setLoading] = useState(true);
  return (
    <div className={className}>

      <img src={src} className={`${loading ? 'hidden' : 'flex'}`}
        alt={alt}
        onLoad={() => {
          setLoading(false);
        }}></img>
      <div className={`w-full h-full 
      flex justify-center items-center ${loading ? 'flex' : 'hidden'}`}>
        <ImSpinner2 className='animate-spin h-6 w-6 text-gray-500/80' />
      </div>
    </div>
  );
}
