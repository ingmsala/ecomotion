export default function ItemListContainer({greeting}) {
  return (
    <div className='mx-auto max-w-6xl flex items-center justify-center'>
      <div className='mt-10 px-8 py-4 bg-gray-100 shadow rounded text-gray-500 text-center'>
        {greeting}
      </div>
    </div>
  );
}
