-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server versie:                5.6.37 - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Versie:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Databasestructuur van melding_site wordt geschreven
CREATE DATABASE IF NOT EXISTS `melding_site` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `melding_site`;

-- Structuur van  tabel melding_site.MainTabel wordt geschreven
CREATE TABLE IF NOT EXISTS `MainTabel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `vechtNumber` varchar(500) DEFAULT NULL,
  `wapen` varchar(500) DEFAULT NULL,
  `locatie` varchar(500) DEFAULT NULL,
  `type` varchar(500) DEFAULT NULL,
  `unconscious` varchar(500) DEFAULT NULL,
  `locatieSpecifiek` varchar(500) DEFAULT NULL,
  `contact` varchar(500) DEFAULT NULL,
  `naam` varchar(500) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,
  `telefoon` varchar(500) DEFAULT NULL,
  `extra` varchar(500) DEFAULT NULL,
  `extraPersoon` varchar(500) DEFAULT NULL,
  `voertuig` varchar(500) DEFAULT NULL,
  `drugsExtra` varchar(500) DEFAULT NULL,
  `persoon` varchar(500) DEFAULT NULL,
  `Completed` varchar(500) DEFAULT 'false',
  `FILE` varchar(500) DEFAULT NULL,
  `school` varchar(500) DEFAULT NULL,
  `wapentype` varchar(500) DEFAULT NULL,
  `voorwerp` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Data exporteren was gedeselecteerd
-- Structuur van  tabel melding_site.users wordt geschreven
CREATE TABLE IF NOT EXISTS `users` (
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `rights` int(11) DEFAULT NULL,
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporteren was gedeselecteerd
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
