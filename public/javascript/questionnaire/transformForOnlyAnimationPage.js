//--------------------------------------------
// Transition Page (for only animation page)
//--------------------------------------------
var animationLock = 0;
function trans_hello(){
	var functionA = setInterval(myFunctionA,500);
	var functionB = setInterval(myFunctionB,1000);
	var functionC = setInterval(myFunctionC,1500);
	var functionD = setInterval(myFunctionD,2000);
	
	var functionE = setInterval(myFunctionE,2050);
	var functionF = setInterval(myFunctionF,2100);
	var functionG = setInterval(myFunctionG,2150);
	var functionH = setInterval(myFunctionH,2200);
	var functionI = setInterval(myFunctionI,2250);
	var functionJ = setInterval(myFunctionJ,2300);
	var functionK = setInterval(myFunctionK,2350);
	var functionL = setInterval(myFunctionL,2400);
	var functionM = setInterval(myFunctionM,2450);
	var functionN = setInterval(myFunctionN,2500);
	var functionO = setInterval(myFunctionO,2550);
	var functionP = setInterval(myFunctionP,2600);
	var functionQ = setInterval(myFunctionQ,3000);
	document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-08.png">';
	function myFunctionA(){
		document.getElementById("BHELLO").innerHTML += '<img class="BHELLO-img" src="images/questionnaire/icons-01.png">';
		clearInterval(functionA);
	}
	function myFunctionB(){
		document.getElementById("BHELLO").innerHTML += '<img class="BHELLO-img" src="images/questionnaire/icons-02.png">';
		clearInterval(functionB);
	}
	function myFunctionC(){
		document.getElementById("BHELLO").innerHTML += '<img class="BHELLO-img" src="images/questionnaire/icons-03.png">';
		clearInterval(functionC);
	}
	function myFunctionD(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-08.png">';
		clearInterval(functionD);
	}
	function myFunctionE(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-04.png">';
		clearInterval(functionE);
	}
	function myFunctionF(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-05.png">';
		clearInterval(functionF);
	}
	function myFunctionG(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-04.png">';
		clearInterval(functionG);
	}
	function myFunctionH(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-08.png">';
		clearInterval(functionH);
	}
	function myFunctionI(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-06.png">';
		clearInterval(functionI);
	}
	function myFunctionJ(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-07.png">';
		clearInterval(functionJ);
	}
	function myFunctionK(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-06.png">';
		clearInterval(functionK);
	}
	function myFunctionL(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-08.png">';
		clearInterval(functionL);
	}
	function myFunctionM(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-04.png">';
		clearInterval(functionM);
	}
	function myFunctionN(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-05.png">';
		clearInterval(functionN);
	}
	function myFunctionO(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-04.png">';
		clearInterval(functionO);
	}
	function myFunctionP(){
		document.getElementById("BHELLO").innerHTML = '<img class="BHELLO-img" src="images/questionnaire/icons-08.png">';
		document.getElementById("BHELLO").innerHTML += '<h3 class="BHELLO-img">HELLO</h3>';
		clearInterval(functionP);
	}
	function myFunctionQ(){
		transformPage("#BHELLO","#BKN");
		clearInterval(functionQ);
	}	
}
function trans_welcomeBack(){
	var functionA = setInterval(myFunction,1000);
	document.getElementById("BWELCOMEBACK").innerHTML = "歡迎回來";
	function myFunction(){
		transformPage("#BWELCOMEBACK",currentPage);
		if(currentPage != "#BKN" && currentPage != "#BHELLO") $("#backButton_TOP").fadeIn(10);
		clearInterval(functionA);
	}
}
function trans_nicetomeetyou(){
	var Ainner = "<span>Hello, " + basicInformation.name + " and " + basicInformation.catName + ".<br>很高興認識你們</span>";
	var Binner = "<br><span>飲食可以改善身體狀況，</span><br><span>我相信因為有我們的存在，" + basicInformation.catName + "也會變得更健康</span><br><span>就讓我們用五分鐘，來幫" + basicInformation.catName + "做個飲食健檢吧～</span>";
	document.getElementById("BNICEMEET").innerHTML = "<div id = 'BNICE_A' class='animationInvisable'></div><div id = 'BNICE_B' class='animationInvisable'></div>";
	document.getElementById("BNICE_A").innerHTML = Ainner;
	document.getElementById("BNICE_B").innerHTML = Binner;
	var functionA = setInterval(myFunctionA,0);
	var functionB = setInterval(myFunctionB,5000);
	function myFunctionA(){
		$("#BNICE_A").fadeIn(1500,function(){
			$("#BNICE_B").fadeIn(1500,function(){				
				clearInterval(functionA);
			});
		});
	}
	function myFunctionB(){
		transformPage("#BNICEMEET","#BCS");
		clearInterval(functionB);
	}
}
function trans_agePage(){
	var Ainner;
	var catageyear;
	document.getElementById("BAGECAL").innerHTML = "<div id = 'BAGE_A' class='animationInvisable'></div>";
	if(basicInformation.catAgeYear==0){
		Ainner = '<img src="images/questionnaire/icons-10.png"><br>';
		if(basicInformation.catAgeMonth==2 || basicInformation.catAgeMonth==1){
			Ainner += "<span>※貓咪一年大約等於人類的七年，" + basicInformation.catName + "已經 3 歲了！</span><br><span>您的貓正處於需要多加關照的年紀喔</span>";
			document.getElementById("BAGE_A").innerHTML = Ainner;
		}else if(basicInformation.catAgeMonth==4 || basicInformation.catAgeMonth==3){
			Ainner += "<span>※貓咪一年大約等於人類的七年，" + basicInformation.catName + "已經 6 歲了！</span><br><span>您的貓正處於需要多加關照的年紀喔</span>";
			document.getElementById("BAGE_A").innerHTML = Ainner;
		}else if(basicInformation.catAgeMonth==6 || basicInformation.catAgeMonth==5){
			Ainner += "<span>※貓咪一年大約等於人類的七年，" + basicInformation.catName + "已經 9 歲了！</span><br><span>您的貓正處於需要多加關照的年紀喔</span>";
			document.getElementById("BAGE_A").innerHTML = Ainner;
		}else if(basicInformation.catAgeMonth==8 || basicInformation.catAgeMonth==7){
			Ainner += "<span>※貓咪一年大約等於人類的七年，" + basicInformation.catName + "已經 11 歲了！</span><br><span>您的貓正處於需要多加關照的年紀喔</span>";
			document.getElementById("BAGE_A").innerHTML = Ainner;
		}else if(basicInformation.catAgeMonth==10 || basicInformation.catAgeMonth==9 || basicInformation.catAgeMonth==11){
			Ainner += "<span>※貓咪一年大約等於人類的七年，" + basicInformation.catName + "已經 13 歲了！</span><br><span>您的貓正處於需要多加關照的年紀喔</span>";
			document.getElementById("BAGE_A").innerHTML = Ainner;
		}
	}else if(basicInformation.catAgeYear >= 1 && basicInformation.catAgeYear < 7){
		Ainner = '<img src="images/questionnaire/icons-11.png"><br>';
		if(basicInformation.catAgeYear == 1){
			Ainner += "<span>※貓咪一年大約等於人類的七年，" + basicInformation.catName + "已經 15 歲了！</span><br><span>您的貓還年輕有活力喔！</span>";
			document.getElementById("BAGE_A").innerHTML = Ainner;
		}else if(basicInformation.catAgeYear == 2){
			Ainner += "<span>※貓咪一年大約等於人類的七年，" + basicInformation.catName + "已經 25 歲了！</span><br><span>您的貓還年輕有活力喔！</span>";
			document.getElementById("BAGE_A").innerHTML = Ainner;
		}else if(basicInformation.catAgeYear >= 3){
			var age = (basicInformation.catAgeYear - 3 + 1) * 4 + 25;
			Ainner += "<span>※貓咪一年大約等於人類的七年，" + basicInformation.catName + "已經 "+age+" 歲了！</span><br><span>您的貓還年輕有活力喔！</span>";
			document.getElementById("BAGE_A").innerHTML = Ainner;
		}
	}else if(basicInformation.catSex==customBasicEnum.boy &&  basicInformation.catAgeYear >= 7){
		var age = (basicInformation.catAgeYear - 3 + 1) * 4 + 25;
		if(basicInformation.catAgeYear >= 7 && basicInformation.catAgeYear < 12){
			Ainner = '<img src="images/questionnaire/icons-13.png"><br>';
			Ainner += "<span>※貓咪一年大約等於人類的七年，" + basicInformation.catName + "已經 "+age+" 歲了！</span><br><span>您的貓要更年期囉！</span>";
			document.getElementById("BAGE_A").innerHTML = Ainner;
		}else{
			Ainner = '<img src="images/questionnaire/icons-15.png"><br>';
			Ainner += "<span>※貓咪一年大約等於人類的七年，" + basicInformation.catName + "已經 "+age+" 歲了！</span><br><span>您有一隻爺爺貓喔！</span>";
			document.getElementById("BAGE_A").innerHTML = Ainner;
		}
	}else if(basicInformation.catSex==customBasicEnum.girl &&  basicInformation.catAgeYear >= 7){
		var age = (basicInformation.catAgeYear - 3 + 1) * 4 + 25;
		if(basicInformation.catAgeYear >= 7 && basicInformation.catAgeYear < 12){
			Ainner = '<img src="images/questionnaire/icons-12.png"><br>';
			Ainner += "<span>※貓咪一年大約等於人類的七年，" + basicInformation.catName + "已經 "+age+" 歲了！</span><br><span>您的貓要更年期囉！</span>";
			document.getElementById("BAGE_A").innerHTML = Ainner;
		}else{
			Ainner = '<img src="images/questionnaire/icons-14.png"><br>';
			Ainner += "<span>※貓咪一年大約等於人類的七年，" + basicInformation.catName + "已經 "+age+" 歲了！</span><br><span>您有一隻奶奶貓喔！</span>";
			document.getElementById("BAGE_A").innerHTML = Ainner;
		}
	}
	var functionA = setInterval(myFunctionA,0);	
	var functionB = setInterval(myFunctionB,3000);
	function myFunctionA(){
		$("#BAGE_A").fadeIn(1500,function(){				
			clearInterval(functionA);
		});
	}
	function myFunctionB(){
		transformPage("#BAGECAL","#BSP");
		clearInterval(functionB);
	}
}
function trans_pregpage(){
	var Ainner = "<span>好的，卡卡貓會依照" + basicInformation.catName + "的懷孕狀況加入至我們推薦菜單裡~</span>";
	var Binner = "<br><span>也預祝" + basicInformation.catName + "生產順利喔！</span>";
	document.getElementById("BPREGPAGE").innerHTML = "<div id = 'BPREGPAGE_A' class='animationInvisable'></div><div id = 'BPREGPAGE_B' class='animationInvisable'></div>";
	document.getElementById("BPREGPAGE_A").innerHTML = Ainner;
	document.getElementById("BPREGPAGE_B").innerHTML = Binner;
	var functionA = setInterval(myFunctionA,0);	
	var functionB = setInterval(myFunctionB,3500);
	function myFunctionA(){
		$("#BPREGPAGE_A").fadeIn(1500,function(){
			$("#BPREGPAGE_B").fadeIn(1500,function(){				
				clearInterval(functionA);
			});
		});
	}
	function myFunctionB(){
		transformPage("#BPREGPAGE","#BCW");
		clearInterval(functionB);
	}
}
function trans_specialfood(){
	var Ainner = "<span>卡卡貓建議您遵循您的家庭獸醫的指示，繼續使用處方飼料</span>";
	var Binner = "<br><span>感謝您的填寫，也祝您的" + basicInformation.catName + "可以更健康！</span>";
	document.getElementById("ASPECIALFOOD").innerHTML = "<div id = 'ASPECIALFOOD_A' class='animationInvisable'></div><div id = 'ASPECIALFOOD_B' class='animationInvisable'></div>";
	document.getElementById("ASPECIALFOOD_A").innerHTML = Ainner;
	document.getElementById("ASPECIALFOOD_B").innerHTML = Binner;
	var functionA = setInterval(myFunctionA,100);
	
	function myFunctionA(){
		$("#ASPECIALFOOD_A").fadeIn(1500,function(){
			$("#ASPECIALFOOD_B").fadeIn(1500,function(){				
				clearInterval(functionA);
				//exp
				animationLock = 0;
			});
		});
	}
}
function trans_keepexpert(){
	var Ainner;
	var Binner;
	document.getElementById("EKEEPEXP").innerHTML = "<div id = 'EKEEPEXP_A' class='animationInvisable'></div><div id = 'EKEEPEXP_B' class='animationInvisable'></div>";
	if(extraInformation.EKL==customExtraEnum.EKL_EXP){
		Ainner = "<span>好的</span>";
		Binner = "<br><span>也希望卡卡貓的飼育資訊也能有幫助到您的地方~</span>";
		document.getElementById("EKEEPEXP_A").innerHTML = Ainner;
		document.getElementById("EKEEPEXP_B").innerHTML = Binner;		
	}else if(extraInformation.EKL==customExtraEnum.EKL_STU){
		Ainner = "<span>" + basicInformation.catName + "也因為你的積極地學習生活的越來越好了喔~</span>";
		Binner = "<br><span>再多加油~~！</span>";
		document.getElementById("EKEEPEXP_A").innerHTML = Ainner;
		document.getElementById("EKEEPEXP_B").innerHTML = Binner;	
	}else{
		Ainner = "<span>別擔心</span>";
		Binner = "<br><span>卡卡貓會帶領你並且給妳更多飼育貓咪的小訣竅！</span>";
		document.getElementById("EKEEPEXP_A").innerHTML = Ainner;
		document.getElementById("EKEEPEXP_B").innerHTML = Binner;	
	}	
	var functionA = setInterval(myFunctionA,0);
	
	var functionB = setInterval(myFunctionB,3500);
	function myFunctionA(){
		$("#EKEEPEXP_A").fadeIn(1500,function(){
			$("#EKEEPEXP_B").fadeIn(1500,function(){				
				clearInterval(functionA);
			});
		});
	}
	function myFunctionB(){
		transformPage("#EKEEPEXP","#ENL");
		clearInterval(functionB);
	}
}
function trans_nutritionexpert(){
	var Ainner;
	var Binner;
	document.getElementById("ENUTRIEXP").innerHTML = "<div id = 'ENUTRIEXP_A' class='animationInvisable'></div><div id = 'ENUTRIEXP_B' class='animationInvisable'></div>";
	if(extraInformation.ENL==customExtraEnum.ENL_EXP){
		Ainner = "<span>" + basicInformation.catName + "一定也因為你的專業而變得更健康了呢！</span>";
		Binner = "<br><span>也讓卡卡貓與您一起努力，讓" + basicInformation.catName + "變得更幸福更健康~</span>";
		document.getElementById("ENUTRIEXP_A").innerHTML = Ainner;
		document.getElementById("ENUTRIEXP_B").innerHTML = Binner;
	}else if(extraInformation.ENL==customExtraEnum.ENL_STU){
		Ainner = "<span>希望您也能在學習的過程中越來越有收穫</span>";
		Binner = "<br><span>卡卡貓也會與您一起加油的~~</span>";
		document.getElementById("ENUTRIEXP_A").innerHTML = Ainner;
		document.getElementById("ENUTRIEXP_B").innerHTML = Binner;
	}else{
		Ainner = "<span>請放心，卡卡貓專業的獸醫團隊會照顧" + basicInformation.catName + "的飲食健康</span>";
		Binner = "<br><span>因為我們重視" + basicInformation.catName + "就像你重視" + basicInformation.catName + "一樣，我們會給您全面並且完整的健康營養資訊~</span>";
		document.getElementById("ENUTRIEXP_A").innerHTML = Ainner;
		document.getElementById("ENUTRIEXP_B").innerHTML = Binner;
	}
	var functionA = setInterval(myFunctionA,0);
	
	var functionB = setInterval(myFunctionB,3500);
	function myFunctionA(){
		$("#ENUTRIEXP_A").fadeIn(1500,function(){
			$("#ENUTRIEXP_B").fadeIn(1500,function(){				
				clearInterval(functionA);
			});
		});
	}
	function myFunctionB(){
		transformPage("#ENUTRIEXP","#EFB");
		clearInterval(functionB);
	}
}
function trans_addwei(){
	var Ainner = "臨時加一個要增重的動畫QQ";
	document.getElementById("IAW").innerHTML = "<div id = 'IAW_A' class='animationInvisable'></div>";
	document.getElementById("IAW_A").innerHTML = Ainner;
	var functionA = setInterval(myFunctionA,0);
	var functionB = setInterval(myFunctionB,1500);
	function myFunctionA(){
		$("#IAW_A").fadeIn(500);
		clearInterval(functionA);
	}
	function myFunctionB(){
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IAW",newPage);		
		clearInterval(functionB);
	}
}
function trans_overwei(){
	document.getElementById("ILW").innerHTML = "<div id = 'ILW_A' class='animationInvisable'></div>";
	var Ainner = "臨時在加一個你家貓太胖的動畫QQ";
	document.getElementById("ILW_A").innerHTML = Ainner;
	var functionA = setInterval(myFunctionA,0);
	
	var functionB = setInterval(myFunctionB,1500);
	function myFunctionA(){
		$("#ILW_A").fadeIn(500);
		clearInterval(functionA);
	}
	function myFunctionB(){
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#ILW",newPage);		
		clearInterval(functionB);
	}
}
function showResult(){
	var Ainner = "<span>感謝您的填寫！</span>";
	var Binner = "<br><br><span>卡卡貓正在對於填卷結果進行分析，分析完成之後會將結果寄送到您的email！</span>";
	var Cinner = "<br><span>希望您能有一個美好的一天~</span>";
	var Dinner = "<br><br><button><a href='/'>點 此 返 回 首 頁</a></button>";
	document.getElementById("RESULT").innerHTML = "<div id = 'RESULT_A' class='animationInvisable'></div><div id = 'RESULT_B' class='animationInvisable'></div><div id = 'RESULT_C' class='animationInvisable'></div><div id = 'RESULT_D' class='animationInvisable'></div>";
	document.getElementById("RESULT_A").innerHTML = Ainner;
	document.getElementById("RESULT_B").innerHTML = Binner;
	document.getElementById("RESULT_C").innerHTML = Cinner;
	document.getElementById("RESULT_D").innerHTML = Dinner;
	var functionA = setInterval(myFunctionA,100);
	
	function myFunctionA(){
		$("#RESULT_A").fadeIn(1000,function(){
			$("#RESULT_B").fadeIn(1000,function(){				
				$("#RESULT_C").fadeIn(1000,function(){				
					$("#RESULT_D").fadeIn(1000,function(){				
						clearInterval(functionA);
					});
				});
			});
		});
	}
}