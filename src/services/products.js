import listProducts from '../mocks/listProducts';

export async function getProducts() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(listProducts);
    }, 2000);
  });
}

export async function getProductsByCategory(categoryId) {
  return new Promise(resolve => {
    setTimeout(() => {
      const products = listProducts.filter(product => product.categoria === categoryId);
      resolve(products);
    }, 2000);
  });
}

export async function getProductById(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      const product = listProducts.find(product => product.id === id);
      resolve(product);
    }, 2000);
  });
}

export async function getProductRelacionado(producto) {
  return new Promise(resolve => {
    setTimeout(() => {
      const product = listProducts.filter(
        product => product.id !== producto.id && product.categoria === producto.categoria && product.stock > 0);
      resolve(product.slice(0, 3));
    }, 2000);
  });
}

