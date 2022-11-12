 const express = require('express');
 const router = express.Router();
 
 //Service
 const mariadb = require('../../../module/db/maria');
console.log('mariadb : ', mariadb);
 
 //최신데이터 조회 
//  router.get('/lastData.json', function (request, response, next) {
//      Service.lastData((result) => {
//          if (!result.error) {            
//              response.json(result.data);s
//          } else {
//              next(result.error);
//          }
//      });
//  })
//  //Module Export
 module.exports = router;