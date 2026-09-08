CREATE TABLE Categoria(
    IdCategoria SERIAL PRIMARY KEY,
    CodCategoria VARCHAR(8) UNIQUE NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    MostrarEnHome BOOLEAN NOT NULL DEFAULT TRUE,
    Estado BOOLEAN NOT NULL DEFAULT TRUE,
    OrdenHome INTEGER
);


CREATE TABLE Subcategoria(
    IdSubcategoria SERIAL PRIMARY KEY,
    CategoriaId INTEGER NOT NULL,
    CodSubcategoria VARCHAR(8) UNIQUE NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    Orden INTEGER,
    Estado BOOLEAN NOT NULL DEFAULT TRUE,

    FOREIGN KEY (CategoriaId)
        REFERENCES Categoria(IdCategoria)
);


CREATE TABLE Marca(
    IdMarca SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL UNIQUE,
    Descripcion VARCHAR(200),
    Detalles VARCHAR(1000),
    Imagen VARCHAR(500),
    Estado BOOLEAN NOT NULL DEFAULT TRUE
);


CREATE TABLE Producto(
    IdProducto SERIAL PRIMARY KEY,
    SubcategoriaId INTEGER NOT NULL,
    MarcaId INTEGER NOT NULL,
    CodProducto VARCHAR(8) UNIQUE NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(200),
    Detalles VARCHAR(500),
    Precio DECIMAL(10,2) NOT NULL,
    PorcentajeDescuento DECIMAL(5,2),
    Estado BOOLEAN NOT NULL DEFAULT TRUE,
    FechaAlta TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (SubcategoriaId)
        REFERENCES Subcategoria(IdSubcategoria),

    FOREIGN KEY (MarcaId)
        REFERENCES Marca(IdMarca)
);


CREATE TABLE Stock(
    IdStock SERIAL PRIMARY KEY,
    ProductoId INTEGER UNIQUE NOT NULL,
    CantidadDisponible INTEGER DEFAULT 0,

    FOREIGN KEY (ProductoId)
        REFERENCES Producto(IdProducto)
);


CREATE TABLE ImagenProducto(
    IdImagen SERIAL PRIMARY KEY,
    ProductoId INTEGER NOT NULL,
    Ruta VARCHAR(500) NOT NULL,
    Orden INTEGER,
    Estado BOOLEAN NOT NULL DEFAULT TRUE,

    FOREIGN KEY (ProductoId)
        REFERENCES Producto(IdProducto)
);


-- TODAVIA NO CREAR HASTA TENER USUARIO

CREATE TABLE Resena(
    IdResena SERIAL PRIMARY KEY,
    ProductoId INTEGER NOT NULL,
    UsuarioId INTEGER NOT NULL,
    Calificacion INTEGER NOT NULL,
    Comentario VARCHAR(100),
    Fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Estado BOOLEAN NOT NULL DEFAULT TRUE,

    FOREIGN KEY (UsuarioId)
        REFERENCES Usuario(IdUsuario),

    FOREIGN KEY (ProductoId)
        REFERENCES Producto(IdProducto)
);