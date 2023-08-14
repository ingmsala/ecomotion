# E-Commerce con React - EcoMotion

![Logo](https://i.imgur.com/MzOPxZB.png)


## Introducción (Preentraga 2)

Este proyecto tiene como objetivo ofrecer a los usuarios una experiencia de compra en línea fluida y eficiente. La aplicación presenta una interfaz intuitiva que permite visualizar un completo listado de todos los productos disponibles. Estos productos pueden filtrarse de manera sencilla a través del menú superior (navbar), el cual proporciona opciones para explorar diferentes categorías.

Cada producto cuenta con una página de detalle, donde los usuarios pueden obtener información detallada sobre el producto, incluyendo su descripción, precio y disponibilidad en stock. Además, en esta página de detalle, los usuarios tienen la opción de agregar el producto a su carrito de compras. Esto se logra a través de un botón de "Agregar al Carrito", que guarda el producto seleccionado para su compra posterior.

Para brindar una experiencia más personalizada, la aplicación también permite a los usuarios ajustar las cantidades de los productos que desean agregar al carrito. De esta manera, pueden elegir la cantidad exacta de artículos antes de proceder a la compra.

## Requisitos

Para poder ejecutar este proyecto en su máquina local, necesitará tener instalado lo siguiente:

- Node.js (https://nodejs.org) - versión 16 o superior
- Gestor de paquetes npm (viene con Node.js)
## Instalación

Siga estos pasos para configurar el proyecto en su entorno local

1. Clone el repositorio desde GitHub:
```bash
  git clone https://github.com/ingmsala/ecomotion.git
```
2. Navegue al directorio del proyecto:
```bash
  cd ecomotion
```
3. Instale las dependencias del proyecto:
```bash
  npm install
```
## Uso

Una vez que haya instalado todas las dependencias, puede iniciar el servidor de desarrollo local utilizando el siguiente comando:

```bash
npm start
```


## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:
```javascript
ecomotion/
├── public/
│ ├── index.html
│ └── favicon.ico
├── src/
│ ├──assets/
│ │ ├── images/
│ │ │   └── logoEcomotion.png
│ │ └── products/
│ │     └── imagenes de productos
│ ├──components/
│ │ ├── layouts/
│ │ │   ├── LayoutMain.jsx
│ │ │   └── NavBar.jsx
│ │ ├── pages/
│ │ │   ├── CardWidget.jsx
│ │ │   ├── Item.jsx
│ │ │   ├── ItemCount.jsx
│ │ │   ├── ItemDetail.jsx
│ │ │   ├── ItemDetailContainer.jsx
│ │ │   ├── ItemList.jsx
│ │ │   └── ItemListContainer.jsx
│ │ └── widgets/
│ │     ├── Loading.jsx
│ │     └── NavLink.jsx
│ ├──constants/
│ │     └── categories.js
│ ├──mocks/
│ │     └── listProducts.json
│ ├──services/
│ │     └── products.js
│ ├──styles/
│ │     └── tailwind.css
│ ├──utils/
│ │     └── category.js
│ ├── App.jsx
│ ├── index.js
│ └── router.js
├── package.json
└── README.md
```
## Recursos externos

En este proyecto, se han utilizado los siguientes recursos externos:

- React: Biblioteca de JavaScript para construir interfaces de usuario.
- ReactDOM: Paquete que proporciona métodos específicos del DOM que pueden ser utilizados en el nivel superior de una aplicación web para iniciar la actualización de la interfaz de usuario.
- React Router DOM: Librería para enrutamiento en aplicaciones React.
- Icon React: Librería de iconos para React.
- Tailwind CSS: Un marco de diseño CSS utilitario de bajo nivel.