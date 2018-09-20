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


-- Databasestructuur van meldendvc_nl_meldingsite wordt geschreven
CREATE DATABASE IF NOT EXISTS `meldendvc_nl_meldingsite` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `meldendvc_nl_meldingsite`;

-- Structuur van  tabel meldendvc_nl_meldingsite.MainTabel wordt geschreven
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
  `extraInfovoertuig` varchar(500) DEFAULT NULL,
  `voertuigToggle` varchar(500) DEFAULT NULL,
  `drugsExtra` varchar(500) DEFAULT NULL,
  `extraInfopersoon` varchar(500) DEFAULT NULL,
  `Completed` varchar(500) DEFAULT 'false',
  `FILE` varchar(500) DEFAULT NULL,
  `school` varchar(500) DEFAULT NULL,
  `wapentype` varchar(500) DEFAULT NULL,
  `voorwerp` varchar(500) DEFAULT NULL,
  `extraInfooverigWapens` varchar(500) DEFAULT NULL,
  `persoonToggle` varchar(500) DEFAULT NULL,
  `p2naam` varchar(500) DEFAULT NULL,
  `extraInfoextraPersoon` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumpen data van tabel meldendvc_nl_meldingsite.MainTabel: ~1 rows (ongeveer)
/*!40000 ALTER TABLE `MainTabel` DISABLE KEYS */;
INSERT INTO `MainTabel` (`id`, `TimeStamp`, `vechtNumber`, `wapen`, `locatie`, `type`, `unconscious`, `locatieSpecifiek`, `contact`, `naam`, `email`, `telefoon`, `extra`, `extraPersoon`, `extraInfovoertuig`, `voertuigToggle`, `drugsExtra`, `extraInfopersoon`, `Completed`, `FILE`, `school`, `wapentype`, `voorwerp`, `extraInfooverigWapens`, `persoonToggle`, `p2naam`, `extraInfoextraPersoon`) VALUES
	(1, '2018-09-20 13:25:09', NULL, NULL, 'Test', 'Ongeval(EHBO)', 'Is het slachtoffer bewusteloos?: Nee', NULL, 'mogen we contact met u opnemen?: Ja', NULL, NULL, NULL, NULL, NULL, 'Wat voor voertuig is het?: 1,Voertuig merk: 2,Kenteken: 3,Kleur van het voertuig: 4,andere opvallende kenmerken?: 5', 'Is er een voertuig bij betrokken?: Ja', NULL, 'naam: 6,email: 7,telefoon: 8', 'false', '0.jpg', 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(2, '2018-09-20 13:31:20', NULL, NULL, 'Test2', 'Vechtpartij', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(3, '2018-09-20 13:34:06', NULL, NULL, '', 'Vechtpartij', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(4, '2018-09-20 13:34:11', NULL, NULL, '', 'Ongeval(EHBO)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(5, '2018-09-20 13:34:19', NULL, NULL, '', 'Wapens', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(6, '2018-09-20 13:34:27', NULL, NULL, '', 'Drugs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(7, '2018-09-20 13:34:35', NULL, NULL, '', 'Diefstal', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Drechtsteden College', NULL, NULL, NULL, NULL, NULL, NULL),
	(8, '2018-09-20 13:35:09', NULL, NULL, '', 'Vechtpartij', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(9, '2018-09-20 13:36:50', NULL, NULL, '', 'Vechtpartij', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(10, '2018-09-20 13:38:22', 'hoeveel mensen vechten er?: 1', 'heeft u een wapen gezien?: Ja', '', 'Vechtpartij', NULL, NULL, 'mogen we contact met u opnemen?: Ja', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'naam: 2,email: 3,telefoon: 4', 'false', '0.jpg', 'Dordrecht', 'Beschrijf de waargenomen wapens: 1', NULL, NULL, NULL, NULL, NULL),
	(11, '2018-09-20 13:41:39', NULL, 'wat voor een wapen heeft u gezien: overig', '', 'Wapens', NULL, NULL, 'mogen we contact met u opnemen?: Ja', NULL, NULL, NULL, 'extra informatie: 8', NULL, NULL, NULL, NULL, 'naam: 9,email: 10,telefoon: 11', 'false', '170.png', 'Dordrecht', NULL, NULL, 'Wat voor een wapen?: 1', 'Moet er een persoon gemeldt worden?: Ja', NULL, 'Naam: 2,Huidskleur: 3,Geslacht: 4,Leeftijd: 5,Kleding: 6,Opvallende kenmerken aan persoon: 7'),
	(12, '2018-09-20 13:44:07', NULL, NULL, 'TEST3', 'Drugs', NULL, NULL, 'mogen we contact met u opnemen?: Ja', NULL, NULL, NULL, 'extra informatie: 1', 'Naam: 2,Huidskleur: 3,Geslacht: 4,Leeftijd: 5,Kleding: 6,Opvallende kenmerken aan persoon: 7', 'Wat voor voertuig is het?: 8,Voertuig merk: 9,Kenteken: 10,Kleur van het voertuig: 11,opvallende kenmerken?: 12', 'Is er een voertuig bij betrokken?: Ja', NULL, 'naam: 13,email: 14,telefoon: 15', 'false', '0.jpg', 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(13, '2018-09-20 13:45:55', NULL, NULL, 'Test5', 'Diefstal', NULL, NULL, 'mogen we contact met u opnemen?: Ja', NULL, NULL, NULL, 'extra informatie: 1', NULL, NULL, NULL, NULL, 'naam: 13,email: 14,telefoon: 15', 'false', 'dave.png', 'Dordrecht', NULL, 'Beschrijf het voorwerp: 2,Kleur van het gestolen voorwerp: 3,Merk: 4,Inhoud van voorwerp: 5,Andere kenmerken: 6', NULL, 'Is er een verdachte?: Ja', NULL, 'Naam: 7,Huidskleur: 8,Geslacht: 9,Leeftijd: 10,Kleding: 11,Opvallende kenmerken: 12'),
	(14, '2018-09-20 13:53:57', NULL, NULL, 'Test6', 'Pesten', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(15, '2018-09-20 13:56:58', NULL, NULL, '', 'Pesten', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(16, '2018-09-20 14:00:51', NULL, NULL, '', 'Pesten', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(17, '2018-09-20 14:01:51', NULL, NULL, '', 'Pesten', NULL, NULL, 'mogen we contact met u opnemen?: Ja', NULL, NULL, NULL, 'extra informatie: 7', NULL, NULL, NULL, NULL, 'naam: 8,email: 9,telefoon: 10', 'false', NULL, 'Dordrecht', NULL, NULL, NULL, 'Moet er een persoon gemeldt worden?: Ja', NULL, 'Naam: 1,Huidskleur: 2,Geslacht: 3,Leeftijd: 4,Kleding: 5,Opvallende kenmerken: 6'),
	(18, '2018-09-20 14:03:32', NULL, NULL, '', 'Pesten', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Leerparkpromenade 100', NULL, NULL, NULL, NULL, NULL, NULL),
	(26, '2018-09-20 14:46:31', NULL, NULL, 'Test', 'Emergency', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(27, '2018-09-20 14:54:38', NULL, NULL, 'Test', 'Emergency', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL),
	(28, '2018-09-20 15:12:33', NULL, NULL, '', 'Wapens', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Dordrecht', NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `MainTabel` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
