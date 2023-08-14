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
