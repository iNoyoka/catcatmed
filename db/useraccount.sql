
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+08:00";

DROP TABLE IF EXISTS `dirlist`;
CREATE TABLE IF NOT EXISTS `dirlist` (
  `dirid` int(9) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8_unicode_ci,
  `filenumber` int,
  `secret` int NOT NULL,
  `special`  text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`dirid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

