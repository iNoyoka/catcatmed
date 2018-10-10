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
(1, '謝易達', 'AS1232161@gmail.com', 'as123512', '2018-07-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(2,'朱君亞','lily1994329@gmail.com','0920088554','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(3,'張劭彤','shaotungcliff@gmail.com','0988792803','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(4,'賴俊儒','lanlie7@gmail.com','0916065506','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(5,'詹佳倫','cho851006@gmail.com','0903495108','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(6,'黃鈺喬','ktchuj@yahoo.com.tw','0919731587','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(7,'吳尚曄','vinceent505@gmail.com','0918811505','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(8,'張秉菁','l04290815@gmail.com','0988502926','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(9,'鍾念蓁','rara4t4@gmail.com','0912197260','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(10,'鞠健豐','g29940045@gmail.com','0909722378','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(11,'魏良安','h1242890@gmail.com','0912969576','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(12,'王亭之','tina103198@gmail.com','0925121031','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(13,'王亭昱','buhiphop_u@hotmail.com','0963290832','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(14,'林芷萱','lkysspp1@gmail.com','0978751197','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(15,'羅文均','wenjune.lo@gmail.com','0911592852','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(16,'葉佳溱','yaja820912@gmail.com','0989252085','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(17,'盧惟中','weiweilulu19@gmail.com','0972816819','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(18,'林佳瑩','jiayinglin520@gmail.com','0916120019','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(19,'林辰峰','paulstyle2012@gmail.com','0911965795','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(20,'黃雅筠','yayun000204@gmail.com','0918301643','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(21,'謝易達','as1232161@gmail.com','0905260282','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(22,'劉芸如','rubynz2326@gmail.com','0905086627','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(23,'張芳瑜','fung0520@hotmail.com','0920259967','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(24,'陳家葳','smilehedy0319046@gmail.com','0978120637','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(25,'周嘉貞','lide92847@gmail.com','0911193419','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(26,'李梓','cyes530@yahoo.com.tw','0978555368','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(27,'謝幸君','nishahsin@gmail.com','0960712311','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(28,'王宥心','fgvbnm1005@gmail.com','0975032336','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(29,'黃思玨','ketion@gmail.com','0960518170','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(30,'朱學瑤','kecokoyo@gmail.com','0925655576','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(31,'黃禹喬','tina72263882003@yahoo.com.tw','0960266058','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(32,'楊庭安','yangannn@gmail.com','0952108855','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(33,'周昆霖','j13974268@yahoo.com.tw','0988813949','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL),
(34,'李智韜','jason101011113@gmail.com','0925881337','2018-10-10 12:30:51', NULL, NULL, NULL, NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
