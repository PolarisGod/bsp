CREATE TABLE `user` (
  `userID` char(32) NOT NULL COMMENT '用户id',
  `userName` varchar(150) DEFAULT NULL COMMENT '用户姓名',
  `birthDate` varchar(32) DEFAULT NULL COMMENT '出生年月',
  `genderCode` smallint(1) DEFAULT NULL COMMENT '性别 1男，2女，3未知',
  `phoneNo` varchar(64) DEFAULT NULL COMMENT '手机号',
  `credentialNo` varchar(100) DEFAULT NULL COMMENT '身份证号',
  `email` varchar(64) NOT NULL COMMENT '邮箱',
  `domiclleAddress` varchar(200) DEFAULT NULL COMMENT '户籍地址',
  `headPic` varchar(200) DEFAULT NULL COMMENT '照片',
  `extend` varchar(255) DEFAULT NULL COMMENT '扩展内容',
  `creatorID` varchar(32) DEFAULT NULL COMMENT '创建人',
  `updaterID` varchar(32) DEFAULT NULL COMMENT '更新人',
  `insertTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '插入时间',
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`userID`,`email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;