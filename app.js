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
/*testalgo*/
app.get('/testAlgo',function(req,res,next){
	res.render('testAlgo');
});
app.post('/testAlgo',function(req,res,next){
	var catage_year = parseInt(req.body.catage_year);
	var catage_month = parseInt(req.body.catage_month);
	var catWeight = parseInt(req.body.catwei_front) + parseInt(req.body.catwei_back)*0.1;
	var catBCS = parseInt(req.body.catBCS);
	var activity = req.body.activity;
	var neutured = req.body.neutured;
	var preg = req.body.preg;
	var pregtime = req.body.pregtime;
	var milkyCat = req.body.milkyCat;
	var kittyAge = req.body.kittyAge;
	var kittyNumber = parseInt(req.body.kittyNumber);
	var sexCat = req.body.sexCat;
	//
	var fat = 0;
	var idealWeight = 0;
	var RERCoefficient = 0 ;
	var RER = 0;
	var activityCoefficient;
	var neuturedCoefficient;
	var kcal = 1;
	var childCoefficient;
	var milkyCatCoefficient;
	var catType; //幼貓 懷孕貓 泌乳貓 交配貓 老貓 老老貓 成貓 胖成貓 
	//----------------------------------------------------------
	// DECIDE TYPE OF CAT
	//----------------------------------------------------------
	if(catage_year>=1 && catage_year<7){ //成貓
		if(catBCS>=7){			//胖成貓
			catType = "胖成貓";
		}else{ 					//一般成貓
			catType = "成貓";
		}
	}else if(catage_year>=7 && catage_year<12){ //老貓		
		if(catBCS>=7){			//胖成貓
			catType = "胖老貓";
		}else{ 					//一般成貓
			catType = "老貓";
		}
	}else if(catage_year>=12){
		if(catBCS>=7){			//胖成貓
			catType = "胖老老貓";
		}else{ 					//一般成貓
			catType = "老老貓";
		}
	}else if(catage_year<1){ //幼貓
		catType = "幼貓";
	}
	if(preg=="是"){
		catType = "懷孕貓";
	}
	if(milkyCat=="是"){
		catType = "泌乳貓";
	}
	if(sexCat=="是"){
		catType = "交配貓"
	}
	//----------------------------------------------------------
	// CALCULATE COEFFICIENT
	//----------------------------------------------------------
	if(catType == "成貓" || catType == "胖成貓" || catType == "交配貓"){
		if(catBCS==3) fat = 10;
		if(catBCS==4) fat = 20;
		if(catBCS==5) fat = 20;
		if(catBCS==6) fat = 30;
		if(catBCS==7) fat = 40;
		if(catBCS==8) fat = 50;
		if(catBCS==9) fat = 60;
		idealWeight = catWeight-catWeight*(fat-20)/100;
		if(catBCS==3) RERCoefficient = 140;	
		if(catBCS==4) RERCoefficient = 120;	
		if(catBCS==5) RERCoefficient = 120;	
		if(catBCS==6) RERCoefficient = 100;	
		if(catBCS==7) RERCoefficient = 100;	
		if(catBCS==8) RERCoefficient = 80;	
		if(catBCS==9) RERCoefficient = 80;
		RER = 70*(Math.pow(catWeight,0.75));
		if(activity=="高") activityCoefficient = 1.333333333;
		if(activity=="中") activityCoefficient = 1.083333333;
		if(activity=="低") activityCoefficient = 1;
		if(neutured=="是") neuturedCoefficient = 1;
		if(neutured=="否") neuturedCoefficient = 1.166666667;	
		kcal = RERCoefficient/100*RER*activityCoefficient*neuturedCoefficient;
	}
	else if(catType == "幼貓"){
		if(catage_month == 1) childCoefficient = 240;
		else if(catage_month == 2) childCoefficient = 210;
		else if(catage_month == 3) childCoefficient = 200;
		else if(catage_month == 4) childCoefficient = 175;
		else if(catage_month == 5) childCoefficient = 145;
		else if(catage_month == 6) childCoefficient = 135;
		else if(catage_month == 7) childCoefficient = 120;
		else if(catage_month == 8) childCoefficient = 110;
		else if(catage_month == 9) childCoefficient = 100;
		else if(catage_month == 10) childCoefficient = 95;
		else if(catage_month == 11) childCoefficient = 90;
		kcal = catWeight*childCoefficient;
	}
	else if(catType == "懷孕貓"){
		if(pregtime == "1_3") RERCoefficient = 1.6;
		else if(pregtime == "4_6") RERCoefficient = 1.8;
		else if(pregtime == "6up") RERCoefficient = 2;
		RER = 70*(Math.pow(catWeight,0.75));
		kcal = RERCoefficient * RER;
	}
	else if(catType == "泌乳貓"){
		if(kittyAge == "1_2week") milkyCatCoefficient = 30;
		if(kittyAge == "3week") milkyCatCoefficient = 45;
		if(kittyAge == "4week") milkyCatCoefficient = 55;
		if(kittyAge == "5week") milkyCatCoefficient = 65;
		if(kittyAge == "6week") milkyCatCoefficient = 90;
		RER = 70*(Math.pow(catWeight,0.75))*1.2;
		kcal = RER + milkyCatCoefficient/100*RER*kittyNumber;
	}
	else if(catType == "老貓" || catType == "胖老貓" || catType == "老老貓" || catType == "胖老老貓"){
		if(catBCS==3) fat = 10;
		if(catBCS==4) fat = 20;
		if(catBCS==5) fat = 20;
		if(catBCS==6) fat = 30;
		if(catBCS==7) fat = 40;
		if(catBCS==8) fat = 50;
		if(catBCS==9) fat = 60;
		idealWeight = catWeight*(1-fat/100);
		RER = 70*(Math.pow(catWeight,0.75));
		if(catType == "老貓" || catType == "胖老貓"){
			if(catBCS==3) RERCoefficient = 140;
			if(catBCS==4) RERCoefficient = 140;
			if(catBCS==5) RERCoefficient = 130;
			if(catBCS==6) RERCoefficient = 130;
			if(catBCS==7) RERCoefficient = 120;
			if(catBCS==8) RERCoefficient = 120;
			if(catBCS==9) RERCoefficient = 110;
		}else{
			if(catBCS==3) RERCoefficient = 160;
			if(catBCS==4) RERCoefficient = 160;
			if(catBCS==5) RERCoefficient = 150;
			if(catBCS==6) RERCoefficient = 140;
			if(catBCS==7) RERCoefficient = 130;
			if(catBCS==8) RERCoefficient = 120;
			if(catBCS==9) RERCoefficient = 110;
		}
		if(activity=="高") activityCoefficient = 1.333333333;
		if(activity=="中") activityCoefficient = 1.083333333;
		if(activity=="低") activityCoefficient = 1;
		if(neutured=="是") neuturedCoefficient = 1;
		if(neutured=="否") neuturedCoefficient = 1.166666667;
		kcal = RERCoefficient/100*RER*activityCoefficient*neuturedCoefficient;
	}
	//find data
	var sql = "SELECT * FROM `fooddata`";
	var list = [];
	var listNumber = 0;
	var innerHTML = "";
	//console.log("post");
	con.query(sql,function(err,result){
		if(err) throw err;
		else{			
			for(i in result){
				if(catType == "成貓"){
					if(result[i].fat>10&&result[i].fat<30&&result[i].fiber<5&&result[i].protein>30&&result[i].protein<45)
					{
						list.push(i);
						listNumber += 1;
					}
				}else if(catType == "胖成貓"){
					if(result[i].fat>9&&result[i].fat<17&&result[i].fiber>5&&result[i].fiber<15&&result[i].protein>30&&result[i].protein<45)
					{
						list.push(i);
						listNumber += 1;
					}
				}else if(catType == "幼貓"){
					if(result[i].fat>18&&result[i].fat<35&&result[i].protein>35&&result[i].protein<50)
					{
						list.push(i);
						listNumber += 1;
					}
				}else if(catType == "懷孕貓"){
					if(result[i].fat>18&&result[i].fat<35&&result[i].protein>35&&result[i].protein<50)
					{
						list.push(i);
						listNumber += 1;
					}
				}else if(catType == "泌乳貓"){
					if(result[i].fat>18&&result[i].fat<35&&result[i].protein>35&&result[i].protein<50)
					{
						list.push(i);
						listNumber += 1;
					}
				}else if(catType == "交配貓"){
					if(result[i].fat>10&&result[i].fat<30&&result[i].protein>30&&result[i].protein<45)
					{
						list.push(i);
						listNumber += 1;
					}
				}else if(catType == "老貓" || catType == "胖老貓"){
					if(result[i].fat>18&&result[i].fat<25&&result[i].fiber<=5&&result[i].protein>30&&result[i].protein<45)
					{
						list.push(i);
						listNumber += 1;
					}
				}else if(catType == "老老貓" || catType == "胖老老貓"){
					if(result[i].fat>10&&result[i].fat<18&&result[i].fiber>5&&result[i].fiber<15&&result[i].protein>30&&result[i].protein<45)
					{
						list.push(i);
						listNumber += 1;
					}
				}
				
			}
			innerHTML += "<h4>分類 ： "+catType+"</h4>";
			innerHTML += "<h4>fat ： "+fat+"%</h4>";
			innerHTML += "<h4>idealWeight ： "+idealWeight+"kg</h4>";
			innerHTML += "<h4>RERCoefficient ： "+RERCoefficient+"%</h4>";
			innerHTML += "<h4>RER ： "+RER+"</h4>";
			innerHTML += "<h4>kcal ： "+kcal+"</h4>";
			innerHTML += "<hr>";
			for(i=0;i<listNumber;i++){
				var j = list.pop();
				innerHTML += "<h5>飼料牌子 ： "+result[j].brand+"</h5>";
				innerHTML += "<h5>飼料名稱 ： "+result[j].productName+"</h5>";
				innerHTML += "<h5>protein ： "+result[j].protein+"</h5>";
				innerHTML += "<h5>fiber ： "+result[j].fiber+"</h5>";
				innerHTML += "<h5>fat ： "+result[j].fat+"</h5>";
				innerHTML += "<hr>";
				if(i==listNumber-1) res.send(innerHTML);
			}
			
		}
	});	
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
	res.render('questionnaire_ver2');
});
app.post('/questionnaireSaveandQuit',function(req,res,next){
	req.session.recordQuestionnaire = true;
	//
	req.session.basicInformation = req.body.basicInformation;
	req.session.advancedInformation = req.body.advancedInformation;
	req.session.iconInformation = req.body.iconInformation;
	req.session.extraInformation = req.body.extraInformation;	
	req.session.iconTravelList = req.body.iconTravelList;	
	req.session.iconTraveledList = req.body.iconTraveledList;	
	req.session.recordTravelList = req.body.recordTravelList;
	req.session.currentPage = req.body.currentPage;	
	req.session.icon = req.body.icon;	
	req.session.ingredients = req.body.ingredients;	
	req.session.allergy = req.body.allergy;	
	req.session.stress = req.body.stress;
	res.redirect('/');
	//test
	//console.log("[SYS MSG] : SAVE COMPLETE!");
});
app.post('/questionnaireRequest',function(req,res,next){
	if(req.session.recordQuestionnaire==null){
		res.send("lackOfHistory");
	}else{
		res.send("historyExist");
	}
});
app.post('/questionnaireAskRecordData',function(req,res,next){
	if(req.body.request=="basicInformation")
		res.send(req.session.basicInformation);
	else if(req.body.request=="advancedInformation")
		res.send(req.session.advancedInformation);
	else if(req.body.request=="iconInformation")
		res.send(req.session.iconInformation);
	else if(req.body.request=="extraInformation")
		res.send(req.session.extraInformation);
	else console.log("[SYS ERR] : REQUEST FAILURE!");
});
app.post('/questionnaireAskArray',function(req,res,next){
	if(req.body.request=="currentPage"){
		res.send(req.session.currentPage);
	}
	else if(req.body.request=="iconTravelList"){
		res.send(req.session.iconTravelList);
	}
	else if(req.body.request=="iconTraveledList"){
		res.send(req.session.iconTraveledList);
	}
	else if(req.body.request=="recordTravelList"){
		res.send(req.session.recordTravelList);
	}
	else if(req.body.request=="icon"){
		res.send(req.session.icon);
	}
	else if(req.body.request=="ingredients"){
		res.send(req.session.ingredients);
	}
	else if(req.body.request=="allergy"){
		res.send(req.session.allergy);
	}
	else if(req.body.request=="stress"){
		res.send(req.session.stress);
	}
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
