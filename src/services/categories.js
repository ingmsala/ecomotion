import {collection, deleteDoc, doc, getDocs, orderBy, query, setDoc} from 'firebase/firestore';
import {db} from '../api/firebase';
import seederCategory from '../seed/seederCategory.json';

export async function getCategoriesService() {
  const productsRef = collection(db, 'categories');
  const querySnapshot = await getDocs(query(productsRef, orderBy('order', 'asc')));
  const listCategories = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
  return listCategories;
}

export async function setCategories() {
  if (process.env.REACT_APP_NODE_ENV === 'dev') {
    const categoryCollection = collection(db, 'categories');
    const querySnapshot = await getDocs(categoryCollection);

    querySnapshot.docs.map(async docSearch => {
      await deleteDoc(doc(db, 'categories', docSearch.id));
    });

    seederCategory.forEach(async category => {
      await setDoc(doc(categoryCollection), category);
    });
    return 'ok';
  }

  throw Error('No se puede migrar en producción');
}
