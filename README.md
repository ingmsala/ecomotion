# E-Commerce con React - EcoMotion

![Logo](https://i.imgur.com/MzOPxZB.png)


## Introducción

Este proyecto tiene como objetivo ofrecer a los usuarios una experiencia de compra en línea fluida y eficiente. La aplicación presenta una interfaz intuitiva que permite visualizar un completo listado de todos los productos disponibles. Estos productos pueden filtrarse de manera sencilla a través del menú superior, el cual proporciona opciones para explorar diferentes categorías.

Cada producto cuenta con una página de detalle, donde los usuarios pueden obtener información detallada sobre el producto, incluyendo su descripción, precio y disponibilidad en stock. Además, en esta página de detalle, los usuarios tienen la opción de agregar el producto a su carrito de compras. Esto se logra a través de un botón de "Agregar al Carrito", que guarda el producto seleccionado para su compra posterior.

Para brindar una experiencia más personalizada, la aplicación también permite a los usuarios ajustar las cantidades de los productos que desean agregar al carrito. De esta manera, pueden elegir la cantidad exacta de artículos antes de proceder a la compra.

Una vez agregados los productos al carrito, se puede ver un resumen de la orden y proceder a confirmar la compra. Para ello, se debe completar un formulario con los datos personales del usuario. Una vez completado el formulario, se puede confirmar la compra y se muestra el resumen de la misma con el número de orden generado.

## Requerimientos base completados:

✔️ Visualizar al momento de ingresar a la app en la ruta base, un set de productos disponibles para la compra.

✔️ Contar con un acceso visible a la vista de carrito.

✔️ Visualizar un menú con las categorías. Al clickear en una, se navega a la lista de productos de esa categoría en con la misma vista que el home.

✔️ Acceder a un ítem del listado donde se observa la descripción del producto. Si se ingresa a /item/:id y el producto no existe en firebase, debemos responder un mensaje adecuado que indique algo relacionado a que el producto no existe.

✔️ Implementar Firebase como base de datos.

✔️ Permitir la visibilidad del cart durante toda la experiencia y tener una indicación de la cantidad de items incluidos agregados.

✔️ Implementar el checkout con un formulario

✔️ Finalizar la orden, y devolver un resumen de la misma mostrando el id del objeto de firebase.

## Requerimientos extras completados:


✔️ Realizar el login con Firebase Auth (Google)

✔️ Implementar un módulo para gestionar una Lista de deseos

✔️ Implementar la customización de los productos con una característica seleccionable.

✔️ Validar el stock de los productos antes de confirmar la orden.

✔️ Implementar las categorías dinámicas

✔️ Implementar la persistencia local del carrito de compras y de la lista de deseos

✔️ Permitir a los usuarios logueados buscar sus órdenes por el id de orden

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
4. Cree un archivo llamado `.env.local` en la raiz del proyecto con las siguientes variables de entorno:
```js
REACT_APP_API_KEY = {Firebase API_Key}
REACT_APP_AUTH_DOMAIN = {Firebase Auth Domain}
REACT_APP_PROJECT_ID = {Firebase Project_ID}
REACT_APP_STORAGE_BUCKET = {Firebase Storage Bucket}
REACT_APP_MESSAGING_SENDER_ID = {Firebase Messaging Sender_ID}
REACT_APP_APP_ID = {Firebase App_ID}
```

## Uso

Una vez que haya instalado todas las dependencias, puede iniciar el servidor de desarrollo local utilizando el siguiente comando:

```bash
npm start
```

> Existen 3 rutas extras que permiten a la aplicación realizar acciones de migración y reseteo de la base de datos de Firebase. Estas rutas son:
> * `/migrate_product` - Permite migrar los productos desde el archivo `seed/seederProduct.json` a la base de datos de Firebase. Se necesita previamente haber cargado en el servicio de Storage de Firebase las imágenes de los productos que se encuentran en la carpeta `assets/products`.
> * `/migrate_categories` - Permite migrar las categorías desde el archivo `seed/seederCategory.json` a la base de datos de Firebase.
> * `/reset_stock` - Permite resetear el stock de todos los productos a valores random entre 0 y 20 unidades.

## Recursos externos

En este proyecto, se han utilizado los siguientes recursos externos:

- React: Biblioteca de JavaScript para construir interfaces de usuario. (v18.2.0)
- ReactDOM: Paquete que proporciona métodos específicos del DOM que pueden ser utilizados en el nivel superior de una aplicación web para iniciar la actualización de la interfaz de usuario. (v18.2.0)
- React Router DOM: Librería para enrutamiento en aplicaciones React. (v6.14.2) (https://reactrouter.com/en/main)
- Icon React: Librería de iconos para React. (https://react-icons.github.io/react-icons/)
- Tailwind CSS: Un marco de diseño CSS utilitario de bajo nivel. (https://tailwindcss.com/)
- Sonner: Librería para gestionar toast en React. (https://sonner.emilkowal.ski/)
- Firebase: Plataforma de desarrollo de aplicaciones web y móviles. Se utilizan los servicios de almacenamiento de imágenes y de gestión de base de datos. (https://firebase.google.com/)

## DEMO

Link: https://ecomotion.vercel.app/

[![](https://i.imgur.com/zqOGPQT.gif)](https://i.imgur.com/zqOGPQT.gif)