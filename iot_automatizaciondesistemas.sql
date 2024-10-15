-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-10-2024 a las 04:45:29
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `iot_automatizaciondesistemas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actuadoresdata`
--

CREATE TABLE `actuadoresdata` (
  `id_actuador_data` int(20) NOT NULL,
  `valor` float DEFAULT NULL,
  `u_medida` varchar(50) DEFAULT NULL,
  `valor_max` int(20) DEFAULT NULL,
  `valor_min` int(20) DEFAULT NULL,
  `id_tipo_actuador` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sensoresdata`
--

CREATE TABLE `sensoresdata` (
  `id_sensor_data` int(20) NOT NULL,
  `valor` float DEFAULT NULL,
  `u_medida` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `id_tipo_sensor` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sistemas`
--

CREATE TABLE `sistemas` (
  `name` varchar(40) DEFAULT NULL,
  `titulo` text DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `finalidad` text DEFAULT NULL,
  `id_sistema` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoactuadores`
--

CREATE TABLE `tipoactuadores` (
  `id_tipo_actuador` int(20) NOT NULL,
  `tipo_nombre` varchar(50) DEFAULT NULL,
  `id_sistema` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiposensores`
--

CREATE TABLE `tiposensores` (
  `id_tipo_sensor` int(20) NOT NULL,
  `tipo_nombre` varchar(255) DEFAULT NULL,
  `id_sistema` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Usuario` varchar(40) NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `rol` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Usuario`, `Password`, `name`, `rol`) VALUES
('peo@gmail.com', '$2a$12$wQ6FzdDia11xVSbKT7I0Fu/VNm5rGTgMJf/vIhNo.sTsMMYBiPZYm', 'juan', 'admin'),
('xd@gmail.com', '$2a$12$wQ6FzdDia11xVSbKT7I0Fu/VNm5rGTgMJf/vIhNo.sTsMMYBiPZYm', 'xd', 'usuario');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actuadoresdata`
--
ALTER TABLE `actuadoresdata`
  ADD PRIMARY KEY (`id_actuador_data`);

--
-- Indices de la tabla `sensoresdata`
--
ALTER TABLE `sensoresdata`
  ADD PRIMARY KEY (`id_sensor_data`);

--
-- Indices de la tabla `sistemas`
--
ALTER TABLE `sistemas`
  ADD PRIMARY KEY (`id_sistema`);

--
-- Indices de la tabla `tipoactuadores`
--
ALTER TABLE `tipoactuadores`
  ADD PRIMARY KEY (`id_tipo_actuador`),
  ADD KEY `id_sistema` (`id_sistema`);

--
-- Indices de la tabla `tiposensores`
--
ALTER TABLE `tiposensores`
  ADD PRIMARY KEY (`id_tipo_sensor`),
  ADD KEY `id_sistema` (`id_sistema`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Usuario`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tipoactuadores`
--
ALTER TABLE `tipoactuadores`
  ADD CONSTRAINT `tipoactuadores_ibfk_1` FOREIGN KEY (`id_sistema`) REFERENCES `sistemas` (`id_sistema`);

--
-- Filtros para la tabla `tiposensores`
--
ALTER TABLE `tiposensores`
  ADD CONSTRAINT `tiposensores_ibfk_1` FOREIGN KEY (`id_sistema`) REFERENCES `sistemas` (`id_sistema`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
