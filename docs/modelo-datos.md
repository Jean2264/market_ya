# Modelo de datos

### CATEGORIA

IdCategoria PK
CodCategoria UNIQUE
Nombre
MostrarEnHome
OrdenHome
Estado
Imagen

### SUBCATEGORIA

IdSubcategoria PK
IdCategoria FK
CodSubcategoria UNIQUE
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

### SECCION HOME

SECCION_HOME

IdSeccion
Titulo
Tipo
IdCategoria FK NULL
OrdenHome
MostrarEnHome
Estado

### SECCION PRODUCTO

IdSeccionProducto PK
IdSeccion FK
IdProducto FK
Orden
