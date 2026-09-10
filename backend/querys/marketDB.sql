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