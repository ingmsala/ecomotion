export default function InputForm({errorField, label, idName, type, focus = false}) {
  return (
    <>

      <div className='relative'>
        <input type={type} id={idName} name={idName} autoFocus={focus} placeholder=' '
          className={`block rounded-t px-2.5 pb-2.5 w-11/12 mx-auto
          pt-5 text-sm text-gray-900 bg-gray-50
          border-0 border-b-2 border-gray-300 appearance-none
           focus:outline-none focus:ring-0 focus:border-violet-500 peer`
            + (errorField ? ' border-red-500' : '')} />
        <label htmlFor={idName} className='absolute text-sm text-gray-500 w-11/12 ml-3
          duration-300 transform -translate-y-4 scale-75 top-4 z-10
          origin-[0] left-2.5 peer-focus:text-violet-500
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-4'>{label}</label>
      </div>

      {
        errorField && (
          <span className='text-xs text-red-500 w-11/12 ml-5'>{errorField}</span>
        )
      }
    </>
  );
}
