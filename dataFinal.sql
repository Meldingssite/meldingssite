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
  `voertuig` varchar(500) DEFAULT NULL,
  `drugsExtra` varchar(500) DEFAULT NULL,
  `persoon` varchar(500) DEFAULT NULL,
  `Completed` varchar(500) DEFAULT 'false',
  `FILE` varchar(500) DEFAULT NULL,
  `school` varchar(500) DEFAULT NULL,
  `wapentype` varchar(500) DEFAULT NULL,
  `voorwerp` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumpen data van tabel meldendvc_nl_meldingsite.MainTabel: ~6 rows (ongeveer)
/*!40000 ALTER TABLE `MainTabel` DISABLE KEYS */;
INSERT INTO `MainTabel` (`id`, `TimeStamp`, `vechtNumber`, `wapen`, `locatie`, `type`, `unconscious`, `locatieSpecifiek`, `contact`, `naam`, `email`, `telefoon`, `extra`, `extraPersoon`, `voertuig`, `drugsExtra`, `persoon`, `Completed`, `FILE`, `school`, `wapentype`, `voorwerp`) VALUES
	(1, '2018-07-10 12:19:45', NULL, NULL, 'test', 'Ongeval', 'Is het slachtoffer bewusteloos?: Ja', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Wat voor voertuig is het?: 1,Voertuig merk: 2,Kenteken: 3,Kleur van het voertuig: 4,Heeft het voertuig nog andere opvallende kenmerken?: 5', NULL, 'naam: 1,email: 2,telefoon: 3', 'false', '6682604.jpg', 'Leerparkpromenade 100', NULL, NULL),
	(2, '2018-07-10 13:25:46', 'hoeveel mensen vechten er?: 20', 'heeft u een wapen gezien?: Ja', 'test2', 'Vechtpartij', NULL, NULL, 'mogen we contact met u opnemen?: Ja', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Leerparkpromenade 100', 'Beschrijf de waargenomen wapens: geweer', NULL),
	(3, '2018-07-10 13:26:43', NULL, 'wat voor een wapen heeft u gezien: mes', 'overal', 'Wapens', NULL, NULL, NULL, NULL, NULL, NULL, 'extra informatie: 1,mogen we contact met u opnemen?: Ja', 'Naam: 1,Huidskleur: 2,Geslacht: 3,Leeftijd: 4,Kleding: 5,Opvallende kenmerken aan persoon: 6', NULL, NULL, 'naam: 1,email: 2,telefoon: 3', 'false', NULL, 'Leerparkpromenade 100', NULL, NULL),
	(4, '2018-07-10 13:29:40', NULL, NULL, 'Drugs', 'Drugs', NULL, NULL, NULL, NULL, NULL, NULL, 'extra informatie: 1', 'Naam: 1,Huidskleur: 2,Geslacht: 3,Leeftijd: 4,Kleding: 5,Opvallende kenmerken aan persoon: 6', 'Wat voor voertuig is het?: 1,Voertuig merk: 2,Kenteken: 3,Kleur van het voertuig: 4,Heeft het voertuig nog andere opvallende kenmerken?: 5', NULL, 'naam: 1,email: 2,telefoon: 3', 'false', '2a966f1f09e7bf411673facb77d2a797d9a44c28_hq.jpg', 'Leerparkpromenade 100', NULL, NULL),
	(5, '2018-07-10 13:30:54', NULL, NULL, 'Diefstal', 'Diefstal', NULL, NULL, NULL, NULL, NULL, NULL, 'extra informatie: 1', 'Naam: 7,Huidskleur: 8,Geslacht: 9,Leeftijd: 10,Kleding: 11,Opvallende kenmerken aan persoon: 12', NULL, NULL, 'naam: 13,email: 14,telefoon: 15', 'false', NULL, 'Leerparkpromenade 100', NULL, 'Beschrijf het voorwerp: 2,Kleur van het gestolen voorwerp: 3,Merk: 4,Inhoud van voorwerp: 5,Andere kenmerken (bijv. achtergond van smartphone): 6'),
	(7, '2018-07-10 13:32:47', NULL, NULL, 'Martin', 'Overlast', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', NULL, 'Leerparkpromenade 100', NULL, NULL);
/*!40000 ALTER TABLE `MainTabel` ENABLE KEYS */;

-- Structuur van  tabel meldendvc_nl_meldingsite.users wordt geschreven
CREATE TABLE IF NOT EXISTS `users` (
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `rights` int(11) DEFAULT NULL,
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumpen data van tabel meldendvc_nl_meldingsite.users: ~6 rows (ongeveer)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`email`, `password`, `rights`) VALUES
	('bewaking@melding.com', '$2y$10$R10eXsJMaKfvzS1stX7kFuXRoL9Dy7kBXGspuXVI40xzX7UezFn.G', 2),
	('test@123.com', '$2y$10$csgodevonREEEEEEEEEEE.j8J7QPGKAN2JInroo1CqWewKjQ/JkDq', NULL),
	('testmail@test.co.uk', '$2y$10$csgodevonREEEEEEEEEEE.j8J7QPGKAN2JInroo1CqWewKjQ/JkDq', NULL),
	('testmail@test.com', '$2y$10$csgodevonREEEEEEEEEEE.xJkmdiyCNO3s567kHIuf0lAgs7F5OrG', 2),
	('vincent1906@live.com', '$2y$10$csgodevonREEEEEEEEEEE.FQaOanhBPEsFXOTWxl5kZxV1BdtOE6O', 2),
	('vincent1906@live.nl', '$2y$10$csgodevonREEEEEEEEEEE.FQaOanhBPEsFXOTWxl5kZxV1BdtOE6O', 2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
