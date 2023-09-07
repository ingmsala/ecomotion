import {addDoc, collection, doc, getDoc, serverTimestamp} from 'firebase/firestore';
import {db} from '../api/firebase';

export async function getOrderById(id) {
  const orderSnapshot = await getDoc(doc(db, 'orders', id));
  const orderSearch = {id: orderSnapshot.id, ...orderSnapshot.data()};
  return orderSearch;
}

export async function insertOrder(order) {
  const newOrder = await addDoc(collection(db, 'orders'),
    {
      ...order,
      date: serverTimestamp(),
    });
  return newOrder;
}

export async function getOrderByIdAndUser(id, user) {
  const orderSnapshot = await getDoc(doc(db, 'orders', id));

  if (!orderSnapshot.exists()) {
    throw new Error('La órden no existe');
  }

  if (orderSnapshot.data().buyer.email !== user.email) {
    throw new Error('La órden no pertenece al usuario');
  }

  const orderSearch = {id: orderSnapshot.id, ...orderSnapshot.data()};
  return orderSearch;
}

