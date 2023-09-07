import InputForm from '../widgets/InputForm';
import {FcGoogle} from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';

export default function CheckoutForm({handleSubmit, errors}) {
  const {loginWithGoogle, user} = useAuth();

  const handleLoginWithGoogle = e => {
    e.preventDefault();
    loginWithGoogle();
  };

  return (
    <form onSubmit={handleSubmit} className='w-full' autoComplete = 'on' >
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col w-full max-w-2xl px-0 pb-8
              bg-gradient-to-tr from-violet-50 from-80%  to-teal-50
              rounded shadow '>
          <header className='text-base font-semibold text-gray-700
                    border-b-2 border-solid border-gray-200 py-4 text-center'>
                    Checkout
          </header>

          <div className='relative flex flex-col'>
            {
              user === null
                ? (
                  <>
                    <button
                      type='button'
                      onClick={handleLoginWithGoogle}
                      className='mt-5 text-[#4285F4]/80 bg-white hover:border-[#4285F4]
                                border border-[#4285F4]/50 hover:text-[#4285F4]
                                focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50
                                font-normal rounded-lg text-sm px-5 py-2.5
                                text-center inline-flex items-center mb-2 gap-3 mx-auto group'
                    >
                      <FcGoogle />
                      <span>Ingresar con Google</span>
                    </button>
                    <fieldset className='border-t border-slate-300 mx-4 mb-3'>
                      <legend className='mx-auto px-4 text-slate-400 text-lg'>o</legend>

                    </fieldset>
                    <div className='flex flex-col mb-2'>
                      <InputForm
                        errorField={errors.name}
                        label='Nombre Completo'
                        idName='name'
                        placeholder=''
                        type='text'
                        focus = {true}
                      />
                    </div>
                    <div className='flex flex-col mb-2'>
                      <InputForm
                        errorField={errors.email}
                        label='Correo electrónico'
                        idName='email'
                        placeholder=''
                        type='text'
                      />
                    </div>
                    <div className='flex flex-col mb-2'>
                      <InputForm
                        errorField={errors.emailRepeat}
                        label='Repetir correo electrónico'
                        idName='emailRepeat'
                        placeholder=''
                        type='text'
                      />
                    </div>
                  </>
                )
                : (

                  <ul className='ml-4 mb-3 mt-8'>
                    <li>
                      <span className='font-bold text-gray-600'>
                        Nombre:
                      </span>
                      <span> {user.displayName}</span>
                    </li>
                    <li>
                      <span className='font-bold text-gray-600'>
                        Correo electrónico:
                      </span>
                      <span> {user.email}</span>
                    </li>
                  </ul>

                )
            }

            <div className='flex flex-col mb-2'>
              <InputForm
                errorField={errors.phone}
                label='Teléfono'
                idName='phone'
                placeholder=''
                type='text'
              />
            </div>
            <button
              type='submit'
              className='flex w-11/12 mx-auto px-4 py-2 tracking-wide text-white justify-center
                    transition-colors mt-6 duration-200 transform
                    bg-violet-500 rounded hover:bg-violet-600 focus:outline-none focus:bg-violet-400'
            >
                        Ordene ahora
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
