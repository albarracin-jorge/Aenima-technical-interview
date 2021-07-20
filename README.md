# crud-aenima
Rest Api exercise interview from AENIMA

El trabajo consistió en desarrollar una aplicación web para una entrevista de trabajo para la empresa AENIMA, los requisitos para el ejercicio fueron los siguientes:

Confeccionar un catálogo de productos a elección. En el mismo se deberá poder agregar. modificar o eliminar un producto, mostrando una vista individual de detalles de cada uno.
Un producto deberá tener id, nombre, descripción e imagen. Se debe realizar el front-end y el back-end por separado, consumiendo los datos de la API, sin mezclar ambos entornos.

Back-end:

- Crear y configurar una API generando endpoints para consumir desde el front.
- La carga de los productos deberá hacerse sin que se recargue la vista.
- Los mismos deben almacenarse en una base de datos

Front-end:

- Se deberán visualizar todos los productos, de manera simple y entendible.
- Poder filtrar productos por características (precio, nombre, etc.) sin recargar la vista.

Requerimientos:

-HTML5, CSS3, JavaScript.
-PHP o NodeJs.

------------------------------------------------------------

Ruta de desarrollo e implementación:

Al comienzo del desarrollo se evaluó que lenguaje del lado del servidor se iba a utilizar, si php con laravel o nodejs y los correspondientes paquetes,
debido a que nodejs era el lenguaje más concurrente por mi hasta el momento se optó por este, se tuvo que hacer una investigacion sobre la estructuracion de los archivos previo 
a comenzar con el desarrollo. La aplicación recibe parámetros tanto por el método GET como por el método POST. Se utilizó MongoDB como base de datos para complementar el proyecto.

La aplicación hasta el momento posee almacenados productos cargados manualmente (en este caso son bebidas gaseosas) y la aplicación es capaz de:

- Leer los datos almacenados en la base de datos.
  - Las imágenes se almacenan en un fichero y cada una tiene como nombre el id del producto corresponiente.
- Poder crear nuevos productos y editar productos del catálogo.
- Eliminar cualquier producto, sea nuevo o almacenado previamente.

Problemas o inconvenientes:

La aplicacion por el momento, si bien muestra imagenes con los respectivos productos, no es capaz de recibir imagenes por el formulario y almacenarlos.
El inconveniente que surgió durante el desarrollo fue que se usó multer para gestionar los ficheros que entraban por el método post, sin embargo
en el formulario (productForm.hbs) se requeria incluir en el elemento 'form' un atributo llamado enctype="multipart/form-data", cuando se incluía este atributo la información
que contenía el método POST iba vacío, en consecuencia no se podían agregar ni editar datos. Ese es el motivo por el que hasta ahora no se pueden cargar imágenes por formularios.

Respecto al Front-end, se trabajó muy poco debido a falta de tiempo, no se pudo implementar un sistema de filtrado de productos.

Se intentó subir el trabajo a la nube utilizando Heroku, en un principio conectando la base de datos a mLab,
pero la página web ha estado en mantenimiento, por lo que se intentó vincularla con MongoDB Atlas, sin éxito.

------------------------------------------------------------

PD: Si bien el ejercicio no pudo ser terminado en tiempo y forma la intención es poder concretarla en su totalidad,
debido a que considero que es un excelente ejercicio para aprender y familiarizarme con las API Rest

