export default function DetailCounter({personalization, cantidad}) {
  if (!personalization) {
    return (
      <div className='text-center  text-gray-600'><span>×</span>{cantidad}</div>
    );
  }

  return (

    <ul className='flex flex-col'>
      {

        personalization?.map(personalizationItem => (

          <li className='flex gap-2 text-gray-400 justify-between items-center text-sm' key={personalizationItem.label}>
            <div>{personalizationItem.label}</div>
            <div>
              <span>×</span>
              <span>{personalizationItem.cantidad}</span>
            </div>
          </li>

        ))
      }

    </ul>

  );
}
