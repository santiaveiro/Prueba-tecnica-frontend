Meetup App

Esta aplicación de gestión de Meetups permite visualizar, agregar y marcar Meetups como favoritos. También cuenta con navegación dinámica mediante React Router y una animación en el encabezado que responde al desplazamiento de la página.

Características

-Gestión de Meetups: agrega y visualiza Meetups, con posibilidad de eliminarlos o marcarlos como favoritos.
-Favoritos: organiza Meetups en una lista de favoritos.
-Navegación dinámica: la barra de navegación en el encabezado muestra una animación dinámica al desplazarse.

Instalación
Este proyecto fue creado con Create React App. Para iniciar, sigue los pasos a continuación en el directorio raíz del proyecto:

Instalación de dependencias:

    - npm install

Instalación de dependencias adicionales:

    - npm install react-router-dom

    - npm install @testing-library/react


Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

    - npm start


Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verla en el navegador.

La aplicación se recarga automáticamente al realizar cambios en el código y se mostrarán mensajes de errores en la consola.


Testing
Este proyecto utiliza React Testing Library para la ejecución de pruebas automatizadas. Las pruebas unitarias están disponibles para cada componente principal de la aplicación y verifican:

Inicia el corredor de pruebas en modo interactivo:
 
    - npm test

Este proyecto cuenta con pruebas unitarias completas para cada uno de los componentes principales, verificando la correcta renderización y funcionalidad de:

-MainNavigation: asegura que el componente de navegación principal renderice los enlaces correctos y el contador de favoritos.
-App: verifica que el layout de la aplicación se muestre adecuadamente y que la navegación funcione.
-Otros Componentes: cada componente principal tiene su test unitario específico para validar que la estructura y el comportamiento sean correctos.

Enlaces:

Repositorio del proyecto en GitHub: https://github.com/santiaveiro/Prueba-tecnica-frontend



