var express = require('express');
var router = express.Router();
var Goods = require('../models/goods');
/* GET users listing. */
/*测试链接 http://localhost:3000/goods?page=1&pageSize=8&sort=1&priceLevel=all*/
router.get('/', function(req, res, next) {
  //获取参数
  let page = parseInt(req.param("page"));
  let pageSize = parseInt(req.param("pageSize"));
  let priceLevel = req.param("priceLevel");
  let sort = req.param("sort");
  let priceGt = ''; // 最小值
  let priceLte = ''; // 最大值
  //分页
  let skip = (page-1)*pageSize; // 忽略的条数
  //查找参数
  let params = {};
  //分价钱段查找
  if(priceLevel!=='all'){
    switch (priceLevel){
      case '0':priceGt = 0;priceLte = 100;break;
      case '1':priceGt = 100;priceLte = 500;break;
      case '2':priceGt = 500;priceLte = 1000;break;
      case '3':priceGt = 1000;priceLte = 2000;break;
      case '4':priceGt = 2000;priceLte = 3000;break;
      case '5':priceGt = 3000;priceLte = 6000;break;
    }
    params={
      salePrice:{
        $gt:priceGt,
        $lte:priceLte
      }
    };
    console.log(params,sort);
  }
  let goodModel=Goods.find(params).skip(skip).limit(pageSize).sort({'salePrice':sort});
  goodModel.exec(function(err,goods){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })
    }else{
      res.json({
        status:'0',
        msg:'',
        result:goods
      });
    }
  });
});

module.exports = router;
