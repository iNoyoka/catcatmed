-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1:3306
-- 產生時間： 2018-09-03 09:14:38
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
-- 資料表結構 `ordersystem`
--

DROP TABLE IF EXISTS `ordersystem`;
CREATE TABLE IF NOT EXISTS `ordersystem` (
  `id` int(13) NOT NULL AUTO_INCREMENT,
  `userid` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `userphone` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `userhomeaddress` text COLLATE utf8mb4_unicode_ci,
  `user711address` text COLLATE utf8mb4_unicode_ci,
  `productCode` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `productName_ZH` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `orderstate` int(11) NOT NULL,
  `buildTime` datetime NOT NULL,
  `checkTime` datetime DEFAULT NULL,
  `outgoingTime` datetime DEFAULT NULL,
  `deliveryTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表的匯出資料 `ordersystem`
--

INSERT INTO `ordersystem` (`id`, `userid`, `username`, `userphone`, `userhomeaddress`, `user711address`, `productCode`, `productName_ZH`, `orderstate`, `buildTime`, `checkTime`, `outgoingTime`, `deliveryTime`) VALUES
(1, 'AS1232161@gmail.com', '謝易達', '我是小可愛', '一二三', NULL, 'CCM0203', '特級幼貓成長配方 雞肉+糙米', 1, '2018-09-03 15:27:13', NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
