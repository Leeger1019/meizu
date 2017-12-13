/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : meizu

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2017-10-18 17:37:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `feiniu`
-- ----------------------------
DROP TABLE IF EXISTS `feiniu`;
CREATE TABLE `feiniu` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `price` varchar(20) CHARACTER SET utf8 NOT NULL,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of feiniu
-- ----------------------------
INSERT INTO `feiniu` VALUES ('1', '南极人打底裤新款秋季外穿小脚裤糖果色女装大码修身百搭纯色裤子潮hh-N2Q5F50132A 黑色 S', '￥79', 'http://img16.fn-mart.com/pic/084a133e892c27969e8b/Bz82221zFzCMkgug3z/1YSGSGFaOau9pY/CsmRsVmzpKGAPb87AAK-anjPWvA418_400x400.jpg');
INSERT INTO `feiniu` VALUES ('2', '瑷諾·主题学院风连帽女卫衣秋冬新款宽松女装蝙蝠袖外套学生长袖上衣FZA-T9050 杏色 S', '￥89.9', 'http://img16.fn-mart.com/pic/fc91133e842b2a72ee7b/hTqnzz7TvnfdkMUdjn/1ioyoRvytaOaB9/CsmRslmpKn-ASFxLAALp8CwCsII547_400x400.jpg');
INSERT INTO `feiniu` VALUES ('3', '鸭鸭2017新款女装韩版修身羽绒服女立领冬季短款时尚羽绒服B-361 橙色 155', '￥99', 'http://img18.fn-mart.com/pic/18f9133e4aa224febd84/B26zzz5TDnLgklUd3T/s9maoahyJiP9fi/CsmRslmKtpOAdBIIAARDg1cgvXk441_400x400.jpg');
INSERT INTO `feiniu` VALUES ('4', 'Alice&you韩版大毛领连帽大码加厚棉衣女士2017新款女装中长款羽绒棉服2032 军绿色 3XL', '￥169', 'http://img17.fn-mart.com/pic/fc13133c904d28c88a07/BnHT2212FTtMkMudOn/19maoa_GWxJaWG/CsmRslnfItSAPNoWAAY1lUeQeMQ892_400x400.jpg');
INSERT INTO `feiniu` VALUES ('5', '韩域丹依娜2017秋装韩版新款秋冬大码女装时尚修身显瘦气质长款麂皮绒风衣外套大衣潮 粉色(WB1727) S码', '￥279', 'http://img18.fn-mart.com/pic/d349133c948e31de3132/hzq2221nv2tdhlugX2/7xeamR_GTR2y_a/CsmRsVnaHVOAQz1oAAUhDry4oTI978_400x400.jpg');
INSERT INTO `feiniu` VALUES ('6', '一斯特酷女士宽松大码长袖连帽套头学生女装卫衣2017秋季新款 白色 2XL', '￥49', 'http://img18.fn-mart.com/pic/6ded133e46ae197e65a2/Kn8Tnn7zvTCdhduM32/7imRoGvRUyWaVa/CsmRslmg4IaAfY8RAAJb4W5ewX0013_400x400.jpg');
INSERT INTO `feiniu` VALUES ('7', '吉岛会秋冬韩国版新款女式修身显瘦超轻薄羽绒服短款大码女装外套潮 2173 藕紫 2XL', '￥99', 'http://img16.fn-mart.com/pic/3a94133a2bae20cc5e4e/B26n221z_2fdhMZdjz/79oaSRXGLRQxha/CsmRslg_uI2AexQEAAOb0JccEKY978_400x400.png');
INSERT INTO `feiniu` VALUES ('8', '西原美2017新款打底裤外穿薄款春秋季女装韩版高腰大码小脚裤子潮X937 白色2条 3XL', '￥79', 'http://img17.fn-mart.com/pic/a6b6133c952c1bb02730/K26z225zF2tMBlUdO2/1ioyoRvyTap9vy/CsmRsVna7jKACDkdAASOly_TkCk887_400x400.jpg');
INSERT INTO `feiniu` VALUES ('9', '杭千衣 冬季羽绒棉服新款韩版女装中长款修身加厚保暖外套潮 咖啡色 2XL', '￥149', 'http://img16.fn-mart.com/pic/4685133c94892f463cf2/BT62TT52F2LdKlVlOn/7iSaeaFy2yTaJR/CsmRsVnaDcOAcS8xAAhXLYXRC_E334_400x400.jpg');
INSERT INTO `feiniu` VALUES ('10', '纤纯伊秋新款时尚系带大码风衣修身显瘦韩版中长款女装外套 卡其色 3XL', '￥338', 'http://img18.fn-mart.com/pic/2d5c133c91642a2a8510/Kn8Tnn7zvTCdhduM32/7YmySGDGzRpaQY/CsmRslnTV_CAR4nkAAYJ_ctAohA325_400x400.jpg');
INSERT INTO `feiniu` VALUES ('11', '兮冉2017秋季新款学院风韩版宽松蝙蝠袖条纹套头中长款卫衣女装潮2609 黄色 均码', '￥129', 'http://img16.fn-mart.com/pic/0a65133e87e22518d6db/B2qT2252DnflhlVMXz/19maoa_GXRJauG/CsmRslmw8xWAbI3BAAVTDlkZgpU985_400x400.jpg');
INSERT INTO `feiniu` VALUES ('12', '韩都衣舍2017韩版女装冬装新款毛领连帽中长款羽绒服OJM7295蒖湔 蓝色 S', '￥656', 'http://img17.fn-mart.com/pic/ae50133c93e433a555a1/k2q2nn72FzflKgUM3T/sioRmRFanRvGTR/CsmRslnY032AO0GeAAWkHyqpnnc148_400x400.jpg');
INSERT INTO `feiniu` VALUES ('13', '骊语  2017新款韩版女装打底裤女九分裤修身显瘦小脚铅笔休闲裤女M2653 白色 L', '￥109', 'http://img17.fn-mart.com/pic/39ab133c93e32aba8752/Bz82221zFzCMkgug3z/79eyoG_a2G_ycG/CsmRslnYo1iANiVWAAE2KNo9q6g492_400x400.jpg');
INSERT INTO `feiniu` VALUES ('14', '本菲尼 冬季新款羽绒棉服短款女士外套修身潮流加厚保暖女装翻领棉大衣 704JYM 卡其色 2XL', '￥238', 'http://img16.fn-mart.com/pic/f4b0133c93e219282198/B28nnn7z_2CMBguljz/sioyeyDanRkGua/CsmRslnYPFKAdsz8AAeyaYuRGVA060_400x400.jpg');
INSERT INTO `feiniu` VALUES ('15', 'sexemara妈妈秋装毛呢外套中长款2017新款中老年女装春秋呢子外套 藏青色 4XL（130~145斤）', '￥218', 'http://img18.fn-mart.com/pic/e0d0133e856ec4067878/hT8nTTs2v2LgBMuM32/sxoaSGFadajilG/CsmRslnO5V-ASEWGAAGc1Yzq00U479_400x400.jpg');
INSERT INTO `feiniu` VALUES ('16', '誉晶坊 2017新款棉质 印花卡通薄款小卫衣 学院风大码女装 粉色 2XL', '￥73', 'http://img16.fn-mart.com/pic/00c0133e847d19a3f1d3/B262zz1z_TCgBgUlOz/59eaSGvacR3iTR/CsmRslm7NWOAXqgIAASS9YyAKrQ075_400x400.jpg');
INSERT INTO `feiniu` VALUES ('17', '苏依库中年女装冬装气质妈妈装秋冬毛呢外套女中长款40-50岁2017新款女 藏青色 2XL', '￥299', 'http://img17.fn-mart.com/pic/ae86133e855734b88d54/K26z225zF2tMBlUdO2/59oGoa_GdyjicG/CsmRslnOUdCAQlxyAALRFA8PB-k479_400x400.jpg');
INSERT INTO `feiniu` VALUES ('18', '魅纪2017新款冬季中长款棉衣女装棉袄 韩国版羽绒棉服学生可爱外套潮 浅绿色 2XL', '￥89', 'http://img17.fn-mart.com/pic/61ff133e85012e270a38/h2Hn22szD2CgKMZMXn/sYSReGDavRuivR/CsmRslnHhECATH10AAM1SHFX9RY298_400x400.jpg');
INSERT INTO `feiniu` VALUES ('19', 'BSD波司登连帽时尚加厚保暖冬季女装中长款羽绒服B1601332 扶桑红|1079 155/80A', '￥799', 'http://img18.fn-mart.com/pic/b6a0133e07dc22d8a47e/Bn82TTs2FTflBdUdjn/19SGeakaPiO9Wx/CsmRsVlxntKAKTZHAAhaM1YvNEo239_400x400.jpg');
INSERT INTO `feiniu` VALUES ('20', '向左看齐 春秋新款 韩版女装外穿打底裤大码黑色小脚裤女裤 大116/928 黑色 2XL', '￥69', 'http://img18.fn-mart.com/pic/aa6f133d4c1cc5700a01/B2Hzzz5TvnfdBdZdXn/7iSaeacyFy0anR/CsmRsVjznH-APR4mAAeSBCw02bg765_400x400.jpg');
INSERT INTO `feiniu` VALUES ('21', '诗木槿秋装女装韩版原宿风宽松小立领坑条卫衣薄款外套学生长袖套头上衣B1145 黄色 均码', '￥83', 'http://img18.fn-mart.com/pic/6aab133e843819a5adce/hnqzTT12_ntdklVdX2/7YeaoavyXGc92G/CsmRslm1-gqAfyKwAAKHEdCGc_4258_400x400.jpg');
INSERT INTO `feiniu` VALUES ('22', '韩都衣舍2017韩版女装冬新款宽松假两件连帽中长款羽绒服AA7428玎 米白色 XS', '￥638', 'http://img18.fn-mart.com/pic/8cc0133c93e233c663fb/hz8zzz7nFTfdBlUgjz/7YmySGDGzR_anR/CsmRslnY0E-AdS_-AAXqbbXajUc233_400x400.jpg');
INSERT INTO `feiniu` VALUES ('23', '黛洛蓶娅-毛呢外套女秋冬新款韩版宽松大码女装修身显身中长款呢子大衣加厚  X86003JIA 深灰色 2XL', '￥179', 'http://img18.fn-mart.com/pic/858e133e85291c4da72f/h2Hn22szD2CgKMZMXn/5xeamRFaMRmRFa/CsmRsVnJ0KKAMNQkAAWLeORrwEM095_400x400.jpg');
INSERT INTO `feiniu` VALUES ('24', '蜜淘衣秀 冬季棉衣女短款羽绒棉服加厚修身棉袄外套女装学生韩版 902 红色 XL', '￥168', 'http://img18.fn-mart.com/pic/7bf7133e84c72034ecf9/kz8zTT1n_zCdkdVMOT/1YeamaDaBGXxfa/CsmRslnB-laAZPAPAAJC_gOUACQ141_400x400.jpg');
INSERT INTO `feiniu` VALUES ('25', '吉岛会女装打底裤百搭中高腰紧身修身弹力运动跑步健身休闲长裤 4147灰色 3XL', '￥39', 'http://img17.fn-mart.com/pic/6967133e87e71adeaa5e/Bz6Tnn1zvzfdhMugO2/79eyoG_ajGfyhi/CsmRslmwtmqAOHN_AAEgKyf3tQ8730_400x400.jpg');
INSERT INTO `feiniu` VALUES ('26', '友E套2017秋季韩版女装大码宽松卫衣女套头连帽学生加厚中长款春秋外套女生上衣秋装女 蓝色 L', '￥68.6', 'http://img16.fn-mart.com/pic/9387133e84ca275dd1c9/kT6zzz7zv2fghgVdOT/79eGmGDaCGha0x/CsmRsVmqZ_2ACSUbAALAKxCht1M313_400x400.jpg');
INSERT INTO `feiniu` VALUES ('27', '秀族  2017秋冬新款时尚韩版女装毛呢外套显瘦修身中长款长袖呢子大衣女 焦糖色 S', '￥168', 'http://img17.fn-mart.com/pic/7032133e84d51d8b78bb/Bnq2zz72_2fMKdudO2/7imGeaFGvamRdG/CsmRsVnDOYuARkl6AAV1dCJZFU4444_400x400.jpg');
INSERT INTO `feiniu` VALUES ('28', '鸭鸭秋冬新品欧美风羽绒服女装通勤OL短款修身羽绒外套B-2462 香槟 160', '￥219', 'http://img18.fn-mart.com/pic/0d7b133e87442d2daea7/kzH222sTFTLMKMUM32/sxmRoavRXRua09/CsmRslmv0wqAEC1XAAYBeCacAhc529_400x400.jpg');
INSERT INTO `feiniu` VALUES ('29', '印象小马  冬装清仓女短款棉衣韩版显瘦女装棉服外套冬季修身反季促销小棉袄  CN550# 浅灰色 XL', '￥168', 'http://img18.fn-mart.com/pic/9d28133e466e18a927dd/kzH222sTFTLMKMUM32/19maoa_GWRfaFG/CsmRsVmbknmAYaKMAAQw5srTYAo862_400x400.jpg');
INSERT INTO `feiniu` VALUES ('30', '泡澡的蚂蚁 新款哈伦裤小脚西装长裤休闲宽松显瘦女装 k 9506 黑色 2XL', '￥79', 'http://img18.fn-mart.com/pic/1910133a2f6131be461c/k2q2nn72FzflKgUMtT/1iSRoaCRPYJ9JY/CsmRr1hHBXyACqr8AAOcgVWINp4380_400x400.jpg');
INSERT INTO `feiniu` VALUES ('31', '贝兹卡洛Bescarol卫衣棒球衫美式风格17秋新款女装休闲卫衣631146 红 S', '￥99', 'http://img17.fn-mart.com/pic/e67b133e45a8196d958f/hn82zzs2FzfMhMuljT/59oGoakGfYfitG/CsmRsll_6nGAZEigAAFg0RSO5xE674_400x400.jpg');
INSERT INTO `feiniu` VALUES ('32', '夜摩莯猫2017新款大码女装胖mm秋冬外穿打底高腰高弹力铅笔长裤200斤可穿 黑色 5XL', '￥78', 'http://img18.fn-mart.com/pic/8093133e846029f5345d/K2HT221TD2tdkdUlOT/1YmGoy_RJyuxf9/CsmRsVm6SYOAdmXiAATjOq1uPqY776_400x400.jpg');
INSERT INTO `feiniu` VALUES ('33', '韩丝漫 女装2017秋冬装修身显瘦中长款毛呢大衣时尚气质呢子外套加厚冬季 藏青色 S', '￥278', 'http://img18.fn-mart.com/pic/16ee133e8469258734c1/hTqnzz7TvnfdkMUdjn/79oaSRvGcRZxpa/CsmRslm6MauAaRSsAAUXN1roCtY178_400x400.jpg');
INSERT INTO `feiniu` VALUES ('34', '鸭鸭秋冬新品羽绒服女中长款毛领修身女装秋冬装外套潮B-2428 翠绿 155', '￥519', 'http://img16.fn-mart.com/pic/b4b6133e87452cf5e637/h28z22sT_nLdhlugOT/simaoaDG3aUaPi/CsmRsVmv0PaAMHzeAALCNp--8Mw060_400x400.jpg');
INSERT INTO `feiniu` VALUES ('35', '星骆莎 2017冬季女装韩版棉衣女中长款外套加厚宽松加大码羽绒棉服新款 XY9926 黑色 XL', '￥168', 'http://img17.fn-mart.com/pic/85ca133e07e732488842/hzqzTT7nv2LlBdZljn/7YSySGBaZiWy3i/CsmRsVlzTBqAcKHtAAGGJDmx8NA972_400x400.jpg');
INSERT INTO `feiniu` VALUES ('36', '沙漏的舞蹈 加绒加厚卫衣女2017秋冬中长款加绒加厚修身拉链开衫卫衣外套大码女装421/5610 蓝色 4XL', '￥108', 'http://img17.fn-mart.com/pic/f3a8133c904d25cce721/kTq2nn7nDzLdKMZgXT/59mGeR_ap93GBY/CsmRslnfHjOAPr_ZAAFhl0qS2aM550_400x400.jpg');
INSERT INTO `feiniu` VALUES ('37', '本菲尼 冬季新款羽绒棉服短款女士外套修身潮流加厚保暖女装连帽棉大衣 8019GLQZ 焦糖色 L', '￥228', 'http://img16.fn-mart.com/pic/9d72133c93e742300cd3/h28TTT7nF2tlKdVgj2/59eaeavGTGJaCx/CsmRslnXqPeAcKupAAaZosHJMRo748_400x400.jpg');
INSERT INTO `feiniu` VALUES ('38', '夜摩莯猫2017秋冬新款大码女装胖mm纯棉高弹印花紧身长裤显瘦打底裤200斤 黑色 5XL', '￥78', 'http://img16.fn-mart.com/pic/3c37133e846529d34e6d/hzq2221nv2tdhlugX2/7imRoGvREyV9Vi/CsmRslm6SCyAdxjQAAUPwh3bMec549_400x400.jpg');
INSERT INTO `feiniu` VALUES ('39', 'sdeer圣迪奥女装不对称式女士格纹毛呢大衣S16881873 深灰/97 XL', '￥599', 'http://img17.fn-mart.com/pic/0d5c133e84451bd2190a/Kz62zz12DTtlkdulO2/7YoamG_ycGZGti/CsmRsVm3VwmAYRZtAAFMdg5xuVo943_400x400.jpg');
INSERT INTO `feiniu` VALUES ('40', '吉岛会正品女装韩版修身显瘦羽绒服秋冬女子羽绒背心纯色轻薄羽绒马 2172 黑色 2XL', '￥79', 'http://img16.fn-mart.com/pic/9906133a2ba320d5092a/BT62nn72_zClhdZMt2/59eyoatRpxlavR/CsmRr1g_uKiAFcsjAAJjtKLNIOw681_400x400.png');
INSERT INTO `feiniu` VALUES ('41', 'La Perfumeria女装2017秋季新款韩版条纹撞色灯笼袖卫衣女长袖宽松纯色上衣2774 黑色 均码', '￥155', 'http://img17.fn-mart.com/pic/799b133c904c199f42c9/knqnTT5nFzCghdZdjT/1YoaSRDGWxtRJa/CsmRsVne2EyAMH5nAAYYZ8xVxb8821_400x400.jpg');
INSERT INTO `feiniu` VALUES ('42', '【大促】西原美季冬装棉衣女士韩版修身加厚棉服女装短款小棉袄外套潮X957 粉红色 2XL', '￥169', 'http://img16.fn-mart.com/pic/e334133e854429c27323/hnHnzz12F2fgklVMjz/1ioyoRvyga2aly/CsmRsVnMvJeAOAmtAAZbCI7MjDY031_400x400.jpg');
INSERT INTO `feiniu` VALUES ('43', '鸭鸭冬季新款女装立领修身时尚外套羽绒服女中长款潮B-56210 兰灰 155', '￥339', 'http://img18.fn-mart.com/pic/3951133e87432c96a8dd/Kz8Tnn1zvTLdhMVd3z/59eaSGvaXRZGTR/CsmRslmvzVqAFvkhAATUw7ncQok920_400x400.jpg');
INSERT INTO `feiniu` VALUES ('44', '法米姿 秋冬新款胖人女装时尚休闲翻领外搭开衫女士上衣外套 大红色 均码', '￥249', 'http://img16.fn-mart.com/pic/345f133d0dc029e77d69/Kn6zTT5n_zLMBdVMXn/7imRoGjREYVaWi/CsmRsVi34veAdMUhAATejpqkoBc454_400x400.jpg');
INSERT INTO `feiniu` VALUES ('45', '陶伊 高腰长裤中老年女装妈妈打底裤外穿中年女裤薄款花色小脚裤子 黑杜丹 L', '￥69', 'http://img16.fn-mart.com/pic/794d133ccededc325b81/B2Hzzz5TvnfdBdZdXn/1ioRmyjaWit9dG/CsmRsVihCZ2AWXCjAAHdgQ3c8kg146_400x400.jpg');
INSERT INTO `feiniu` VALUES ('46', '贝兹卡洛Bescarol大衣女装冬款加厚韩版女士经典舒适修身翻领大衣630420 卡其 L', '￥98', 'http://img18.fn-mart.com/group1/M00/AB/D5/CsnBPlYY6IOAfDONAAF6_83nr6U601_400x400.jpg');
INSERT INTO `feiniu` VALUES ('47', '诗逸雅 大码女装胖mm加肥加2017秋冬新款休闲长款连帽套头长袖卫衣D0465 焦糖色 4XL', '￥98', 'http://img17.fn-mart.com/pic/c7c2133c9035239b0842/Kn6zTT5n_zLMBdVMXn/59oGmGFGWYWGuG/CsmRsVndwSCAHMFPAAgYRk69Tw4396_400x400.jpg');
INSERT INTO `feiniu` VALUES ('48', '誉晶坊  大码女装女裤胖MM高弹力打底裤紧身长裤铅笔裤女裤 黑色 4XL', '￥92', 'http://img17.fn-mart.com/pic/99d1133e84261e1cda2c/B28nnn5TDnClhgZd3z/sieaoyFytatRpx/CsmRsVmo4yWAI9ItAAUZSIUcNP0464_400x400.jpg');
INSERT INTO `feiniu` VALUES ('49', '星骆莎 2017冬季女装新款棉服女韩版中长款修身显瘦时尚大毛领波浪羽绒棉衣外套 XY9904 军绿色 2XL', '￥228', 'http://img16.fn-mart.com/pic/7e6d133e07e3320e9b60/BT62TT52F2LdKlVlOn/1xmGSGByu9PGjx/CsmRsllzShmAW_f4AAGOz7mVdk0694_400x400.jpg');
INSERT INTO `feiniu` VALUES ('50', '吉岛会秋冬新款羽绒服女装轻薄立领短款花色韩版修身显瘦羽绒外套 2171 紫底印花 3XL', '￥99', 'http://img16.fn-mart.com/pic/029b133a2ba620d28e49/BT62TT52F2LdKlVlOn/s9maoajyfGE9_R/CsmRsVg_uMiAPva2AANr0m30xk8266_400x400.png');

-- ----------------------------
-- Table structure for `meizu_img`
-- ----------------------------
DROP TABLE IF EXISTS `meizu_img`;
CREATE TABLE `meizu_img` (
  `sid` tinyint(4) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of meizu_img
-- ----------------------------
INSERT INTO `meizu_img` VALUES ('1', null, null, 'https://www3.res.meizu.com/static/cn/_partial/header/images/icon-user_032dea3.png');
INSERT INTO `meizu_img` VALUES ('2', null, null, 'https://openfile.meizu.com/group1/M00/02/04/Cgbj0Fm41P-ATDhxAABPRMuTlX0447.jpg');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(4) NOT NULL,
  `user` varchar(20) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('0', '', '');
INSERT INTO `user` VALUES ('1', 'wang', '12345678');
INSERT INTO `user` VALUES ('2', 'li', '12345678');
INSERT INTO `user` VALUES ('3', 'zhang', '12345678');
