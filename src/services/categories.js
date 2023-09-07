import {collection, doc, getDocs, orderBy, query, setDoc} from 'firebase/firestore';
import {db} from '../api/firebase';
import seederCategory from '../seed/seederCategory.json';

export async function getCategoriesService() {
  const productsRef = collection(db, 'categories');
  const querySnapshot = await getDocs(query(productsRef, orderBy('order', 'asc')));
  const listCategories = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
  return listCategories;
}

export async function setCategories() {
  const categoryCollection = collection(db, 'categories');

  seederCategory.forEach(async category => {
    await setDoc(doc(categoryCollection), category);
  });
}
