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


-- Databasestructuur van meldingssite wordt geschreven
CREATE DATABASE IF NOT EXISTS `melding_site` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `melding_site`;

-- Structuur van  tabel meldingssite.AZZURRO wordt geschreven
CREATE TABLE IF NOT EXISTS `AZZURRO` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `vechtNumber` varchar(50) DEFAULT NULL,
  `wapen` varchar(50) DEFAULT NULL,
  `locatie` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `unconscious` varchar(50) DEFAULT NULL,
  `locatieSpecifiek` varchar(50) DEFAULT NULL,
  `contact` varchar(50) DEFAULT NULL,
  `naam` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefoon` varchar(50) DEFAULT NULL,
  `p2naam` varchar(50) DEFAULT NULL,
  `p2huidskleur` varchar(50) DEFAULT NULL,
  `p2geslacht` varchar(50) DEFAULT NULL,
  `p2leeftijd` varchar(50) DEFAULT NULL,
  `voertuigtype` varchar(50) DEFAULT NULL,
  `voertuigmerk` varchar(50) DEFAULT NULL,
  `voertuigkenteken` varchar(50) DEFAULT NULL,
  `voertuigkleur` varchar(50) DEFAULT NULL,
  `voertuiganders` varchar(50) DEFAULT NULL,
  `p2kleding` varchar(50) DEFAULT NULL,
  `p2anders` varchar(50) DEFAULT NULL,
  `extra` varchar(50) DEFAULT NULL,
  `drugsExtra` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Data exporteren was gedeselecteerd
-- Structuur van  tabel meldingssite.KLW (KAREL LOTSYWEG) wordt geschreven
CREATE TABLE IF NOT EXISTS `KLW (KAREL LOTSYWEG)` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
  `TimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `vechtNumber` varchar(50) DEFAULT NULL,
  `wapen` varchar(50) DEFAULT NULL,
  `locatie` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `unconscious` varchar(50) DEFAULT NULL,
  `locatieSpecifiek` varchar(50) DEFAULT NULL,
  `contact` varchar(50) DEFAULT NULL,
  `naam` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefoon` varchar(50) DEFAULT NULL,
  `p2naam` varchar(50) DEFAULT NULL,
  `p2huidskleur` varchar(50) DEFAULT NULL,
  `p2geslacht` varchar(50) DEFAULT NULL,
  `p2leeftijd` varchar(50) DEFAULT NULL,
  `voertuigtype` varchar(50) DEFAULT NULL,
  `voertuigmerk` varchar(50) DEFAULT NULL,
  `voertuigkenteken` varchar(50) DEFAULT NULL,
  `voertuigkleur` varchar(50) DEFAULT NULL,
  `voertuiganders` varchar(50) DEFAULT NULL,
  `p2kleding` varchar(50) DEFAULT NULL,
  `p2anders` varchar(50) DEFAULT NULL,
  `extra` varchar(50) DEFAULT NULL,
  `drugsExtra` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Data exporteren was gedeselecteerd
-- Structuur van  tabel meldingssite.LEERPARKPROMENADE 100 wordt geschreven
CREATE TABLE IF NOT EXISTS `LEERPARKPROMENADE 100` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `vechtNumber` varchar(50) DEFAULT NULL,
  `wapen` varchar(50) DEFAULT NULL,
  `locatie` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `unconscious` varchar(50) DEFAULT NULL,
  `locatieSpecifiek` varchar(50) DEFAULT NULL,
  `contact` varchar(50) DEFAULT NULL,
  `naam` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefoon` varchar(50) DEFAULT NULL,
  `p2naam` varchar(50) DEFAULT NULL,
  `p2huidskleur` varchar(50) DEFAULT NULL,
  `p2geslacht` varchar(50) DEFAULT NULL,
  `p2leeftijd` varchar(50) DEFAULT NULL,
  `voertuigtype` varchar(50) DEFAULT NULL,
  `voertuigmerk` varchar(50) DEFAULT NULL,
  `voertuigkenteken` varchar(50) DEFAULT NULL,
  `voertuigkleur` varchar(50) DEFAULT NULL,
  `voertuiganders` varchar(50) DEFAULT NULL,
  `p2kleding` varchar(50) DEFAULT NULL,
  `p2anders` varchar(50) DEFAULT NULL,
  `extra` varchar(50) DEFAULT NULL,
  `drugsExtra` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Data exporteren was gedeselecteerd
-- Structuur van  tabel meldingssite.LP5 DUURZAAMHEIDSFABRIEK wordt geschreven
CREATE TABLE IF NOT EXISTS `LP5 DUURZAAMHEIDSFABRIEK` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
  `TimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `vechtNumber` varchar(50) DEFAULT NULL,
  `wapen` varchar(50) DEFAULT NULL,
  `locatie` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `unconscious` varchar(50) DEFAULT NULL,
  `locatieSpecifiek` varchar(50) DEFAULT NULL,
  `contact` varchar(50) DEFAULT NULL,
  `naam` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefoon` varchar(50) DEFAULT NULL,
  `p2naam` varchar(50) DEFAULT NULL,
  `p2huidskleur` varchar(50) DEFAULT NULL,
  `p2geslacht` varchar(50) DEFAULT NULL,
  `p2leeftijd` varchar(50) DEFAULT NULL,
  `voertuigtype` varchar(50) DEFAULT NULL,
  `voertuigmerk` varchar(50) DEFAULT NULL,
  `voertuigkenteken` varchar(50) DEFAULT NULL,
  `voertuigkleur` varchar(50) DEFAULT NULL,
  `voertuiganders` varchar(50) DEFAULT NULL,
  `p2kleding` varchar(50) DEFAULT NULL,
  `p2anders` varchar(50) DEFAULT NULL,
  `extra` varchar(50) DEFAULT NULL,
  `drugsExtra` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Data exporteren was gedeselecteerd
-- Structuur van  tabel meldingssite.MBW wordt geschreven
CREATE TABLE IF NOT EXISTS `MBW` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
  `TimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `vechtNumber` varchar(50) DEFAULT NULL,
  `wapen` varchar(50) DEFAULT NULL,
  `locatie` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `unconscious` varchar(50) DEFAULT NULL,
  `locatieSpecifiek` varchar(50) DEFAULT NULL,
  `contact` varchar(50) DEFAULT NULL,
  `naam` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefoon` varchar(50) DEFAULT NULL,
  `p2naam` varchar(50) DEFAULT NULL,
  `p2huidskleur` varchar(50) DEFAULT NULL,
  `p2geslacht` varchar(50) DEFAULT NULL,
  `p2leeftijd` varchar(50) DEFAULT NULL,
  `voertuigtype` varchar(50) DEFAULT NULL,
  `voertuigmerk` varchar(50) DEFAULT NULL,
  `voertuigkenteken` varchar(50) DEFAULT NULL,
  `voertuigkleur` varchar(50) DEFAULT NULL,
  `voertuiganders` varchar(50) DEFAULT NULL,
  `p2kleding` varchar(50) DEFAULT NULL,
  `p2anders` varchar(50) DEFAULT NULL,
  `extra` varchar(50) DEFAULT NULL,
  `drugsExtra` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Data exporteren was gedeselecteerd
-- Structuur van  tabel meldingssite.PATERSWEG wordt geschreven
CREATE TABLE IF NOT EXISTS `PATERSWEG` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `vechtNumber` varchar(50) DEFAULT NULL,
  `wapen` varchar(50) DEFAULT NULL,
  `locatie` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `unconscious` varchar(50) DEFAULT NULL,
  `locatieSpecifiek` varchar(50) DEFAULT NULL,
  `contact` varchar(50) DEFAULT NULL,
  `naam` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefoon` varchar(50) DEFAULT NULL,
  `p2naam` varchar(50) DEFAULT NULL,
  `p2huidskleur` varchar(50) DEFAULT NULL,
  `p2geslacht` varchar(50) DEFAULT NULL,
  `p2leeftijd` varchar(50) DEFAULT NULL,
  `voertuigtype` varchar(50) DEFAULT NULL,
  `voertuigmerk` varchar(50) DEFAULT NULL,
  `voertuigkenteken` varchar(50) DEFAULT NULL,
  `voertuigkleur` varchar(50) DEFAULT NULL,
  `voertuiganders` varchar(50) DEFAULT NULL,
  `p2kleding` varchar(50) DEFAULT NULL,
  `p2anders` varchar(50) DEFAULT NULL,
  `extra` varchar(50) DEFAULT NULL,
  `drugsExtra` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Data exporteren was gedeselecteerd
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
