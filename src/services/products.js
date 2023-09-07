import {collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where} from 'firebase/firestore';
import {db, storage} from '../api/firebase';
import seederProduct from '../seed/seederProduct.json';
import {getDownloadURL, ref} from 'firebase/storage';

export async function setProducts() {
  if (process.env.REACT_APP_NODE_ENV === 'dev') {
    const productCollection = collection(db, 'products');
    const querySnapshot = await getDocs(productCollection);

    querySnapshot.docs.map(async docSearch => {
      await deleteDoc(doc(db, 'products', docSearch.id));
    });

    seederProduct.forEach(async product => {
      const image = await getProductImage(product);
      product.imagen = image;
      await setDoc(doc(productCollection), product);
    });
    return 'ok';
  }

  throw Error('No se puede migrar en producción');
}

export async function getProductImage(product) {
  const storageRef = ref(storage, 'products/' + product.imagen);
  return getDownloadURL(storageRef).then(img => img);
}

export async function getProducts() {
  const productsRef = collection(db, 'products');
  const querySnapshot = await getDocs(productsRef);
  const listProducts = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
  return listProducts;
}

export async function getProductsByCategory(categoryId) {
  const productsRef = collection(db, 'products');
  const q = query(productsRef, where('categoria', '==', categoryId));
  const querySnapshot = await getDocs(q);
  const listProducts = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

  if (!listProducts.length) {
    return null;
  }

  return listProducts;
}

export async function getProductById(id) {
  const productSnapshot = await getDoc(doc(db, 'products', id));

  if (!productSnapshot.exists()) {
    return null;
  }

  const productSearch = {id: productSnapshot.id, ...productSnapshot.data()};

  return productSearch;
}

export async function updateStockProduct(products) {
  const productsRef = collection(db, 'products');

  return new Promise(resolve => {
    products.forEach(async product => {
      const docRef = doc(productsRef, product.item.id);
      const docSnap = await getDoc(docRef);

      const newStock = docSnap.data().stock - product.cantidad;

      if (newStock >= 0) {
        await updateDoc(docRef, {stock: newStock});
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

export async function resetAllStockProduct() {
  const productsRef = collection(db, 'products');
  const querySnapshot = await getDocs(productsRef);

  const listProducts = querySnapshot.docs.map(async docSearch => {
    const docRef = doc(productsRef, docSearch.id);

    const randomStock = Math.floor(Math.random() * 20);

    await updateDoc(docRef, {stock: randomStock});
    return {id: docSearch.id, ...docSearch.data()};
  });

  return listProducts;
}

export async function checkStockProductService(product, quantityToBuy = 0) {
  const productsRef = collection(db, 'products');
  const docRef = doc(productsRef, product.item.id);

  const docSnap = await getDoc(docRef);
  if (docSnap.data().stock - quantityToBuy >= 0) {
    return true;
  }

  return false;
}

