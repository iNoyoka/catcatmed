var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('catcatmed secret jay paul edward'));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);


//------------------------------------------
// Additional adding
//------------------------------------------
//session setting
var session = require('express-session');
app.use(session({
	secret: 'catcatmed secret jay paul edward',
	resave: true,
	saveUninitialized: true
}));

//connect to database
var mysql = require('mysql');
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '3Hptp3s5vpKPiy97',
	database: 'catcatmed'
});
var datetime = require('node-datetime');
//------------------------------------------
// For Account setting
//------------------------------------------

//------------------------------------------
// Each page design
//------------------------------------------
//------------------------------------------
// Get Home Page
//------------------------------------------
app.get('/', function(req, res, next) {
	if(req.session.cart==null) req.session.cart = [];
	res.render('index', { username: req.session.name,productLength:req.session.cart.length});
});

//------------------------------------------
// Get Login Page
//------------------------------------------
app.get('/login',function(req,res,next){
	var errMsg = req.session.errMsgLogin;
	req.session.errMsgLogin = null;
	res.render('login',{errMsg: errMsg});
});

//login check
app.post('/logincheck',function(req,res,next){
	var name;
	var username = req.body.username;
	var password = req.body.password;
	//check RE for illegal injection
	var pattern_username = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
	var pattern_password = /^\w+$/;
	var check_username = username.match(pattern_username);
	var check_password = password.match(pattern_password);
	
	if(!check_username || !check_password){
		console.log("[SYS ERR] : detect illegal data input!");
		req.session.errMsgLogin = "errInput";
		res.redirect('/login');
	}else{
		//check if database has this email address
		var sql_check = "SELECT * FROM `useraccount` WHERE username = '"+ username +"'";
		con.query(sql_check,function(err,result){
			if(err) throw err;
			else
			{
				if(result[0]==null){
					console.log("[SYS ERR] : useraccount didn't exist!");
					req.session.errMsgLogin = "errAccountIsntExist"
					res.redirect('/login');
				}else{
					if(result[0].username==username && result[0].password==password){
						//帳戶確認存在
						console.log("[SYS MSG] : "+ username +" login request confirm!");
						console.log("[SYS MSG] : "+ username +" login success!");
						req.session.name = result[0].name;
						req.session.username = username;
						res.redirect('/');
						//確認是否正在被登入
						//暫時不實作
					}else{
						console.log("[SYS ERR] : "+ username +" login failed cause of wrong password");
						req.session.errMsgLogin = "errWrongPassword";
						res.redirect('/login');
					}
				}
			}
		});
	}
	
	
});

//logout and clear session
app.get('/logout',function(req,res,next){
	req.session.destroy();
	res.redirect('/');
});

//------------------------------------------
// Get Sign Up Page
//------------------------------------------
app.get('/signup',function(req,res,next){
	var errMsg = req.session.errMsgSign;
	req.session.errMsgSign = null;
	res.render('signup',{errMsg: errMsg});
	
});

//signup check
app.post('/signupcheck',function(req,res,next){
	var name = req.body.name;
	var username = req.body.username;
	var password = req.body.password;
	//check RE for illegal injection
	var pattern_name = /^[^<]$/;
	var pattern_username = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
	var pattern_password = /^\w+$/;
	var check_name = name.match(pattern_name);
	var check_username = username.match(pattern_username);
	var check_password = password.match(pattern_password);
	
	if(!check_username || !check_password){
		console.log("[SYS ERR] : detect illegal data input!");
		req.session.errMsgSign = "errInput";
		res.redirect('/signup');
	}else{
		console.log("[SYS MSG] : RE pass, start building account...");
		var dt = datetime.create();
		var formatted = dt.format('Y-m-d H:M:S');
		//check if database has this email address
		var sql_check = "SELECT * FROM `useraccount` WHERE username = '"+ username +"'"; 
		con.query(sql_check,function(err,result){
			if(err) throw err;
			else
			{
				if(result[0]==null){
					var sql = "INSERT INTO useraccount (name, username, password, buildtime) VALUES?";
					var values = [
						[name, username,password,formatted]
					];
					con.query(sql,[values],function(err,result){
						if(err){
							console.log("[SYS ERR] : Build account failed. Duplicate account ID.");
							req.session.errMsgSign = "errKnown";
							res.redirect('/signup');
							throw err;
						}
						else{
							console.log("[SYS MSG] : " + username + " build account success!");
							req.session.name = name;
							req.session.username = username;
							res.redirect('/');
						}
					});
				}
				else if(result[0].username == username){
					console.log("[SYS ERR] : account already exist!");
					req.session.errMsgSign = "errExist";
					res.redirect('/signup');
				}
			}
		});
	}	
});


//------------------------------------------
// Get Product Page
//------------------------------------------
app.get('/product',function(req,res,next){
	if(req.session.cart==null) req.session.cart = [];
	res.render('product',{username: req.session.name,productLength:req.session.cart.length});	
});
//get product information
app.post('/clientAskForProduct',function(req,res,next){
	var sql = "SELECT * FROM `product`";
	var product_data = "[";
	//console.log("post");
	con.query(sql,function(err,result){
		if(err) throw err;
		else{
			//console.log(result);
			if(result[0]==null) console.log("No data!");
			else{
				for(i in result){
					var lastCharofJSON = product_data.substr(product_data.length-1);
					if(lastCharofJSON!='[' && lastCharofJSON!=',') product_data += ",";
					if(result[i].alreadyToSell==1){
						product_data += "{";
						product_data += "'p_id':'" + result[i].p_id + "',";
						product_data += "'p_name':'" + result[i].p_name + "',";
						product_data += "'basic_info':'" + result[i].basic_info + "',";
						product_data += "'advanced_info':'" + result[i].advanced_info + "',";
						product_data += "'picture':'" + result[i].picture + "',";
						product_data += "'price':" + result[i].price + ",";
						product_data += "'flavor_tag':'" + result[i].flavor_tag + "',";
						product_data += "'cereal_tag':" + result[i].cereal_tag + ",";
						product_data += "'brand_tag':'" + result[i].brand_tag + "'}";
					}									
				}
				product_data += "]";
				var product_dataJSON = JSON.stringify(product_data);
				res.send(product_dataJSON);
				//console.log(product_dataJSON);
			}
		}
	});		
});
app.post('/addProductToCart',function(req,res,next){
	//already has this product
	if(req.session.cart.indexOf(req.body.product) > -1){
		console.log("duplicate select item!");
	}else{
		req.session.cart.push(req.body.product);
		res.send("" + req.session.cart.length);
	}		
});

//------------------------------------------
// Get Cart Page
//------------------------------------------
app.get('/cart',function(req,res,next){
	if(req.session.cart==null) req.session.cart = [];
	res.render('cart',{username: req.session.name,productLength:req.session.cart.length});	
});
//get cart information
app.post('/clientAskForCart',function(req,res,next){
	var cart_data = "[";	
	
	var sql = "SELECT * FROM `product`";
	con.query(sql,function(err,result){
		if(err) throw err;
		else{
			//console.log(result);
			for(i in req.session.cart){
				for(j in result){
					if(req.session.cart[i]==result[j].p_id){
						var lastCharofJSON = cart_data.substr(cart_data.length-1);
						if(lastCharofJSON!="[" && lastCharofJSON!=",") cart_data+=",";
						cart_data += "{";
						cart_data += "'p_id':'" + result[j].p_id + "',";
						cart_data += "'p_name':'" + result[j].p_name + "',";
						cart_data += "'price':" + result[j].price + "}";
						break;
					}
				}
			}
			cart_data += "]";
			//console.log(cart_data);
			var cart_dataJSON = JSON.stringify(cart_data);
			res.send(cart_dataJSON);
		}
	});
});
app.post('/deleteProductFromCart',function(req,res,next){
	if(req.session.cart.indexOf(req.body.deleteTarget) > -1){
		var count = 0;
		var tempArray = [];
		var tempSessionCount = 0;
		for(i in req.session.cart) tempSessionCount++;
		for(i=tempSessionCount-1;i>=0;i--){
			if(req.session.cart[i]==req.body.deleteTarget)
			{
				req.session.cart.pop();
				break;
			}else{
				tempArray.push(req.session.cart.pop());
				count++;
			}
		}
		for(i=0;i<count;i++){
			req.session.cart.push(tempArray.pop());
		}
		res.send("done");
	}else{
		console.log("user tried to delete something not in cart!");
		res.send("err");
	}
});

/* Questionnaire Part */
app.get('/questionnaire',function(req,res,next){
	res.render('questionnaire');
});

//------------------------------------------
// Get User Center Page
//------------------------------------------
app.get('/usercenter',function(req,res,next){
	if(req.session.username==null) res.redirect('/login');
	else{
		if(req.session.cart==null) req.session.cart = [];
		res.render('usercenter',{username: req.session.name,productLength:req.session.cart.length});
	}	
});
app.post('/clientAskForChangePassword',function(req,res,next){
	var sql = "SELECT * FROM `useraccount` WHERE username = '"+ req.session.username +"'";
	con.query(sql,function(err,result){
		if(req.body.oldPassword==result[0].password){
			//TODO 後端檢查密碼是否符合規則
			con.query("UPDATE `useraccount` SET password = '"+req.body.newPassword+"' WHERE username = '"+ req.session.username +"'");
			res.redirect('/usercenter');
		}
	});
});

//------------------------------------------
// SEND MAIL
//------------------------------------------
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	host: 'smtp.catcatmed.com',
    port: 25,
    secure: false,
    requireTLS: true,
	auth: {
		user: "catcatmedITadmin@catcatmed.com",
		pass: "asdofijdmauasdhf87632"
	}
});
var options = {
		from: "catcatmedITadmin@catcatmed.com",
		to: "as1232161@gmail.com",
		subject: "這是來自卡卡貓的測試郵件",
		text: "裡面應該會放系統通知"
	}
app.post('/sendmail',function(req,res,next){	
	transporter.sendMail(options,function(error, info){
		if(error){
			console.log("[SYS ERR] : "+error);
		}else{
			console.log("[SYS MSG] : 訊息發送" + info.response);
		}
	});
});
//------------------------------------------
// ERROR Handler
//------------------------------------------
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
