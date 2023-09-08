# Angular Material Change Theme

## Introducción 

Este repositorio está formado por un proyecto Angular y la libreria de componentes Material UI. 

En este repositorio he realizado un ejemplo de como poder cambiar el tema de la aplicación de manera dinámica a través de una acción del usuario. En este caso, he puesto un control MatSlideToggle para que cuando el usuario lo cambie, automáticamente se realice la modificación del tema de la aplicación.

## Explicación

He seguido los siguientes pasos para completar dicho ejemplo:

1. He limpiado el contenido del componente App y le he aplicado una etiqueta main con la clase mat-app-background y dentro de este tag, un componente mat-slide-toggle.
2. Al componente mat-slide-toggle le he asociado el modelo (ngModel) y he asociado el evento change del control a la función existente en el fichero ts (app.component.ts) del componente App.
3. En el fichero ts del componente, hay que fijarse que se ha injectado DOCUMENT para poder modificar las clases de estilos del tag body en la función asociada al evento change.
4. Se ha creado la carpeta y fichero scss/themes.scss en la carpeta assets. Se ha referenciado este fichero desde el fichero src/styles.scss, donde también hemos incluido estilos para darle una mayor altura a la página y eliminar el margen.
5. En el fichero scss/themes.scss se ha definido las paletas para light y dark. Por defecto, se ha establecido el estilo light para todos los componentes y se ha creado la clase para el modo oscuro que aplicará la paleta oscura.

## Conclusión

Para trabajar los temas en un proyecto de Angular + Material UI, hay que trabajar con las paletas que nos proporciona Material UI, aplicarlas a clases de estilos y usar estas clases para definir cada tema. 

## Referencias

[Web de Material Angular](https://material.angular.io/guide/theming)
[Youtube - Josue Baez](https://www.youtube.com/watch?v=yP82A-R8uTE)