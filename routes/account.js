var express = require('express');
var router = express.Router();

//------------------------------------------
// Get Login Page
//------------------------------------------
router.get('/login',function(req,res,next){
	var errMsg = req.session.errMsgLogin;
	req.session.errMsgLogin = null;
	res.render('login',{errMsg: errMsg});
});

//login check
router.post('/logincheck',function(req,res,next){
	var name;
	var username = req.body.username;
	var password = req.body.password;
	//check RE for illegal injection
	var pattern_username = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
	var pattern_password = /^\w+$/;
	var check_username = username.match(pattern_username);
	var check_password = password.match(pattern_password);
	/*
	if(!check_username || !check_password){
		console.log("[SYS ERR] : detect illegal data input!");
		req.session.errMsgLogin = "errInput";
		res.redirect('/login');
	}else{
		//check if database has this email address
		
	}
	*/
	var sql_check = "SELECT * FROM `useraccount` WHERE username = '"+ username +"'";
	con.query(sql_check,function(err,result){
		if(err) throw err;
		else
		{
			if(result[0]==null){
				console.log("[SYS ERR] : useraccount didn't exist!");
				req.session.errMsgLogin = "errAccountIsntExist";
				res.redirect('/login');
			}else{
				if(result[0].username==username && result[0].password==password){
					//帳戶確認存在
					console.log("[SYS MSG] : "+ username +" login request confirm!");
					console.log("[SYS MSG] : "+ username +" login success!");
					req.session.name = result[0].name;
					req.session.username = username;
					if(req.session.recordWebPage==null){
						res.redirect('/');
					}else{
						var page = req.session.recordWebPage;
						req.session.recordWebPage = null;
						res.redirect('/'+page);
					}					
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
	
});

//logout and clear session
router.get('/logout',function(req,res,next){
	req.session.destroy();
	res.redirect('/');
});

//------------------------------------------
// Get Sign Up Page
//------------------------------------------

router.get('/signup',function(req,res,next){
	var errMsg = req.session.errMsgSign;
	req.session.errMsgSign = null;
	res.render('signup',{errMsg: errMsg});
	
});
//signup check
router.post('/signupcheck',function(req,res,next){
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
							if(req.session.recordWebPage==null){
								res.redirect('/');
							}else{
								var page = req.session.recordWebPage;
								req.session.recordWebPage = null;
								res.redirect('/'+page);
							}
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
// Get User Center Page
//------------------------------------------
// for demo page
router.get('/repeatusername',function(req,res,next){
	res.render('repeatusername');
});
router.post('/repeatusername',function(req,res,next){
	var empty = []
	var sql_check = "SELECT * FROM `ordersystem` WHERE username = '"+ req.body.keepername +"'";
	con.query(sql_check,function(err,result){
		if(err){
			res.send('error');
			throw err;
		}
		else{
			if(result[0]==null)	res.send('error');
			else if(result[0].userid==req.session.username){
				req.session.catfoodID = result[0].productCode;
				req.session.buildTime = result[0].buildTime;
				var sql = "SELECT * FROM `userqnrecord` WHERE BCN = '"+ req.body.catname +"'";
				con.query(sql,function(err,resultC){
					if(err){
						console.log("?1");
						res.send('error');
						throw err;
					}else if(resultC[0]==null){
						console.log("?2");
						res.send('error');
					}
					else{
						if(resultC[0].username==req.session.username){
							req.session.BCN = req.body.catname;
							if(req.session.BCN=='Jessica'){
								req.session.catfoodID = 'CCM0604';
							}
							res.send('success');
						}else{
							console.log("?3");
							res.send('error');
						}
					}
				});
			}else{
				res.send('error');
			}
		}
	});
});
router.get('/usercenter',function(req,res,next){	
	if(req.session.username==null){
		req.session.recordWebPage = 'usercenter';
		res.redirect('/login');
	}else{
		var sql_check = "SELECT * FROM `ordersystem` WHERE userid = '"+ req.session.username +"'";
		con.query(sql_check,function(err,result){
			if(err){
				throw err;
			}
			else
			{
				if(result.length==0){
					res.redirect('/');
				}else if(result.length>1 && req.session.BCN==null){
					req.session.recordUC = 0;
					res.redirect('/repeatusername');
				}else{	//correct, add basic information
					if(req.session.recordUC==null)	req.session.recordUC = 1;
					if(req.session.catfoodID==null)	req.session.catfoodID = result[0].productCode;
					if(req.session.buildTime==null)	req.session.buildTime = result[0].buildTime;
					res.render('usercenter',{name: req.session.name});
				}
			}
		});
	}	
});
router.post('/usercenter_requestData',function(req,res,next){
	//
	function FindCorrectQNList(result){
		obj = {};
		obj.BCN = result.BCN;
		obj.BCS = result.BCS;
		obj.BCA_ageYear = result.BCA_ageYear;
		obj.BCA_ageMonth = result.BCA_ageMonth;
		obj.BSP = result.BSP;
		obj.BNU = result.BNU;
		obj.BPR = result.BPR;
		obj.BPT = result.BPT;
		obj.BFN = result.BFN;
		obj.BFA_kittyNum = result.BFA_kittyNum;
		obj.BFA_week = result.BFA_week;
		obj.BCW_kilo = result.BCW_kilo;
		obj.BCW_gram = result.BCW_gram;
		obj.BEF = result.BEF;
		obj.BSI = result.BSI;
		obj.BBC = result.BBC;
		obj.select_icon = result.select_icon;
		obj.joint_now = result.joint_now;
		obj.joint_med = result.joint_med;
		obj.joint_below = result.joint_below;
		obj.joint_jump = result.joint_jump;
		obj.joint_daily = result.joint_daily;
		obj.heart_now = result.heart_now;
		obj.heart_behave = result.heart_behave;
		obj.heart_avgtemp = result.heart_avgtemp;
		obj.mouth_now = result.mouth_now;
		obj.mouth_behave = result.mouth_behave;
		obj.mouth_brush = result.mouth_brush;
		obj.fur_freq = result.fur_freq;
		obj.fur_behave = result.fur_behave;
		obj.fur_tie = result.fur_tie;
		obj.immu_now = result.immu_now;
		obj.immu_behave = result.immu_behave;
		obj.immu_behave_before = result.immu_behave_before;
		obj.immu_spirit = result.immu_spirit;
		obj.immu_med = result.immu_med;
		obj.kidney_now = result.kidney_now;
		obj.kidney_urine = result.kidney_urine;
		obj.kidney_health = result.kidney_health;
		obj.urinary_now = result.urinary_now;
		obj.urinary_behave = result.urinary_behave;
		obj.urinary_together = result.urinary_together;
		obj.urinary_water = result.urinary_water;
		obj.stoma_problem = result.stoma_problem;
		obj.stoma_bathroom = result.stoma_bathroom;
		obj.stoma_strange = result.stoma_strange;
		obj.melt_freq = result.melt_freq;
		obj.stress_now = result.stress_now;
		obj.stress_enviornment = result.stress_enviornment;
		obj.stress_enviornment_out = result.stress_enviornment_out;
		obj.stress_lifestyle = result.stress_lifestyle;
		obj.extra_eatinghabit = result.extra_eatinghabit;
		obj.extra_eatingfreq = result.extra_eatingfreq;
		obj.extra_weekcan = result.extra_weekcan;
		obj.extra_freshflesh = result.extra_freshflesh;
		obj.extra_minifish = result.extra_minifish;
		obj.extra_killbugs = result.extra_killbugs;
		obj.extra_vacci = result.extra_vacci;
		obj.extra_alergent = result.extra_alergent;
		obj.extra_drinking = result.extra_drinking;
		obj.extra_cooking = result.extra_cooking;
		obj.extra_strangehabit = result.extra_strangehabit;
		obj.extra_place = result.extra_place;
		obj.extra_knowhow = result.extra_knowhow;
		return obj;
	}
	function AddObjToList(productCode,name_zh,brand_zh,brand_en,original,price,kcal,MeatLevel_total,DRY_protein,DRY_fat,DRY_carbohydrate,goodMeat,potentialAlergent,dailyNeedkcal,ingredient,catWeight,immu,heart,hair,mehair,joint,stoma,urinary,mouth,alergent,protein,fat,fiber,proteinUpperLimit,proteinLowerLimit,fatUpperLimit,fatLowerLimit,fiberUpperLimit,fiberLowerLimit){
		var obj = {};
		obj.productCode = productCode;
		obj.name_zh = name_zh;
		obj.brand_zh = brand_zh;
		obj.brand_en = brand_en;
		obj.original = original;
		obj.price = price;
		obj.kcal = kcal;
		obj.MeatLevel_total = MeatLevel_total;
		obj.DRY_protein = DRY_protein;
		obj.DRY_fat = DRY_fat;
		obj.DRY_carbohydrate = DRY_carbohydrate;
		obj.goodMeat = goodMeat;
		obj.potentialAlergent = potentialAlergent;
		obj.immu = immu;
		obj.heart = heart;
		obj.hair = hair;
		obj.mehair = mehair;
		obj.joint = joint;
		obj.stoma = stoma;
		obj.urinary = urinary;
		obj.mouth = mouth;
		obj.alergent = alergent;
		obj.protein = protein;
		obj.fat = fat;
		obj.fiber = fiber;
		//
		obj.proteinLevel = null;
		obj.fatLevel = null;
		obj.carbohydrateLevel = null;
		obj.iconscore = null;
		obj.proteinUpperLimit = proteinUpperLimit;
		obj.proteinLowerLimit = proteinLowerLimit;
		obj.fatUpperLimit = fatUpperLimit;
		obj.fatLowerLimit = fatLowerLimit;
		obj.fiberUpperLimit = fiberUpperLimit;
		obj.fiberLowerLimit = fiberLowerLimit;
		obj.dailyNeedWater = Math.round(65*catWeight - dailyNeedkcal/100*11 - dailyNeedkcal/kcal*100);
		obj.dailyNeedkcal = Math.round(dailyNeedkcal);
		obj.dailyNeedGram = Math.round(dailyNeedkcal/kcal*1000);
		obj.ingredient = ingredient;
		return obj;
	}
	//
	var sql_qnlist = "SELECT * FROM `userqnrecord` WHERE username = '"+ req.session.username +"'";
	con.query(sql_qnlist,function(err,os){
		if(err) throw err;
		else{
			//console.log(req.session.recordUC);
			//console.log(req.session.BCN);
			if(req.session.recordUC==1){	//only 1 result
				req.session.correctqnlist = FindCorrectQNList(os[0]);
				var sql_product = "SELECT * FROM `productDB` WHERE productCode = '"+ req.session.catfoodID +"'";
				//cattype and basic information
				var catage_year = parseInt(req.session.correctqnlist.BCA_ageYear);
				var catage_month = parseInt(req.session.correctqnlist.BCA_ageMonth);
				var catWeight = parseInt(req.session.correctqnlist.BCW_kilo) + parseInt(req.session.correctqnlist.BCW_gram)*0.1;
				var catBCS;
				if(req.session.correctqnlist.BBC=='A') catBCS = 1;
				else if(req.session.correctqnlist.BBC=='B') catBCS = 2;
				else if(req.session.correctqnlist.BBC=='C') catBCS = 3;
				else if(req.session.correctqnlist.BBC=='D') catBCS = 4;
				else if(req.session.correctqnlist.BBC=='E') catBCS = 5;
				var activity = req.session.correctqnlist.BEF;
				var neutured = req.session.correctqnlist.BNU;
				var preg;
				var pregtime;
				var milkyCat;
				var kittyAge;
				var kittyNumber;
				if(req.session.correctqnlist.BPR!=null) preg = req.session.correctqnlist.BPR;
				if(req.session.correctqnlist.BPT!=null) pregtime = req.session.correctqnlist.BPT;
				if(req.session.correctqnlist.BFN!=null) milkyCat = req.session.correctqnlist.BFN;
				if(req.session.correctqnlist.BFA_week!=null) kittyAge = req.session.correctqnlist.BFA_week;
				if(req.session.correctqnlist.BFA_kittyNum!=null) kittyNumber = parseInt(req.session.correctqnlist.BFA_kittyNum);
				//
				var fat = 0;
				var idealWeight = 0;
				var RERCoefficient = 0 ;
				var ageRERCoefficient = 0;
				var RER = 0;
				var activityCoefficient;
				var neuturedCoefficient;
				var kcal = 1;
				var childCoefficient;
				var milkyCatCoefficient;
				var milkyCatPercentage;
				var catType; //幼貓 懷孕貓 泌乳貓 交配貓 老貓 老老貓 成貓 胖成貓 		
				//----------------------------------------------------------
				// DECIDE TYPE OF CAT
				//----------------------------------------------------------
				if(catage_year>=1 && catage_year<7){ //成貓
					if(catBCS>=5){			//胖成貓
						catType = "胖成貓";
					}else{ 					//一般成貓
						catType = "成貓";
					}
				}else if(catage_year>=7 && catage_year<12){ //老貓		
					if(catBCS>=5){			//胖成貓
						catType = "胖老貓";
					}else{ 					//一般成貓
						catType = "老貓";
					}
				}else if(catage_year>=12){
					if(catBCS>=5){			//胖成貓
						catType = "胖老老貓";
					}else{ 					//一般成貓
						catType = "老老貓";
					}
				}else if(catage_year<1){ //幼貓
					catType = "幼貓";
				}
				if(preg=="yes"){
					catType = "懷孕貓";
				}		
				if(milkyCat=="yes"){
					catType = "泌乳貓";
				}
				/*
				if(sexCat=="是"){
					catType = "交配貓"
				}
				*/
				//----------------------------------------------------------
				// CALCULATE COEFFICIENT
				//----------------------------------------------------------
				if(catType == "成貓" || catType == "胖成貓" || catType == "交配貓"){
					if(catBCS==1) fat = 5;
					if(catBCS==2) fat = 10;
					if(catBCS==3) fat = 20;
					if(catBCS==4) fat = 30;
					if(catBCS==5) fat = 40;
					if(catBCS==6) fat = 50;
					if(catBCS==7) fat = 60;
					idealWeight = catWeight*(100-fat)/100/0.8;
					if(catBCS==1) RERCoefficient = 140;	
					if(catBCS==2) RERCoefficient = 120;	
					if(catBCS==3) RERCoefficient = 120;	
					if(catBCS==4) RERCoefficient = 100;	
					if(catBCS==5) RERCoefficient = 100;	
					if(catBCS==6) RERCoefficient = 80;	
					if(catBCS==7) RERCoefficient = 80;
					RER = 70*(Math.pow(idealWeight,0.75));
					if(activity=="A") activityCoefficient = 1.083333333; //1.333333333
					if(activity=="B") activityCoefficient = 1;
					if(activity=="C") activityCoefficient = 1;
					if(neutured=="yes") neuturedCoefficient = 1;
					if(neutured=="no") neuturedCoefficient = 1.166666667;
					if(catType == "胖成貓") kcal_fat = RER*activityCoefficient*neuturedCoefficient;
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
					if(pregtime == "A") RERCoefficient = 1.6;
					else if(pregtime == "B") RERCoefficient = 1.8;
					else if(pregtime == "C") RERCoefficient = 2;
					RER = 70*(Math.pow(catWeight,0.75));
					kcal = RERCoefficient * RER;
				}
				else if(catType == "泌乳貓"){
					if(kittyAge == "1" || kittyAge == "2"){
						milkyCatCoefficient = 2.3;
						milkyCatPercentage = 0.3;
					}
					if(kittyAge == "3"){
						milkyCatCoefficient = 2.5;
						milkyCatPercentage = 0.45;
					}
					if(kittyAge == "4"){
						milkyCatCoefficient = 3;
						milkyCatPercentage = 0.55;
					}
					if(kittyAge == "5"){
						milkyCatCoefficient = 3.5;
						milkyCatPercentage = 0.65;
					}
					if(kittyAge == "6"){
						milkyCatCoefficient = 4;
						milkyCatPercentage = 0.9;
					}
					RER = 70*(Math.pow(catWeight,0.75));
					kcal = RER*milkyCatCoefficient + milkyCatPercentage*RER*kittyNumber;
				}
				else if(catType == "老貓" || catType == "胖老貓" || catType == "老老貓" || catType == "胖老老貓"){
					if(catBCS==1) fat = 5;
					if(catBCS==2) fat = 10;
					if(catBCS==3) fat = 20;
					if(catBCS==4) fat = 30;
					if(catBCS==5) fat = 40;
					if(catBCS==6) fat = 50;
					if(catBCS==7) fat = 60;
					idealWeight = catWeight*(100-fat)/100/0.8;
					RER = 70*(Math.pow(idealWeight,0.75));
					if(catBCS==1) RERCoefficient = 140;
					if(catBCS==2) RERCoefficient = 120;
					if(catBCS==3) RERCoefficient = 120;
					if(catBCS==4) RERCoefficient = 100;
					if(catBCS==5) RERCoefficient = 100;
					if(catBCS==6) RERCoefficient = 80;
					if(catBCS==7) RERCoefficient = 80;
					if(catage_year==7) ageRERCoefficient = 110;
					if(catage_year==8) ageRERCoefficient = 120;
					if(catage_year==9 || catage_year==10) ageRERCoefficient = 130;
					if(catage_year==11) ageRERCoefficient = 140;
					if(catage_year==12) ageRERCoefficient = 150;
					if(catage_year>=13) ageRERCoefficient = 160;
					if(activity=="A") activityCoefficient = 1.111; //1.222
					if(activity=="B") activityCoefficient = 1;
					if(activity=="C") activityCoefficient = 1;
					if(neutured=="yes") neuturedCoefficient = 1;
					if(neutured=="no") neuturedCoefficient = 1.166666667;
					if(catType == "胖老貓" || catType == "胖老老貓") kcal_fat = RER*activityCoefficient*neuturedCoefficient*ageRERCoefficient/100;
					kcal = RERCoefficient/100*RER*activityCoefficient*neuturedCoefficient*ageRERCoefficient/100;
				}
				con.query(sql_product,function(err,result){
					if(err) throw err;
					else{
						if(catType == "成貓" && !req.session.correctqnlist.select_icon.includes('I')){					
							req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,30,10,5,0);
						}else if(catType == "成貓" && req.session.correctqnlist.select_icon.includes('I')){
							req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,30,10,11.3,0);
						}else if(catType == "胖成貓"){
							req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,20,9,15,6);
						}else if(catType == "幼貓"){
							req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,35,18,20,0);
						}else if(catType == "懷孕貓"){
							req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,35,18,20,0);
						}else if(catType == "泌乳貓"){
							req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,35,18,20,0);
						}else if(catType == "交配貓"){
							req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,25,9,20,0);
						}else if(catType == "老貓" && !req.session.correctqnlist.select_icon.includes('I')){
							req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,22,16,4.5,0);
						}else if(catType == "老貓" && req.session.correctqnlist.select_icon.includes('I')){
							req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,22,16,11.3,0);
						}else if(catType == "老老貓" || catType == "胖老老貓" || catType == "胖老貓"){
							req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,16,9,15,4.5);
						}
						for(j=1;j<proteinAll.length+1;j++){
							if(req.session.productdetailinfo.DRY_protein==proteinAll[j-1]){
								req.session.productdetailinfo.proteinLevel = Math.round((j-1)/640*100);
								break;
							}
						}
						for(j=1;j<fatAll.length+1;j++){
							if(req.session.productdetailinfo.DRY_fat==fatAll[j-1]){
								req.session.productdetailinfo.fatLevel = Math.round((j-1)/640*100);
								break;
							}
						}
						for(j=1;j<carbohydrateAll.length+1;j++){
							if(req.session.productdetailinfo.DRY_carbohydrate==carbohydrateAll[j-1]){
								req.session.productdetailinfo.carbohydrateLevel = Math.round((640-j)/640*100);
								break;
							}
						}
						//ready to send data;
						var listJSON = JSON.stringify(req.session.buildTime)+'#'+JSON.stringify(req.session.productdetailinfo)+'#'+JSON.stringify(req.session.correctqnlist);
						res.send(listJSON);
					}
				});
			}
			else{
				//console.log(os);
				for(i in os){
					if(os[i].BCN==req.session.BCN){
						//console.log('HERE');
						req.session.correctqnlist = FindCorrectQNList(os[i]);
						var sql_product = "SELECT * FROM `productDB` WHERE productCode = '"+ req.session.catfoodID +"'";
						//cattype and basic information
						var catage_year = parseInt(req.session.correctqnlist.BCA_ageYear);
						var catage_month = parseInt(req.session.correctqnlist.BCA_ageMonth);
						var catWeight = parseInt(req.session.correctqnlist.BCW_kilo) + parseInt(req.session.correctqnlist.BCW_gram)*0.1;
						var catBCS;
						if(req.session.correctqnlist.BBC=='A') catBCS = 1;
						else if(req.session.correctqnlist.BBC=='B') catBCS = 2;
						else if(req.session.correctqnlist.BBC=='C') catBCS = 3;
						else if(req.session.correctqnlist.BBC=='D') catBCS = 4;
						else if(req.session.correctqnlist.BBC=='E') catBCS = 5;
						var activity = req.session.correctqnlist.BEF;
						var neutured = req.session.correctqnlist.BNU;
						var preg;
						var pregtime;
						var milkyCat;
						var kittyAge;
						var kittyNumber;
						if(req.session.correctqnlist.BPR!=null) preg = req.session.correctqnlist.BPR;
						if(req.session.correctqnlist.BPT!=null) pregtime = req.session.correctqnlist.BPT;
						if(req.session.correctqnlist.BFN!=null) milkyCat = req.session.correctqnlist.BFN;
						if(req.session.correctqnlist.BFA_week!=null) kittyAge = req.session.correctqnlist.BFA_week;
						if(req.session.correctqnlist.BFA_kittyNum!=null) kittyNumber = parseInt(req.session.correctqnlist.BFA_kittyNum);
						//
						var fat = 0;
						var idealWeight = 0;
						var RERCoefficient = 0 ;
						var ageRERCoefficient = 0;
						var RER = 0;
						var activityCoefficient;
						var neuturedCoefficient;
						var kcal = 1;
						var childCoefficient;
						var milkyCatCoefficient;
						var milkyCatPercentage;
						var catType; //幼貓 懷孕貓 泌乳貓 交配貓 老貓 老老貓 成貓 胖成貓 		
						//----------------------------------------------------------
						// DECIDE TYPE OF CAT
						//----------------------------------------------------------
						if(catage_year>=1 && catage_year<7){ //成貓
							if(catBCS>=5){			//胖成貓
								catType = "胖成貓";
							}else{ 					//一般成貓
								catType = "成貓";
							}
						}else if(catage_year>=7 && catage_year<12){ //老貓		
							if(catBCS>=5){			//胖成貓
								catType = "胖老貓";
							}else{ 					//一般成貓
								catType = "老貓";
							}
						}else if(catage_year>=12){
							if(catBCS>=5){			//胖成貓
								catType = "胖老老貓";
							}else{ 					//一般成貓
								catType = "老老貓";
							}
						}else if(catage_year<1){ //幼貓
							catType = "幼貓";
						}
						if(preg=="yes"){
							catType = "懷孕貓";
						}		
						if(milkyCat=="yes"){
							catType = "泌乳貓";
						}
						/*
						if(sexCat=="是"){
							catType = "交配貓"
						}
						*/
						//----------------------------------------------------------
						// CALCULATE COEFFICIENT
						//----------------------------------------------------------
						if(catType == "成貓" || catType == "胖成貓" || catType == "交配貓"){
							if(catBCS==1) fat = 5;
							if(catBCS==2) fat = 10;
							if(catBCS==3) fat = 20;
							if(catBCS==4) fat = 30;
							if(catBCS==5) fat = 40;
							if(catBCS==6) fat = 50;
							if(catBCS==7) fat = 60;
							idealWeight = catWeight*(100-fat)/100/0.8;
							if(catBCS==1) RERCoefficient = 140;	
							if(catBCS==2) RERCoefficient = 120;	
							if(catBCS==3) RERCoefficient = 120;	
							if(catBCS==4) RERCoefficient = 100;	
							if(catBCS==5) RERCoefficient = 100;	
							if(catBCS==6) RERCoefficient = 80;	
							if(catBCS==7) RERCoefficient = 80;
							RER = 70*(Math.pow(idealWeight,0.75));
							if(activity=="A") activityCoefficient = 1.083333333; //1.333333333
							if(activity=="B") activityCoefficient = 1;
							if(activity=="C") activityCoefficient = 1;
							if(neutured=="yes") neuturedCoefficient = 1;
							if(neutured=="no") neuturedCoefficient = 1.166666667;
							if(catType == "胖成貓") kcal_fat = RER*activityCoefficient*neuturedCoefficient;
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
							if(pregtime == "A") RERCoefficient = 1.6;
							else if(pregtime == "B") RERCoefficient = 1.8;
							else if(pregtime == "C") RERCoefficient = 2;
							RER = 70*(Math.pow(catWeight,0.75));
							kcal = RERCoefficient * RER;
						}
						else if(catType == "泌乳貓"){
							if(kittyAge == "1" || kittyAge == "2"){
								milkyCatCoefficient = 2.3;
								milkyCatPercentage = 0.3;
							}
							if(kittyAge == "3"){
								milkyCatCoefficient = 2.5;
								milkyCatPercentage = 0.45;
							}
							if(kittyAge == "4"){
								milkyCatCoefficient = 3;
								milkyCatPercentage = 0.55;
							}
							if(kittyAge == "5"){
								milkyCatCoefficient = 3.5;
								milkyCatPercentage = 0.65;
							}
							if(kittyAge == "6"){
								milkyCatCoefficient = 4;
								milkyCatPercentage = 0.9;
							}
							RER = 70*(Math.pow(catWeight,0.75));
							kcal = RER*milkyCatCoefficient + milkyCatPercentage*RER*kittyNumber;
						}
						else if(catType == "老貓" || catType == "胖老貓" || catType == "老老貓" || catType == "胖老老貓"){
							if(catBCS==1) fat = 5;
							if(catBCS==2) fat = 10;
							if(catBCS==3) fat = 20;
							if(catBCS==4) fat = 30;
							if(catBCS==5) fat = 40;
							if(catBCS==6) fat = 50;
							if(catBCS==7) fat = 60;
							idealWeight = catWeight*(100-fat)/100/0.8;
							RER = 70*(Math.pow(idealWeight,0.75));
							if(catBCS==1) RERCoefficient = 140;
							if(catBCS==2) RERCoefficient = 120;
							if(catBCS==3) RERCoefficient = 120;
							if(catBCS==4) RERCoefficient = 100;
							if(catBCS==5) RERCoefficient = 100;
							if(catBCS==6) RERCoefficient = 80;
							if(catBCS==7) RERCoefficient = 80;
							if(catage_year==7) ageRERCoefficient = 110;
							if(catage_year==8) ageRERCoefficient = 120;
							if(catage_year==9 || catage_year==10) ageRERCoefficient = 130;
							if(catage_year==11) ageRERCoefficient = 140;
							if(catage_year==12) ageRERCoefficient = 150;
							if(catage_year>=13) ageRERCoefficient = 160;
							if(activity=="A") activityCoefficient = 1.111; //1.222
							if(activity=="B") activityCoefficient = 1;
							if(activity=="C") activityCoefficient = 1;
							if(neutured=="yes") neuturedCoefficient = 1;
							if(neutured=="no") neuturedCoefficient = 1.166666667;
							if(catType == "胖老貓" || catType == "胖老老貓") kcal_fat = RER*activityCoefficient*neuturedCoefficient*ageRERCoefficient/100;
							kcal = RERCoefficient/100*RER*activityCoefficient*neuturedCoefficient*ageRERCoefficient/100;
						}
						con.query(sql_product,function(err,result){
							if(err) throw err;
							else{
								if(catType == "成貓" && !req.session.correctqnlist.select_icon.includes('I')){					
									req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,30,10,5,0);
								}else if(catType == "成貓" && req.session.correctqnlist.select_icon.includes('I')){
									req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,30,10,11.3,0);
								}else if(catType == "胖成貓"){
									req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,20,9,15,6);
								}else if(catType == "幼貓"){
									req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,35,18,20,0);
								}else if(catType == "懷孕貓"){
									req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,35,18,20,0);
								}else if(catType == "泌乳貓"){
									req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,35,18,20,0);
								}else if(catType == "交配貓"){
									req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,25,9,20,0);
								}else if(catType == "老貓" && !req.session.correctqnlist.select_icon.includes('I')){
									req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,22,16,4.5,0);
								}else if(catType == "老貓" && req.session.correctqnlist.select_icon.includes('I')){
									req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,22,16,11.3,0);
								}else if(catType == "老老貓" || catType == "胖老老貓" || catType == "胖老貓"){
									req.session.productdetailinfo = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].productOriginal,result[0].price,result[0].kcal,result[0].MeatLevel_total,result[0].DRY_protein,result[0].DRY_fat,result[0].DRY_carbohydrate,result[0].goodMeat,result[0].potentialAlergent,kcal,result[0].productIngredients,catWeight,result[0].immu,result[0].heart,result[0].hair,result[0].mehair,result[0].joint,result[0].stoma,result[0].urinary,result[0].mouth,result[0].lowalergent,result[0].protein,result[0].fat,result[0].fiber,42,27,16,9,15,4.5);
								}
								for(j=1;j<proteinAll.length+1;j++){
									if(req.session.productdetailinfo.DRY_protein==proteinAll[j-1]){
										req.session.productdetailinfo.proteinLevel = Math.round((j-1)/640*100);
										break;
									}
								}
								for(j=1;j<fatAll.length+1;j++){
									if(req.session.productdetailinfo.DRY_fat==fatAll[j-1]){
										req.session.productdetailinfo.fatLevel = Math.round((j-1)/640*100);
										break;
									}
								}
								for(j=1;j<carbohydrateAll.length+1;j++){
									if(req.session.productdetailinfo.DRY_carbohydrate==carbohydrateAll[j-1]){
										req.session.productdetailinfo.carbohydrateLevel = Math.round((640-j)/640*100);
										break;
									}
								}
								//ready to send data;
								var listJSON = JSON.stringify(req.session.buildTime)+'#'+JSON.stringify(req.session.productdetailinfo)+'#'+JSON.stringify(req.session.correctqnlist);
								res.send(listJSON);
							}
						});
						break;
					}
				}
			}
		}
	});
});

module.exports = router;
