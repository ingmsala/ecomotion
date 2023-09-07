import {PiBicycleDuotone} from 'react-icons/pi';
import {TbHelmet} from 'react-icons/tb';
import {GiKickScooter} from 'react-icons/gi';
import {CATEGORY} from '../constants/categories';

export const getCategoryColor = category => {
  switch (category) {
  case CATEGORY.BICICLETAS:
    return 'bg-pink-200';
  case CATEGORY.ACCESORIOS:
    return 'bg-orange-100';
  case CATEGORY.SCOOTERS:
    return 'bg-teal-100';
  default:
    return 'bg-gray-200';
  }
};

export const getCategoryIcon = category => {
  switch (category) {
  case CATEGORY.BICICLETAS:
    return <PiBicycleDuotone />;
  case CATEGORY.ACCESORIOS:
    return <TbHelmet />;
  case CATEGORY.SCOOTERS:
    return <GiKickScooter />;
  default:
    return <GiKickScooter />;
  }
};

export const getPersonalizationsByCategory = category => {
  switch (category) {
  case CATEGORY.BICICLETAS:
    return [
      {
        label: 'Rodado',
        options: ['Rod. 20', 'Rod. 26', 'Rod. 29'],
      },
    ];
  case CATEGORY.ACCESORIOS:
    return [
      {
        label: 'Color',
        options: ['Rojo', 'Azul', 'Negro'],
      },
    ];
  case CATEGORY.SCOOTERS:
    return [
      {
        label: 'Material',
        options: ['Carbono', 'Aluminio'],
      },
    ];
  default:
    return [
      {
        label: 'Producto',
        options: ['Base'],
      },
    ];
  }
};
