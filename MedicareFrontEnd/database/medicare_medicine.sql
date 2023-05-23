-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: medicare
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `medicine`
--

DROP TABLE IF EXISTS `medicine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine` (
  `id` int NOT NULL,
  `consume_type` varchar(255) DEFAULT NULL,
  `imageurl` varchar(255) DEFAULT NULL,
  `manufacture_by` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine`
--

LOCK TABLES `medicine` WRITE;
/*!40000 ALTER TABLE `medicine` DISABLE KEYS */;
INSERT INTO `medicine` VALUES (1,'NON CONSUMABLE','https://firebasestorage.googleapis.com/v0/b/kitchenstory-39828.appspot.com/o/images%2Facc0113_3_1.avif?alt=media&token=ae44e352-fd92-4691-a45e-624abe203275','ROCHE DIABETES CARE INDIA PVT LTD','Accu-Chek Active Test Strips, 100 Count','120'),(2,'NON CONSUMABLE','https://firebasestorage.googleapis.com/v0/b/kitchenstory-39828.appspot.com/o/images%2Fcon0443-1-jan16.avif?alt=media&token=3205705d-9aef-499b-9355-d21038d13287','ASCENSIA DIABETES CARE INDIA PVT LTD','Contour Plus Blood Glucose Test Strips, 50 Count','120'),(3,'NON CONSUMABLE','https://firebasestorage.googleapis.com/v0/b/kitchenstory-39828.appspot.com/o/images%2Fone0132_-_verio_flex_strips_50_s_1.avif?alt=media&token=a560a62d-6ec3-4a54-b0f3-67520cfc91d1','LIFESCAN MEDICAL DEVICES INDIA PVT LTD','OneTouch Verio Test Strips, 50 Count','200'),(4,'ORAL','https://firebasestorage.googleapis.com/v0/b/kitchenstory-39828.appspot.com/o/images%2Fvicks_zzzquil_natura_nutraceutical_melatonin_gummi10.avif?alt=media&token=918efc00-9584-432d-a882-0149c306c6c9','PROCTER & GAMBLE HOME PRODUCTS PVT LTD','Vicks ZzzQuil Natura Nutraceutical Melatonin Gummies, 10 Count','300');
/*!40000 ALTER TABLE `medicine` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-23 16:17:39
