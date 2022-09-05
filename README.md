# Mortality Rates USA Back end

## Scripts disponibles

Puedes correr en la terminal:

### `yarn dev`

Corre la app en modo desarrollo.\

### `yarn build`

Construye el bundle de la app.\

### Es necesario

Las informacion de mortalidades viene del endpoint que esta en el .env.example
Para llenar la base de datos con la información debes ejecutar las siguientes rutas usando Insomnia o Postman:

`/api/tag/populate` method `POST`
`/api/mortality/populate` method `POST`

Una ves hecho eso puedes consultar los siguientes endpoints:

`/api/tag/getBy` method `GET` query params `name`
`/api/mortality/getBy` method `GET` query params `tag,year`
`/api/tag/getAll` method `GET`
`/api/mortality/getAll` method `GET`

### Mejoras que se pueden realizar

- Schemas y serializers
- Testing

### Autor
Orlando Monrroy - Software Developer 
