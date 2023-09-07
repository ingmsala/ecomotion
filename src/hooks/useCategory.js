import {useEffect, useState} from 'react';
import {getCategoriesService} from '../services/categories';

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    await getCategoriesService()
      .then(categories => {
        setCategories(categories);
      });
  };

  return {
    categories,
    getCategories,
  };
}
