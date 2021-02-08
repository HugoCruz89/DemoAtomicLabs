# README

El objetivo de este documento es guiarte en puntos básicos del funcionamiento y configuración de este proyecto. Trata de mantenter actualizado esto si realizas algún cambio que afecte alguno de los puntos tratados en este u otro README's existentes. Mientras no podamos leer mentes, recuerda que la comunicación es fundamental para evitar metidas de pata. No me decepciones.

## Dependencias

Este proyecto trabaja principalmente con estas librerías:

- [React](https://reactjs.org) (v16.13.1) Para crear interfaces gráficas con Javascript.
- [React Native](https://facebook.github.io/react-native/) (v0.63.4) Para traducir las interfaces de React a las plataformas moviles.
- [React Navigation](https://reactnavigation.org/) (v5) Para el ruteo de pantallas en la aplicación.
- [Prettier](https://prettier.io/) y [Eslint](https://eslint.org/) preconfigurado para React Native.

## Directorios del proyecto

- [`src/assets`]: Repositorio de imagenes.
- [`src/components`]: Componentes base reutilizables.
- [`src/constants`]: Constantes que se utilizaran en toda la aplicacion.
- [`src/data`]: Datos dummy(si es necesario).
- [`src/Models`]: Clases que se ocuparan para los modelos de datos.
- [`src/Navigation`]: Configuracion de la navegacion.
- [`src/screens`]: Estructura de rutas de la aplicación.
- [`src/store`]: Si se utilizara Redux ahi se configurara los actions y reducers.

Si necesitas importar algo de las carpetas components y screens en alguna otra, el proyecto se encuentra preparado para hacer [`importaciones por ruta absoluta`](). Sus nombres estan definidos en los `package.json` de cada una de estas carpetas, sólo ten cuidado de no caer en una [`importación cíclica`]().

## Requerimientos

Este proyecto requiere de Node 8 o superior. Para desarrollar para iOS se require de una Mac (Si usas Hackintosh, renuncia por favor) con Xcode 9 o superior instalado junto con su paquete de herramientas de línea de comando.

Además React Native necesita que instales algunas herramientas requeridas dependiendo del target que desarrollaras:

- Para [Android](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- Para [iOS](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

## Correr el proyecto

Asumiendo que ya cubriste los requerimientos, abre una terminal en la raíz del proyecto y sigue las instrucciones:

- `npm install` para instalar todas las dependencias.
- Sigue los siguientes pasos según tu target.

### Android

PENDIENTE

### iOS

- `cd ios` para entrar a la carpeta de iOS.
- `pod install` para instalar las dependecias de ios. (Espero que sí hayas seguido las [INSTRUCCIONES](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies))
- `cd ..` para regresar a la raíz del proyecto.
- `npm run ios` para compilar la aplicación, abrir el simulador de iOS y comenzar el _metro bundler_.

Tools

- Syntax: Eslint + prettier
- Tabulacion: Editorconfig:https://editorconfig.org/

## Licencia

ATOMICSLABS © Todos los Derechos Reservados

