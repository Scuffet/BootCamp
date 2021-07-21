-- Adminer 4.8.0 MySQL 5.5.5-10.4.18-MariaDB dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `nodejs_crud` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `nodejs_crud`;

DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `auteur` varchar(255) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `texte` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `article` (`id`, `auteur`, `titre`, `texte`) VALUES
(1,	'Tom',	'Sortie',	'Nouvel Iphone'),
(2,	'Jean',	'Fable',	'La Fontaine');

-- 2021-07-21 17:27:09
