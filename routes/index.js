var express = require('express');
var router = express.Router();

var customerList = [];

//-----------------------------------------
// DATABASE SETTING
//-----------------------------------------
var mysql = require('mysql');
var config = {
	host: 'localhost',
	user: 'root',
	password: '3Hptp3s5vpKPiy97',
	database: 'catcatmed'
};
var con;
//database disconnect handler
function handleDisconnect(){
	con = mysql.createConnection(config);
	con.connect(function(err){
		if(err){
			console.log('error occur when connect to db:',err);
			setTimeout(handleDisconnect,2000);
		}
	});
	con.on('error',function(err){
		console.log('db error',err);
		if(err.code === 'PROTOCAL_CONNECTION_LOST'){
			handleDisconnect();
		}else{
			throw err;
		}
	});
}
handleDisconnect();
//trigger database every 5 sec
setInterval(function(){				
	con.query('SELECT 1');
},5000);

var datetime = require('node-datetime');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index',{name: req.session.name});
});

router.get('/index_m',function(req,res,next){
	res.render('index_m', { username: req.session.name});
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
router.get('/literature',function(req,res,next){
	res.render('literature');
});


//------------------------------------------
// UserCenter
//-----------------------------------------
router.get('/usercenter_judge',function(req,res,next){
	res.render('usercenter_judge');
});
router.post('/usercenter_judge',function(req,res,next){
	var username = req.body.email;
	var sql_check = 'SELECT * FROM `useraccount` WHERE username = "'+username+'"';
    con.query(sql_check,function(err,result){
        if(err){
			console.log('Unknown SQL error while building user account.');
			res.send('error');
            throw err;
        }else{
            if(result[0]==null){
                res.send('notexist');
            }else{
				req.session.username = username;
                res.send('success');
            }
        }
    });
});
router.get('/usercenter',function(req,res,next){
	if(req.session.username==null){
		res.redirect('/usercenter_judge');
	}else{
		res.render('usercenter');
	}
});
router.post('/usercenterToCatfoodScoring',function(req,res,next){
	var sql_check = 'SELECT * FROM `useraccount` WHERE username = "'+req.session.username+'"';
	con.query(sql_check,function(err,result){
		if(err) throw err;
		else{
			if(result[0].whetherCommand=='0'){				
				req.session.recordlink = result[0].possiblePurchaseCatFood;
				res.send('haventCommand');
			}else{
				res.send('alreadyCommand');
			}
		}
	});
});
router.get('/catfoodScoring',function(req,res,next){
	res.render('score');
});
router.post('/catfoodScoring',function(req,res,next){
	// 更新whetherCommand和PossiblePurchaseFood
	// 更新飼料評價
	res.send('thanks');
});
router.post('/catfoodScoringAskData',function(req,res,next){
	var possibleList = req.session.recordlink;
	console.log(possibleList);
	if(possibleList==''){
		// 更新whetherCommand
		var sql = 'UPDATE `useraccount` SET whetherCommand = "1" WHERE username = "'+req.session.username+'"';
		con.query(sql,function(err,result){
			if(err) throw err;
			console.log('update whetherCommand success.');
		});
		res.send('noData');
	}
	else{
		var pl_split = possibleList.split('#');
		var sql = 'SELECT * FROM `productDB`';
		var list = [];
		con.query(sql,function(err,result){
			if(err) throw err;
			else{
				for(i in result){
					for(j in pl_split){
						if(result[i].productCode == pl_split[j]){
							var obj = {};
							obj.productCode = result[i].productCode;
							obj.kilogram = result[i].kilogram;
							obj.name_zh = result[i].productName_ZH;
							obj.brand_zh = result[i].productCompany_ZH;
							obj.immu = result[i].immu;
							obj.heart = result[i].heart;
							obj.hair = result[i].hair;
							obj.mehair = result[i].mehair;
							obj.joint = result[i].joint;
							obj.stoma = result[i].stoma;
							obj.urinary = result[i].urinary;
							obj.mouth = result[i].mouth;
							list.push(obj);
							break;
						}
					}
				}
				res.send(JSON.stringify(list));
			}
		});
	}
});
module.exports = router;

