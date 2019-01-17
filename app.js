const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const request = require('request');
const cheerio = require('cheerio');

var indexRouter = require('./routes/index');
var questionnaireRouter = require('./routes/questionnaire');
var accountRouter = require('./routes/account');
var adminRouter = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('catcatmed secret jay paul rax edward'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('static'));

//-----------------------------------------
// SESSION SETTING
//-----------------------------------------
var session = require('express-session');
app.use(session({
	secret: 'catcatmed secret jay paul rax edward',
	resave: true,
	saveUninitialized: true,
	cookie: {maxAge: 6000 * 1000} //100分鐘到期
}));

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

//-----------------------------------------
// ROUTER SETTING
//-----------------------------------------
app.use('/', indexRouter);
//questionnaire
app.use('/questionnaire',questionnaireRouter);
//account related, login, signup ...etc
app.use('/account',accountRouter)
//adminpage
app.use('/admin',adminRouter)

app.get('/questionnaire_result',function(req,res,next){
	/*
	req.session.BCN = '地球貓';
	req.session.BCS = 'girl';
	req.session.BSP = '火星貓';
	req.session.BCA_ageYear = 2;
	req.session.BCA_ageMonth = 4;
	req.session.BCW_kilo = 3;
	req.session.BCW_gram = 0;
	req.session.BBC = 'C';
	req.session.BEF = 'B';
	req.session.BNU = 'yes';
	req.session.select_icon = ['A','B','C'];
	req.session.extra_alergent = ['unsure'];
	req.session.catfood_select = 'A';
	req.session.extra_knowhow = 'A';
	req.session.catfood_select = 's';
	*/
	res.render('questionnaire_result',{name:req.session.BCN});
});
app.get('/questionnaire_result_m',function(req,res,next){
	/*
	req.session.BCN = '地球貓';
	req.session.BCS = 'girl';
	req.session.BSP = '火星貓';
	req.session.BCA_ageYear = 2;
	req.session.BCA_ageMonth = 4;
	req.session.BCW_kilo = 3;
	req.session.BCW_gram = 0;
	req.session.BBC = 'C';
	req.session.BEF = 'B';
	req.session.BNU = 'yes';
	req.session.select_icon = ['A','B','C'];
	req.session.extra_alergent = ['unsure'];
	req.session.catfood_select = 'A';
	req.session.extra_knowhow = 'A';
	req.session.catfood_select = 's';
	*/
	res.render('questionnaire_result_m',{name:req.session.BCN});
});
app.post('/questionnaire_result',function(req,res,next){
	if(req.session.extra_knowhow!=null && req.session.select_icon!=null && req.session.BCA_ageYear!=null && req.session.BCW_kilo!=null && req.session.BBC!=null && req.session.BEF!=null && req.session.BNU!=null && req.session.extra_alergent!=null){ // need to insure that each req.session.xxx in function exist
		// 分析貓咪身體資料
		var catage_year = parseInt(req.session.BCA_ageYear);
		var catage_month = parseInt(req.session.BCA_ageMonth);
		var catWeight = parseInt(req.session.BCW_kilo) + parseInt(req.session.BCW_gram)*0.1;
		var catBCS;
		if(req.session.BBC=='A') catBCS = 1;
		else if(req.session.BBC=='B') catBCS = 2;
		else if(req.session.BBC=='C') catBCS = 3;
		else if(req.session.BBC=='D') catBCS = 4;
		else if(req.session.BBC=='E') catBCS = 5;
		else{}
		var activity = req.session.BEF;
		var neutured = req.session.BNU;
		var preg;
		var pregtime;
		var milkyCat;
		var kittyAge;
		var kittyNumber;
		if(req.session.BPR!=null) preg = req.session.BPR;
		if(req.session.BPT!=null) pregtime = req.session.BPT;
		if(req.session.BFN!=null) milkyCat = req.session.BFN;
		if(req.session.BFA_week!=null) kittyAge = req.session.BFA_week;
		if(req.session.BFA_kittyNum!=null) kittyNumber = parseInt(req.session.BFA_kittyNum);
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
		var catType;
		//----------------------------------------------------------
		// 貓咪狀態分類
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
		// 計算貓咪需要的各項係數
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
		// 準備由伺服器開始抓飼料資料
		var sql = "SELECT * FROM `productDB`";
		var list = [];
		function AddObjToList(productCode,kilogram,A,APrice,ALink,B,BPrice,BLink,C,CPrice,CLink,name_zh,brand_zh,brand_en,original,kcal,MeatLevel_total,DRY_protein,DRY_fat,DRY_carbohydrate,protein,fat,fiber,goodMeat,potentialAlergent,dailyNeedkcal,ingredient,catWeight,immu,heart,hair,mehair,joint,stoma,urinary,mouth,alergent,proteinUpperLimit,proteinLowerLimit,fatUpperLimit,fatLowerLimit,fiberUpperLimit,fiberLowerLimit,score,scorecount){
			var obj = {};
			// 前端可直接使用的Input
			obj.productCode = productCode;
			obj.kilogram = kilogram;
			obj.A = A;
			obj.APrice = APrice;
			obj.ALink = ALink;
			obj.B = B;
			obj.BPrice = BPrice;
			obj.BLink = BLink;
			obj.C = C;
			obj.CPrice = CPrice;
			obj.CLink = CLink;
			obj.name_zh = name_zh;
			obj.brand_zh = brand_zh;
			obj.brand_en = brand_en;
			obj.original = original;
			obj.kcal = kcal;
			obj.MeatLevel_total = MeatLevel_total;
			obj.DRY_protein = DRY_protein;
			obj.DRY_fat = DRY_fat;
			obj.DRY_carbohydrate = DRY_carbohydrate;
			obj.protein = protein;
			obj.fat = fat;
			obj.fiber = fiber;
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
			obj.score = score;
			obj.scorecount = scorecount;
			// 需要先進行計算才能給前端使用的Input
			// 前端篩選用：代謝能、蛋白質、有穀無穀
			obj.Metabolism = null;
			obj.DailyProtein = null;
			obj.Cereals = 0;
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
			obj.price = Math.round(APrice/kilogram);
			return obj;
		}
		function SelectorOfIcon(result){
			if(req.session.select_icon.includes('A') && result.joint==1){
				return true;
			}else{
				if(req.session.select_icon.includes('B') && result.heart==1){
					return true;
				}else{
					if(req.session.select_icon.includes('C') && result.mouth==1){
						return true;
					}else{
						if(req.session.select_icon.includes('D') && result.hair==1){
							return true;
						}else{
							if(req.session.select_icon.includes('E') && result.immu==1){
								return true;
							}else{
								if(req.session.select_icon.includes('F') && result.urinary==1){
									return true;
								}else{
									if(req.session.select_icon.includes('G') && result.urinary==1){
										return true;
									}else{
										if(req.session.select_icon.includes('H') && result.stoma==1){
											return true;
										}else{
											if(req.session.select_icon.includes('I') && result.mehair==1){
												return true;
											}else{
												if(req.session.select_icon.includes('J')) return true;
												else return false;											
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		function SelectorOfAlergent(result){
			alergss = result.productIngredients;
			if(alergss.includes('小麥') && req.session.extra_alergent.includes('A')){
				return false;
			}else if(alergss.includes('玉米') && req.session.extra_alergent.includes('B')){
				return false;
			}else if(alergss.includes('黃豆') && req.session.extra_alergent.includes('C')){
				return false;
			}else if(alergss.includes('蛋') && req.session.extra_alergent.includes('D')){
				return false;
			}else if(alergss.includes('豬') && req.session.extra_alergent.includes('E')){
				return false;
			}else if(alergss.includes('牛') && req.session.extra_alergent.includes('F')){
				return false;
			}else if(alergss.includes('雞') && req.session.extra_alergent.includes('G')){
				return false;
			}else if(alergss.includes('火雞') && req.session.extra_alergent.includes('H')){
				return false;
			}else if(alergss.includes('鴨') && req.session.extra_alergent.includes('I')){
				return false;
			}else if(alergss.includes('羊') && req.session.extra_alergent.includes('J')){
				return false;
			}else if(alergss.includes('魚') && req.session.extra_alergent.includes('K')){
				return false;
			}else if(alergss.includes('鹿') && req.session.extra_alergent.includes('L')){
				return false;
			}else{
				return true;
			}
		}
		function CalIconScore(list){
			for(i=0;i<list.length;i++){
				var score = 0
				if(req.session.select_icon.includes('A') && list[i].joint==1) score += 1;
				if(req.session.select_icon.includes('B') && list[i].heart==1) score += 1;
				if(req.session.select_icon.includes('C') && list[i].mouth==1) score += 1;
				if(req.session.select_icon.includes('D') && list[i].hair==1) score += 1;
				if(req.session.select_icon.includes('E') && list[i].immu==1) score += 1;
				if(req.session.select_icon.includes('F') && list[i].urinary==1) score += 1;
				if(req.session.select_icon.includes('G') && list[i].urinary==1) score += 1;
				if(req.session.select_icon.includes('H') && list[i].stoma==1) score += 1;
				if(req.session.select_icon.includes('I') && list[i].mehair==1) score += 1;
				list[i].iconscore = score;
			}
		}
		// 用來分析所有飼料的排名
		var proteinAllList = [];
		var fatAllList = [];
		var carbohydrateAllList = [];
		// 準備最適合範圍區間
		var proteinUp;
		var proteinDown;
		var fatUp;
		var fatDown;
		var fiberUp;
		var fiberDown;
		con.query(sql,function(err,result){
			if(err) throw err;
			else{			
				for(i in result){			
					proteinAllList.push(result[i].DRY_protein);
					fatAllList.push(result[i].DRY_fat);
					carbohydrateAllList.push(result[i].DRY_carbohydrate);
					if(result[i].kcal!=-1 && SelectorOfIcon(result[i]) && SelectorOfAlergent(result[i])){
						if(catType == "成貓" && !req.session.select_icon.includes('I')){					
							if(result[i].DRY_fat>10&&result[i].DRY_fat<30&&result[i].DRY_fiber<5.7&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=40)
							{
								// 下次要更改，調換以下兩行順序並將AddObjToList中最後六個argv換成這六個var
								if(result[i].productName_ZH.includes('老') || result[i].productName_ZH.includes('幼')) continue;
								list.push(AddObjToList(result[i].productCode,result[i].kilogram,result[i].A,result[i].APrice,result[i].ALink,result[i].B,result[i].BPrice,result[i].BLink,result[i].C,result[i].CPrice,result[i].CLink,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].protein,result[i].fat,result[i].fiber,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,42,27,30,10,5,0,result[i].score,result[i].scorecount));
								proteinUp = 42; proteinDown = 27; fatUp = 30; fatDown = 10; fiberUp = 5; fiberDown = 0;
							}
						}else if(catType == "成貓" && req.session.select_icon.includes('I')){
							if(result[i].DRY_fat>10&&result[i].DRY_fat<30&&result[i].DRY_fiber<=12&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=40)
							{
								if(result[i].productName_ZH.includes('老') || result[i].productName_ZH.includes('幼')) continue;
								list.push(AddObjToList(result[i].productCode,result[i].kilogram,result[i].A,result[i].APrice,result[i].ALink,result[i].B,result[i].BPrice,result[i].BLink,result[i].C,result[i].CPrice,result[i].CLink,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].protein,result[i].fat,result[i].fiber,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,42,27,30,10,11.3,0,result[i].score,result[i].scorecount));
								proteinUp = 42; proteinDown = 27; fatUp = 30; fatDown = 10; fiberUp = 11.3; fiberDown = 0;
							}
						}else if(catType == "胖成貓"){
							if(result[i].DRY_fat>9&&result[i].DRY_fat<20&&result[i].DRY_fiber>6&&result[i].DRY_fiber<15&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=35)
							{
								if(result[i].productName_ZH.includes('老') || result[i].productName_ZH.includes('幼')) continue;
								list.push(AddObjToList(result[i].productCode,result[i].kilogram,result[i].A,result[i].APrice,result[i].ALink,result[i].B,result[i].BPrice,result[i].BLink,result[i].C,result[i].CPrice,result[i].CLink,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].protein,result[i].fat,result[i].fiber,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,42,27,20,9,15,6,result[i].score,result[i].scorecount));
								proteinUp = 42; proteinDown = 27; fatUp = 20; fatDown = 9; fiberUp = 15; fiberDown = 6;
							}
						}else if(catType == "幼貓"){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<35&&result[i].DRY_protein>35&&result[i].DRY_protein<50)
							{
								if(result[i].productName_ZH.includes('幼')){
									list.push(AddObjToList(result[i].productCode,result[i].kilogram,result[i].A,result[i].APrice,result[i].ALink,result[i].B,result[i].BPrice,result[i].BLink,result[i].C,result[i].CPrice,result[i].CLink,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].protein,result[i].fat,result[i].fiber,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,50,35,35,18,35,0,result[i].score,result[i].scorecount));
									proteinUp = 50; proteinDown = 35; fatUp = 35; fatDown = 18; fiberUp = 35; fiberDown = 0;
								}
							}
						}else if(catType == "懷孕貓"){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<35&&result[i].DRY_protein>35&&result[i].DRY_protein<50)
							{
								if(result[i].productName_ZH.includes('老') || result[i].productName_ZH.includes('幼')) continue;
								list.push(AddObjToList(result[i].productCode,result[i].kilogram,result[i].A,result[i].APrice,result[i].ALink,result[i].B,result[i].BPrice,result[i].BLink,result[i].C,result[i].CPrice,result[i].CLink,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].protein,result[i].fat,result[i].fiber,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,50,35,35,18,35,0,result[i].score,result[i].scorecount));
								proteinUp = 50; proteinDown = 35; fatUp = 35; fatDown = 18; fiberUp = 35; fiberDown = 0;
							}
						}else if(catType == "泌乳貓"){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<35&&result[i].DRY_protein>35&&result[i].DRY_protein<50)
							{
								if(result[i].productName_ZH.includes('老') || result[i].productName_ZH.includes('幼')) continue;
								list.push(AddObjToList(result[i].productCode,result[i].kilogram,result[i].A,result[i].APrice,result[i].ALink,result[i].B,result[i].BPrice,result[i].BLink,result[i].C,result[i].CPrice,result[i].CLink,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].protein,result[i].fat,result[i].fiber,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,50,35,35,18,35,0,result[i].score,result[i].scorecount));
								proteinUp = 50; proteinDown = 35; fatUp = 35; fatDown = 18; fiberUp = 35; fiberDown = 0;
							}
						}else if(catType == "交配貓"){
							if(result[i].DRY_fat>10&&result[i].DRY_fat<30&&result[i].DRY_protein>30&&result[i].DRY_protein<45)
							{
								if(result[i].productName_ZH.includes('老') || result[i].productName_ZH.includes('幼')) continue;
								list.push(AddObjToList(result[i].productCode,result[i].kilogram,result[i].A,result[i].APrice,result[i].ALink,result[i].B,result[i].BPrice,result[i].BLink,result[i].C,result[i].CPrice,result[i].CLink,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].protein,result[i].fat,result[i].fiber,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,42,27,25,9,35,0,result[i].score,result[i].scorecount));
								proteinUp = 42; proteinDown = 27; fatUp = 25; fatDown = 9; fiberUp = 35; fiberDown = 0;
							}
						}else if(catType == "老貓" && !req.session.select_icon.includes('I')){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<25&&result[i].DRY_fiber<=5&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=35)
							{
								if(result[i].productName_ZH.includes('幼')) continue;
								list.push(AddObjToList(result[i].productCode,result[i].kilogram,result[i].A,result[i].APrice,result[i].ALink,result[i].B,result[i].BPrice,result[i].BLink,result[i].C,result[i].CPrice,result[i].CLink,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].protein,result[i].fat,result[i].fiber,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,42,27,22,16,4.5,0,result[i].score,result[i].scorecount));
								proteinUp = 42; proteinDown = 27; fatUp = 22; fatDown = 16; fiberUp = 4.5; fiberDown = 0;
							}
						}else if(catType == "老貓" && req.session.select_icon.includes('I')){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<25&&result[i].DRY_fiber<=12&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=35)
							{
								if(result[i].productName_ZH.includes('幼')) continue;
								list.push(AddObjToList(result[i].productCode,result[i].kilogram,result[i].A,result[i].APrice,result[i].ALink,result[i].B,result[i].BPrice,result[i].BLink,result[i].C,result[i].CPrice,result[i].CLink,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].protein,result[i].fat,result[i].fiber,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,42,27,22,16,11.3,0,result[i].score,result[i].scorecount));
								proteinUp = 42; proteinDown = 27; fatUp = 22; fatDown = 16; fiberUp = 11.3; fiberDown = 0;
							}
						}else if(catType == "老老貓" || catType == "胖老老貓" || catType == "胖老貓"){
							if(result[i].DRY_fat>10&&result[i].DRY_fat<18&&result[i].DRY_fiber>5&&result[i].DRY_fiber<15&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=35)
							{
								if(result[i].productName_ZH.includes('幼')) continue;
								list.push(AddObjToList(result[i].productCode,result[i].kilogram,result[i].A,result[i].APrice,result[i].ALink,result[i].B,result[i].BPrice,result[i].BLink,result[i].C,result[i].CPrice,result[i].CLink,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].protein,result[i].fat,result[i].fiber,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,42,27,16,9,15,4.5,result[i].score,result[i].scorecount));
								proteinUp = 42; proteinDown = 27; fatUp = 16; fatDown = 9; fiberUp = 15; fiberDown = 4.5;
							}
						}
					}			
				}
			}
			proteinAllList = proteinAllList.sort(function(a,b){
				return a - b;
			});
			fatAllList = fatAllList.sort(function(a,b){
				return a - b;
			});
			carbohydrateAllList = carbohydrateAllList.sort(function(a,b){
				return a - b;
			});
			// 計算各項飼料的蛋白質、脂質、纖維素排名並存入list.obj之中
			function fillInAverageLevel(list,proteinAllList,fatAllList,carbohydrateAllList){
				for(i=0;i<list.length;i++){
					//SET RANK OF PERCENTAGE
					for(j=1;j<proteinAllList.length+1;j++){
						if(list[i].DRY_protein==proteinAllList[j-1]){
							list[i].proteinLevel = Math.round((j-1)/640*100);
							break;
						}
					}
					for(j=1;j<fatAllList.length+1;j++){
						if(list[i].DRY_fat==fatAllList[j-1]){
							list[i].fatLevel = Math.round((j-1)/640*100);
							break;
						}
					}
					for(j=1;j<carbohydrateAllList.length+1;j++){
						if(list[i].DRY_carbohydrate==carbohydrateAllList[j-1]){
							list[i].carbohydrateLevel = Math.round((640-j)/640*100);
							break;
						}
					}
				}
			}
			fillInAverageLevel(list,proteinAllList,fatAllList,carbohydrateAllList);
			//---------------------------------------
			// 將總List依照包裝大小分進五個對應的List之中
			//---------------------------------------
			function SliceToList(list,num){
				var returnlist = [];
				for(i=0;i<list.length;i++){
					tag = list[i].productCode.split('-');
					if(tag[1]==num){
						returnlist.push(list[i]);
					}
				}
				return returnlist;
			}
			var listA = SliceToList(list,1);
			var listB = SliceToList(list,2);
			var listC = SliceToList(list,3);
			var listD = SliceToList(list,4);
			var listE = SliceToList(list,5);
			list = null;
			//---------------------------------------
			// 進階篩選器-尚未開放
			//---------------------------------------
			// 蛋白質篩選函示
			function DailyProteinSelector(list,catType,kcal,catWeight){
				var newList = [];
				for(i=0;i<list.length;i++){
					var x  = kcal/list[i].kcal*10*list[i].protein;
					if(catType == "成貓"){
						if(5.5*catWeight<x && 11.5*catWeight>x){
							list[i].DailyProtein = 1;
							newList.push(list[i]);
						}
						else{
							list[i].DailyProtein = 0;
							newList.push(list[i]);
						}
					}else if(catType == "老貓"){
						if(6*catWeight<x && 8.5*catWeight>x){
							list[i].DailyProtein = 1;
							newList.push(list[i]);
						}else{
							list[i].DailyProtein = 0;
							newList.push(list[i]);
						}
					}else{
						list[i].DailyProtein = 1;
						newList.push(list[i]);
					}
				}
				return newList;
			}
			listA = DailyProteinSelector(listA,catType,kcal,catWeight);
			listB = DailyProteinSelector(listB,catType,kcal,catWeight);
			listC = DailyProteinSelector(listC,catType,kcal,catWeight);
			listD = DailyProteinSelector(listD,catType,kcal,catWeight);
			listE = DailyProteinSelector(listE,catType,kcal,catWeight);
			// 代謝能篩選函式
			function MetabolismSelectorTypeA(list,catType,kcal){
				var newList = [];
				for(i=0;i<list.length;i++){
					var x = kcal/list[i].kcal*10*list[i].DRY_protein;
					if(catType == "成貓"){
						if(3.5*x/kcal >= 0.4)
							newList.push(list[i])
					}else{
						newList.push(list[i]);
					}
				}
				return newList;
			}
			function MetabolismSelectorTypeB(list,catType,kcal){
				var newList = [];
				for(i=0;i<list.length;i++){
					var x_protein = kcal/list[i].kcal*10*list[i].DRY_protein;
					var x_fat = kcal/list[i].kcal*10*list[i].DRY_fat;
					var x_carbohydrate = kcal/list[i].kcal*10*list[i].DRY_carbohydrate;
					var x = (x_protein*3.5+x_fat*8.5+x_carbohydrate*3.5)/(kcal/list[i].kcal*1000);
					if(catType == "成貓" || catType == "交配貓" || catType == "懷孕貓" || catType == "泌乳貓"){
						if(x>4 && x<5){
							list[i].Metabolism = 1;
							newList.push(list[i]);
						}else{
							list[i].Metabolism = 0;
							newList.push(list[i]);
						}
					}else if(catType == "胖成貓"){
						if(x>3.3 && x<3.8){
							list[i].Metabolism = 1;
							newList.push(list[i]);
						}else{
							list[i].Metabolism = 0;
							newList.push(list[i]);
						}
					}else if(catType == "老貓" || catType == "老老貓"){
						if(x>4 && x<4.5){
							list[i].Metabolism = 1;
							newList.push(list[i]);
						}else{
							list[i].Metabolism = 0;
							newList.push(list[i]);
						}
					}else if(catType == "胖老貓" || catType == "胖老老貓"){
						if(x>3.5 && x<4){
							list[i].Metabolism = 1;
							newList.push(list[i]);
						}else{
							list[i].Metabolism = 0;
							newList.push(list[i]);
						}
					}else{
						list[i].Metabolism = 1;
						newList.push(list[i]);
					}
				}
				return newList;
			}
			listA = MetabolismSelectorTypeB(listA,catType,kcal);
			listB = MetabolismSelectorTypeB(listB,catType,kcal);
			listC = MetabolismSelectorTypeB(listC,catType,kcal);
			listD = MetabolismSelectorTypeB(listD,catType,kcal);
			listE = MetabolismSelectorTypeB(listE,catType,kcal);
			// 判斷成分是否含有穀類
			function CerealsRemover(list){
				var newList = [];
				for(i=0;i<list.length;i++){
					if(list[i].ingredient.includes('玉米')) {list[i].Cereals = 1;}
					if(list[i].ingredient.includes('小麥')) {list[i].Cereals = 1;}
					if(list[i].ingredient.includes('米')) {list[i].Cereals = 1;}
					if(list[i].ingredient.includes('糙米')) {list[i].Cereals = 1;}
					if(list[i].ingredient.includes('燕麥')) {list[i].Cereals = 1;}
					if(list[i].ingredient.includes('黑麥')) {list[i].Cereals = 1;}
					if(list[i].ingredient.includes('大麥')) {list[i].Cereals = 1;}
					if(list[i].ingredient.includes('米糠')) {list[i].Cereals = 1;}
					if(list[i].ingredient.includes('釀造米')) {list[i].Cereals = 1;}
					if(list[i].ingredient.includes('高粱')) {list[i].Cereals = 1;}
					if(list[i].ingredient.includes('薏仁')) {list[i].Cereals = 1;}
					if(list[i].ingredient.includes('大豆')) {list[i].Cereals = 1;}
					if(list[i].ingredient.includes('黃豆')) {list[i].Cereals = 1;}
					if(list[i].name_zh.includes('無穀')) {list[i].Cereals = 0;}
					newList.push(list[i])
				}
				return newList;
			}
			listA = CerealsRemover(listA);
			listB = CerealsRemover(listB);
			listC = CerealsRemover(listC);
			listD = CerealsRemover(listD);
			listE = CerealsRemover(listE);
			//---------------------------------------
			// 篩選後排序
			//---------------------------------------
			CalIconScore(listA);
			CalIconScore(listB);
			CalIconScore(listC);
			CalIconScore(listD);
			CalIconScore(listE);
			// 依照肉等級進行排序
			listA = listA.sort(function(a,b){
				return a.MeatLevel_total > b.MeatLevel_total ? -1 : 1; 
			});
			listB = listB.sort(function(a,b){
				return a.MeatLevel_total > b.MeatLevel_total ? -1 : 1; 
			});
			listC = listC.sort(function(a,b){
				return a.MeatLevel_total > b.MeatLevel_total ? -1 : 1; 
			});
			listD = listD.sort(function(a,b){
				return a.MeatLevel_total > b.MeatLevel_total ? -1 : 1; 
			});
			listE = listE.sort(function(a,b){
				return a.MeatLevel_total > b.MeatLevel_total ? -1 : 1; 
			});
			// 將符合最多使用者所選icon的資料排名提升
			listA = listA.sort(function(a,b){
				return a.iconscore > b.iconscore ? -1 : 1; 
			});
			listB = listB.sort(function(a,b){
				return a.iconscore > b.iconscore ? -1 : 1; 
			});
			listC = listC.sort(function(a,b){
				return a.iconscore > b.iconscore ? -1 : 1; 
			});
			listD = listD.sort(function(a,b){
				return a.iconscore > b.iconscore ? -1 : 1; 
			});
			listE = listE.sort(function(a,b){
				return a.iconscore > b.iconscore ? -1 : 1; 
			});
			//---------------------------------------
			// 將整理好的資料寄送到 front-end
			//---------------------------------------
			
			// 最後送出資訊 (p.s. req.session.catfood_select指的是包裝大小，價格等到匯入前端之後再分開)
			var listAllDataJSON = '';
			listAllDataJSON += JSON.stringify(req.session.catfood_select) + '#' + JSON.stringify(listA) + '#' + JSON.stringify(listB) + '#' + JSON.stringify(listC) + '#' + JSON.stringify(listD) + '#' + JSON.stringify(listE) + "#" + JSON.stringify(req.session.select_icon)+'#'+proteinUp+'#'+proteinDown+'#'+fatUp+'#'+fatDown+'#'+fiberUp+'#'+fiberDown;
			res.send(listAllDataJSON);
		});
	}else{
		// 將使用者的session記錄檔清掉，釋放空間
		req.session.qnrecord = null;
		req.session.qnrecordList = null;
		req.session.BKN_name = null;
		req.session.BKN_age = null;
		req.session.BKN_sex = null;
		req.session.BCN = null;
		req.session.BCS = null;
		req.session.BCA_ageYear = null;
		req.session.BCA_ageMonth = null;
		req.session.BSP = null;
		req.session.BNU = null;
		req.session.BPR = null;
		req.session.BPT = null;
		req.session.BFN = null;
		req.session.BFA_kittyNum = null;
		req.session.BFA_week = null;
		req.session.BCW_kilo = null;
		req.session.BCW_gram = null;
		req.session.BEF = null;
		req.session.BSI = null;
		req.session.BBC = null;
		req.session.catfood_select = null;
		req.session.BEMAIL = null;
		req.session.weight_control = null;
		req.session.select_icon = null;
		req.session.joint_now = null;
		req.session.joint_med = null;
		req.session.joint_below = null;
		req.session.joint_jump = null;
		req.session.joint_daily = null;
		req.session.heart_now = null;
		req.session.heart_behave = null;
		req.session.heart_avgtemp = null;
		req.session.mouth_now = null;
		req.session.mouth_behave = null;
		req.session.mouth_brush = null;
		req.session.fur_freq = null;
		req.session.fur_behave = null;
		req.session.fur_tie = null;
		req.session.immu_now = null;
		req.session.immu_behave = null;
		req.session.immu_behave_before = null;
		req.session.immu_spirit = null;
		req.session.immu_med = null;
		req.session.kidney_now = null;
		req.session.kidney_urine = null;
		req.session.kidney_health = null;
		req.session.urinary_now = null;
		req.session.urinary_behave = null;
		req.session.urinary_together = null;
		req.session.urinary_water = null;
		req.session.stoma_problem = null;
		req.session.stoma_bathroom = null;
		req.session.stoma_strange = null;
		req.session.melt_freq = null;
		req.session.stress_now = null;
		req.session.stress_enviornment = null;
		req.session.stress_enviornment_out = null;
		req.session.stress_lifestyle = null;
		req.session.extra_eatinghabit = null;
		req.session.extra_eatingfreq = null;
		req.session.extra_weekcan = null;
		req.session.extra_freshflesh = null;
		req.session.extra_minifish = null;
		req.session.extra_killbugs = null;
		req.session.extra_vacci = null;
		req.session.extra_alergent = null;
		req.session.extra_drinking = null;
		req.session.extra_cooking = null;
		req.session.extra_strangehabit = null;
		req.session.extra_place = null;
		req.session.extra_knowhow = null;
		res.send('/questionnaire');
	}	
});
app.post('/askInformation',function(req,res,next){
	var list = '';
	if(req.session.extra_knowhow!=null && req.session.select_icon!=null && req.session.BCA_ageYear!=null && req.session.BCW_kilo!=null && req.session.BBC!=null && req.session.BEF!=null && req.session.BNU!=null && req.session.extra_alergent!=null){ // need to insure that each req.session.xxx in function exist
		// Integrate ICON RISK and INFORMATION first.
		icon_information = '';
		icon_information_list = [];
		if(req.session.select_icon.includes('A')){	// joint
			if(req.session.joint_now=='yes'){
				icon_information = 'joint#關節#high#曾經有關節病史，需要高度的關注與額外保健<br>建議您定期和獸醫師追蹤病情，以確保貓咪的健康！';
			}else if(req.session.joint_below.length>=2){
				icon_information = 'joint#關節#high#非常有可能有關節部分的問題，建議您可以抽空諮詢一下獸醫師的意見！';
				if(req.session.joint_below.includes('A')) icon_information += '<br>-活動力下降';
				if(req.session.joint_below.includes('B')) icon_information += '<br>-跳躍力變差';
				if(req.session.joint_below.includes('C')) icon_information += '<br>-毛髮糾結情形嚴重';
				if(req.session.joint_below.includes('D')) icon_information += '<br>-碰到特定部位變得暴躁';
				if(req.session.joint_below.includes('E')) icon_information += '<br>-曾經創傷過';
				if(req.session.joint_below.includes('F')) icon_information += '<br>-時常維持同一姿勢';
			}else if(req.session.joint_below!='unsure'){
				icon_information = 'joint#關節#mid#有可能有關節部分的問題，建議您多留意一下您的貓咪，持續追蹤貓咪狀況';
				if(req.session.joint_below.includes('A')) icon_information += '<br>-活動力下降';
				if(req.session.joint_below.includes('B')) icon_information += '<br>-跳躍力變差';
				if(req.session.joint_below.includes('C')) icon_information += '<br>-毛髮糾結情形嚴重';
				if(req.session.joint_below.includes('D')) icon_information += '<br>-碰到特定部位變得暴躁';
				if(req.session.joint_below.includes('E')) icon_information += '<br>-曾經創傷過';
				if(req.session.joint_below.includes('F')) icon_information += '<br>-時常維持同一姿勢';
			}else{
				icon_information = 'joint#關節#low#目前關節健康狀態良好<br>請繼續保持';
			}
			if(icon_information!=''){
				icon_information_list.push(icon_information);
				icon_information = '';
			}
		}
		if(req.session.select_icon.includes('B')){	// heart
			if(req.session.heart_now=='yes'){
				icon_information = 'heart#心臟#high#曾經有心臟病史，需要高度的關注與額外保健<br>建議您定期和獸醫師追蹤病情，以確保貓咪的健康！';
			}else if(req.session.heart_behave.length>=2){
				icon_information = 'heart#心臟#high#非常有可能有心臟部分的問題，建議您可以抽空諮詢一下獸醫師的意見！';
				if(req.session.heart_behave.includes('A')) icon_information += '<br>-走路易喘';
				if(req.session.heart_behave.includes('B')) icon_information += '<br>-興奮後咳嗽';
				if(req.session.heart_behave.includes('C')) icon_information += '<br>-行走易軟腳';
				if(req.session.heart_behave.includes('D')) icon_information += '<br>-運動後喘氣恢復較久';
				if(req.session.heart_behave.includes('E')) icon_information += '<br>-舌頭或腳掌發紫';
			}else if(req.session.heart_behave!='unsure'){
				icon_information = 'heart#心臟#mid#有可能有心臟部分的問題，建議您多留意一下您的貓咪，持續追蹤貓咪狀況';
				if(req.session.heart_behave.includes('A')) icon_information += '<br>-走路易喘';
				if(req.session.heart_behave.includes('B')) icon_information += '<br>-興奮後咳嗽';
				if(req.session.heart_behave.includes('C')) icon_information += '<br>-行走易軟腳';
				if(req.session.heart_behave.includes('D')) icon_information += '<br>-運動後喘氣恢復較久';
				if(req.session.heart_behave.includes('E')) icon_information += '<br>-舌頭或腳掌發紫';
			}else{
				icon_information = 'heart#心臟#low#目前心臟健康狀態良好<br>請繼續保持';
			}
			if(icon_information!=''){
				icon_information_list.push(icon_information);
				icon_information = '';
			}
		}
		if(req.session.select_icon.includes('C')){	// mouth
			if(req.session.mouth_now=='yes'){
				icon_information = 'mouth#口腔#high#曾經有口腔疾病，需要高度的關注與額外保健<br>建議您定期和獸醫師追蹤病情，以確保貓咪的健康！';
			}else if(!req.session.mouth_behave.length>=2){
				icon_information = 'mouth#口腔#high#非常有可能有口腔部分的問題，建議您可以抽空諮詢一下獸醫師的意見！';
				if(req.session.mouth_behave.includes('A')) icon_information += '<br>-過度流口水';
				if(req.session.mouth_behave.includes('B')) icon_information += '<br>-口臭';
				if(req.session.mouth_behave.includes('C')) icon_information += '<br>-有棕黃色牙垢';
				if(req.session.mouth_behave.includes('D')) icon_information += '<br>-嘴巴旁邊有深褐色分泌物';
				if(req.session.mouth_behave.includes('E')) icon_information += '<br>-在食物或是水盆的旁邊駐足';
				if(req.session.mouth_behave.includes('F')) icon_information += '<br>-甩頭，經常用前腳拍打嘴巴';
			}else if(req.session.mouth_behave!='unsure'){
				icon_information = 'mouth#口腔#mid#有可能有口腔部分的問題，建議您多留意一下您的貓咪，持續追蹤貓咪狀況';
				if(req.session.mouth_behave.includes('A')) icon_information += '<br>-過度流口水';
				if(req.session.mouth_behave.includes('B')) icon_information += '<br>-口臭';
				if(req.session.mouth_behave.includes('C')) icon_information += '<br>-有棕黃色牙垢';
				if(req.session.mouth_behave.includes('D')) icon_information += '<br>-嘴巴旁邊有深褐色分泌物';
				if(req.session.mouth_behave.includes('E')) icon_information += '<br>-在食物或是水盆的旁邊駐足';
				if(req.session.mouth_behave.includes('F')) icon_information += '<br>-甩頭，經常用前腳拍打嘴巴';
			}else{
				icon_information = 'mouth#口腔#low#目前口腔健康狀態良好<br>請繼續保持';
			}
			if(icon_information!=''){
				icon_information_list.push(icon_information);
				icon_information = '';
			}
		}
		if(req.session.select_icon.includes('D')){	// hair
			if(req.session.fur_behave.length>=2){
				icon_information = 'hair#毛髮#high#非常有可能有毛髮部分的問題，建議您可以抽空諮詢一下獸醫師的意見！';
				if(req.session.fur_behave.includes('A')) icon_information += '<br>-毛髮中有腫塊';
				if(req.session.fur_behave.includes('B')) icon_information += '<br>-梳毛後掉毛仍過多';
				if(req.session.fur_behave.includes('C')) icon_information += '<br>-身體局部脫毛';
				if(req.session.fur_behave.includes('D')) icon_information += '<br>-毛髮特別暗沉、無光澤';
				if(req.session.fur_behave.includes('E')) icon_information += '<br>-毛髮打結';
				if(req.session.fur_behave.includes('F')) icon_information += '<br>-有貓粉刺出現';
			}else if(req.session.fur_behave!='unsure'){
				icon_information = 'hair#毛髮#mid#有可能有毛髮部分的問題，建議您多留意一下您的貓咪，持續追蹤貓咪狀況';
				if(req.session.fur_behave.includes('A')) icon_information += '<br>-毛髮中有腫塊';
				if(req.session.fur_behave.includes('B')) icon_information += '<br>-梳毛後掉毛仍過多';
				if(req.session.fur_behave.includes('C')) icon_information += '<br>-身體局部脫毛';
				if(req.session.fur_behave.includes('D')) icon_information += '<br>-毛髮特別暗沉、無光澤';
				if(req.session.fur_behave.includes('E')) icon_information += '<br>-毛髮打結';
				if(req.session.fur_behave.includes('F')) icon_information += '<br>-有貓粉刺出現';
			}else{
				icon_information = 'hair#毛髮#low#目前毛髮健康狀態良好<br>請繼續保持';
			}
			if(icon_information!=''){
				icon_information_list.push(icon_information);
				icon_information = '';
			}
		}
		if(req.session.select_icon.includes('E')){	// immu
			if(req.session.immu_now=='yes'){
				icon_information = 'immu#免疫#high#曾經有生病過，需要高度的關注與額外保健<br>建議您定期和獸醫師追蹤病情，以確保貓咪的健康！';
			}else if(req.session.immu_behave.length>=2){
				icon_information = 'immu#免疫#high#非常有可能有免疫部分的問題，建議您可以抽空諮詢一下獸醫師的意見！';
				if(req.session.immu_behave.includes('A')) icon_information += '<br>-過多的眼淚和眼屎';
				if(req.session.immu_behave.includes('B')) icon_information += '<br>-明顯有鼻水分泌物';
				if(req.session.immu_behave.includes('C')) icon_information += '<br>-噴嚏以及咳嗽';
				if(req.session.immu_behave.includes('D')) icon_information += '<br>-呼吸困難';
			}else if(req.session.immu_behave!='unsure'){
				icon_information = 'immu#免疫#mid#有可能有免疫部分的問題，建議您多留意一下您的貓咪，持續追蹤貓咪狀況';
				if(req.session.immu_behave.includes('A')) icon_information += '<br>-過多的眼淚和眼屎';
				if(req.session.immu_behave.includes('B')) icon_information += '<br>-明顯有鼻水分泌物';
				if(req.session.immu_behave.includes('C')) icon_information += '<br>-噴嚏以及咳嗽';
				if(req.session.immu_behave.includes('D')) icon_information += '<br>-呼吸困難';
			}else{
				icon_information = 'immu#免疫#low#目前健康狀態良好<br>請繼續保持';
			}
			if(icon_information!=''){
				icon_information_list.push(icon_information);
				icon_information = '';
			}
		}
		if(req.session.select_icon.includes('F')){	// kidney
			if(req.session.kidney_now=='yes'){
				icon_information = 'kidney#腎臟#high#曾經有腎臟病史，需要高度的關注與額外保健<br>建議您定期和獸醫師追蹤病情，以確保貓咪的健康！';
			}else{
				icon_information = 'kidney#腎臟#mid#目前健康狀態良好<br>請繼續保持';
			}
			if(icon_information!=''){
				icon_information_list.push(icon_information);
				icon_information = '';
			}
		}
		if(req.session.select_icon.includes('G')){	// urinary
			if(req.session.urinary_now=='yes'){
				icon_information = 'urinary#泌尿#high#曾經有泌尿病史，需要高度的關注與額外保健<br>建議您定期和獸醫師追蹤病情，以確保貓咪的健康！';
			}else if(req.session.urinary_behave.length>=2){
				icon_information = 'urinary#泌尿#high#非常有可能有泌尿部分的問題，建議您可以抽空諮詢一下獸醫師的意見！';
				if(req.session.urinary_behave.includes('A')) icon_information += '<br>-高頻率舔生殖器';
				if(req.session.urinary_behave.includes('B')) icon_information += '<br>-廁所蹲很久但是沒有排泄';
				if(req.session.urinary_behave.includes('C')) icon_information += '<br>-突然開始亂尿尿';
				if(req.session.urinary_behave.includes('D')) icon_information += '<br>-血尿';
				if(req.session.urinary_behave.includes('E')) icon_information += '<br>-尿量很少';
				if(req.session.urinary_behave.includes('F')) icon_information += '<br>-嘴巴有很濃的尿味';
			}else if(req.session.urinary_behave!='unsure'){
				icon_information = 'urinary#泌尿#mid#有可能有泌尿部分的問題，建議您多留意一下您的貓咪，持續追蹤貓咪狀況';
				if(req.session.urinary_behave.includes('A')) icon_information += '<br>-高頻率舔生殖器';
				if(req.session.urinary_behave.includes('B')) icon_information += '<br>-廁所蹲很久但是沒有排泄';
				if(req.session.urinary_behave.includes('C')) icon_information += '<br>-突然開始亂尿尿';
				if(req.session.urinary_behave.includes('D')) icon_information += '<br>-血尿';
				if(req.session.urinary_behave.includes('E')) icon_information += '<br>-尿量很少';
				if(req.session.urinary_behave.includes('F')) icon_information += '<br>-嘴巴有很濃的尿味';
			}else{
				icon_information = 'urinary#泌尿#low#目前健康狀態良好<br>請繼續保持';
			}
			if(icon_information!=''){
				icon_information_list.push(icon_information);
				icon_information = '';
			}
		}
		if(req.session.select_icon.includes('H')){	// stoma
			if(req.session.stoma_problem.length>=2){
				icon_information = 'stoma#腸胃#high#非常有可能有腸胃部分的問題，建議您可以抽空諮詢一下獸醫師的意見！';
				if(req.session.stoma_problem.includes('A')) icon_information += '<br>-便祕';
				if(req.session.stoma_problem.includes('B')) icon_information += '<br>-拉肚子';
				if(req.session.stoma_problem.includes('C')) icon_information += '<br>-嘔吐';
				if(req.session.stoma_problem.includes('E')) icon_information += '<br>-異食癖';
			}else if(req.session.stoma_problem!='unsure'){
				icon_information = 'stoma#腸胃#mid#有可能有腸胃部分的問題，建議您多留意一下您的貓咪，持續追蹤貓咪狀況';
				if(req.session.stoma_problem.includes('A')) icon_information += '<br>-便祕';
				if(req.session.stoma_problem.includes('B')) icon_information += '<br>-拉肚子';
				if(req.session.stoma_problem.includes('C')) icon_information += '<br>-嘔吐';
				if(req.session.stoma_problem.includes('E')) icon_information += '<br>-異食癖';
			}else{
				icon_information = 'stoma#腸胃#low#目前腸胃健康狀態良好<br>請繼續保持';
			}
			if(icon_information!=''){
				icon_information_list.push(icon_information);
				icon_information = '';
			}
		}
		if(req.session.select_icon.includes('I')){	// mehair
			icon_information = 'mehair#化毛#low#化毛是貓咪很重要的問題，已經將化毛功能列入您貓咪的飲食菜單中了！';
			icon_information_list.push(icon_information);
			icon_information = '';
		}
		if(req.session.select_icon.includes('J')){	// stress
			if(req.session.stress_now.length>=2){
				icon_information = 'stress#壓力#high#非常有可能有壓力問題，建議您可以抽空諮詢一下獸醫師的意見！';
				if(req.session.stress_now.includes('A')) icon_information += '<br>-來回踱步';
				if(req.session.stress_now.includes('B')) icon_information += '<br>-四處躲藏';
				if(req.session.stress_now.includes('C')) icon_information += '<br>-食慾下降';
				if(req.session.stress_now.includes('D')) icon_information += '<br>-隨地便溺';
				if(req.session.stress_now.includes('E')) icon_information += '<br>-過度理毛';
				if(req.session.stress_now.includes('F')) icon_information += '<br>-攻擊其他貓或是人';
				if(req.session.stress_now.includes('G')) icon_information += '<br>-四肢末端受傷';
			}else if(req.session.stress_now!='unsure'){
				icon_information = 'stress#壓力#mid#有可能有壓力問題，建議您多留意一下您的貓咪，持續追蹤貓咪狀況';
				if(req.session.stress_now.includes('A')) icon_information += '<br>-來回踱步';
				if(req.session.stress_now.includes('B')) icon_information += '<br>-四處躲藏';
				if(req.session.stress_now.includes('C')) icon_information += '<br>-食慾下降';
				if(req.session.stress_now.includes('D')) icon_information += '<br>-隨地便溺';
				if(req.session.stress_now.includes('E')) icon_information += '<br>-過度理毛';
				if(req.session.stress_now.includes('F')) icon_information += '<br>-攻擊其他貓或是人';
				if(req.session.stress_now.includes('G')) icon_information += '<br>-四肢末端受傷';
			}else{
				icon_information = 'stress#壓力#low#目前壓力控管狀態良好<br>請繼續保持';
			}
			if(icon_information!=''){
				icon_information_list.push(icon_information);
				icon_information = '';
			}
		}
		list = JSON.stringify(req.session.BCS)+'@'+JSON.stringify(req.session.BCA_ageYear)+'@'+JSON.stringify(req.session.BCA_ageMonth)+'@'+JSON.stringify(req.session.BCW_kilo)+'@'+JSON.stringify(req.session.BCW_gram)+'@'+JSON.stringify(req.session.BSP)+'@'+JSON.stringify(req.session.BNU)+'@'+JSON.stringify(req.session.BBC)+'@'+JSON.stringify(icon_information_list);
		res.send(list);
	}else{
		res.send('error');
	}
});

// Record Product Link
app.post('/recordLinkToDB',function(req,res,next){
	if(req.session.recordlink==null){
		req.session.recordlink = [];
		req.session.recordlink.push(req.body.link);
		var value = '#' + req.body.link;
		var sql = 'UPDATE `useraccount` SET possiblePurchaseCatFood = "'+value+'" WHERE username = "'+req.session.username+'"';
		con.query(sql,function(err,result){
			if(err) throw err;
			console.log('update "'+value+'" success.');
		});
	}else{
		if(req.session.recordlink.includes(req.body.link)){
			// do nothing
		}else{
			// add and save
			req.session.recordlink.push(req.body.link);
			var value = '';
			for(i=0;i<req.session.recordlink.length;i++){
				value += '#' + req.session.recordlink[i];
			}
			var sql = 'UPDATE `useraccount` SET possiblePurchaseCatFood = "'+value+'" WHERE username = "'+req.session.username+'"';
			con.query(sql,function(err,result){
				if(err) throw err;
				console.log('update "'+value+'" success.');
			});
		}
	}
	res.send('success');
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