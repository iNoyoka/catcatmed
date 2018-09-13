var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req.session.username);
    res.send('respond with a resource');
});
router.get('/123',function(req,res,next){
    res.send('?');
});
module.exports = router;
