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
app.use(cookieParser('catcatmed secret jay paul rax edward'));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);


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
function handleError(err){
	if(err){
		if(err.code === 'PROTOCAL_CONNECTION_LOST'){
			connect();		
		}else{
			console.error(err.stack || err);
		}
	}
}
function connect(){
	con = mysql.createConnection(config);
	con.connect(handleError);
	con.on('error',handleError);
}
var con;
connect();
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
app.get('/questionnaire_result',function(req,res,next){
	res.render('questionnaire_result');
});
app.post('/questionnaire_result',function(req,res,next){
	if(req.session.basicInformation!=null){
		var basicInformation = JSON.parse(req.session.basicInformation);
		var catage_year = parseInt(basicInformation.catAgeYear);
		var catage_month = parseInt(basicInformation.catAgeMonth);
		var catWeight = parseInt(basicInformation.catWeightKilo) + parseInt(basicInformation.catWeightGram)*0.001;
		var catBCS;
		if(basicInformation.catSize=='過瘦') catBCS = 1;
		else if(basicInformation.catSize=='稍瘦') catBCS = 2;
		else if(basicInformation.catSize=='適中') catBCS = 3;
		else if(basicInformation.catSize=='稍胖') catBCS = 5;
		else if(basicInformation.catSize=='過胖') catBCS = 7;
		else{}
		var activity = basicInformation.catExerciseFreq;
		var neutured = basicInformation.ligation;
		var preg = basicInformation.pregnancy;
		var pregtime = basicInformation.pregnancyTime;
		if(basicInformation.pregnancyTime=='不確定')
			pregtime = '4_6';
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
		if(preg=="是"){
			catType = "懷孕貓";
		}
		/*
		if(milkyCat=="是"){
			catType = "泌乳貓";
		}
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
			if(activity=="高") activityCoefficient = 1.333333333;
			if(activity=="中") activityCoefficient = 1.083333333;
			if(activity=="低") activityCoefficient = 1;
			if(neutured=="是") neuturedCoefficient = 1;
			if(neutured=="否") neuturedCoefficient = 1.166666667;
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
			if(pregtime == "1_3") RERCoefficient = 1.6;
			else if(pregtime == "4_6") RERCoefficient = 1.8;
			else if(pregtime == "6up") RERCoefficient = 2;
			RER = 70*(Math.pow(catWeight,0.75));
			kcal = RERCoefficient * RER;
		}
		else if(catType == "泌乳貓"){
			if(kittyAge == "1_2week"){
				milkyCatCoefficient = 2.3;
				milkyCatPercentage = 0.3;
			}
			if(kittyAge == "3week"){
				milkyCatCoefficient = 2.5;
				milkyCatPercentage = 0.45;
			}
			if(kittyAge == "4week"){
				milkyCatCoefficient = 3;
				milkyCatPercentage = 0.55;
			}
			if(kittyAge == "5week"){
				milkyCatCoefficient = 3.5;
				milkyCatPercentage = 0.65;
			}
			if(kittyAge == "6week"){
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
			if(activity=="高") activityCoefficient = 1.222;
			if(activity=="中") activityCoefficient = 1.111;
			if(activity=="低") activityCoefficient = 1;
			if(neutured=="是") neuturedCoefficient = 1;
			if(neutured=="否") neuturedCoefficient = 1.166666667;
			if(catType == "胖老貓" || catType == "胖老老貓") kcal_fat = RER*activityCoefficient*neuturedCoefficient*ageRERCoefficient/100;
			kcal = RERCoefficient/100*RER*activityCoefficient*neuturedCoefficient*ageRERCoefficient/100;
		}
		//find data
		var sql = "SELECT * FROM `productdb`";
		var list = [];
		var innerHTML = "";
		function AddObjToList(i,productCode,name_zh,brand_zh,brand_en,original,price,kcal,protein,fat,ash,carbohydrate,MeatLevel_total,DRY_protein,DRY_fat,DRY_carbohydrate,goodMeat,potentialAlergent,dailyNeedkcal,ingredient){
			var obj = {};
			obj.index = i;
			obj.productCode = productCode;
			obj.name_zh = name_zh;
			obj.brand_zh = brand_zh;
			obj.brand_en = brand_en;
			obj.original = original;
			obj.price = price;
			obj.kcal = kcal;
			obj.protein = protein;
			obj.fat = fat;
			obj.ash = ash;
			obj.carbohydrate = carbohydrate;
			obj.MeatLevel_total = MeatLevel_total;
			obj.DRY_protein = DRY_protein;
			obj.DRY_fat = DRY_fat;
			obj.DRY_carbohydrate = DRY_carbohydrate;
			obj.goodMeat = goodMeat;
			obj.potentialAlergent = potentialAlergent;
			//
			obj.proteinLevel = null;
			obj.fatLevel = null;
			obj.carbohydrateLevel = null;
			obj.dailyNeedWater = 65 - dailyNeedkcal/100*11 - dailyNeedkcal/kcal*100;
			obj.dailyNeedkcal = dailyNeedkcal;
			obj.dailyNeedGram = dailyNeedkcal/kcal*1000;
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
		//資料分析
		var proteinAllList = [];
		var fatAllList = [];
		var carbohydrateAllList = [];
		con.query(sql,function(err,result){
			if(err) throw err;
			else{			
				for(i in result){				
					proteinAllList.push(result[i].DRY_protein);
					fatAllList.push(result[i].DRY_fat);
					carbohydrateAllList.push(result[i].DRY_carbohydrate);
					if(result[i].price>160 && result[i].kcal!=-1){ // DELETE DATA WHICH INFORMATION MISSED
						if(catType == "成貓"){					
							if(result[i].DRY_fat>10&&result[i].DRY_fat<30&&result[i].DRY_fiber<5&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=35)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].carbohydrate,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients));
							}
						}else if(catType == "胖成貓"){
							if(result[i].DRY_fat>9&&result[i].DRY_fat<20&&result[i].DRY_fiber>6&&result[i].DRY_fiber<15&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=30)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].carbohydrate,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients));							}
						}else if(catType == "幼貓"){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<35&&result[i].DRY_protein>35&&result[i].DRY_protein<50)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].carbohydrate,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients));							}
						}else if(catType == "懷孕貓"){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<35&&result[i].DRY_protein>35&&result[i].DRY_protein<50)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].carbohydrate,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients));							}
						}else if(catType == "泌乳貓"){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<35&&result[i].DRY_protein>35&&result[i].DRY_protein<50)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].carbohydrate,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients));							}
						}else if(catType == "交配貓"){
							if(result[i].DRY_fat>10&&result[i].DRY_fat<30&&result[i].DRY_protein>30&&result[i].DRY_protein<45)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].carbohydrate,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients));							}
						}else if(catType == "老貓" || catType == "胖老貓"){
							if(result[i].DRY_fat>18&&result[i].DRY_fat<25&&result[i].DRY_fiber<=5&&result[i].DRY_protein>30&&result[i].DRY_protein<45)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].carbohydrate,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients));							}
						}else if(catType == "老老貓" || catType == "胖老老貓"){
							if(result[i].DRY_fat>10&&result[i].DRY_fat<18&&result[i].DRY_fiber>6&&result[i].DRY_fiber<15&&result[i].DRY_protein>30&&result[i].DRY_protein<45)
							{
								list.push(AddObjToList(i,result[i].productCode,result[i].productName_ZH,result[i].productCompany_ZH,result[i].productCompany_EN,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].carbohydrate,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate,result[i].goodMeat,result[i].potentialAlergent,kcal,result[i].productIngredients));							}
						}
					}			
				}
			}
			//protein, fat, carbohydrate analysis
			function fillInAverageLevel(list,proteinAVG,fatAVG,carbohydrateAVG){
				for(i=0;i<list.length;i++){
					if(list[i].DRY_protein>=proteinAVG) list[i].proteinLevel = '※此商品之蛋白質含量高於市售所有飼料之蛋白質平均';
					else list[i].proteinLevel = '※此商品之蛋白質含量低於市售所有飼料之蛋白質平均';
					if(list[i].DRY_fat>=fatAVG) list[i].fatLevel = '※此商品之脂質含量高於市售所有飼料之脂質平均';
					else list[i].fatLevel = '※此商品之脂質含量低於市售所有飼料之脂質平均';
					if(list[i].DRY_carbohydrate>=carbohydrateAVG) list[i].carbohydrateLevel = '※此商品之碳水化合物含量高於市售所有飼料之碳水化合物平均';
					else list[i].carbohydrateLevel = '※此商品之碳水化合物含量低於市售所有飼料之碳水化合物平均';
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
			fillInAverageLevel(list,proteinAllList[355],fatAllList[355],carbohydrateAllList[355]);
			//---------------------------------------
			// BASIC DATA SORT AND SLICE TO FIVE
			//---------------------------------------
			var listA = SliceListToFivePricePart_sorted(list,160,250);
			var listB = SliceListToFivePricePart_sorted(list,250,350);
			var listC = SliceListToFivePricePart_sorted(list,350,450);
			var listD = SliceListToFivePricePart_sorted(list,450,550);
			var listE = SliceListToFivePricePart_sorted(list,550,1000000);
			list = null;
			//---------------------------------------
			// ADVANCED RAX SELECTOR (進階篩選器)
			//---------------------------------------
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
				listA = DailyProteinSelector(listA,catType,kcal,catWeight);
				listB = DailyProteinSelector(listB,catType,kcal,catWeight);
				listC = DailyProteinSelector(listC,catType,kcal,catWeight);
				listD = DailyProteinSelector(listD,catType,kcal,catWeight);
				listE = DailyProteinSelector(listE,catType,kcal,catWeight);
			//}
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
			/*
			if(metabolismSelector == "typeA"){
				listA = MetabolismSelectorTypeA(listA,catType,kcal);
				listB = MetabolismSelectorTypeA(listB,catType,kcal);
				listC = MetabolismSelectorTypeA(listC,catType,kcal);
				listD = MetabolismSelectorTypeA(listD,catType,kcal);
				listE = MetabolismSelectorTypeA(listE,catType,kcal);
			}
			*/
			//if(metabolismSelector == "typeB"){
				listA = MetabolismSelectorTypeB(listA,catType,kcal);
				listB = MetabolismSelectorTypeB(listB,catType,kcal);
				listC = MetabolismSelectorTypeB(listC,catType,kcal);
				listD = MetabolismSelectorTypeB(listD,catType,kcal);
				listE = MetabolismSelectorTypeB(listE,catType,kcal);
			//}
			//---------------------------------------
			// FINAL EDDIE SORTER (篩選後排序)
			//---------------------------------------
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
			var listA_JSON = JSON.stringify(listA);
			var listB_JSON = JSON.stringify(listB);
			var listC_JSON = JSON.stringify(listC);
			var listD_JSON = JSON.stringify(listD);
			var listE_JSON = JSON.stringify(listE);
			var listAllDataJSON = listA_JSON + '#' + listB_JSON + '#' + listC_JSON + '#' + listD_JSON + '#' + listE_JSON;
			//console.log(listAllDataJSON);
			res.send(listAllDataJSON);
		});//con.query END	
	}else{
		console.log("oops! Seemes like you didn't fill the questionnaire first?")
	}	
});
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
	var dailyProteinSelector = req.body.dailyProteinSelector;
	var metabolismSelector = req.body.metabolismSelector;
	var meatLevelSelector = req.body.meatLevelSelector;
	var priceSelector = req.body.priceSelector;
	var meatLevel_priceSelector = req.body.meatLevel_priceSelector;
	var meatLevelProtein_priceSelector = req.body.meatLevelProtein_priceSelector;
	//
	var fat = 0;
	var idealWeight = 0;
	var RERCoefficient = 0 ;
	var ageRERCoefficient = 0;
	var RER = 0;
	var activityCoefficient;
	var neuturedCoefficient;
	var kcal = 1;
	var kcal_fat;
	var childCoefficient;
	var milkyCatCoefficient;
	var milkyCatPercentage;
	var catType; //幼貓 懷孕貓 泌乳貓 交配貓 老貓 老老貓 成貓 胖成貓 
	var count = 0;
	//資料分析
	var protein_low = 35;
	var protein_high = 35;
	var proteinAllList = [];
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
		if(activity=="高") activityCoefficient = 1.333333333;
		if(activity=="中") activityCoefficient = 1.083333333;
		if(activity=="低") activityCoefficient = 1;
		if(neutured=="是") neuturedCoefficient = 1;
		if(neutured=="否") neuturedCoefficient = 1.166666667;
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
		if(pregtime == "1_3") RERCoefficient = 1.6;
		else if(pregtime == "4_6") RERCoefficient = 1.8;
		else if(pregtime == "6up") RERCoefficient = 2;
		RER = 70*(Math.pow(catWeight,0.75));
		kcal = RERCoefficient * RER;
	}
	else if(catType == "泌乳貓"){
		if(kittyAge == "1_2week"){
			milkyCatCoefficient = 2.3;
			milkyCatPercentage = 0.3;
		}
		if(kittyAge == "3week"){
			milkyCatCoefficient = 2.5;
			milkyCatPercentage = 0.45;
		}
		if(kittyAge == "4week"){
			milkyCatCoefficient = 3;
			milkyCatPercentage = 0.55;
		}
		if(kittyAge == "5week"){
			milkyCatCoefficient = 3.5;
			milkyCatPercentage = 0.65;
		}
		if(kittyAge == "6week"){
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
		if(activity=="高") activityCoefficient = 1.222;
		if(activity=="中") activityCoefficient = 1.111;
		if(activity=="低") activityCoefficient = 1;
		if(neutured=="是") neuturedCoefficient = 1;
		if(neutured=="否") neuturedCoefficient = 1.166666667;
		if(catType == "胖老貓" || catType == "胖老老貓") kcal_fat = RER*activityCoefficient*neuturedCoefficient*ageRERCoefficient/100;
		kcal = RERCoefficient/100*RER*activityCoefficient*neuturedCoefficient*ageRERCoefficient/100;
	}
	//find data
	var sql = "SELECT * FROM `productdb`";
	var list = [];
	var innerHTML = "";
	function AddObjToList(i,name,original,price,kcal,protein,fat,ash,MeatLevel_total,DRY_protein,DRY_fat,DRY_carbohydrate){
		var obj = {};
		obj.index = i;
		obj.name = name;
		obj.original = original;
		obj.price = price;
		obj.kcal = kcal;
		obj.protein = protein;
		obj.fat = fat;
		obj.ash = ash;
		obj.MeatLevel_total = MeatLevel_total;
		obj.DRY_protein = DRY_protein;
		obj.DRY_fat = DRY_fat;
		obj.DRY_carbohydrate = DRY_carbohydrate;
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
	con.query(sql,function(err,result){
		if(err) throw err;
		else{			
			for(i in result){				
				proteinAllList.push(result[i].DRY_protein);
				if(result[i].price>160 && result[i].kcal!=-1){ // DELETE DATA WHICH INFORMATION MISSED
					if(catType == "成貓"){					
						if(result[i].DRY_fat>10&&result[i].DRY_fat<30&&result[i].DRY_fiber<5&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=35)
						{
							list.push(AddObjToList(i,result[i].productName,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate));
						}
					}else if(catType == "胖成貓"){
						if(result[i].DRY_fat>9&&result[i].DRY_fat<20&&result[i].DRY_fiber>6&&result[i].DRY_fiber<15&&result[i].DRY_protein>30&&result[i].DRY_protein<45&&result[i].DRY_carbohydrate<=30)
						{
							list.push(AddObjToList(i,result[i].productName,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate));
						}
					}else if(catType == "幼貓"){
						if(result[i].DRY_fat>18&&result[i].DRY_fat<35&&result[i].DRY_protein>35&&result[i].DRY_protein<50)
						{
							list.push(AddObjToList(i,result[i].productName,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate));
						}
					}else if(catType == "懷孕貓"){
						if(result[i].DRY_fat>18&&result[i].DRY_fat<35&&result[i].DRY_protein>35&&result[i].DRY_protein<50)
						{
							list.push(AddObjToList(i,result[i].productName,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate));
						}
					}else if(catType == "泌乳貓"){
						if(result[i].DRY_fat>18&&result[i].DRY_fat<35&&result[i].DRY_protein>35&&result[i].DRY_protein<50)
						{
							list.push(AddObjToList(i,result[i].productName,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate));
						}
					}else if(catType == "交配貓"){
						if(result[i].DRY_fat>10&&result[i].DRY_fat<30&&result[i].DRY_protein>30&&result[i].DRY_protein<45)
						{
							list.push(AddObjToList(i,result[i].productName,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate));
						}
					}else if(catType == "老貓" || catType == "胖老貓"){
						if(result[i].DRY_fat>18&&result[i].DRY_fat<25&&result[i].DRY_fiber<=5&&result[i].DRY_protein>30&&result[i].DRY_protein<45)
						{
							list.push(AddObjToList(i,result[i].productName,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate));
						}
					}else if(catType == "老老貓" || catType == "胖老老貓"){
						if(result[i].DRY_fat>10&&result[i].DRY_fat<18&&result[i].DRY_fiber>6&&result[i].DRY_fiber<15&&result[i].DRY_protein>30&&result[i].DRY_protein<45)
						{
							list.push(AddObjToList(i,result[i].productName,result[i].productOriginal,result[i].price,result[i].kcal,result[i].protein,result[i].fat,result[i].ash,result[i].MeatLevel_total,result[i].DRY_protein,result[i].DRY_fat,result[i].DRY_carbohydrate));
						}
					}
				}			
			}
		}
		proteinAllList = proteinAllList.sort(function(a,b){
			return a - b;
		});
		var protein_medium = (protein_high + protein_low) / 2;
		var protein_medium_left = (protein_medium + protein_low) / 2;
		var protein_medium_right = (protein_high + protein_medium) / 2;
		//---------------------------------------
		// BASIC DATA SORT AND SLICE TO FIVE
		//---------------------------------------
		var listA = SliceListToFivePricePart_sorted(list,160,250);
		var listB = SliceListToFivePricePart_sorted(list,250,350);
		var listC = SliceListToFivePricePart_sorted(list,350,450);
		var listD = SliceListToFivePricePart_sorted(list,450,550);
		var listE = SliceListToFivePricePart_sorted(list,550,1000000);
		list = null;
		//---------------------------------------
		// ADVANCED RAX SELECTOR (進階篩選器)
		//---------------------------------------
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
		if(dailyProteinSelector == "typeA"){
			listA = DailyProteinSelector(listA,catType,kcal,catWeight);
			listB = DailyProteinSelector(listB,catType,kcal,catWeight);
			listC = DailyProteinSelector(listC,catType,kcal,catWeight);
			listD = DailyProteinSelector(listD,catType,kcal,catWeight);
			listE = DailyProteinSelector(listE,catType,kcal,catWeight);
		}
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
		if(metabolismSelector == "typeA"){
			listA = MetabolismSelectorTypeA(listA,catType,kcal);
			listB = MetabolismSelectorTypeA(listB,catType,kcal);
			listC = MetabolismSelectorTypeA(listC,catType,kcal);
			listD = MetabolismSelectorTypeA(listD,catType,kcal);
			listE = MetabolismSelectorTypeA(listE,catType,kcal);
		}
		if(metabolismSelector == "typeB"){
			listA = MetabolismSelectorTypeB(listA,catType,kcal);
			listB = MetabolismSelectorTypeB(listB,catType,kcal);
			listC = MetabolismSelectorTypeB(listC,catType,kcal);
			listD = MetabolismSelectorTypeB(listD,catType,kcal);
			listE = MetabolismSelectorTypeB(listE,catType,kcal);
		}
		//---------------------------------------
		// FINAL EDDIE SORTER (篩選後排序)
		//---------------------------------------
		if(meatLevelSelector == "open"){
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
		}
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
		//---------------------------------------
		// SEND INFORMATION TO FRONT END
		//---------------------------------------
		function InnerHTMLBuilderBasedOnList(list,lowerLimit,upperLimit){
			var innerHTML = "";
			innerHTML += "<div class='col-lg-12 col-md-12'>";
			innerHTML += "<h3 style='color: red;'>範圍 : "+lowerLimit+"~"+upperLimit+"</h3>";
			innerHTML += "</div>";
			for(i=0;i<list.length;i++){
				innerHTML += "<div class='col-lg-3 col-md-3'>";
				innerHTML += "<h5 style='height: 60px;'>產品 ： "+list[i].name+"</h5>";
				innerHTML += "<h5>價格 : "+list[i].price+"</h5>";
				innerHTML += "<h5>肉等級 : "+list[i].MeatLevel_total+"</h5>";
				innerHTML += "<h5>蛋白質 : "+list[i].protein+"</h5>";
				innerHTML += "<hr>";
				innerHTML += "</div>";
			}
			innerHTML += "<div class='col-lg-12 col-md-12'>";
			innerHTML += "<h4 style='color: blue;'>此部分總數 : "+list.length+"</h4>";
			innerHTML += "</div>";
			return innerHTML;
		}
		innerHTML += "<h4>分類 ： "+catType+"</h4>";
		innerHTML += "<h4>fat ： "+fat+"%</h4>";
		innerHTML += "<h4>idealWeight ： "+idealWeight+"kg</h4>";
		innerHTML += "<h4>RERCoefficient ： "+RERCoefficient+"%</h4>";
		innerHTML += "<h4>RER ： "+RER+"</h4>";
		if(catType == "胖成貓" || catType == "胖老貓" || catType == "胖老老貓"){
			innerHTML += "<h4>推薦kcal : "+kcal_fat+"</h4>";
			innerHTML += "<h4>最終kcal : "+kcal+"</h4>";
		}else{
			innerHTML += "<h4>kcal ： "+kcal+"</h4>";
		}			
		innerHTML += "<hr>";
		innerHTML += InnerHTMLBuilderBasedOnList(listA,160,250);
		innerHTML += InnerHTMLBuilderBasedOnList(listB,250,350);
		innerHTML += InnerHTMLBuilderBasedOnList(listC,350,450);
		innerHTML += InnerHTMLBuilderBasedOnList(listD,450,550);
		innerHTML += InnerHTMLBuilderBasedOnList(listE,550,10000);
		var listTotalLength = listA.length + listB.length + listC.length + listD.length + listE.length;
		innerHTML += "<div class='col-lg-12 col-md-12'>";
		innerHTML += "<h4 style='color: blue;'>總數 : "+listTotalLength+"</h4>";
		innerHTML += "</div>";
		res.send(innerHTML);
	});//con.query END	
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
// SHOW ALGORITHM RESULT
//------------------------------------------
app.get('/algorithmResult',function(req,res,next){
	res.render('algorithmResult');
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
// LIBRARY
//------------------------------------------
app.get('/library',function(req,res,next){
	if(req.session.cart==null) req.session.cart = [];
	res.render('library',{username: req.session.name,productLength:req.session.cart.length});
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