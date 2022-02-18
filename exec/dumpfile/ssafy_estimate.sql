CREATE DATABASE  IF NOT EXISTS `ssafy` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ssafy`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: i6D111.p.ssafy.io    Database: ssafy
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

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
-- Table structure for table `estimate`
--

DROP TABLE IF EXISTS `estimate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estimate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_first` varchar(45) DEFAULT NULL,
  `category_second` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `price_avg` bigint DEFAULT NULL,
  `price_min` int DEFAULT NULL,
  `price_max` int DEFAULT NULL,
  `small` int DEFAULT NULL,
  `medium` int DEFAULT NULL,
  `large` int DEFAULT NULL,
  `image` text,
  `comment` text,
  PRIMARY KEY (`id`),
  KEY `estimate_category_second_idx` (`category_second`),
  CONSTRAINT `category_second` FOREIGN KEY (`category_second`) REFERENCES `tools_category` (`category_second`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estimate`
--

LOCK TABLES `estimate` WRITE;
/*!40000 ALTER TABLE `estimate` DISABLE KEYS */;
INSERT INTO `estimate` VALUES (1,'feed','food','ANF 램홀리스틱 MB 2.2KG',2.2,25000,NULL,NULL,NULL,NULL,NULL,'https://openimage.interpark.com/goods_image_big/5/0/0/1/8187665001_l.jpg','제 1 원료 청정 국가 호주산 양고기, 피부 피모 건강을 지원하는 자연의 원료들 소화력과 면역력 증진에 도움을 줄 수 있는 원료 GMO 원료를 사용하지 않음, 밀, 옥수수, 콩을 사용하지 않음, 신선한 허브와 채소, 과일을 포함합니다.'),(2,'feed','food','오리젠 오리지널 독 2kg',2,28400,NULL,NULL,NULL,NULL,NULL,'http://img.danawa.com/prod_img/500000/115/641/img/7641115_1.jpg?shrink=330:330&_v=20200915140344','반려견의 선천적 영양대사기능과 신체에 꼭 맞는 고기 단백질을 많이 공급하여 곡물을 사용하지 않고 저탄수화물 사용'),(3,'feed','food','아카나 독 프리런덕 2kg',2,26800,NULL,NULL,NULL,NULL,NULL,'http://img3.tmon.kr/cdn3/deals/2021/06/18/6498352802/6498352802_front_f1b5998a9f.jpg','방목해서 기른 오리의 살코기, 내장 및 연골을 통먹이 비율로 전체 재료의 50$로 만들어서 당일 동물 단백질이며 소화가 쉬우므로, 음식과민증이나 알레르기가 있는 모든 연령의 개들에게 도움을 주는 완전한 식품입니다.'),(4,'feed','food','로얄캐닌 미니 인도어 퍼피 1.5kg',1.5,22900,NULL,NULL,NULL,NULL,NULL,'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/18/1/4/4/7/8/2/kWVIs/2118144782_B.jpg','비타민 E를 포함한 특허받은 항산화물질의 복합체로 강아지의 면역기능에 도움을 줍니다. 소화가 잘되는 양질의 단백질과 적절한 식이섬유 및 탄수화물 함유로 소화기의 건강과 대변 냄새 및 양을 줄이는 데 도움을 줍니다. 오메가3 지방산이 풍부하여 건강한 피모를 유지하는 데 도움을 줍니다'),(5,'feed','food','ANF 6free Plus 유기농 식스프리 강아지사료 오리&연어 1.8kg',1.8,18000,NULL,NULL,NULL,NULL,NULL,'https://shop-phinf.pstatic.net/20211116_263/1636990824291CG6iM_JPEG/38126670006318552_693984999.jpg?type=m510','반려견의 건강에 해로운 6가지 원료를 넣지 않았습니다. 오메가-3를 강화하여 알레르기에 민감한 반려견의 건강을 생각한 오리고기와 연어고기의 불포화지방산으로 항염증 작용 극대화 기능이 있습니다.'),(6,'feed','food','마이펫닥터 시그니처 오가닉 티어스 컨트롤 눈물예방 사료',2,25200,NULL,NULL,NULL,NULL,NULL,'https://photo.akmall.com/image3/goods/09/69/05/03/109690503_M_350.jpg','눈물 흘림 방지를 위해 특별히 제조된 저 자극성 포뮬러 저자극 포뮬러로 눈물 & 얼룩 청소, 눈 건강을 지원, 망막, 황반 건강을 위한 특별 제조된 사료입니다.'),(7,'feed','snack','웰펫 웰니스 컴플리트헬스 그레인프리 어덜트 치킨',1.8,20620,NULL,NULL,NULL,NULL,NULL,'https://shopping-phinf.pstatic.net/main_2758391/27583916522.20210615121000.jpg?type=f640','곡물이 들어있지 않는 그레인 프리, 통과일과 야채, 풍부한 천연 오메가 지방산과 항산화제, 고기 부산물, 콩, 옥수수, 밀 무첨가, 중대형 견종 전용 제품, 살아있는 4가지 생유산균, 글루코사민, 콘드로이틴(관절보호 효과)'),(8,'medical','vaccination','종합 백신(5회)',NULL,114870,50000,300000,NULL,NULL,NULL,NULL,NULL),(9,'medical','vaccination','코로나 장염(2회)',NULL,36340,20000,66000,NULL,NULL,NULL,NULL,NULL),(10,'medical','vaccination','기관지염(2회)',NULL,36280,20000,66000,NULL,NULL,NULL,NULL,NULL),(11,'medical','vaccination','인플루엔자(2회)',NULL,58580,30000,90000,NULL,NULL,NULL,NULL,NULL),(12,'medical','vaccination','광견병(1회)',NULL,42810,14000,35000,NULL,NULL,NULL,NULL,NULL),(13,'medical','desexualization','중성화 수술(남)',NULL,175000,150000,200000,NULL,NULL,NULL,NULL,NULL),(14,'medical','desexualization','중성화 수술(여)',NULL,350000,300000,400000,NULL,NULL,NULL,NULL,NULL),(30,'tools','tableware','식기',NULL,12500,4000,20000,4000,5000,5000,'https://shop-phinf.pstatic.net/20211207_200/16388588870885gYxK_JPEG/39994732573295858_35045902.jpg?type=m510','사료와 함께 가장 중요한 밥그릇과 물그릇은 신중하게 선택하셔야 합니다. 먼저 강아지 밥그릇과 물그릇은 따로 분리된 것이 좋습니다. 두 개가 붙어있는 경우 밥그릇이 움직이다가 사료에 물이 들어갈 확률이 높습니다. 식기의 재질을 선택하는 것도 중요합니다. 일반적으로 가장 인기 있는 재질은 1순위 도자기, 2순위 스테인리스, 3순위 실리콘, 4순위 플라스틱 순입니다. '),(31,'tools','cushion','방석',NULL,32500,15000,50000,20000,35000,50000,'https://shop-phinf.pstatic.net/20210316_111/1615856553235e0Y6q_JPEG/16992332770739200_496566266.jpg?type=m510','어릴 때부터 공간 구분능력이 생기도록 노는 공간, 밥 먹는 공간, 수면 공간, 쉬는 공간을 정확히 구분 시켜 주는 데 도움이 되고 안정감을 느끼는 데 도움이 됩니다.'),(32,'tools','house','하우스',NULL,50000,15000,85000,60000,70000,85000,'https://shop-phinf.pstatic.net/20200404_71/1585985170404RlOpA_JPEG/23347503973276236_1830077712.jpg?type=m510','어린 강아지를 넓은 공간에 두면 불안감, 분리불안, 정신적 스트레스를 받을 수 있습니다. 또한, 집안 곳곳 여기저기에 배변을 할 수도 있습니다. (본능적으로 자기 영역을 표시함)'),(33,'tools','kennel','켄넬',NULL,50000,33800,99800,33800,52800,99800,'https://shop-phinf.pstatic.net/20200901_10/1598929685513wwWTH_JPEG/65574224966670_167688263.jpg?type=m510','외부에 이동할 때 사용하기도 하지만 집 안에서 문을 열어두고 반려견의 보금자리(집, 방)로 활용하기도 좋습니다. 이동장은 가볍고 튼튼한 제품을 선택하시는 것이 좋습니다. 무거우면 잘 들고 다니지 않게 됩니다.'),(34,'tools','toiletpad','배변패드(400매)',NULL,28000,17000,40000,NULL,NULL,NULL,'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/03c5/a531ae19751868c6481ab9baa8c2fcd39e11aa15d597c540ced8b2e5b872.jpg','강아지를 키우면서 제일 힘든 것 중의 하나가 배변 훈련입니다. 집 안 구석구석 곳곳에 배변을 하면 치우기 힘들고 집안에서 냄새가 나기 때문입니다. 또한 배변 문제는 반려견 유기의 원인 중 하나라고 합니다. 따라서 배변 패드를 사는 게 도움이 될 것입니다. 또한 강아지를 분양받은 곳에서 사용했던 배변 패드를 같이 구매하는 것을 추천합니다. (배변훈련을 좀 더 쉽게 할 수 있음) '),(35,'tools','lead','목줄',NULL,12900,8000,20000,18900,18900,18900,'https://shop-phinf.pstatic.net/20211018_124/1634541401386G780n_JPEG/35677235956692079_125302474.jpg?type=m510','강아지 산책은 짧게 10분이라도 매일매일 시켜주는 것이 중요하기 때문에, 목걸이와 줄 선택도 중요하다고 볼 수 있습니다. 돈 아낀다고 나중에 강아지 몸집이 금방 클 테니 미리 크고 무거운 제품을 사신다는 생각을 가지시면 안 됩니다. 몸의 크기에 비해 너무 크거나, 무거운 제품은 반려견 몸에 큰 부담을 줄 수 있습니다.'),(36,'tools','toy','장난감',NULL,13000,5000,20000,NULL,NULL,NULL,'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/11420286184875497-1dde2741-2cf3-4063-a3c4-e4c942738d38.jpg','강아지는 치아가 조금씩 자라면서 치통과 가려움이 시작됩니다. 이를 해소하기 위해 물건을 씹는 것을 즐기기 시작합니다. 이럴 때는 반려견 장난감 또는 개껌이 도움이 됩니다. 장난감은 깨물 수 있는 봉제 인형, 라텍스 제품 등으로 여러 개 사서 하루에 하나씩 바꿔서 주는 게 좋습니다.'),(37,'tools','comb','빗',NULL,20000,4900,30000,4900,7000,9500,'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/f3e4/3ebd2362e0e235155d6037790b97a0c1cd043220aa1dabfd5b44c822966d.jpg','강아지 빗의 종류는 많습니다. 반려견의 털 타입을 알아보고 얼굴빗(눈꼽빗), 일자빗, 슬리커 브러시 등 알맞은 빗 구매하세요. 강아지 털이 엉기면 혈액순환에 안좋습니다, 따라서 주 1~3회 정도 브러싱을 해주는 게 강아지 건강에 좋습니다.'),(38,'tools','toothset','칫솔',NULL,8000,6190,15000,NULL,NULL,NULL,'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/174552261764946-17ac6d87-a689-4166-a783-d5efdc2610b0.jpg','칫솔질의 횟수도 사람처럼 하루에 2~3번 해주는 것이 좋습니다. 이빨을 닦아주지 않으면 음식물과 염증이 반응을 일으키면 치석이 발생합니다. 이 치석이 치아와 잇몸 사이로 뚫고 들어가게 되고 이러한 경우 치은염과 치주염이 심해져서 심장이나 간 내 안 좋은 영향을 미칠 수 있습니다. 사람과 마찬가지로 구강 건강이 전신 건강에 영향을 미치기 때문에 칫솔질은 꼭 해주어야 합니다.');
/*!40000 ALTER TABLE `estimate` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18 10:10:13
