# Modelo de datos

### CATEGORIA

IdCategoria PK
CodCategoria
Nombre
MostrarEnHome
OrdenHome
Estado

### SUBCATEGORIA

IdSubcategoria PK
IdCategoria FK
CodSubcategoria
Nombre
Orden
Estado

### MARCA

IdMarca PK
Nombre
Descripcion
Detalles
Imagen
Estado

### PRODUCTO

IdProducto PK
IdSubcategoria FK
IdMarca FK
Nombre
Descripcion
Detalles
Precio
PorcentajeDescuento
Estado
FechaAlta

### STOCK

IdStock PK
IdProducto FK
CantidadDisponible

#### P 1/N IMAGE

### IMAGEN_PRODUCTO

IdImagen PK
IdProducto FK
Ruta
Orden
Estado

### RESENA

IdResena PK
IdProducto FK
IdUsuario FK
Calificacion
Comentario
Fecha
Estado

### BENEFICIO

IdBeneficio
Titulo
Descripcion
Imagen
Orden
Estado
