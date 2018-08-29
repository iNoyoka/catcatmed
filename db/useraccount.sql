-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1:3306
-- 產生時間： 2018-08-29 04:26:44
-- 伺服器版本: 5.7.21
-- PHP 版本： 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `catcatmed`
--

-- --------------------------------------------------------

--
-- 資料表結構 `useraccount`
--

DROP TABLE IF EXISTS `useraccount`;
CREATE TABLE IF NOT EXISTS `useraccount` (
  `CCMUserPId` int(9) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `username` text CHARACTER SET latin1 NOT NULL,
  `password` text CHARACTER SET latin1,
  `buildtime` datetime NOT NULL,
  `lastpurchasetime` datetime DEFAULT NULL,
  `catA` text CHARACTER SET latin1,
  `catB` text CHARACTER SET latin1,
  `catC` text CHARACTER SET latin1,
  `catD` text CHARACTER SET latin1,
  `catE` text CHARACTER SET latin1,
  PRIMARY KEY (`CCMUserPId`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 資料表的匯出資料 `useraccount`
--

INSERT INTO `useraccount` (`CCMUserPId`, `name`, `username`, `password`, `buildtime`, `lastpurchasetime`, `catA`, `catB`, `catC`, `catD`, `catE`) VALUES
(1, '義達', 'as1232161@gmail.com', 'as123512', '2018-07-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'Jhony', 'as1232161@gamil.com.tw', 'as123512', '2018-07-10 13:15:57', NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'ss', 's@gmail.com', 'ssssssss', '2018-07-12 12:25:53', NULL, NULL, NULL, NULL, NULL, NULL),
(4, '謝易達', 'as1232161@g2mail.com', 'as123512', '2018-07-26 15:48:34', NULL, NULL, NULL, NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
