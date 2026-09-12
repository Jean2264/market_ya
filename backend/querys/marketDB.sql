CREATE TABLE Categoria(
IdCategoria SERIAL PRIMARY KEY,
CodCategoria VARCHAR(8) UNIQUE NOT NULL,
Nombre VARCHAR(100) NOT NULL,
MostrarEnHome BOOLEAN NOT NULL DEFAULT TRUE,
Estado BOOLEAN NOT NULL DEFAULT TRUE,
OrdenHome INTEGER
)

INSERT INTO Categoria
    (CodCategoria, Nombre, MostrarEnHome, Estado, OrdenHome)
VALUES
    ('CAT00001', 'Electrónica', TRUE, TRUE, 1),
    ('CAT00002', 'Hogar', TRUE, TRUE, 2),
    ('CAT00003', 'Indumentaria', TRUE, TRUE, 3),
    ('CAT00004', 'Deportes', TRUE, TRUE, 4),
    ('CAT00005', 'Belleza', TRUE, TRUE, 5);

	select * from Cate

CREATE TABLE Subcategoria(
IdSubcategoria SERIAL PRIMARY KEY,
CategoriaId INTEGER UNIQUE,
CodSubcategoria VARCHAR(8),
Nombre VARCHAR(100) NOT NULL,
Orden INTEGER,
Estado BOOLEAN OT 

)


CREATE TABLE Beneficio
(
    IdBeneficio SERIAL PRIMARY KEY,
    Titulo VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(200),
    Imagen VARCHAR(500),
    OrdenHome INTEGER NOT NULL,
    Estado BOOLEAN NOT NULL DEFAULT TRUE
);


INSERT INTO Beneficio
(Titulo, Descripcion, Imagen, OrdenHome)
VALUES
(
    'ENVÍOS',
    'A todo el país',
    '/uploads/benefit/enviado.png',
    1
),
(
    'HASTA 6 CUOTAS',
    'Sin interés',
    '/uploads/benefit/tarjeta.png',
    2
),
(
    'GARANTÍA',
    'De satisfacción',
    '/uploads/benefit/seguro-de-calidad.png',
    3
),
(
    'CAMBIOS',
    'Sin cargos',
    '/uploads/benefit/cambio.png',
    4
),
(
    'ATENCIÓN',
    'Personalizada',
    '/uploads/benefit/atencion-al-cliente.png',
    5
);

delete  from Beneficio

update Beneficio
set Titulo='Envios' where IdBeneficio=1



CREATE TABLE SeccionHome
(
    IdSeccion SERIAL PRIMARY KEY,
    Titulo VARCHAR(150) NOT NULL,
    Tipo VARCHAR(50) NOT NULL,
    OrdenHome INTEGER NOT NULL,
    MostrarEnHome BOOLEAN NOT NULL DEFAULT TRUE,
    Estado BOOLEAN NOT NULL DEFAULT TRUE
);


INSERT INTO SeccionHome
(
    Titulo,
    Tipo,
    OrdenHome,
    MostrarEnHome
)
VALUES
(
    'PRODUCTOS NUEVOS',
    'PRODUCTOS_NUEVOS',
    1,
    TRUE
),
(
    'LO MEJOR EN TECNOLOGÍA',
    'PRODUCTOS_CATEGORIA',
    2,
    TRUE
),
(
    'MARCAS DESTACADAS',
    'MARCAS',
    3,
    TRUE
),
(
    'BENEFICIOS',
    'BENEFICIOS',
    4,
    TRUE
);

update SeccionHome
set OrdenHome=2 WHERE IdSeccion= 1
SELECT *
FROM SeccionHome
ORDER BY OrdenHome;



CREATE TABLE SeccionProducto
(
    IdSeccionProducto SERIAL PRIMARY KEY,

    SeccionId INTEGER NOT NULL,
    ProductoId INTEGER NOT NULL,

    Orden INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT FK_SeccionProducto_Seccion
        FOREIGN KEY (SeccionId)
        REFERENCES SeccionHome(IdSeccion),

    CONSTRAINT FK_SeccionProducto_Producto
        FOREIGN KEY (ProductoId)
        REFERENCES Producto(IdProducto),

    CONSTRAINT UQ_SeccionProducto
        UNIQUE (SeccionId, ProductoId)
);