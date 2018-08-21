function sendCurrentDataToServer(exit){
	var basicJSON = JSON.stringify(basicInformation);
	var advancedJSON = JSON.stringify(advancedInformation);
	var iconJSON = JSON.stringify(iconInformation);
	var extraJSON = JSON.stringify(extraInformation);
	$.ajax({
		method : "POST",
		url : "/questionnaireSaveandQuit",
		data : {
			basicInformation : basicJSON,
			advancedInformation : advancedJSON,
			iconInformation : iconJSON,
			extraInformation : extraJSON,
			iconTravelList : JSON.stringify(iconTravelList),
			iconTraveledList : JSON.stringify(iconTraveledList),
			recordTravelList : JSON.stringify(recordTravelList),
			currentPage : JSON.stringify(currentPage),
			icon : JSON.stringify(icon),
			ingredients : JSON.stringify(ingredients),
			allergy : JSON.stringify(allergy),
			stress : JSON.stringify(stress),
			exit : exit
		}
	}).done(function(data){
		window.location.href = '/';
	});
}

function onloadWebUpdateInfo(){
	$.ajax({
		method : "POST",
		url : "/questionnaireRequest"
	}).done(function(data){
		if(data=="lackOfHistory"){
			transformPage("#temp","#BHELLO");
		}else if(data=="historyExist"){
			askRecordData();
			askArray();			
			transformPage("#temp","#BWELCOMEBACK");
		}else{
			alert("err!");
			document.location.href='/';
		}
	});
}
function askRecordData(){
	$.ajax({
		method : "POST",
		url : "/questionnaireAskRecordData",
		data : {
			request : "basicInformation"
		}
	}).done(function(data){
		pureData = JSON.parse(data);
		basicInformation = pureData;
	});
	$.ajax({
		method : "POST",
		url : "/questionnaireAskRecordData",
		data : {
			request : "advancedInformation"
		}
	}).done(function(data){
		pureData = JSON.parse(data);
		advancedInformation = pureData;
	});
	$.ajax({
		method : "POST",
		url : "/questionnaireAskRecordData",
		data : {
			request : "iconInformation"
		}
	}).done(function(data){
		pureData = JSON.parse(data);
		iconInformation = pureData;
	});
	$.ajax({
		method : "POST",
		url : "/questionnaireAskRecordData",
		data : {
			request : "extraInformation"
		}
	}).done(function(data){
		pureData = JSON.parse(data);
		extraInformation = pureData;
	});
}
function askArray(){	
	$.ajax({
		method : "POST",
		url : "/questionnaireAskArray",
		data : {
			request : "iconTravelList"
		}
	}).done(function(data){
		pureData = JSON.parse(data);
		iconTravelList = pureData;
	});
	$.ajax({
		method : "POST",
		url : "/questionnaireAskArray",
		data : {
			request : "iconTraveledList"
		}
	}).done(function(data){
		pureData = JSON.parse(data);
		iconTraveledList = pureData;
	});
	$.ajax({
		method : "POST",
		url : "/questionnaireAskArray",
		data : {
			request : "recordTravelList"
		}
	}).done(function(data){
		pureData = JSON.parse(data);
		recordTravelList = pureData;
	});
	$.ajax({
		method : "POST",
		url : "/questionnaireAskArray",
		data : {
			request : "icon"
		}
	}).done(function(data){
		pureData = JSON.parse(data);
		icon = pureData;
	});
	$.ajax({
		method : "POST",
		url : "/questionnaireAskArray",
		data : {
			request : "ingredients"
		}
	}).done(function(data){
		pureData = JSON.parse(data);
		ingredients = pureData;
	});
	$.ajax({
		method : "POST",
		url : "/questionnaireAskArray",
		data : {
			request : "allergy"
		}
	}).done(function(data){
		pureData = JSON.parse(data);
		allergy = pureData;
	});
	$.ajax({
		method : "POST",
		url : "/questionnaireAskArray",
		data : {
			request : "stress"
		}
	}).done(function(data){
		pureData = JSON.parse(data);
		stress = pureData;
	});
	$.ajax({
		method : "POST",
		url : "/questionnaireAskArray",
		data : {
			request : "currentPage"
		}
	}).done(function(data){
		pureData = JSON.parse(data);
		currentPage = pureData;
	});
}
function rebuildIcon(){
	//AIC select
	if(currentPage=="#AIC"){
		if(icon[0]==1) document.getElementById('AIC_IMMU').innerHTML = '<img src="images/questionnaire/icon/blue/IMMU.png">';
		if(icon[1]==1) document.getElementById('AIC_HEART').innerHTML = '<img src="images/questionnaire/icon/blue/HEART.png">';
		if(icon[2]==1) document.getElementById('AIC_MEHAIR').innerHTML = '<img src="images/questionnaire/icon/blue/MEHAIR.png">';
		if(icon[3]==1) document.getElementById('AIC_LIHAIR').innerHTML = '<img src="images/questionnaire/icon/blue/LIHAIR.png">';
		if(icon[4]==1) document.getElementById('AIC_LOHAIR').innerHTML = '<img src="images/questionnaire/icon/blue/LOHAIR.png">';
		if(icon[5]==1) document.getElementById('AIC_SKIN').innerHTML = '<img src="images/questionnaire/icon/blue/SKIN.png">';
		if(icon[6]==1) document.getElementById('AIC_JOINT').innerHTML = '<img src="images/questionnaire/icon/blue/JOINT.png">';
		if(icon[7]==1) document.getElementById('AIC_BONE').innerHTML = '<img src="images/questionnaire/icon/blue/BONE.png">';
		if(icon[8]==1) document.getElementById('AIC_ADDWEI').innerHTML = '<img src="images/questionnaire/icon/blue/ADDWEI.png">';
		if(icon[9]==1) document.getElementById('AIC_OVERWEI').innerHTML = '<img src="images/questionnaire/icon/blue/OVERWEI.png">';
		if(icon[10]==1) document.getElementById('AIC_STOMA').innerHTML = '<img src="images/questionnaire/icon/blue/STOMA.png">';
		if(icon[11]==1) document.getElementById('AIC_STRESS').innerHTML = '<img src="images/questionnaire/icon/blue/STRESS.png">';
		if(icon[12]==1) document.getElementById('AIC_MOUTH').innerHTML = '<img src="images/questionnaire/icon/blue/MOUTH.png">';
	}	
	//EFI
	if(currentPage=="#EFI"){
		if(ingredients[0]==1) $("#EFI_BEEF").toggleClass("iconSelected");
		if(ingredients[1]==1) $("#EFI_SLAM").toggleClass("iconSelected");
		if(ingredients[2]==1) $("#EFI_CHIC").toggleClass("iconSelected");
		if(ingredients[3]==1) $("#EFI_DUCK").toggleClass("iconSelected");
		if(ingredients[4]==1) $("#EFI_TURK").toggleClass("iconSelected");
		if(ingredients[5]==1) $("#EFI_FISH").toggleClass("iconSelected");
		if(ingredients[6]==1) $("#EFI_DEER").toggleClass("iconSelected");
		if(ingredients[7]==1) $("#EFI_PIG").toggleClass("iconSelected");
		if(ingredients[8]==1) $("#EFI_unsure").toggleClass("iconSelected");
	}
	//EAD
	if(currentPage=="#EFI"){
		if(allergy[0]==1) $("#EAD_BEEF").toggleClass("iconSelected");
		if(allergy[1]==1) $("#EAD_SLAM").toggleClass("iconSelected");
		if(allergy[2]==1) $("#EAD_CHIC").toggleClass("iconSelected");
		if(allergy[3]==1) $("#EAD_DUCK").toggleClass("iconSelected");
		if(allergy[4]==1) $("#EAD_TURK").toggleClass("iconSelected");
		if(allergy[5]==1) $("#EAD_FISH").toggleClass("iconSelected");
		if(allergy[6]==1) $("#EAD_DEER").toggleClass("iconSelected");
		if(allergy[7]==1) $("#EAD_PIG").toggleClass("iconSelected");
		if(allergy[8]==1) $("#EAD_no").toggleClass("iconSelected");
		if(allergy[9]==1) $("#EAD_unsure").toggleClass("iconSelected");
	}
	//IPR
	if(currentPage=="#EFI"){
		if(stress[0]==1) $("#IPR_STRA").toggleClass("iconSelected");
		if(stress[1]==1) $("#IPR_STRB").toggleClass("iconSelected");
		if(stress[2]==1) $("#IPR_STRC").toggleClass("iconSelected");
		if(stress[3]==1) $("#IPR_STRD").toggleClass("iconSelected");
		if(stress[4]==1) $("#IPR_STRE").toggleClass("iconSelected");
		if(stress[5]==1) $("#IPR_no").toggleClass("iconSelected");	
	}
	//FIRST PAGE
	if(currentPage=="#EFI"){
		if(basicInformation.sex == customBasicEnum.boy) $("#BKS_boy").toggleClass("iconSelected");
		if(basicInformation.sex == customBasicEnum.girl) $("#BKS_girl").toggleClass("iconSelected");
		if(basicInformation.age == customBasicEnum._18_) {$("#BKA_18-").toggleClass("iconSelected");keeperAge[0] = 1;}	
		if(basicInformation.age == customBasicEnum._18_25) {$("#BKA_18-25").toggleClass("iconSelected");keeperAge[1] = 1;}	
		if(basicInformation.age == customBasicEnum._26_35) {$("#BKA_26-35").toggleClass("iconSelected");keeperAge[2] = 1;}	
		if(basicInformation.age == customBasicEnum._36_45) {$("#BKA_36-45").toggleClass("iconSelected");keeperAge[3] = 1;}	
		if(basicInformation.age == customBasicEnum._46_65) {$("#BKA_46-65").toggleClass("iconSelected");keeperAge[4] = 1;}	
		if(basicInformation.age == customBasicEnum._65_) {$("#BKA_65-").toggleClass("iconSelected");keeperAge[5] = 1;}	
	}	
}
function rebuildValue(){
	
}