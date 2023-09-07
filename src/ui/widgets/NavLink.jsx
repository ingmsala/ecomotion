import {NavLink as NavLinkReactRouterDOM} from 'react-router-dom';

export default function NavLink({children, to, ...props}) {
  const classAtributes = ({isActive}) => {
    const className = `p-2 flex flex-col justify-center items-center
    hover:bg-indigo-200 group border-b-2 hover:border-indigo-600
    hover:text-indigo-600 ${props.className}`;
    return (isActive)
      ? className + ' border-teal-800 text-teal-700'
      : className + ' border-transparent text-teal-700/70';
  };

  return (
    <NavLinkReactRouterDOM to={to} className={classAtributes}>
      {children}
    </NavLinkReactRouterDOM>
  );
}
