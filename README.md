# E-Commerce con React - EcoMotion

![Logo](https://i.imgur.com/MzOPxZB.png)


## Introducción (Preentraga 1)

El objetivo de este proyecto es proporcionar a los usuarios una experiencia de compra en línea intuitiva y eficiente de productos de movilidad sustentable. La aplicación consta de un navbar que muestra las distintas categorías de productos disponibles, un botón de carrito con una notificación de la cantidad de productos agregados.
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
│ │ └── images/
│ │     └── logoEcomotion.png
│ ├──components/
│ │ ├── Navbar.jsx
│ │ ├── CartWidget.jsx
│ │ └── ItemListContainer.jsx
│ ├── App.jsx
│ └── index.js
├── package.json
└── README.md
```
## Recursos externos

En este proyecto, se han utilizado los siguientes recursos externos:

- React: Biblioteca de JavaScript para construir interfaces de usuario.
- ReactDOM: Paquete que proporciona métodos específicos del DOM que pueden ser utilizados en el nivel superior de una aplicación web para iniciar la actualización de la interfaz de usuario.
- Icon React: Librería de iconos para React.
- Tailwind CSS: Un marco de diseño CSS utilitario de bajo nivel.