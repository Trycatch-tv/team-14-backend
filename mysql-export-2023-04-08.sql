CREATE TABLE `directores`(
    `id_director` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombres` VARCHAR(50) NOT NULL,
    `apellidos` VARCHAR(50) NOT NULL,
    `pais` VARCHAR(2) NOT NULL,
    `fecha_nacimiento` DATE NOT NULL
);
CREATE TABLE `pelicula_genero`(
    `id_pelicula_genero` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_pelicula` INT UNSIGNED NOT NULL,
    `id_genero` INT UNSIGNED NOT NULL
);
CREATE TABLE `resenias`(
    `id_resenia` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_usuario` INT UNSIGNED NOT NULL,
    `id_pelicula` INT UNSIGNED NOT NULL,
    `titulo` VARCHAR(50) NOT NULL,
    `puntuacion` INT NOT NULL,
    `comentario` TEXT NOT NULL
);
CREATE TABLE `categorias`(
    `id_categoria` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(50) NOT NULL,
    `descripcion` TEXT NOT NULL
);

CREATE TABLE `pelicula_categoria`(
    `id_pelicula_categoria` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_pelicula` INT UNSIGNED NOT NULL,
    `id_categoria` INT UNSIGNED NOT NULL
);

CREATE TABLE `generos`(
    `id_genero` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(50) NOT NULL,
    `comentario` TEXT NOT NULL
);

CREATE TABLE `peliculas`(
    `id_pelicula` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `titulo` VARCHAR(50) NOT NULL,
    `anio` YEAR NOT NULL,
    `sinopsis` TEXT NOT NULL
);

CREATE TABLE `usuarios`(
    `id_usuario` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombres` VARCHAR(50) NOT NULL,
    `apellidos` VARCHAR(50) NOT NULL,
    `pais` VARCHAR(2) NOT NULL,
    `fecha_nacimiento` DATE NOT NULL
);

CREATE TABLE `pelicula_director`(
    `id_pelicula_director` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_pelicula` INT UNSIGNED NOT NULL,
    `id_director` INT UNSIGNED NOT NULL
);

ALTER TABLE
    `pelicula_categoria` ADD CONSTRAINT `pelicula_categoria_id_categoria_foreign` FOREIGN KEY(`id_categoria`) REFERENCES `categorias`(`id_categoria`);
ALTER TABLE
    `pelicula_director` ADD CONSTRAINT `pelicula_director_id_pelicula_foreign` FOREIGN KEY(`id_pelicula`) REFERENCES `peliculas`(`id_pelicula`);
ALTER TABLE
    `resenias` ADD CONSTRAINT `resenias_id_usuario_foreign` FOREIGN KEY(`id_usuario`) REFERENCES `usuarios`(`id_usuario`);
ALTER TABLE
    `pelicula_genero` ADD CONSTRAINT `pelicula_genero_id_genero_foreign` FOREIGN KEY(`id_genero`) REFERENCES `generos`(`id_genero`);
ALTER TABLE
    `pelicula_director` ADD CONSTRAINT `pelicula_director_id_director_foreign` FOREIGN KEY(`id_director`) REFERENCES `directores`(`id_director`);
ALTER TABLE
    `pelicula_categoria` ADD CONSTRAINT `pelicula_categoria_id_pelicula_foreign` FOREIGN KEY(`id_pelicula`) REFERENCES `peliculas`(`id_pelicula`);
ALTER TABLE
    `resenias` ADD CONSTRAINT `resenias_id_pelicula_foreign` FOREIGN KEY(`id_pelicula`) REFERENCES `peliculas`(`id_pelicula`);
ALTER TABLE
    `pelicula_genero` ADD CONSTRAINT `pelicula_genero_id_pelicula_foreign` FOREIGN KEY(`id_pelicula`) REFERENCES `peliculas`(`id_pelicula`);






INSERT INTO `directores` (`id_director`, `nombres`, `apellidos`, `pais`, `fecha_nacimiento`)
VALUES
    (1, 'Quentin', 'Tarantino', 'US', '1969-12-31'),
    (2, 'Steven', 'Spielberg', 'US', '1946-12-17'),
    (3, 'Christopher', 'Nolan', 'GB', '1970-07-29'),
    (4, 'Martin', 'Scorsese', 'US', '1942-11-16'),
    (5, 'Alfonso', 'Cuarón', 'MX', '1961-11-27'),
    (6, 'Pedro', 'Almodóvar', 'ES', '1949-09-24'),
    (7, 'Hayao', 'Miyazaki', 'JP', '1941-01-04'),
    (8, 'Sofia', 'Coppola', 'US', '1971-05-13'),
    (9, 'David', 'Lynch', 'US', '1946-01-19'),
    (10, 'Wes', 'Anderson', 'US', '1969-04-30'),
    (11, 'Ridley', 'Scott', 'GB', '1937-11-29'),
    (12, 'James', 'Cameron', 'CA', '1954-08-15'),
    (13, 'Joel', 'Coen', 'US', '1954-11-28'),
    (14, 'Ethan', 'Coen', 'US', '1957-09-20'),
    (15, 'Francis Ford', 'Coppola', 'US', '1939-04-06'),
    (16, 'Tim', 'Burton', 'US', '1958-08-24'),
    (17, 'Spike', 'Lee', 'US', '1957-03-19'),
    (18, 'Alejandro', 'González Iñárritu', 'MX', '1963-08-14'),
    (19, 'Guillermo', 'del Toro', 'MX', '1964-10-08'),
    (20, 'Denis', 'Villeneuve', 'CA', '1967-10-03');

INSERT INTO `categorias` (`id_categoria`, `nombre`, `descripcion`)
VALUES
    (1, 'Acción', 'Películas de alto impacto y mucha adrenalina'),
    (2, 'Aventura', 'Películas que te llevan a vivir emocionantes aventuras'),
    (3, 'Comedia', 'Películas que te harán reír y pasar un buen rato'),
    (4, 'Dramas', 'Películas que tratan temas serios y profundos'),
    (5, 'Romance', 'Películas de amor y relaciones interpersonales'),
    (6, 'Terror', 'Películas que te harán saltar de miedo'),
    (7, 'Ciencia ficción', 'Películas que exploran futuros alternativos y tecnologías imaginarias'),
    (8, 'Fantasía', 'Películas con elementos de magia, mitología y mundos imaginarios'),
    (9, 'Musical', 'Películas que incluyen números musicales y bailes'),
    (10, 'Western', 'Películas de vaqueros y el salvaje oeste'),
    (11, 'Animación', 'Películas que usan técnicas de animación para contar sus historias'),
    (12, 'Documental', 'Películas que presentan hechos y eventos reales'),
    (13, 'Histórico', 'Películas que relatan hechos históricos y culturales'),
    (14, 'Suspenso', 'Películas que te mantienen en tensión y expectativa'),
    (15, 'Crimen', 'Películas que se enfocan en la investigación y el castigo de delitos'),
    (16, 'Misterio', 'Películas que presentan un enigma o misterio a resolver'),
    (17, 'Guerra', 'Películas que tratan temas bélicos y conflictos armados'),
    (18, 'Deportes', 'Películas que tienen el deporte como tema central'),
    (19, 'Biográfico', 'Películas que narran la vida de personajes históricos o famosos'),
    (20, 'Cine negro', 'Películas que se caracterizan por su atmósfera oscura y su trama criminal');


INSERT INTO `usuarios` (`id_usuario`, `nombres`, `apellidos`, `pais`, `fecha_nacimiento`)
VALUES
    (1, 'Sara', 'González', 'ES', '1995-03-11'),
    (2, 'Pedro', 'Ramírez', 'MX', '1987-06-14'),
    (3, 'Ana', 'Martínez', 'AR', '2001-09-21'),
    (4, 'Carlos', 'Sánchez', 'CO', '1990-11-30'),
    (5, 'Laura', 'García', 'US', '1985-04-04'),
    (6, 'Luis', 'Pérez', 'CL', '1998-11-17'),
    (7, 'María', 'Hernández', 'PE', '2000-02-27'),
    (8, 'David', 'López', 'VE', '1986-08-10'),
    (9, 'Carmen', 'Rodríguez', 'UY', '1992-07-23'),
    (10, 'Juan', 'Fernández', 'BR', '1989-05-02'),
    (11, 'Marta', 'Díaz', 'FR', '1996-10-13'),
    (12, 'Francisco', 'Álvarez', 'IT', '2003-01-08'),
    (13, 'Elena', 'Ruiz', 'DE', '1988-12-24'),
    (14, 'Manuel', 'Gómez', 'GB', '1991-09-07'),
    (15, 'Lucía', 'Santos', 'JP', '1994-06-29'),
    (16, 'Javier', 'Torres', 'KR', '1997-03-20'),
    (17, 'Isabel', 'Castro', 'CN', '1984-04-16'),
    (18, 'Ricardo', 'Romero', 'RU', '1993-11-10'),
    (19, 'Paula', 'Jiménez', 'AU', '1999-02-01'),
    (20, 'Diego', 'Morales', 'CA', '1981-07-06');



INSERT INTO `peliculas` (`id_pelicula`, `titulo`, `anio`, `sinopsis`)
VALUES
    (1, 'Pulp Fiction', 1995, 'Las vidas de dos gángsters se entrelazan en una serie de eventos peligrosos.'),
    (2, 'Kill Bill: Volumen 1', 2005, 'Una mujer busca venganza contra un equipo.'),
    (3, 'La lista de Schindler', 1993, 'Un empresario alemán salva a judíos durante el Holocausto.'),
    (4, 'El caballero de la noche', 2008, 'El Caballero de la Noche lucha contra el crimen en Gotham.'),
    (5, 'Goodfellas', 1990, 'Un hombre se une a la mafia y se enfrenta a las consecuencias.'),
    (6, 'Gravity', 2013, 'Dos astronautas quedan a la deriva en el espacio después de un accidente.'),
    (7, 'Mujeres al borde de un ataque de nervios', 1988, 'Una mujer busca venganza contra su ex amante.'),
    (8, 'El viaje de Chihiro', 2001, 'Una niña se pierde en un mundo mágico y busca una manera de regresar a casa.'),
    (9, 'El padrino', 1972, 'La historia de una familia mafiosa y su lucha por el poder.'),
    (10, 'Gran Hotel Budapest', 2014, 'Un conserje y un botones se convierten en amigos y buscan un tesoro robado.'),
    (11, 'Alien: El octavo pasajero', 1979, 'La tripulación de una nave espacial es atacada por una criatura extraterrestre.'),
    (12, 'Avatar', 2009, 'Un veterano de guerra es enviado a un planeta alienígena para infiltrarse en una tribu.'),
    (13, 'No Country for Old Men', 2007, 'Un cazador encuentra una bolsa de dinero y se convierte en el objetivo de un asesino.'),
    (14, 'Fargo', 1996, 'Un hombre contrata a dos matones para secuestrar a su esposa.'),
    (15, 'Apocalipsis ahora', 1979, 'Un capitán es enviado en una misión para asesinar a un coronel renegado en Vietnam.'),
    (16, 'Eduardo Manostijeras', 1990, 'Un hombre solitario con cuchillas en lugar de manos se enamora.'),
    (17, 'Haz lo correcto', 1989, 'La tensión racial aumenta en un vecindario de Brooklyn durante una ola de calor.'),
    (18, 'Birdman', 2014, 'Un actor intenta recuperar su carrera mientras lucha con su ego.'),
    (19, 'El renacido', 2015, 'Un hombre es dejado por muerto en la naturaleza después de ser atacado por un oso.'),
    (20, 'Blade Runner 2049', 2017, 'Un blade runner descubre un secreto que podría cambiar el mundo.'),
    (21, 'Pokemon', 2000, 'Película animada de las aventuras de un joven llamado Az de Pueblo Paleta que recorre el mundo hasta convertirse en el Maestro Pokemon, derrotando distintos adversarios.');


INSERT INTO `generos` (`id_genero`, `nombre`, `comentario`)
VALUES
    (1, 'Acción', 'Películas con escenas de acción y violencia'),
    (2, 'Comedia', 'Películas con humor y situaciones cómicas'),
    (3, 'Drama', 'Películas con temáticas dramáticas y emotivas'),
    (4, 'Romance', 'Películas con historias de amor y relaciones'),
    (5, 'Ciencia Ficción', 'Películas con elementos futuristas y tecnológicos'),
    (6, 'Fantasía', 'Películas con elementos mágicos y sobrenaturales'),
    (7, 'Terror', 'Películas con sustos y elementos aterradores'),
    (8, 'Suspenso', 'Películas con tensiones y giros inesperados'),
    (9, 'Documental', 'Películas que muestran hechos o situaciones reales'),
    (10, 'Animación', 'Películas hechas con animación de cualquier tipo');


INSERT INTO `resenias` (`id_resenia`, `id_usuario`, `id_pelicula`, `titulo`, `puntuacion`, `comentario`)
VALUES
    (3, 3, 3, 'Buena actuación', 4, 'Las actuaciones son excelentes, pero el guión es un poco flojo'),
    (4, 4, 4, 'Muy entretenida', 5, 'asdddd'),
    (5, 5, 5, 'Decepcionantes', 2, 'Tenía muchas expectativas con esta película y no cumplió con ninguna'),
    (6, 6, 6, 'Increíble fotografíaaaaa', 5, 'La fotografía es simplemente impresionante, vale la pena verla solo por eso'),
    (7, 7, 7, 'Nada nuevo', 3, 'Es una película típica de su género, no ofrece nada innovador'),
    (8, 8, 8, 'Mala edición', 2, 'La edición es muy confusa, me costó entender la trama'),
    (9, 9, 9, 'Excelente banda sonora', 4, 'La música es espectacular y le da un gran ambiente a la película'),
    (10, 10, 10, 'No es para todos', 3, 'Es una película un poco extraña, no creo que sea del gusto de todos'),
    (11, 11, 11, 'Muy buena trama', 4, 'La trama es muy interesante y te mantiene enganchado todo el tiempo'),
    (12, 12, 12, 'Muy larga', 3, 'La película es buena, pero se siente un poco larga y pesada'),
    (13, 13, 13, 'Buenas actuaciones', 4, 'Las actuaciones son buenas y le dan vida a la película'),
    (14, 14, 14, 'Demasiado dramática', 3, 'Es una película muy dramática, puede ser un poco pesada para algunos'),
    (15, 15, 15, 'Entretenida comedia', 4, 'Si buscas una película ligera y divertida, esta es una buena opción'),
    (16, 16, 16, 'Final decepcionante', 2, 'La película es buena, pero el final es muy decepcionante'),
    (17, 17, 17, 'Impresionante efectos especiales', 5, 'Los efectos especiales son increíbles, vale la pena verla solo por eso'),
    (18, 18, 18, 'Aburrida', 2, 'La película es bastante aburrida, no me mantuvo interesado'),
    (19, 19, 19, 'Intenso thriller', 4, 'Es un thriller muy intenso y emocionante, la recomiendo'),
    (20, 20, 20, 'Mala dirección', 2, 'La dirección es muy mala, se nota que el director no sabía lo que hacía');




INSERT INTO `pelicula_genero` (`id_pelicula`, `id_genero`)
VALUES
    (2, 1),
  (2, 8),
  (3, 3),
  (3, 4),
  (4, 1),
  (4, 8),
  (5, 2),
  (5, 8),
  (6, 1),
  (6, 5),
  (6, 8),
  (7, 2),
  (7, 3),
  (7, 7),
  (8, 3),
  (8, 6),
  (9, 1),
  (9, 4),
  (9, 8),
  (10, 2),
  (6, 8),
  (7, 2),
  (7, 3),
  (7, 7),
  (8, 3),
  (8, 6),
  (9, 1),
  (9, 4),
  (9, 8),
  (10, 2),
  (14, 1),
  (14, 8),
  (15, 1),
  (15, 8),
  (16, 1),
  (16, 3),
  (16, 4),
  (16, 8),
  (17, 1),
  (17, 2),
  (17, 3),
  (18, 3),
  (18, 8),
  (19, 1),
  (19, 3),
  (19, 8),
  (20, 1),
  (20, 5),
  (20, 8);


INSERT INTO `pelicula_categoria` (`id_pelicula_categoria`, `id_pelicula`, `id_categoria`)
VALUES
    (1, 4, 1),
    (2, 15, 1),
    (3, 16, 1),
    (4, 1, 2),
    (5, 14, 2),
    (6, 4, 3),
    (7, 7, 3),
    (8, 13, 3),
    (9, 1, 4),
    (10, 4, 4),
    (11, 14, 4),
    (12, 1, 5),
    (13, 4, 5),
    (14, 15, 5),
    (15, 2, 6),
    (16, 7, 6),
    (17, 14, 6),
    (18, 3, 7),
    (19, 4, 7),
    (20, 15, 7),
    (21, 4, 14),
    (22, 5, 14),
    (23, 6, 14),
    (24, 7, 15),
    (25, 14, 15),
    (26, 16, 15),
    (27, 3, 16),
    (28, 8, 16),
    (29, 11, 16),
    (30, 14, 16),
    (31, 4, 14),
    (32, 5, 14),
    (33, 6, 14),
    (34, 7, 15),
    (35, 14, 15),
    (36, 16, 15),
    (37, 3, 16),
    (38, 8, 16),
    (39, 11, 16),
    (40, 14, 16),
    (41, 4, 14),
    (42, 5, 14),
    (43, 6, 14),
    (44, 7, 15),
    (45, 14, 15),
    (46, 16, 15);


INSERT INTO `pelicula_director` (`id_pelicula_director`, `id_pelicula`, `id_director`)
VALUES
    (1, 1, 1),
    (2, 1, 20),
    (3, 2, 1),
    (4, 2, 20),
    (5, 3, 4),
    (6, 4, 11),
    (7, 5, 4),
    (8, 6, 5),
    (9, 7, 6),
    (10, 8, 7),
    (11, 9, 12),
    (12, 10, 10),
    (13, 11, 11),
    (14, 12, 12),
    (15, 13, 13),
    (16, 14, 13),
    (17, 15, 15),
    (18, 16, 16),
    (19, 17, 17),
    (20, 18, 18),
    (21, 19, 18),
    (22, 19, 19),
    (23, 20, 1),
    (24, 20, 2),
    (25, 20, 3),
    (26, 20, 4),
    (27, 20, 5),
    (28, 20, 6),
    (29, 20, 7),
    (30, 20, 8),
    (31, 20, 9),
    (32, 20, 10),
    (33, 20, 11),
    (34, 20, 12),
    (35, 20, 13),
    (36, 20, 14),
    (37, 20, 15),
    (38, 20, 16),
    (39, 20, 17),
    (40, 20, 18);
