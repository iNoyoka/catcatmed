var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index',{name: req.session.name});
});

router.get('/index_mobile',function(req,res,next){
	res.render('index_mobile', { username: req.session.name});
});

//------------------------------------------
// LIBRARY
//------------------------------------------
router.get('/library',function(req,res,next){
	if(req.session.cart==null) req.session.cart = [];
	res.render('library',{username: req.session.name,productLength:req.session.cart.length});
});

module.exports = router;
