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

INSERT INTO Categoria
(CodCategoria, Nombre, MostrarEnHome, Estado, OrdenHome)
VALUES
('CAT00006', 'Tecnología', TRUE, TRUE, 6),
('CAT00007', 'Electrodomésticos', TRUE, TRUE, 7),
('CAT00008', 'Muebles', TRUE, TRUE, 8),
('CAT00009', 'Juguetes', TRUE, TRUE, 9),
('CAT00010', 'Automotor', TRUE, TRUE, 10),
('CAT00011', 'Herramientas', TRUE, TRUE, 11),
('CAT00012', 'Construcción', TRUE, TRUE, 12),
('CAT00013', 'Alimentos', TRUE, TRUE, 13),
('CAT00014', 'Bebidas', TRUE, TRUE, 14),
('CAT00015', 'Mascotas', TRUE, TRUE, 15),
('CAT00016', 'Libros', TRUE, TRUE, 16),
('CAT00017', 'Oficina', TRUE, TRUE, 17),
('CAT00018', 'Jardín', TRUE, TRUE, 18),
('CAT00019', 'Salud', TRUE, TRUE, 19),
('CAT00020', 'Accesorios', TRUE, TRUE, 20);

	select * from Categoria Order by OrdenHome ASC
UPDATE Categoria
SET Imagen = CASE IdCategoria
    WHEN 1 THEN '/uploads/categories/categorie.png'
    WHEN 2 THEN '/uploads/categories/categorie.png'
    WHEN 3 THEN '/uploads/categories/categorie.png'
    WHEN 4 THEN '/uploads/categories/categorie.png'
    WHEN 5 THEN '/uploads/categories/categorie.png'
END
WHERE IdCategoria IN (1, 2, 3, 4, 5);

UPDATE Categoria
SET Imagen = '/uploads/categories/categorie.png'
WHERE IdCategoria BETWEEN 6 AND 20;

update Categoria
set Imagen= ''


CREATE TABLE Subcategoria(
IdSubcategoria SERIAL PRIMARY KEY,
CategoriaId INTEGER UNIQUE,
CodSubcategoria VARCHAR(8),
Nombre VARCHAR(100) NOT NULL,
Orden INTEGER,
Estado BOOLEAN OT 

)