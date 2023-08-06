import listProducts from '../mocks/listProducts';

export async function getProducts() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(listProducts);
    }, 2000);
  });
}

