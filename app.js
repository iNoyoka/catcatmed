const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//7-11
const request = require('request');
const cheerio = require('cheerio');

var indexRouter = require('./routes/index');
var questionnaireRouter = require('./routes/questionnaire');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('catcatmed secret jay paul rax edward'));
app.use(express.static(path.join(__dirname, 'public')));

//------------------------------------------
// Additional adding
//------------------------------------------
//session setting
var session = require('express-session');
app.use(session({
	secret: 'catcatmed secret jay paul rax edward',
	resave: true,
	saveUninitialized: true,
	cookie: {maxAge: 6000 * 1000} //100分鐘到期
}));

//connect to database
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
//--------------------------------
// GLOBAL SETTING COMPLETE
//--------------------------------
app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/questionnaire',questionnaireRouter);

app.get('/index_mobile',function(req,res,next){
	res.render('index_mobile', { username: req.session.name});
});

app.get('/questionnaire_result',function(req,res,next){
	//release qnrecord
	req.session.qnrecord = null;
	req.session.qnrecordList = null;
	res.render('questionnaire_result',{name:req.session.BCN});
});
app.post('/questionnaire_result',function(req,res,next){
	if(req.session.extra_knowhow!=null && req.session.select_icon!=null && req.session.BCA_ageYear!=null && req.session.BCW_kilo!=null && req.session.BBC!=null && req.session.BEF!=null && req.session.BNU!=null && req.session.extra_alergent!=null){ // need to insure that each req.session.xxx in function exist
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
		/*
		console.log('cattype:'+catType);
		console.log('kcal:'+kcal);
		console.log('BCS'+catBCS);
		console.log('idealWeight:'+idealWeight);
		console.log('catWeight:'+catWeight);
		console.log('RER:'+RER);
		console.log('RERCoefficient:'+RERCoefficient);
		*/
		//find data
		var sql = "SELECT * FROM `productDB`";
		var list = [];
		function AddObjToList(i,productCode,name_zh,brand_zh,brand_en,original,price,kcal,MeatLevel_total,DRY_protein,DRY_fat,DRY_carbohydrate,goodMeat,potentialAlergent,dailyNeedkcal,ingredient,catWeight,immu,heart,hair,mehair,joint,stoma,urinary,mouth,alergent,protein,fat,fiber,proteinUpperLimit,proteinLowerLimit,fatUpperLimit,fatLowerLimit,fiberUpperLimit,fiberLowerLimit){
			var obj = {};
			obj.index = i;
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
		function SliceListToFivePricePart_sorted(originalList,lowerLimit,upperLimit){
			var newList = [];
			for(i=0;i<originalList.length;i++){
				if(originalList[i].price<=upperLimit && originalList[i].price>lowerLimit)
					newList.push(originalList[i]);
			}
			newList = newList.sort(function(a,b){
				return a.price > b.price ? -1 : 1;
			});
			return newList;
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
		//資料分析
		var proteinAllList = [];
		var fatAllList = [];
		var carbohydrateAllList = [];
		con.query(sql,function(err,result){
			if(err) throw err;
			else{			
				for(i in result){
					//console.log(result);			
					proteinAllList.push(result[i].DRY_protein);
					fatAllList.push(result[i].DRY_fat);
					carbohydrateAllList.push(result[i].DRY_carbohydrate);
					if(result[i].price>160 && result[i].kcal!=-1 && result[i].onMarket!=0 && SelectorOfIcon(result[i]) && SelectorOfAlergent(result[i]) && !(catType=='幼貓'&&!result[i].productName_ZH.includes('幼')) && !(catType!='幼貓'&&result[i].productName_ZH.includes('幼'))){ // DELETE DATA WHICH INFORMATION MISSED
						if(catType == "成貓" && !req.session.select_icon.includes('I')){					
							if(result[i].DRY_fat>10&&result[i].DRY_fat<30&&result[i].DRY_fiber<5.7&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=40)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,result[i].protein,result[i].fat,result[i].fiber,42,27,30,10,5.7,0));
							}
						}else if(catType == "成貓" && req.session.select_icon.includes('I')){
							if(result[i].DRY_fat>10&&result[i].DRY_fat<30&&result[i].DRY_fiber<=12&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=40)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,result[i].protein,result[i].fat,result[i].fiber,42,27,30,10,12,0));
							}
						}else if(catType == "胖成貓"){
							if(result[i].DRY_fat>9&&result[i].DRY_fat<20&&result[i].DRY_fiber>6&&result[i].DRY_fiber<15&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=35)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,result[i].protein,result[i].fat,result[i].fiber,42,27,20,9,15,6));
							}
						}else if(catType == "幼貓"){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<35&&result[i].DRY_protein>35&&result[i].DRY_protein<50)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,result[i].protein,result[i].fat,result[i].fiber,50,35,35,18,35,0));
							}
						}else if(catType == "懷孕貓"){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<35&&result[i].DRY_protein>35&&result[i].DRY_protein<50)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,result[i].protein,result[i].fat,result[i].fiber,50,35,35,18,35,0));
							}
						}else if(catType == "泌乳貓"){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<35&&result[i].DRY_protein>35&&result[i].DRY_protein<50)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,result[i].protein,result[i].fat,result[i].fiber,50,35,35,18,35,0));
							}
						}else if(catType == "交配貓"){
							if(result[i].DRY_fat>10&&result[i].DRY_fat<30&&result[i].DRY_protein>30&&result[i].DRY_protein<45)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,result[i].protein,result[i].fat,result[i].fiber,42,27,25,9,35,0));
							}
						}else if(catType == "老貓" && !req.session.select_icon.includes('I')){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<25&&result[i].DRY_fiber<=5&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=35)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,result[i].protein,result[i].fat,result[i].fiber,42,27,22,16,4.5,0));
							}
						}else if(catType == "老貓" && req.session.select_icon.includes('I')){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<25&&result[i].DRY_fiber<=12&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=35)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,result[i].protein,result[i].fat,result[i].fiber,42,27,22,16,12,0));
							}
						}else if(catType == "老老貓" || catType == "胖老老貓" || catType == "胖老貓"){
							if(result[i].DRY_fat>10&&result[i].DRY_fat<18&&result[i].DRY_fiber>5&&result[i].DRY_fiber<15&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=35)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients,catWeight,result[i].immu,result[i].heart,result[i].hair,result[i].mehair,result[i].joint,result[i].stoma,result[i].urinary,result[i].mouth,result[i].lowalergent,result[i].protein,result[i].fat,result[i].fiber,42,27,16,9,15,4.5));
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
			//protein, fat, carbohydrate analysis
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
			// BASIC DATA SORT AND SLICE TO FIVE
			//---------------------------------------
			//console.log(list);
			var listA = SliceListToFivePricePart_sorted(list,550,650);
			var listB = SliceListToFivePricePart_sorted(list,700,800);
			var listC = SliceListToFivePricePart_sorted(list,850,950);
			var listD = SliceListToFivePricePart_sorted(list,1000,1100);
			var listE = SliceListToFivePricePart_sorted(list,1150,1000000);
			list = null;
			//---------------------------------------
			// ADVANCED RAX SELECTOR (進階篩選器)
			//---------------------------------------
			// 蛋白質
			function DailyProteinSelector(list,catType,kcal,catWeight){
				var newList = [];
				for(i=0;i<list.length;i++){
					var x  = kcal/list[i].kcal*10*list[i].DRY_protein;
					if(catType == "成貓"){
						if(5.5*catWeight<x && 11.5*catWeight>x)
							newList.push(list[i]);
					}else if(catType == "老貓"){
						if(6*catWeight<x && 8.5*catWeight>x)
							newList.push(list[i]);
					}else{
						newList.push(list[i]);
					}
				}
				return newList;
			}
			//if(dailyProteinSelector == "typeA"){
			/*
			listA = DailyProteinSelector(listA,catType,kcal,catWeight);
			listB = DailyProteinSelector(listB,catType,kcal,catWeight);
			listC = DailyProteinSelector(listC,catType,kcal,catWeight);
			listD = DailyProteinSelector(listD,catType,kcal,catWeight);
			listE = DailyProteinSelector(listE,catType,kcal,catWeight);
			*/
			//}
			//代謝能
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
						if(x>4 && x<5)
							newList.push(list[i]);
					}if(catType == "胖成貓"){
						if(x>3.3 && x<3.8)
							newList.push(list[i]);
					}if(catType == "老貓" || catType == "老老貓"){
						if(x>4 && x<4.5)
							newList.push(list[i]);
					}if(catType == "胖老貓" || catType == "胖老老貓"){
						if(x>3.5 && x<4)
							newList.push(list[i]);
					}
				}
				return newList;
			}
			
			//if(metabolismSelector == "typeA"){
			/*
			listA = MetabolismSelectorTypeA(listA,catType,kcal);
			listB = MetabolismSelectorTypeA(listB,catType,kcal);
			listC = MetabolismSelectorTypeA(listC,catType,kcal);
			listD = MetabolismSelectorTypeA(listD,catType,kcal);
			listE = MetabolismSelectorTypeA(listE,catType,kcal);
			*/
			//}
			
			//if(metabolismSelector == "typeB"){
			//	listA = MetabolismSelectorTypeB(listA,catType,kcal);
			//	listB = MetabolismSelectorTypeB(listB,catType,kcal);
			//	listC = MetabolismSelectorTypeB(listC,catType,kcal);
			//	listD = MetabolismSelectorTypeB(listD,catType,kcal);
			//	listE = MetabolismSelectorTypeB(listE,catType,kcal);
			//}
			//---------------------------------------
			// FINAL EDDIE SORTER (篩選後排序)
			//---------------------------------------
			CalIconScore(listA);
			CalIconScore(listB);
			CalIconScore(listC);
			CalIconScore(listD);
			CalIconScore(listE);
			//if(meatLevelSelector == "open"){
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
			//}
			/*
			if(priceSelector == "open"){
				listA = listA.sort(function(a,b){
					return a.price > b.price ? -1 : 1;
				});
				listB = listB.sort(function(a,b){
					return a.price > b.price ? -1 : 1;
				});
				listC = listC.sort(function(a,b){
					return a.price > b.price ? -1 : 1;
				});
				listD = listD.sort(function(a,b){
					return a.price > b.price ? -1 : 1;
				});
				listE = listE.sort(function(a,b){
					return a.price > b.price ? -1 : 1;
				});
			}
			if(meatLevel_priceSelector == "open"){
				listA = listA.sort(function(a,b){
					var x = a.MeatLevel_total / a.price;
					var y = b.MeatLevel_total / b.price;
					return x > y ? -1 : 1;
				});
				listB = listB.sort(function(a,b){
					var x = a.MeatLevel_total / a.price;
					var y = b.MeatLevel_total / b.price;
					return x > y ? -1 : 1;
				});
				listC = listC.sort(function(a,b){
					var x = a.MeatLevel_total / a.price;
					var y = b.MeatLevel_total / b.price;
					return x > y ? -1 : 1;
				});
				listD = listD.sort(function(a,b){
					var x = a.MeatLevel_total / a.price;
					var y = b.MeatLevel_total / b.price;
					return x > y ? -1 : 1;
				});
				listE = listE.sort(function(a,b){
					var x = a.MeatLevel_total / a.price;
					var y = b.MeatLevel_total / b.price;
					return x > y ? -1 : 1;
				});
			}
			if(meatLevelProtein_priceSelector == "open"){
				listA = listA.sort(function(a,b){
					var x = a.MeatLevel_total * a.DRY_protein / a.price;
					var y = b.MeatLevel_total * b.DRY_protein / b.price;
					return x > y ? -1 : 1;
				});
				listB = listB.sort(function(a,b){
					var x = a.MeatLevel_total * a.DRY_protein / a.price;
					var y = b.MeatLevel_total * b.DRY_protein / b.price;
					return x > y ? -1 : 1;
				});
				listC = listC.sort(function(a,b){
					var x = a.MeatLevel_total * a.DRY_protein / a.price;
					var y = b.MeatLevel_total * b.DRY_protein / b.price;
					return x > y ? -1 : 1;
				});
				listD = listD.sort(function(a,b){
					var x = a.MeatLevel_total * a.DRY_protein / a.price;
					var y = b.MeatLevel_total * b.DRY_protein / b.price;
					return x > y ? -1 : 1;
				});
				listE = listE.sort(function(a,b){
					var x = a.MeatLevel_total * a.DRY_protein / a.price;
					var y = b.MeatLevel_total * b.DRY_protein / b.price;
					return x > y ? -1 : 1;
				});
			}
			*/
			//---------------------------------------
			// SEND INFORMATION TO FRONT END
			//---------------------------------------
			var listAllDataJSON = '';
			listAllDataJSON += 'C#' + JSON.stringify(listA) + '#' + JSON.stringify(listB) + '#' + JSON.stringify(listC) + '#' + JSON.stringify(listD) + '#' + JSON.stringify(listE) + "#" + JSON.stringify(req.session.select_icon);
			/*
			if(req.session.catfood_select=='A'){
				listAllDataJSON = JSON.stringify(listA);
			}else if(req.session.catfood_select=='B'){
				listAllDataJSON = JSON.stringify(listB);
			}else if(req.session.catfood_select=='C'){
				listAllDataJSON = JSON.stringify(listC);
			}else if(req.session.catfood_select=='D'){
				listAllDataJSON = JSON.stringify(listD);
			}else if(req.session.catfood_select=='E'){
				listAllDataJSON = JSON.stringify(listE);
			}else{
				console.log('oops! Seems like this person didn"t have budget for cats!');
			}
			*/
			//console.log(listAllDataJSON);
			res.send(listAllDataJSON);
		});//con.query END	
	}else{
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
/*
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
*/
//------------------------------------------
// Questionnaire Result Page
//------------------------------------------
app.post('/saveQuestionnaire_result',function(req,res,next){
	req.session.currentProduct = req.body.currentProduct;
	console.log(req.session.currentProduct);
	res.redirect('/purchase')
});
app.get('/purchase',function(req,res,next){
	res.render('purchase');
});
app.post('/clientAskForPurchaseItem',function(req,res,next){
	if(req.session.currentProduct==null){
		res.send('error');
	}else{
		var sql = 'SELECT * FROM `productDB` WHERE productCode = "'+req.session.currentProduct+'"';
		function AddObjToList(productCode,productName_ZH,productCompany_ZH,productCompany_EN,price){
			var obj = {};
			obj.productCode = productCode;
			obj.productName_ZH = productName_ZH;
			obj.productCompany = productCompany_ZH + '  ' + productCompany_EN;
			obj.price = price;
			return obj;
		}
		con.query(sql,function(err,result){
			if(err) throw err;
			else{
				var obj = AddObjToList(result[0].productCode,result[0].productName_ZH,result[0].productCompany_ZH,result[0].productCompany_EN,result[0].price);
				res.send(JSON.stringify(obj));	
			}
		});
	}
});
// 7-11 crawler
const getStoreData = (url, cityName, townName) => {
	let storeArray = [];
    let storeID = [];
    let storeName = [];
    let storeTele = [];
    let storeFax = [];
    let storeAddress = [];
    let storeValues = "";
    return new Promise((resolve, reject) => {
        request.post({
            url: url,
            form: {
                commandid: "SearchStore",
                city: cityName,
                town: townName
            }
        }, function (err, res, body) {
            const $ = cheerio.load(body);
            // 店家ID
            $('POIID').each(function (index, element) {
 　　　　　　     //去空白
                storeID.push($(this).text().replace(/\s/g, ''));
                storeValues = index; // 該區所有店家的個數
            })
            // 店家名稱
            $('POIName').each(function (index, element) {
                storeName.push($(this).text());
            })
            // 店家電話
            $('Telno').each(function (index, element) {
                //去空白
                storeTele.push($(this).text().replace(/\s/g, ''));
            })
            // 店家傳真
            $('FaxNo').each(function (index, element) {
                //去空白
                storeFax.push($(this).text().replace(/\s/g, '')); 
            })
            // 店家地址
            $('Address').each(function (index, element) {
                storeAddress.push($(this).text());
            })
            for (let i = 0; i <= storeValues; i += 1) {
                storeArray.push({
                    storeCity: cityName,
                    storeTown: townName,
                    storeID: storeID[i],
                    storeName: storeName[i],
                    storeTele: storeTele[i],
                    storeFax: storeFax[i],
                    storeAddress: storeAddress[i]
                });
            }
            resolve(storeArray);
        })
    })
}
app.post('/clientAskFor711',function(req,res,next){
	let cityName = req.body.cityName;
	let townName = req.body.townName;
	getStoreData('http://emap.pcsc.com.tw/EMapSDK.aspx', cityName, townName).then((result) => {
		const data = JSON.stringify(result);
		//console.log(result);
		res.send(data);
	});	
});
app.post('/clientSendOrder',function(req,res,next){
	var logistics = req.body.logistics;
	var username = req.body.username;
	var useraddress = req.body.useraddress;
	var userphone = req.body.userphone;
	var productCode = req.body.productCode;
	var productName_ZH = req.body.productName_ZH;
	var dt = datetime.create();
	var formatted = dt.format('Y-m-d H:M:S');
	//先判斷輸入的值是否正確
	//再判斷是否已登入

	if(req.session.username==null){
		req.session.recordWebPage = 'purchase';
		res.send('/login');
	}else{
		if(logistics=='logisticsA'){
			var id = req.session.username;
			var name = req.session.name;
			var sql = 'INSERT INTO `ordersystem` (userid, username, userphone, userhomeaddress, productCode, productName_ZH, buildTime, orderstate) VALUES?';
			var values = [
				[id,username,userphone,useraddress,productCode,productName_ZH,formatted,1]
			];
			con.query(sql,[values],function(err,result){
				if(err){
					console.log('[SYS ERR] : INSERT TO ORDER ERROR OCCUR!');
					throw err;
				}else{
					console.log('[SYS MSG] : ORDER BUILD SUCCESS!');
					// save and clear
					var sql_save = 'INSERT INTO `userqnrecord` (CCMUserqnrPId,name,username,BKN_name,BKN_age,BKN_sex,BCN,BCS,BCA_ageYear,BCA_ageMonth,BSP,BNU,BPR,BPT,BFN,BFA_kittyNum,BFA_week,BCW_kilo,BCW_gram,BEF,BSI,BBC,weight_control,select_icon,joint_now,joint_med,joint_below,joint_jump,joint_daily,heart_now,heart_behave,heart_avgtemp,mouth_now,mouth_behave,mouth_brush,fur_freq,fur_behave,fur_tie,immu_now,immu_behave,immu_behave_before,immu_spirit,immu_med,kidney_now,kidney_urine,kidney_health,urinary_now,urinary_behave,urinary_together,urinary_water,stoma_problem,stoma_bathroom,stoma_strange,melt_freq,stress_now,stress_enviornment,stress_enviornment_out,stress_lifestyle,extra_eatinghabit,extra_eatingfreq,extra_weekcan,extra_freshflesh,extra_minifish,extra_killbugs,extra_vacci,extra_alergent,extra_drinking,extra_cooking,extra_strangehabit,extra_place,extra_knowhow) VALUES?';
					var values_save = [
						[name,id,req.session.BKN_name,req.session.BKN_age,req.session.BKN_sex,req.session.BCN,req.session.BCS,req.session.BCA_ageYear,req.session.BCA_ageMonth,req.session.BSP,req.session.BNU,req.session.BPR,req.session.BPT,req.session.BFN,req.session.BFA_kittyNum,req.session.BFA_week,req.session.BCW_kilo,req.session.BCW_gram,req.session.BEF,req.session.BSI,req.session.BBC,req.session.weight_control,req.session.select_icon,req.session.joint_now,req.session.joint_med,req.session.joint_below,req.session.joint_jump,req.session.joint_daily,req.session.heart_now,req.session.heart_behave,req.session.heart_avgtemp,req.session.mouth_now,req.session.mouth_behave,req.session.mouth_brush,req.session.fur_freq,req.session.fur_behave,req.session.fur_tie,req.session.immu_now,req.session.immu_behave,req.session.immu_behave_before,req.session.immu_spirit,req.session.immu_med,req.session.kidney_now,req.session.kidney_urine,req.session.kidney_health,req.session.urinary_now,req.session.urinary_behave,req.session.urinary_together,req.session.urinary_water,req.session.stoma_problem,req.session.stoma_bathroom,req.session.stoma_strange,req.session.melt_freq,req.session.stress_now,req.session.stress_enviornment,req.session.stress_enviornment_out,req.session.stress_lifestyle,req.session.extra_eatinghabit,req.session.extra_eatingfreq,req.session.extra_weekcan,req.session.extra_freshflesh,req.session.extra_minifish,req.session.extra_killbugs,req.session.extra_vacci,req.session.extra_alergent,req.session.extra_drinking,req.session.extra_cooking,req.session.extra_strangehabit,req.session.extra_place,req.session.extra_knowhow]
					];
					con.query(sql_save,[values_save],function(err,result){
						if(err){
							throw err;
						}else{
							console.log('[SYS MSG] : LIST SAVE SUCCESS!');
						}
					});
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
					res.send('/');
				}
			});
		}else{
			var id = req.session.username;
			var name = req.session.name;
			var sql = 'INSERT INTO `ordersystem` (userid, username, userphone, user711address, productCode, productName_ZH, buildTime, orderstate) VALUES?';
			var values = [
				[id,username,userphone,useraddress,productCode,productName_ZH,formatted,1]
			];
			con.query(sql,[values],function(err,result){
				if(err){
					console.log('[SYS ERR] : INSERT TO ORDER ERROR OCCUR!');
					throw err;
				}else{
					console.log('[SYS MSG] : ORDER BUILD SUCCESS!');
					// clear part session
					var sql_save = 'INSERT INTO `userqnrecord` (CCMUserqnrPId,name,username,BKN_name,BKN_age,BKN_sex,BCN,BCS,BCA_ageYear,BCA_ageMonth,BSP,BNU,BPR,BPT,BFN,BFA_kittyNum,BFA_week,BCW_kilo,BCW_gram,BEF,BSI,BBC,weight_control,select_icon,joint_now,joint_med,joint_below,joint_jump,joint_daily,heart_now,heart_behave,heart_avgtemp,mouth_now,mouth_behave,mouth_brush,fur_freq,fur_behave,fur_tie,immu_now,immu_behave,immu_behave_before,immu_spirit,immu_med,kidney_now,kidney_urine,kidney_health,urinary_now,urinary_behave,urinary_together,urinary_water,stoma_problem,stoma_bathroom,stoma_strange,melt_freq,stress_now,stress_enviornment,stress_enviornment_out,stress_lifestyle,extra_eatinghabit,extra_eatingfreq,extra_weekcan,extra_freshflesh,extra_minifish,extra_killbugs,extra_vacci,extra_alergent,extra_drinking,extra_cooking,extra_strangehabit,extra_place,extra_knowhow) VALUES?';
					var values_save = [
						[name,id,req.session.BKN_name,req.session.BKN_age,req.session.BKN_sex,req.session.BCN,req.session.BCS,req.session.BCA_ageYear,req.session.BCA_ageMonth,req.session.BSP,req.session.BNU,req.session.BPR,req.session.BPT,req.session.BFN,req.session.BFA_kittyNum,req.session.BFA_week,req.session.BCW_kilo,req.session.BCW_gram,req.session.BEF,req.session.BSI,req.session.BBC,req.session.weight_control,req.session.select_icon,req.session.joint_now,req.session.joint_med,req.session.joint_below,req.session.joint_jump,req.session.joint_daily,req.session.heart_now,req.session.heart_behave,req.session.heart_avgtemp,req.session.mouth_now,req.session.mouth_behave,req.session.mouth_brush,req.session.fur_freq,req.session.fur_behave,req.session.fur_tie,req.session.immu_now,req.session.immu_behave,req.session.immu_behave_before,req.session.immu_spirit,req.session.immu_med,req.session.kidney_now,req.session.kidney_urine,req.session.kidney_health,req.session.urinary_now,req.session.urinary_behave,req.session.urinary_together,req.session.urinary_water,req.session.stoma_problem,req.session.stoma_bathroom,req.session.stoma_strange,req.session.melt_freq,req.session.stress_now,req.session.stress_enviornment,req.session.stress_enviornment_out,req.session.stress_lifestyle,req.session.extra_eatinghabit,req.session.extra_eatingfreq,req.session.extra_weekcan,req.session.extra_freshflesh,req.session.extra_minifish,req.session.extra_killbugs,req.session.extra_vacci,req.session.extra_alergent,req.session.extra_drinking,req.session.extra_cooking,req.session.extra_strangehabit,req.session.extra_place,req.session.extra_knowhow]
					];
					con.query(sql_save,[values_save],function(err,result){
						if(err){
							throw err;
						}else{
							console.log('[SYS MSG] : LIST SAVE SUCCESS!');
						}
					});
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
					res.send('/');
				}
			});
		}	
	}
});
//------------------------------------------
// Get User Center Page
//------------------------------------------
app.get('/usercenter',function(req,res,next){
	/*
	if(req.session.username==null) res.redirect('/login');
	else{
		res.render('usercenter',{name: req.session.name});
	}
	*/
	res.render('usercenter',{name: req.session.name});
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
// LIBRARY
//------------------------------------------
app.get('/library',function(req,res,next){
	if(req.session.cart==null) req.session.cart = [];
	res.render('library',{username: req.session.name,productLength:req.session.cart.length});
});
//------------------------------------------
// BACKEND CONTROL PANEL
//------------------------------------------
app.get('/backendControlPanel',function(req,res,next){

	res.render('backendControlPanel');
});
app.post('/adminLogin',function(req,res,next){
	if(req.body.id!='123' || req.body.pwd!='123'){
		res.send('input error!');
	}else{
		req.session.ccmatminlogin = true;
		//send data to admin
		const sql = 'SELECT * FROM `ordersystem`';
		let list = [];
		function addToList(id,uid,un,up,uha,u7a,pc,pnz,os,bt,ct,ot,dt){
			var obj = {};
			obj.id = id;
			obj.uid = uid;
			obj.un = un;
			obj.up = up;
			obj.uha = uha;
			obj.u7a = u7a;
			obj.pc = pc;
			obj.pnz = pnz;
			obj.os = os;
			obj.bt = bt;
			obj.ct = ct;
			obj.ot = ot;
			obj.dt = dt;
			return obj;
		}
		con.query(sql,function(err,result){
			if(err) throw err;
			else{
				for(i in result){
					list.push(addToList(result[i].id,result[i].userid,result[i].username,result[i].userphone,result[i].userhomeaddress,result[i].user711address,result[i].productCode,result[i].productName_ZH,result[i].orderstate,result[i].buildTime,result[i].checkTime,result[i].outgoingTime,result[i].deliveryTime));
				}
			}
			let listJSON = JSON.stringify(list);
			res.send(listJSON);
		});
	}
});
app.post('/adminLogout',function(req,res,next){
	if(req.session.ccmatminlogin==true){
		req.session.ccmatminlogin= null;
		res.send('done');
	}
});
app.post('/sendnewos',function(req,res,next){
	var dt = datetime.create();
	var formatted = dt.format('Y-m-d H:M:S');
	let sql;
	if(req.body.newos==2){
		sql = 'UPDATE `ordersystem` SET orderstate = '+req.body.newos+', checkTime = "'+formatted+'" WHERE id = '+req.body.id+'';
	}else if(req.body.newos==3){
		sql = 'UPDATE `ordersystem` SET orderstate = '+req.body.newos+', outgoingTime = "'+formatted+'" WHERE id = '+req.body.id+'';
	}else if(req.body.newos==4){
		sql = 'UPDATE `ordersystem` SET orderstate = '+req.body.newos+', deliveryTime = "'+formatted+'" WHERE id = '+req.body.id+'';
	}else if(req.body.newos==1){
		sql = 'UPDATE `ordersystem` SET orderstate = '+req.body.newos+', buildTime = "'+formatted+'" WHERE id = '+req.body.id+'';
	}else{
		res.send('error');
	}
	con.query(sql,function(err,result){
		if(err) throw err;
		else res.send('done');
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