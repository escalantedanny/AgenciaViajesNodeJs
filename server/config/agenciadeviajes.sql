/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost:3306
 Source Schema         : agenciadeviajes

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 26/09/2019 17:59:57
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for travels
-- ----------------------------
DROP TABLE IF EXISTS `travels`;
CREATE TABLE `travels`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `image` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `free` varchar(3) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `departure_date` date NULL DEFAULT NULL,
  `arrival_date` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of travels
-- ----------------------------
INSERT INTO `travels` VALUES (1, 'Viaje a Venezuela', 'Hermoso sitio paradisiaco, con las mejores playas del planeta, gente cordial', 'roma', '350', '32', '2019-09-01', '2019-09-30');
INSERT INTO `travels` VALUES (2, 'Viaje a Chile', 'Hermoso pais, lugares sorprendentes', 'londres', '340', '261', '2019-10-01', '2019-10-31');
INSERT INTO `travels` VALUES (3, 'Viaje a Mexico', 'Hermoso Pais, Playas hermosas, excelentes lugares ansestrales', 'roma', '550', '19', '2019-11-01', '2019-11-30');
INSERT INTO `travels` VALUES (4, 'Viaje a Panama', 'Hermoso sitio paradisiaco, con las mejores playas del planeta, gente cordial', 'paris', '350', '14', '2019-09-01', '2019-09-30');
INSERT INTO `travels` VALUES (5, 'Viaje a Ecuador', 'Hermoso pais, lugares sorprendentes', 'rio', '340', '16', '2019-10-01', '2019-10-31');
INSERT INTO `travels` VALUES (6, 'Viaje a Bolivia', 'Hermoso Pais, Playas hermosas, excelentes lugares ansestrales', 'roma', '550', '38', '2019-11-01', '2019-11-30');
INSERT INTO `travels` VALUES (7, 'Viaje a Colombia', 'Hermoso sitio paradisiaco, con las mejores playas del planeta, gente cordial', 'paris', '350', '36', '2019-09-01', '2019-09-30');
INSERT INTO `travels` VALUES (8, 'Viaje a Peru', 'Hermoso pais, lugares sorprendentes', 'londres', '340', '39', '2019-10-01', '2019-10-31');
INSERT INTO `travels` VALUES (9, 'Viaje a Argentina', 'Hermoso Pais, Playas hermosas, excelentes lugares ansestrales', 'roma', '550', '30', '2019-11-01', '2019-11-30');
INSERT INTO `travels` VALUES (10, 'Viaje a Uruguay', 'Hermoso sitio paradisiaco, con las mejores playas del planeta, gente cordial', 'londres', '265', '29', '2019-09-01', '2019-09-30');
INSERT INTO `travels` VALUES (11, 'Viaje a Paraguay', 'Hermoso pais, lugares sorprendentes', 'paris', '358', '264', '2019-10-01', '2019-10-31');
INSERT INTO `travels` VALUES (12, 'Viaje a Brazil', 'Hermoso Pais, Playas hermosas, excelentes lugares ansestrales', 'roma', '498', '24', '2019-11-01', '2019-11-30');
INSERT INTO `travels` VALUES (13, 'Viaje a Nicaragua', 'Hermoso sitio paradisiaco, con las mejores playas del planeta, gente cordial', 'rio', '568', '199', '2019-09-01', '2019-09-30');
INSERT INTO `travels` VALUES (14, 'Viaje a Honduras', 'Hermoso pais, lugares sorprendentes', 'paris', '998', '17', '2019-10-01', '2019-10-31');
INSERT INTO `travels` VALUES (15, 'Viaje a Guatemala', 'Hermoso Pais, Playas hermosas, excelentes lugares ansestrales', 'roma', '658', '15', '2019-11-01', '2019-11-30');
INSERT INTO `travels` VALUES (16, 'Viaje a Guyana', 'Hermoso sitio paradisiaco, con las mejores playas del planeta, gente cordial', 'roma', '358', '16', '2019-09-01', '2019-09-30');
INSERT INTO `travels` VALUES (17, 'Viaje a Ucrania', 'Hermoso pais, lugares sorprendentes', 'rio', '340', '18', '2019-10-01', '2019-10-31');
INSERT INTO `travels` VALUES (18, 'Viaje a Italia', 'Hermoso Pais, Playas hermosas, excelentes lugares ansestrales', 'roma', '3211', '84', '2019-11-01', '2019-11-30');
INSERT INTO `travels` VALUES (19, 'Viaje a Espana', 'Hermoso sitio paradisiaco, con las mejores playas del planeta, gente cordial', 'londres', '251', '8', '2019-09-01', '2019-09-30');
INSERT INTO `travels` VALUES (20, 'Viaje a Francia', 'Hermoso pais, lugares sorprendentes', 'canada', '2100', '5', '2019-10-01', '2019-10-31');
INSERT INTO `travels` VALUES (21, 'Viaje a Grecia', 'Hermoso Pais, Playas hermosas, excelentes lugares ansestrales', 'grecia', '2115', '85', '2019-11-01', '2019-11-30');
INSERT INTO `travels` VALUES (22, 'Viaje a Japon', 'Hermoso sitio paradisiaco, con las mejores playas del planeta, gente cordial', 'rio', '999', '76', '2019-09-01', '2019-09-30');
INSERT INTO `travels` VALUES (23, 'Viaje a Rusia', 'Hermoso pais, lugares sorprendentes', 'roma', '658', '65', '2019-10-01', '2019-10-31');
INSERT INTO `travels` VALUES (24, 'Viaje a Corea', 'Hermoso Pais, Playas hermosas, excelentes lugares ansestrales', 'rio', '950', '54', '2019-11-01', '2019-11-30');

SET FOREIGN_KEY_CHECKS = 1;
