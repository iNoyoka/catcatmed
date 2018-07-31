//--------------------------------------------
// Transition Page (for only animation page)
//--------------------------------------------
var animationLock = 0;
function trans_hello(){
	var functionA = setInterval(myFunction,2000);
	function myFunction(){
		transformPage("#BHELLO","#BKN");
		clearInterval(functionA);
	}
}
function trans_welcomeBack(){
	var functionA = setInterval(myFunction,1000);
	function myFunction(){
		transformPage("#BWELCOMEBACK",currentPage);
		if(currentPage != "#BKN" && currentPage != "#BHELLO") $("#backButton_TOP").fadeIn(10);
		clearInterval(functionA);
	}
}
function trans_nicetomeetyou(){
	var Ainner = "<span>" + basicInformation.name + ", " + basicInformation.catName + "很高興認識你們</span>";
	var Binner = "<br><span class='smallSpan'>飲食可以改善身體狀況</span><br><span class='smallSpan'>我們相信因為有我們的存在，" + basicInformation.catName + "也會變得更健康</span><br><span class='smallSpan'>就讓我們用五分鐘，來幫" + basicInformation.catName + "做個飲食健檢吧~</span>";
	document.getElementById("BNICE_A").innerHTML = Ainner;
	document.getElementById("BNICE_B").innerHTML = Binner;
	var functionA = setInterval(myFunctionA,0);
	var functionB = setInterval(myFunctionB,4000);
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
	var catage = basicInformation.catAge * 7;
	var Ainner = "<span>貓咪的一年大約等於人類的七年，" + basicInformation.catName + "已經" + catage + "歲了！</span>";
	var Binner;
	if(catage>=60){
		Binner = "<br><span class='smallSpan'>你有一隻爺爺貓喔！</span>";
		document.getElementById("BAGE_B").innerHTML = Binner;
	}else if(catage>=40 && catage<60){
		Binner = "<br><span class='smallSpan'>你的貓要更年期囉！</span>";
		document.getElementById("BAGE_B").innerHTML = Binner;
	}else if(catage<40){
		Binner = "<br><span class='smallSpan'>你的貓還年輕有活力喔！</span>";
		document.getElementById("BAGE_B").innerHTML = Binner;
	}
	document.getElementById("BAGE_A").innerHTML = Ainner;
	var functionA = setInterval(myFunctionA,0);
	var functionB = setInterval(myFunctionB,5000);
	function myFunctionA(){
		$("#BAGE_A").fadeIn(1500,function(){
			$("#BAGE_B").fadeIn(1500,function(){				
				clearInterval(functionA);
			});
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
	document.getElementById("BPREGPAGE_A").innerHTML = Ainner;
	document.getElementById("BPREGPAGE_B").innerHTML = Binner;
	var functionA = setInterval(myFunctionA,0);
	var functionB = setInterval(myFunctionB,7000);
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
	var functionB = setInterval(myFunctionB,5000);
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
	var functionB = setInterval(myFunctionB,5000);
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