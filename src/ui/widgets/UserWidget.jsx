import {CiLogin, CiLogout} from 'react-icons/ci';
import useAuth from '../../hooks/useAuth';

export default function UserWidget() {
  const {user, loginWithGoogle, logout} = useAuth();

  const handleLoginWithGoogle = e => {
    e.preventDefault();
    loginWithGoogle();
  };

  const handleLogout = e => {
    e.preventDefault();
    logout();
  };

  return (
    user === null
      ? <button
        onClick={handleLoginWithGoogle} className='p-2 relative flex flex-col justify-center items-center w-14 h-14
    hover:bg-indigo-200 group border-b-2 hover:border-indigo-600 border-transparent
    hover:text-indigo-600 text-teal-700/70'>
        <div className='group-hover:scale-125 transition-all'>
          <CiLogin />
        </div>
        <div>Entrar</div>
      </button>

      : <button onClick={handleLogout}
        title={user.displayName}
        className='p-2 relative flex flex-col justify-center items-center w-14 h-14
        hover:bg-indigo-200 group border-b-2 hover:border-indigo-600 border-transparent
        hover:text-indigo-600 text-teal-700/70'>
        <CiLogout />
      Salir
      </button>
  );
}
