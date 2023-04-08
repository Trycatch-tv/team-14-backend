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
    `reseñas` ADD CONSTRAINT `reseñas_id_usuario_foreign` FOREIGN KEY(`id_usuario`) REFERENCES `usuarios`(`id_usuario`);
ALTER TABLE
    `pelicula_genero` ADD CONSTRAINT `pelicula_genero_id_genero_foreign` FOREIGN KEY(`id_genero`) REFERENCES `generos`(`id_genero`);
ALTER TABLE
    `pelicula_director` ADD CONSTRAINT `pelicula_director_id_director_foreign` FOREIGN KEY(`id_director`) REFERENCES `directores`(`id_director`);
ALTER TABLE
    `pelicula_categoria` ADD CONSTRAINT `pelicula_categoria_id_pelicula_foreign` FOREIGN KEY(`id_pelicula`) REFERENCES `peliculas`(`id_pelicula`);
ALTER TABLE
    `reseñas` ADD CONSTRAINT `reseñas_id_pelicula_foreign` FOREIGN KEY(`id_pelicula`) REFERENCES `peliculas`(`id_pelicula`);
ALTER TABLE
    `pelicula_genero` ADD CONSTRAINT `pelicula_genero_id_pelicula_foreign` FOREIGN KEY(`id_pelicula`) REFERENCES `peliculas`(`id_pelicula`);
