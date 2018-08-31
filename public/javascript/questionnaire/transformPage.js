// 使用者填完表格後按下enter可以直接觸發BUTTON的事件，是比較人性化的設計
function enterPress(id,event){
	var x = event.which || event.keyCode;
	var y = id.slice(0,3) + "Button";
	if(x==13)  document.getElementById(y).click();
}
//------------------------------------------------
// ADD TO LIST :
//     A. SAVE VALUE TO ENUMDATA
//     B. DETERMINE NEXT PAGE and CALL PAGE TRANSFORM 
//	   C. FEW DIRECT CHANGE OF PAGE IS ALLOWED
//------------------------------------------------
function addToList(id){	
	//BKN BCN
	if(id=="BKNButton"){
		if($("#BKNEnter").val()!="" && basicInformation.sex != "無資料" && basicInformation.age != "無資料"){
			basicInformation.name = $("#BKNEnter").val();
			transformPage("#BKN","#BCN");
			$("#backButton_TOP").fadeIn(10);
		}
	}
	//BCN
	if(id=="BCNButton"){
		if($("#BCNEnter").val()!=""){
			basicInformation.catName = $("#BCNEnter").val();			
			transformPage("#BCN","#BNICEMEET");		
		}
	}
	//BCS
	if(id=="BCS_girl"){
		basicInformation.catSex = customBasicEnum.girl;
		transformPage("#BCS","#BCA");
	}
	if(id=="BCS_boy"){
		basicInformation.catSex = customBasicEnum.boy;
		transformPage("#BCS","#BCA");
	}
	//BCA
	if(id=="BCAButton"){
		if(catage_year_var!="0" || catage_month_var!="0"){
			var year = parseInt(catage_year_var);
			var month = parseInt(catage_month_var);
			basicInformation.catAgeYear = year;
			basicInformation.catAgeMonth = month;
			transformPage("#BCA","#BAGECAL");	
		}else{
			alert("請填寫"+basicInformation.catName+"的年齡喔~");
		}			
	}
	//BSP
	if(id=="BSPButton"){
		if(catSpecies!=""){
			basicInformation.species = catSpecies;				
			transformPage("#BSP","#BNU");
		}
	}
	if(id=="BSPMix"){
		basicInformation.species = "Mix";
		transformPage("#BSP","#BNU");
	}
	//BNU
	if(id=="BNU_yes"){
		basicInformation.ligation = customBasicEnum.yes;
		transformPage("#BNU","#BCW");	
	}
	if(id=="BNU_no"){
		basicInformation.ligation = customBasicEnum.no;
		// 如果貓咪是女生而且沒有結紮的情況
		if(basicInformation.catSex==customBasicEnum.girl)	transformPage("#BNU","#BPR");	
		else	transformPage("#BNU","#BCW");
	}
	//BPR
	if(id=="BPR_yes"){
		basicInformation.pregnancy = customBasicEnum.yes;
		transformPage("#BPR","#BPT");
	}
	if(id=="BPR_no"){
		basicInformation.pregnancy = customBasicEnum.no;
		transformPage("#BPR","#BCW");
	}
	//BPT
	if(id=="BPT_1to3"){
		basicInformation.pregnancyTime = customBasicEnum._1to3;
		transformPage("#BPT","#BPREGPAGE");
	}
	if(id=="BPT_3to6"){
		basicInformation.pregnancyTime = customBasicEnum._3to6;
		transformPage("#BPT","#BPREGPAGE");
	}
	if(id=="BPT_6up"){
		basicInformation.pregnancyTime = customBasicEnum._6up;
		transformPage("#BPT","#BPREGPAGE");
	}
	if(id=="BPT_unsure"){
		basicInformation.pregnancyTime = customBasicEnum.unsure;
		transformPage("#BPT","#BPREGPAGE");
	}
	//BCW
	if(id=="BCWButton"){
		if(catwei_kilo_var!="0" || catwei_gram_var!="0"){
			var kilo = parseInt(catwei_kilo_var);
			var gram = parseInt(catwei_gram_var);
			basicInformation.catWeightKilo = kilo;
			basicInformation.catWeightGram = gram;
			transformPage("#BCW","#BEF");	
		}else{
			alert("請填寫"+basicInformation.catName+"的體重喔~");
		}	
	}
	//BEF
	if(id=="BEF_highFreq"){
		basicInformation.catExerciseFreq = customBasicEnum.highFreq;
		transformPage("#BEF","#BSI");
	}
	if(id=="BEF_medFreq"){
		basicInformation.catExerciseFreq = customBasicEnum.medFreq;
		// 如果貓咪有懷孕的話，略過偵測bcs的部分
		if(basicInformation.pregnancy==customBasicEnum.yes)	transformPage("#BEF","#ARC");
		else	transformPage("#BEF","#BBC");
	}
	if(id=="BEF_lowFreq"){
		basicInformation.catExerciseFreq = customBasicEnum.lowFreq;
		// 如果貓咪有懷孕的話，略過偵測bcs的部分
		if(basicInformation.pregnancy==customBasicEnum.yes)	transformPage("#BEF","#ARC");
		else	transformPage("#BEF","#BBC");
	}
	//BSI
	if(id=="BSI_inside"){
		basicInformation.catSide = customBasicEnum.inside;
		// 如果貓咪有懷...
		if(basicInformation.pregnancy==customBasicEnum.yes)	transformPage("#BSI","#ARC");
		else	transformPage("#BSI","#BBC");
	}
	if(id=="BSI_outside"){
		basicInformation.catSide = customBasicEnum.outside;
		// 如果貓咪有懷...
		if(basicInformation.pregnancy==customBasicEnum.yes)	transformPage("#BSI","#ARC");
		else	transformPage("#BSI","#BBC");
	}
	if(id=="BSI_medside"){
		basicInformation.catSide = customBasicEnum.medside;
		// 如果貓咪有懷...
		if(basicInformation.pregnancy==customBasicEnum.yes)	transformPage("#BSI","#ARC");
		else	transformPage("#BSI","#BBC");
	}
	//BBC
	if(id=="BBC_tooThin"){
		basicInformation.catSize = customBasicEnum.tooThin;
		transformPage("#BBC","#ARC");		
	}
	if(id=="BBC_aLittleThin"){
		basicInformation.catSize = customBasicEnum.aLittleThin;
		transformPage("#BBC","#ARC");
	}
	if(id=="BBC_medium"){
		basicInformation.catSize = customBasicEnum.medium;
		transformPage("#BBC","#ARC");
	}
	if(id=="BBC_aLittleFat"){
		basicInformation.catSize = customBasicEnum.aLittleFat;
		transformPage("#BBC","#ARC");
	}
	if(id=="BBC_tooFat"){
		basicInformation.catSize = customBasicEnum.tooFat;
		transformPage("#BBC","#ARC");		
	}
	//ARC
	if(id=="ARC_SPE"){
		advancedInformation.ARC = customAdvancedEnum.ARC_SPE;
		transformPage("#ARC","#ANM");		
	}
	if(id=="ARC_DAE"){
		advancedInformation.ARC = customAdvancedEnum.ARC_DAE;
		transformPage("#ARC","#AIC");		
	}
	if(id=="ARC_KNO"){
		advancedInformation.ARC = customAdvancedEnum.ARC_KNO;
		transformPage("#ARC","#AIC");		
	}
	//ANM
	if(id=="ANM_yes"){
		advancedInformation.ANM = customAdvancedEnum.YES;
		transformPage("#ANM","#AWM");
	}
	if(id=="ANM_no"){
		advancedInformation.ANM = customAdvancedEnum.NO;
		transformPage("#ANM","#AIC");
	}
	//AWM
	if(id=="AWM_unsure"){
		advancedInformation.AWM = customAdvancedEnum.UNSURE;
		transformPage("#AWM","#ASPECIALFOOD");			
	}
	if(id=="AWMButton"){
		if($("#AWMEnter").val()!=""){
			advancedInformation.AWM = $("#AWMEnter").val();
			transformPage("#AWM","#ASPECIALFOOD");		
		}				
	}
	//AIC
	if(id=="AICButton"){
		if(icon[0]==0 && icon[1]==0 && icon[2]==0 && icon[3]==0 && icon[4]==0 && icon[5]==0 && icon[6]==0 && icon[7]==0 && icon[8]==0 && icon[9]==0 && icon[10]==0 && icon[11]==0 && icon[12]==0){
			alert("請至少選擇一樣要關心的部分！");
		}else{
			transformPage("#AIC","#AWI");
		}
	}
	//AWI
	if(id=="AWI_IMMU"){
		advancedInformation.AWI = customAdvancedEnum.AIC_IMMU;
		transformPage("#AWI","#AEM");
	}
	if(id=="AWI_HEART"){
		advancedInformation.AWI = customAdvancedEnum.AIC_HEART;
		transformPage("#AWI","#AEM");
	}
	if(id=="AWI_MEHAIR"){
		advancedInformation.AWI = customAdvancedEnum.AIC_MEHAIR;
		transformPage("#AWI","#AEM");
	}
	if(id=="AWI_LIHAIR"){
		advancedInformation.AWI = customAdvancedEnum.AIC_LIHAIR;
		transformPage("#AWI","#AEM");
	}
	if(id=="AWI_LOHAIR"){
		advancedInformation.AWI = customAdvancedEnum.AIC_LOHAIR;
		transformPage("#AWI","#AEM");
	}
	if(id=="AWI_SKIN"){
		advancedInformation.AWI = customAdvancedEnum.AIC_SKIN;
		transformPage("#AWI","#AEM");
	}
	if(id=="AWI_JOINT"){
		advancedInformation.AWI = customAdvancedEnum.AIC_JOINT;
		transformPage("#AWI","#AEM");
	}
	if(id=="AWI_BONE"){
		advancedInformation.AWI = customAdvancedEnum.AIC_BONE;
		transformPage("#AWI","#AEM");
	}
	if(id=="AWI_ADDWEI"){
		advancedInformation.AWI = customAdvancedEnum.AIC_ADDWEI;
		transformPage("#AWI","#AEM");
	}
	if(id=="AWI_OVERWEI"){
		advancedInformation.AWI = customAdvancedEnum.AIC_OVERWEI;
		transformPage("#AWI","#AEM");
	}
	if(id=="AWI_STOMA"){
		advancedInformation.AWI = customAdvancedEnum.AIC_STOMA;
		transformPage("#AWI","#AEM");
	}
	if(id=="AWI_STRESS"){
		advancedInformation.AWI = customAdvancedEnum.AIC_STRESS;
		transformPage("#AWI","#AEM");
	}
	if(id=="AWI_MOUTH"){
		advancedInformation.AWI = customAdvancedEnum.AIC_MOUTH;
		transformPage("#AWI","#AEM");
	}
	//----------------------------------------------------
	// 填完email之後，進入icon list的部分
	//----------------------------------------------------
	if(id=="AEMButton"){
		if($("#AEMEnter").val()!=""){
			advancedInformation.AEM = $("#AEMEnter").val();
			var newPage = iconTravelList.pop();
			iconTraveledList.push(newPage);
			transformPage("#AEM",newPage);
		}
	}
	//--------------------------------------------
	// IMMU
	//--------------------------------------------
	//IFE
	if(id=="IFE_yes"){
		iconInformation.IFE = customIconEnum.YES;
		transformPage("#IFE","#IFF");
	}
	if(id=="IFE_no"){
		iconInformation.IFE = customIconEnum.NO;
		transformPage("#IFE","#IFF");
	}
	//IFF
	if(id=="IFF_RARE"){
		iconInformation.IFF = customIconEnum.IFF_RARE;
		transformPage("#IFF","#IEI");
	}
	if(id=="IFF_ONEPERMON"){
		iconInformation.IFF = customIconEnum.IFF_ONEPERMON;
		transformPage("#IFF","#IEI");
	}
	if(id=="IFF_HIGHFREQ"){
		iconInformation.IFF = customIconEnum.IFF_HIGHFREQ;
		transformPage("#IFF","#IEI");
	}
	//IEI
	if(id=="IEI_yes"){
		iconInformation.IEI = customIconEnum.YES;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IEI",newPage);
	}
	if(id=="IEI_no"){
		iconInformation.IEI = customIconEnum.NO;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IEI",newPage);
	}
	//--------------------------------------------
	// HEART
	//--------------------------------------------
	//IHE
	if(id=="IHE_yes"){
		iconInformation.IHE = customIconEnum.YES;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IHE",newPage);
	}
	if(id=="IHE_no"){
		iconInformation.IHE = customIconEnum.NO;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IHE",newPage);
	}
	//--------------------------------------------
	// HAIR, SKIN
	//--------------------------------------------
	//IWC
	if(id=="IWC_RARE"){
		iconInformation.IWC = customIconEnum.IWC_RARE;
		transformPage("#IWC","#IHH");
	}
	if(id=="IWC_1TO2"){
		iconInformation.IWC = customIconEnum.IWC_1TO2;
		transformPage("#IWC","#IHH");
	}
	if(id=="IWC_3UP"){
		iconInformation.IWC = customIconEnum.IWC_3UP;
		transformPage("#IWC","#IDC");
	}
	//IDC
	if(id=="IDC_yes"){
		iconInformation.IDC = customIconEnum.YES;
		transformPage("#IDC","#IHH");
	}
	if(id=="IDC_no"){
		iconInformation.IDC = customIconEnum.NO;
		transformPage("#IDC","#IHH");
	}
	//IHH
	if(id=="IHH_yes"){
		iconInformation.IHH = customIconEnum.YES;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IHH",newPage);
	}
	if(id=="IHH_no"){
		iconInformation.IHH = customIconEnum.NO;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IHH",newPage);
	}
	//ILH
	if(id=="ILH_yes"){
		iconInformation.ILH = customIconEnum.YES;
		transformPage("#ILH","#ILP");
	}
	if(id=="ILH_no"){
		iconInformation.ILH = customIconEnum.NO;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#ILH",newPage);
	}
	//ILP
	if(id=="ILP_FRONT"){
		iconInformation.ILP = customIconEnum.ILP_FRONT;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#ILP",newPage);
	}
	if(id=="ILP_MID"){
		iconInformation.ILP = customIconEnum.ILP_MID;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#ILP",newPage);
	}
	if(id=="ILP_BACK"){
		iconInformation.ILP = customIconEnum.ILP_BACK;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#ILP",newPage);
	}
	//IHS
	if(id=="IHS_DRY"){
		iconInformation.IHS = customIconEnum.IHS_DRY;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IHS",newPage);
	}
	if(id=="IHS_HEALTH"){
		iconInformation.IHS = customIconEnum.IHS_HEALTH;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IHS",newPage);
	}
	if(id=="IHS_ROUGH"){
		iconInformation.IHS = customIconEnum.IHS_ROUGH;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IHS",newPage);
	}
	//IPO
	if(id=="IPO_yes"){
		iconInformation.IPO = customIconEnum.YES;
		transformPage("#IPO","#ICV");
	}
	if(id=="IPO_no"){
		iconInformation.IPO = customIconEnum.NO;
		transformPage("#IPO","#ICV");
	}
	//ICV
	if(id=="ICV_yes"){
		iconInformation.ICV = customIconEnum.YES;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#ICV",newPage);
	}
	if(id=="ICV_no"){
		iconInformation.ICV = customIconEnum.NO;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#ICV",newPage);
	}
	//ISR
	if(id=="ISR_yes"){
		iconInformation.ISR = customIconEnum.YES;
		transformPage("#ISR","#INR");
	}
	if(id=="ISR_no"){
		iconInformation.ISR = customIconEnum.NO;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#ISR",newPage);
	}
	//INR
	if(id=="INR_yes"){
		iconInformation.INR = customIconEnum.YES;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#INR",newPage);
	}
	if(id=="INR_no"){
		iconInformation.INR = customIconEnum.NO;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#INR",newPage);
	}
	//--------------------------------------------
	// JOINT, BONE
	//--------------------------------------------
	//IEB
	if(id=="IEB_yes"){
		iconInformation.IEB = customIconEnum.YES;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IEB",newPage);
	}
	if(id=="IEB_no"){
		iconInformation.IEB = customIconEnum.NO;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IEB",newPage);
	}
	//IBC
	if(id=="IBC_yes"){
		iconInformation.IBC = customIconEnum.YES;
		transformPage("#IBC","#IEF");
	}
	if(id=="IBC_no"){
		iconInformation.IBC = customIconEnum.NO;
		transformPage("#IBC","#IEF");
	}
	//IEF
	if(id=="IEF_yes"){
		iconInformation.IEF = customIconEnum.YES;
		transformPage("#IEF","#IJF");
	}
	if(id=="IEF_no"){
		iconInformation.IEF = customIconEnum.NO;
		transformPage("#IEF","#IJF");
	}
	//IJF
	if(id=="IJF_yes"){
		iconInformation.IJF = customIconEnum.YES;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IJF",newPage);
	}
	if(id=="IJF_no"){
		iconInformation.IJF = customIconEnum.NO;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IJF",newPage);
	}
	//--------------------------------------------
	// DIGEST, STRESS
	//--------------------------------------------
	//IVO
	if(id=="IVO_yes"){
		iconInformation.IVO = customIconEnum.YES;
		transformPage("#IVO","#IVA");
	}
	if(id=="IVO_no"){
		iconInformation.IVO = customIconEnum.NO;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IVO",newPage);
	}
	//IVA
	if(id=="IVA_UP"){
		iconInformation.IVA = customIconEnum.IVA_UP;
		transformPage("#IVA","#IVN");
	}
	if(id=="IVA_BOT"){
		iconInformation.IVA = customIconEnum.IVA_BOT;
		transformPage("#IVA","#IVN");
	}
	if(id=="IVA_BOTH"){
		iconInformation.IVA = customIconEnum.IVA_BOTH;
		transformPage("#IVA","#IVN");
	}
	if(id=="IVA_unsure"){
		iconInformation.IVA = customIconEnum.UNSURE;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IVA",newPage);
	}
	//IVN
	if(id=="IVN_BETTER"){
		iconInformation.IVN = customIconEnum.IVN_BETTER;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IVN",newPage);
	}
	if(id=="IVN_FORAWHILE"){
		iconInformation.IVN = customIconEnum.IVN_FORAWHILE;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IVN",newPage);
	}
	if(id=="IVN_unsure"){
		iconInformation.IVN = customIconEnum.UNSURE;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IVN",newPage);
	}
	//IBP
	if(id=="IBP_yes"){
		iconInformation.IBP = customIconEnum.YES;
		transformPage("#IBP","#IBN");
	}
	if(id=="IBP_no"){
		iconInformation.IBP = customIconEnum.NO;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IBP",newPage);
	}
	//IBN
	if(id=="IBN_BETTER"){
		iconInformation.IBN = customIconEnum.IBN_BETTER;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IBN",newPage);
	}
	if(id=="IBN_FORAWHILE"){
		iconInformation.IBN = customIconEnum.IBN_FORAWHILE;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IBN",newPage);
	}
	if(id=="IBN_unsure"){
		iconInformation.IBN = customIconEnum.UNSURE;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IBN",newPage);
	}
	//IPR
	if(id=="IPRButton"){
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IPR",newPage);
	}
	//--------------------------------------------
	// MOUTH
	//--------------------------------------------
	//IMO
	if(id=="IMO_BS"){
		iconInformation.IMO = customIconEnum.IMO_BS;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IMO",newPage);
	}
	if(id=="IMO_OVERSWEAT"){
		iconInformation.IMO = customIconEnum.IMO_OVERSWEAT;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IMO",newPage);
	}
	if(id=="IMO_no"){
		iconInformation.IMO = customIconEnum.NO;
		var newPage = iconTravelList.pop();
		iconTraveledList.push(newPage);
		transformPage("#IMO",newPage);
	}
	//--------------------------------------------
	// EXTRA
	//--------------------------------------------
	//EEH
	if(id=="EEH_STRIKE"){
		extraInformation.EEH = customExtraEnum.EEH_STRIKE;
		transformPage("#EEH","#EKL");
	}
	if(id=="EEH_HARD"){
		extraInformation.EEH = customExtraEnum.EEH_HARD;
		transformPage("#EEH","#EKL");
	}
	if(id=="EEH_FROMNOW"){
		extraInformation.EEH = customExtraEnum.EEH_FROMNOW;
		transformPage("#EEH","#EKL");
	}
	//EKL
	if(id=="EKL_EXP"){
		extraInformation.EKL = customExtraEnum.EKL_EXP;
		transformPage("#EKL","#EKEEPEXP");
	}
	if(id=="EKL_STU"){
		extraInformation.EKL = customExtraEnum.EKL_STU;
		transformPage("#EKL","#EKEEPEXP");
	}
	if(id=="EKL_BEG"){
		extraInformation.EKL = customExtraEnum.EKL_BEG;
		transformPage("#EKL","#EKEEPEXP");
	}
	//ENL
	if(id=="ENL_EXP"){
		extraInformation.ENL = customExtraEnum.ENL_EXP;
		transformPage("#ENL","#ENUTRIEXP");
	}
	if(id=="ENL_STU"){
		extraInformation.ENL = customExtraEnum.ENL_STU;
		transformPage("#ENL","#ENUTRIEXP");
	}
	if(id=="ENL_BEG"){
		extraInformation.ENL = customExtraEnum.ENL_BEG;
		transformPage("#ENL","#ENUTRIEXP");
	}
	//EFB
	if(id=="EFB_unsure"){
		extraInformation.EFB = customExtraEnum.UNSURE;
		transformPage("#EFB","#EFI");
	}
	if(id=="EFBButton"){
		if($("#EFBEnter").val()!=""){
			extraInformation.EFB = $("#EFBEnter").val();
			transformPage("#EFB","#EEC");
		}
	}
	//EFI
	if(id=="EFIButton"){
		//TODO 成分判斷
		extraInformation.EFI = "";
		transformPage("#EFI","#EFG");
	}
	//EFG
	if(id=="EFG_yes"){
		extraInformation.EFG = customExtraEnum.YES;
		transformPage("#EFG","#EEC");
	}
	if(id=="EFG_no"){
		extraInformation.EFG = customExtraEnum.NO;
		transformPage("#EFG","#EEC");
	}
	if(id=="EFG_unsure"){
		extraInformation.EFG = customExtraEnum.UNSURE;
		transformPage("#EFG","#EEC");
	}
	//EEC
	if(id=="EEC_CONTROL"){
		extraInformation.EEC = customExtraEnum.EEC_CONTROL;
		transformPage("#EEC","#ECM");
	}
	if(id=="EEC_FULL"){
		extraInformation.EEC = customExtraEnum.EEC_FULL;
		transformPage("#EEC","#EAA");
	}
	//ECM
	if(id=="ECM_ONCE"){
		extraInformation.ECM = customExtraEnum.ECM_ONCE;
		transformPage("#ECM","#EES");
	}
	if(id=="ECM_TWICE"){
		extraInformation.ECM = customExtraEnum.ECM_TWICE;
		transformPage("#ECM","#EES");
	}
	if(id=="ECM_UP"){
		extraInformation.ECM = customExtraEnum.ECM_UP;
		transformPage("#ECM","#EES");
	}
	//EES
	if(id=="EES_SOON"){
		extraInformation.EES = customExtraEnum.EES_SOON;
		transformPage("#EES","#EAA");
	}
	if(id=="EES_SLOW"){
		extraInformation.EES = customExtraEnum.EES_SLOW;
		transformPage("#EES","#EAA");
	}
	if(id=="EES_NEVER"){
		extraInformation.EES = customExtraEnum.EES_NEVER;
		transformPage("#EES","#EAA");
	}
	//EAA
	if(id=="EAA_yes"){
		extraInformation.EAA = customExtraEnum.YES;
		transformPage("#EAA","#EAB");
	}
	if(id=="EAA_no"){
		extraInformation.EAA = customExtraEnum.NO;
		transformPage("#EAA","#EAB");
	}
	//EAB
	if(id=="EAB_NEVER"){
		extraInformation.EAB = customExtraEnum.EAB_NEVER;
		transformPage("#EAB","#EAC");
	}
	if(id=="EAB_ONCE"){
		extraInformation.EAB = customExtraEnum.EAB_ONCE;
		transformPage("#EAB","#EAC");
	}
	if(id=="EAB_FORTHUP"){
		extraInformation.EAB = customExtraEnum.EAB_FORTHUP;
		transformPage("#EAB","#EAC");
	}
	//EAC
	if(id=="EAC_NEVER"){
		extraInformation.EAC = customExtraEnum.EAC_NEVER;
		transformPage("#EAC","#EAD");
	}
	if(id=="EAC_ONCE"){
		extraInformation.EAC = customExtraEnum.EAC_ONCE;
		transformPage("#EAC","#EAD");
	}
	if(id=="EAC_TWICE"){
		extraInformation.EAC = customExtraEnum.EAC_TWICE;
		transformPage("#EAC","#EAD");
	}
	if(id=="EAC_EACHDAY"){
		extraInformation.EAC = customExtraEnum.EAC_EACHDAY;
		transformPage("#EAC","#EAD");
	}
	//EAD
	if(id=="EADButton"){
		//TODO
		extraInformation.EAD = "";
		transformPage("#EAD","#EAE");
	}
	//EAE
	if(id=="EAE_HIGHFREQ"){
		extraInformation.EAE = customExtraEnum.EAE_HIGHFREQ;
		transformPage("#EAE","#EAF");
	}
	if(id=="EAE_LOWFREQ"){
		extraInformation.EAE = customExtraEnum.EAE_LOWFREQ;
		transformPage("#EAE","#EAF");
	}
	//EAF
	if(id=="EAF_NEVER"){
		extraInformation.EAF = customExtraEnum.EAF_NEVER;
		transformPage("#EAF","#EBA");
	}
	if(id=="EAF_YESBUTHATE"){
		extraInformation.EAF = customExtraEnum.EAF_YESBUTHATE;
		transformPage("#EAF","#EBA");
	}
	if(id=="EAF_ONCE"){
		extraInformation.EAF = customExtraEnum.EAF_ONCE;
		transformPage("#EAF","#EBA");
	}
	if(id=="EAF_THIRD"){
		extraInformation.EAF = customExtraEnum.EAF_THIRD;
		transformPage("#EAF","#EBA");
	}
	//EBA
	if(id=="EBAButton"){
		if($("#EBA_PLACE").val()!="0"){
			extraInformation.EBA = $("#EBA_PLACE").val();
			transformPage("#EBA","#EBB");
		}
	}
	//EBB
	if(id=="EBB_FIRST"){
		extraInformation.EBB = customExtraEnum.EBB_FIRST;
		transformPage("#EBB","#EBC");
	}
	if(id=="EBB_WANTTOKNOW"){
		extraInformation.EBB = customExtraEnum.EBB_WANTTOKNOW;
		transformPage("#EBB","#EBC");
	}
	if(id=="EBB_DONTWANT"){
		extraInformation.EBB = customExtraEnum.EBB_DONTWANT;
		transformPage("#EBB","#EBC");
	}
	//EBC
	if(id=="EBC_INTER"){
		extraInformation.EBC = customExtraEnum.EBC_INTER;
		transformPage("#EBC","#RESULT");
	}
	if(id=="EBC_FB_IG"){
		extraInformation.EBC = customExtraEnum.EBC_FB_IG;
		transformPage("#EBC","#RESULT");
	}
	if(id=="EBC_FRIEND"){
		extraInformation.EBC = customExtraEnum.EBC_FRIEND;
		transformPage("#EBC","#RESULT");
	}
	if(id=="EBC_OTHER"){
		extraInformation.EBC = customExtraEnum.EBC_OTHER;
		transformPage("#EBC","#RESULT");
	}
	//BACK BUTTON
	//---------------------------------------
	// USE ANILOCK & BBLOCK to avoid buggy
	//---------------------------------------
	if(id=="backButton_TOP" && animationLock==0){
		animationLock = 1;
		var newPage = recordTravelList.pop();
		if(newPage=="#BNICEMEET" || newPage=="#BAGECAL" || newPage=="#BPREGPAGE" || newPage=="#ASPECIALFOOD" || newPage=="#EKEEPEXP" || newPage=="#ENUTRIEXP" || newPage=="#RESULT"){
			newPage = recordTravelList.pop();
			transformPageBack(currentPage,newPage);
		}else if(newPage=="#BKN"){
			newPage = recordTravelList.pop();
			transformPageBack(currentPage,newPage);
			showVanishProgressBar();
		}
		else transformPageBack(currentPage,newPage);
	}	
}
//-------------------------------------------------------------
// PAGE TRANSFORM with ANIMATION with RECORD HISTORY
// 		A. SOME PAGES ARE ANIMATION ONLY, NEED 'IF' DETECTION
//		B. WHILE LEAVE '#AWI', call function to create iconList
//-------------------------------------------------------------
function transformPage(originalPage,newPage){
	// AWI CONTROLER
	if(originalPage=="#AWI") createIconTravelList();
	// WHILE RELOAD PAGE
	if(originalPage!="#temp" && originalPage!="#BWELCOMEBACK"){
		recordTravelList.push(originalPage);
		transformAnimation(originalPage);
	}	
	if(newPage!="#BWELCOMEBACK")currentPage = newPage;
	//transform animation
	clearQuestion(originalPage,newPage);
	calculateProgressPercent();
}
function transformPageBack(originalPage,newPage){
	// AWI CONTROLER
	if(originalPage=="#AEM")createAWI();	
	// TRAVELING ICON
	if(originalPage == iconTraveledList[iconTraveledList.length - 1]) iconTravelList.push(iconTraveledList.pop());
	//
	clearQuestion(originalPage,newPage);
	currentPage = newPage;
	calculateProgressPercent();
}
function specialAnimationControlerIn(newPage){
	if(newPage=="#BHELLO"){
		trans_hello();		
	}
	if(newPage=="#BWELCOMEBACK"){
		trans_welcomeBack();
	}
	if(newPage=="#BNICEMEET"){
		trans_nicetomeetyou();
		showVanishProgressBar();
	}
	if(newPage=="#BAGECAL"){
		trans_agePage();
		showVanishProgressBar();
	}		
	if(newPage=="#BPREGPAGE"){
		trans_pregpage();
		showVanishProgressBar();
	}
	if(newPage=="#ASPECIALFOOD"){
		trans_specialfood();
		showVanishProgressBar();
	}
	if(newPage=="#EKEEPEXP"){
		trans_keepexpert();
		showVanishProgressBar();
	}
	if(newPage=="#ENUTRIEXP"){
		trans_nutritionexpert();
		showVanishProgressBar();
	}
	if(newPage=="#IAW"){
		trans_addwei();
		showVanishProgressBar();
	}
	if(newPage=="#ILW"){
		trans_overwei();
		showVanishProgressBar();
	}
	if(newPage=="#RESULT"){
		showResult();
	}	
}
function specialAnimationControlerOut(originalPage,newPage){
	if(originalPage=="#BHELLO"){
	}
	if(originalPage=="#BKN"){
		showVanishProgressBar();
	}
	if(originalPage=="#BWELCOMEBACK"){
		if(newPage!="#BKN" && newPage!="#BHELLO")showVanishProgressBar();
	}
	if(originalPage=="#BNICEMEET"){
		showVanishProgressBar();
	}
	if(originalPage=="#BAGECAL"){
		showVanishProgressBar();
	}
	if(originalPage=="#BPREGPAGE"){
		showVanishProgressBar();
	}
	if(originalPage=="#ASPECIALFOOD"){
		showVanishProgressBar();
	}
	if(originalPage=="#EKEEPEXP"){
		showVanishProgressBar();
	}
	if(originalPage=="#ENUTRIEXP"){
		showVanishProgressBar();
	}
	if(originalPage=="#IAW"){
		showVanishProgressBar();
	}
	if(originalPage=="#ILW"){
		showVanishProgressBar();
	}
	if(originalPage=="#RESULT"){
	}
}
function transformAnimation(originalPage){
	var width = $(window).width();
	var paddingRight = 0;
	var functionA = setInterval(myFunctionA,1);
	function myFunctionA(){
		$(originalPage).css("right",paddingRight+"px");
		paddingRight += 5;
		if(paddingRight >= width){
			clearInterval(functionA);
			$(originalPage).css("right",0+"px");
			return true;
		}
	}
}
function transformBackAnimation(originalPage){
	var width = $(window).width();
	var paddingLeft = 0;
	var functionA = setInterval(myFunctionA,1);
	function myFunctionA(){
		$(originalPage).css("left",paddingLeft+"px");
		paddingLeft += 5;
		if(paddingLeft >= width){
			clearInterval(functionA);
			$(originalPage).css("left",0+"px");
			return true;
		}
	}
}
function calculateProgressPercent(){
	//if()... progressPercent = x;
}