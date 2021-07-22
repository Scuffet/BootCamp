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

DROP TABLE IF EXISTS `reference_magazine`;
CREATE TABLE `reference_magazine` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom_magazine` char(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `reference_magazine` (`id`, `nom_magazine`) VALUES
(1,	'express'),
(2,	'leMonde');

DROP TABLE IF EXISTS `magazine`;
CREATE TABLE `magazine` (
  `id_magazine` int(11) NOT NULL,
  `id_article` int(11) NOT NULL,
  PRIMARY KEY (`id_article`),
  KEY `id_magazine` (`id_magazine`),
  KEY `id_article` (`id_article`),
  CONSTRAINT `magazine_ibfk_2` FOREIGN KEY (`id_magazine`) REFERENCES `reference_magazine` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `magazine_ibfk_3` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `magazine` (`id_magazine`, `id_article`) VALUES
(1,	1),
(2,	2);



-- 2021-07-22 08:41:43
