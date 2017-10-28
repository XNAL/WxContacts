/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`wx_contacts` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `wx_contacts`;

/*Table structure for table `contact_dept` */

DROP TABLE IF EXISTS `contact_dept`;

CREATE TABLE `contact_dept` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `contact_dept` */

insert  into `contact_dept`(`id`,`name`,`tel`) values (1,'校长办公室','0755-88886666'),(2,'后勤管理处','0755-18886666'),(3,'计算机学院','0755-28886666'),(4,'理学院','0755-38886666'),(5,'管理学院','0755-48886666'),(6,'艺术设计学院','0755-58886666'),(7,'机械学院','0755-68886666'),(8,'生物工程学院','0755-78886666'),(9,'化学院','0755-98886666');

/*Table structure for table `contact_subject` */

DROP TABLE IF EXISTS `contact_subject`;

CREATE TABLE `contact_subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `contact_subject` */

insert  into `contact_subject`(`id`,`name`) values (1,'高等数学'),(2,'编译原理'),(3,'大学英语'),(4,'大学语文'),(5,'毛概'),(6,'离散数学'),(7,'网络工程'),(8,'C语言入门'),(9,'数据库原理');

/*Table structure for table `contact_user` */

DROP TABLE IF EXISTS `contact_user`;

CREATE TABLE `contact_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `gender` enum('1','2') NOT NULL COMMENT '1:男；2：女',
  `phone` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `deptId` int(11) DEFAULT NULL,
  `subjectId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

/*Data for the table `contact_user` */

insert  into `contact_user`(`id`,`name`,`gender`,`phone`,`password`,`deptId`,`subjectId`) values (1,'卢霞','2','13220100768','123456',1,0),(2,'龚军','1','13290552135','123456',2,0),(3,'何洋','1','13290523597','123456',3,1),(4,'石勇','1','13299195150','123456',3,1),(5,'何洋','1','13291500697','123456',3,1),(6,'梁秀兰','2','13288886666','123456',3,2),(7,'朱磊','1','13280528767','123456',3,3),(8,'潘静','2','13237613293','123456',3,4),(9,'赖秀兰','2','13219589495','123456',3,5),(10,'郭秀兰','2','13267697214','123456',3,6),(11,'陈秀兰','2','13219012915','123456',4,7),(12,'曾勇','1','13237811901','123456',3,8),(13,'龙秀英','2','13233397728','123456',3,9),(14,'汤明','1','15690342697','123456',3,1),(15,'姚伟','1','15699195150','123456',3,1),(16,'武娟','2','15690512697','123456',3,1),(17,'蒋敏','2','15690589697','123456',3,1),(18,'阎军','1','15690500679','123456',3,2),(19,'黄敏','2','15680528767','123456',3,3),(20,'雷敏','2','15659615693','123456',3,4),(21,'江超','1','15619598732','123456',3,5),(22,'江静','2','15667697214','123456',3,6),(23,'邓娜','2','15619012915','123456',4,7),(24,'魏勇','1','15689811901','123456',3,8),(25,'王明','1','15688886666','123456',4,1),(26,'王伟','1','15699195136','123456',5,1),(27,'王娟','2','15690500998','123456',6,1),(28,'王敏','2','15690500996','123456',7,1),(29,'王军','1','15690500666','123456',8,2),(30,'王敏','2','15637615693','123456',9,4),(31,'王超','1','15619589495','123456',4,5),(32,'王静','2','15663337214','123456',5,6),(33,'王娜','2','18719012915','123456',6,7),(34,'王勇','1','15637811901','123456',7,8),(35,'刘明','1','18590500697','123456',3,1),(36,'刘伟','1','18599195150','123456',3,1),(37,'刘娟','2','18590500444','123456',3,1),(38,'刘敏','2','18590500345','123456',3,1),(39,'刘军','1','18590534567','123456',3,1),(40,'刘敏','2','18537615693','123456',3,1),(41,'刘超','1','18519589495','123456',3,1),(42,'刘静','2','18567697214','123456',3,1),(43,'刘娜','2','18519012915','123456',3,1),(44,'刘勇','1','18537811901','123456',3,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
