CREATE DATABASE reservas;

USE reservas;

-- Módulo Configuración

-- Tabla de usuarios
CREATE TABLE usuarios(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario varchar(15) NOT NULL,
    password varchar(20) NOT NULL,
    estado INT(1) NOT NULL DEFAULT 1,
    fecCreado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecActualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de ciudades

CREATE TABLE ciudades (
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ciudad VARCHAR(150) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp
);

-- Tabla de roles
CREATE TABLE roles(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(20) NOT NULL,
    descripcion text NOT NULL,
    estado INT(1) NOT NULL DEFAULT 1,
    fecCreado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecActualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de asociación de roles
CREATE TABLE asocrol(
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idRol int(11) NOT NULL,
    idUsuario int(11) NOT NULL,
    fecCreado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecActualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idRol) REFERENCES roles(id),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

-- Tabla de permisos
CREATE TABLE permisos (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idRol int(11) NOT NULL,
    actualizar tinyint(1) NOT NULL,
    inactivar tinyint(1) NOT NULL,
    crear tinyint(1) NOT NULL,
    fecCreado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecActualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idRol) REFERENCES roles(id)
);

-- Módulo Contabilidad
-- Tabla de ingresos

CREATE TABLE ingresos (
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(150) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp
);

-- Tabla de gastos

CREATE TABLE gastos (
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(150) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp
);

-- Tabla de bancos

CREATE TABLE bancos (
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(150) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp
);

-- Tabla de tarjetas

CREATE TABLE tarjetas (
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(150) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp
);

-- Tabla de cuentas bancarias

CREATE TABLE cuentas_bancarias (
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nro_cuenta INT(50) NOT NULL,
    id_banco INT(11) NOT NULL,
    descripcion TEXT NULL,
    nombre_titular VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    correo VARCHAR(100) NULL,
    fax VARCHAR(100) NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp
);

ALTER TABLE cuentas_bancarias
ADD FOREIGN KEY (id_banco) REFERENCES bancos(id);

-- Tabla de pago por tarjeta

CREATE TABLE pago_tarjeta (
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nro_tarjeta INT(50) NOT NULL,
    id_tarjeta INT(11) NOT NULL,
    descripcion TEXT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (id_tarjeta) REFERENCES tarjetas(id)
);