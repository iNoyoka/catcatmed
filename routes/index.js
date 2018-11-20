var express = require('express');
var router = express.Router();

var customerList = [];

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index_temp',{name: req.session.name});
});

router.get('/index_mobile',function(req,res,next){
	res.render('index_mobile', { username: req.session.name});
});

router.post('/emailRecording',function(req,res,next){
	customerList.push(req.body.email);
	console.log(customerList);
	res.send('sucess');
});

router.get('/askEmailRecording',function(req,res,next){
	res.render('askEmail');
});

router.post('/askEmailRecording',function(req,res,next){
	if(req.body.pwd=='IUSHDVLK8708FLKJ'){
		res.send(JSON.stringify(customerList));
	}else{
		res.send('wrong');
	}
});

//------------------------------------------
// LIBRARY
//------------------------------------------
router.get('/library',function(req,res,next){
	if(req.session.cart==null) req.session.cart = [];
	res.render('library',{username: req.session.name,productLength:req.session.cart.length});
});

module.exports = router;
