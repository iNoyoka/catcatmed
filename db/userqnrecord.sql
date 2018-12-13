-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1:3306
-- 產生時間： 2018-08-17 03:56:23
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
-- 資料表結構 `userqnrecord`
--

DROP TABLE IF EXISTS `userqnrecord`;
CREATE TABLE IF NOT EXISTS `userqnrecord` (
  `CCMUserqnrPId` int(9) NOT NULL AUTO_INCREMENT,
  `BKN_name` text COLLATE utf8_unicode_ci,
  `BKN_age` text COLLATE utf8_unicode_ci,
  `BKN_sex` text COLLATE utf8_unicode_ci,
  `BCN` text COLLATE utf8_unicode_ci,
  `BCS` text COLLATE utf8_unicode_ci,
  `BCA_ageYear` text COLLATE utf8_unicode_ci,
  `BCA_ageMonth` text COLLATE utf8_unicode_ci,
  `BSP` text COLLATE utf8_unicode_ci,
  `BNU` text COLLATE utf8_unicode_ci,
  `BPR` text COLLATE utf8_unicode_ci,
  `BPT` text COLLATE utf8_unicode_ci,
  `BFN` text COLLATE utf8_unicode_ci,
  `BFA_kittyNum` text COLLATE utf8_unicode_ci,
  `BFA_week` text COLLATE utf8_unicode_ci,
  `BCW_kilo` text COLLATE utf8_unicode_ci,
  `BCW_gram` text COLLATE utf8_unicode_ci,
  `BEF` text COLLATE utf8_unicode_ci,
  `BSI` text COLLATE utf8_unicode_ci,
  `BBC` text COLLATE utf8_unicode_ci,
  `weight_control` text COLLATE utf8_unicode_ci,
  `catfood_select` text COLLATE utf8_unicode_ci,
  `BEMAIL` text COLLATE utf8_unicode_ci,
  `select_icon` text COLLATE utf8_unicode_ci,
  `joint_now` text COLLATE utf8_unicode_ci,
  `joint_med` text COLLATE utf8_unicode_ci,
  `joint_below` text COLLATE utf8_unicode_ci,
  `joint_jump` text COLLATE utf8_unicode_ci,
  `joint_daily` text COLLATE utf8_unicode_ci,
  `heart_now` text COLLATE utf8_unicode_ci,
  `heart_behave` text COLLATE utf8_unicode_ci,
  `heart_avgtemp` text COLLATE utf8_unicode_ci,
  `mouth_now` text COLLATE utf8_unicode_ci,
  `mouth_behave` text COLLATE utf8_unicode_ci,
  `mouth_brush` text COLLATE utf8_unicode_ci,
  `fur_freq` text COLLATE utf8_unicode_ci,
  `fur_behave` text COLLATE utf8_unicode_ci,
  `fur_tie` text COLLATE utf8_unicode_ci,
  `immu_now` text COLLATE utf8_unicode_ci,
  `immu_behave` text COLLATE utf8_unicode_ci,
  `immu_behave_before` text COLLATE utf8_unicode_ci,
  `immu_spirit` text COLLATE utf8_unicode_ci,
  `immu_med` text COLLATE utf8_unicode_ci,
  `kidney_now` text COLLATE utf8_unicode_ci,
  `kidney_urine` text COLLATE utf8_unicode_ci,
  `kidney_health` text COLLATE utf8_unicode_ci,
  `urinary_now` text COLLATE utf8_unicode_ci,
  `urinary_behave` text COLLATE utf8_unicode_ci,
  `urinary_together` text COLLATE utf8_unicode_ci,
  `urinary_water` text COLLATE utf8_unicode_ci,
  `stoma_problem` text COLLATE utf8_unicode_ci,
  `stoma_bathroom` text COLLATE utf8_unicode_ci,
  `stoma_strange` text COLLATE utf8_unicode_ci,
  `melt_freq` text COLLATE utf8_unicode_ci,
  `stress_now` text COLLATE utf8_unicode_ci,
  `stress_enviornment` text COLLATE utf8_unicode_ci,
  `stress_enviornment_out` text COLLATE utf8_unicode_ci,
  `stress_lifestyle` text COLLATE utf8_unicode_ci,
  `extra_eatinghabit` text COLLATE utf8_unicode_ci,
  `extra_eatingfreq` text COLLATE utf8_unicode_ci,
  `extra_weekcan` text COLLATE utf8_unicode_ci,
  `extra_freshflesh` text COLLATE utf8_unicode_ci,
  `extra_minifish` text COLLATE utf8_unicode_ci,
  `extra_killbugs` text COLLATE utf8_unicode_ci,
  `extra_vacci` text COLLATE utf8_unicode_ci,
  `extra_alergent` text COLLATE utf8_unicode_ci,
  `extra_drinking` text COLLATE utf8_unicode_ci,
  `extra_cooking` text COLLATE utf8_unicode_ci,
  `extra_strangehabit` text COLLATE utf8_unicode_ci,
  `extra_place` text COLLATE utf8_unicode_ci,
  `extra_knowhow` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`CCMUserqnrPId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 資料表的匯出資料 `productDB`
--
/*
INSERT INTO `userqnrecord` (`CCMUserqnrPId`,`BKN_name`,`BKN_age`,`BKN_sex`,`BCN`,`BCS`,`BCA_ageYear`,`BCA_ageMonth`,`BSP`,`BNU`,`BPR`,`BPT`,`BFN`,`BFA_kittyNum`,`BFA_week`,`BCW_kilo`,`BCW_gram`,`BEF`,`BSI`,`BBC`,`weight_control`,`catfood_select`,`BEMAIL`,`select_icon`,`joint_now`,`joint_med`,`joint_below`,`joint_jump`,`joint_daily`,`heart_now`,`heart_behave`,`heart_avgtemp`,`mouth_now`,`mouth_behave`,`mouth_brush`,`fur_freq`,`fur_behave`,`fur_tie`,`immu_now`,`immu_behave`,`immu_behave_before`,`immu_spirit`,`immu_med`,`kidney_now`,`kidney_urine`,`kidney_health`,`urinary_now`,`urinary_behave`,`urinary_together`,`urinary_water`,`stoma_problem`,`stoma_bathroom`,`stoma_strange`,`melt_freq`,`stress_now`,`stress_enviornment`,`stress_enviornment_out`,`stress_lifestyle`,`extra_eatinghabit`,`extra_eatingfreq`,`extra_weekcan`,`extra_freshflesh`,`extra_minifish`,`extra_killbugs`,`extra_vacci`,`extra_alergent`,`extra_drinking`,`extra_cooking`,`extra_strangehabit`,`extra_place`,`extra_knowhow`) VALUES
COMMIT;
*/
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
