# Mangos

El fin del simualdor es que te permita comparar dos planes de financiación y te diga cual te conviene según la inflación estimada. La mejor opción estará dada por aquella que tenga menor valor actual (o dicho de otra forma valor ajustado por inflación). 

El proyecto se compone de dos paginas, un index y una página de resultados, cada uno con un archivo .js diferente.

Los valores ingresados por el usuario se mandan a la página de resultados por query params. De esta forma el usuario puede compartir la URL de resultados a otros usuarios. 

### Librerías

El proyecto usa la librería de JQuery para poder formatear el input numéricos en $. Por el momento es la forma que encontré, creo que se tiene que poder hacer con Vainilla JS.

También se incluye la librería de ChartJS, para incorporar gráficos de barra en los resultados.

### Session Storage

El modal de bienvenida explicando como funciona se deberia abrir solo en la primera sesión del usuario en la aplicación, por medio de una variable que inicialmente es 0 y luego se incrementa con cada sesión. 

### Fetch
La aplicación usa un fetch para traer el dato de la inflación desde un JSON. 
Mes a mes se irá actualizando el JSON con el dato de la inflación del mes anterior. 

### Bugs pendientes

1. Cuando se elije un plan en contado la suma de cuotas en la página de resultados da cero. También el mensaje de resultado de la primera card hay que optimizarlo para dicho caso.
2. Falta formato de $ en el tooltip de los charts. 

### Mejoras a futuro
1. Mejorar la UI especialmente en desktop. 
2. Agregar más contendio explicativo en la página de resultados.
3. Agregar validación en los inputs de la primera pantalla.
4. Los nombres de las variables de JS son medio confusos, se pueden mejorar.

### Sugerencias para testear

La idea es comparar planes de financiación donde a simple vista es difícil saber cuando te conviene. Sugiero probar con estos valores a modo de ejemplo:

- 3 cuotas de $1,000 contra 6 cuotas de $550. 
- 1 cuota de $1,000 contra $1,100 en contado. 
- 6 cuotas de $100 contra 12 cuotas de $53.