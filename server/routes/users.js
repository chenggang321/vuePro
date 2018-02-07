var express = require('express');
var router = express.Router();
var User = require('./../models/user');

/* 登陆接口 */
router.post('/login', function (req, res, next) {
  /*let userName = req.param("userName");
  let userPwd = req.param("userPwd");*/
  var param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  };
  res.json({
    status:'0',
    msg:'',
    result:'success'
  });
});

module.exports = router;
