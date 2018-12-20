var express = require('express');
var router = express.Router();

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

//首頁
router.get('/avoidSearching',function(req,res,next){
    res.render('admin');
});
router.post('/adminLogin',function(req,res,next){
    var id = req.body.id;
    var pwd = req.body.pwd;
    if(id=='jay' && pwd=='jayctam86@gmail.com'){
        req.session.adminLogin = 'USDUHEWSi7yasd23ek';
        res.send('success#Jay')
    }else if(id=='rax' && pwd=='rax830216@gmail.com'){
        req.session.adminLogin = 'USDUHEWSi7yasd23ek';
        res.send('success#Rax')
    }else if(id=='paul' && pwd=='paulstyle2012@gmail.com'){
        req.session.adminLogin = 'USDUHEWSi7yasd23ek';
        res.send('success#Paul')
    }else if(id=='as1232161' && pwd=='as123512'){
        req.session.adminLogin = 'USDUHEWSi7yasd23ek';
        res.send('success#Eddie')
    }else{
        req.session.adminLogin = null;
        res.send('error');
    }
});
router.post('/adminAskCustomer',function(req,res,next){
    if(req.session.adminLogin == 'USDUHEWSi7yasd23ek'){
        var sql = 'SELECT * FROM `useraccount`';
        con.query(sql,function(err,result){
            if(err) throw err;
            else{
                res.send(JSON.stringify(result));
            }
        });
    }
});
router.post('/adminAskQuestionnaire',function(req,res,next){
    if(req.session.adminLogin == 'USDUHEWSi7yasd23ek'){
        if(req.session.adminLogin == 'USDUHEWSi7yasd23ek'){
            var sql = 'SELECT * FROM `userqnrecord`';
            con.query(sql,function(err,result){
                if(err) throw err;
                else{
                    res.send(JSON.stringify(result));
                }
            });
        }
    }
});

module.exports = router;
