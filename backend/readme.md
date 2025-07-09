API DE LIBROS
Este proyecto consiste en una API desarrollada con Node.js, Express, TypeScript y MongoDB. La aplicación permite gestionar una colección de libros, aplicando el patrón de arquitectura MVC.

En el proyecto creamos un CRUD completo para el MODELO de libros. El codigo esta organizado con el patron MVC. Utilizamos Typescript.
Organizamos las conexiones a base de datos MongoDB.

🚀 Instrucciones para ejecutar la API localmente
1. Clonar el repositorio
git clone https://github.com/Andresferrari1/utn-backend-MVC-2.git
cd utn-backend-MVC-2/backend

2. Instalar las dependencias
npm install

3. Configurar la base de datos
Este proyecto utiliza la URI está directamente configurada en el archivo config/mongo.ts. Podés editar ese archivo con tu conexión de MongoDB:
// src/config/mongo.ts
const URI = "mongodb://localhost:27017/utnbooks" // o tu cadena personalizada

4. Ejecutar el servidor en modo desarrollo
npm run dev


| Método | Ruta         | Descripción                |
| ------ | ------------ | -------------------------- |
| GET    | `/books`     | Obtener todos los libros   |
| GET    | `/books/:id` | Obtener libro por ID       |
| POST   | `/books`     | Crear nuevo libro          |
| PATCH  | `/books/:id` | Actualizar libro existente |
| DELETE | `/books/:id` | Eliminar libro             |

.