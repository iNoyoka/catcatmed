var customBasicEnum = {
	boy:"男",
	girl:"女",
	_18_:"18歲以下",
	_18_25:"18-25",
	_26_35:"26-35",
	_36_45:"36-45",
	_46_65:"46-65",
	_65_:"65歲以上",
	yes:"是",
	no:"否",
	highFreq:"高",
	medFreq:"中",
	lowFreq:"低",
	inside:"室內",
	outside:"室外",
	medside:"一半一半",
	tooThin:"過瘦",
	aLittleThin:"稍瘦",
	medium:"適中",
	aLittleFat:"稍胖",
	tooFat:"過胖",
	_1to3:"一到三週",
	_3to6:"三到六週",
	_6up:"六週以上",
	unsure:"不確定",
}
var basicInformation = {
	name:"無資料",
	catName:"無資料",
	sex:"無資料",
	catSex:"無資料",
	age:"無資料",
	catAge:"無資料",
	species:"無資料",
	ligation:"無資料",
	pregnancy:"無資料",
	pregnancyTime:"無資料",
	catWeight:"無資料",
	catExerciseFreq:"無資料",
	catSide:"無資料",
	catSize:"無資料"
}
var customAdvancedEnum = {
	ARC_SPE:"特定需求",
	ARC_DAE:"日常保健",
	ARC_KNO:"知識了解",
	YES:"有",
	NO:"沒有",
	UNSURE:"不確定",
	AIC_IMMU:"免疫力",
	AIC_HEART:"心臟",
	AIC_MEHAIR:"化毛",
	AIC_LIHAIR:"亮毛",
	AIC_LOHAIR:"脫毛",
	AIC_SKIN:"皮膚",
	AIC_JOINT:"關節",
	AIC_BONE:"骨頭",
	AIC_ADDWEI:"增重",
	AIC_OVERWEI:"過胖",
	AIC_STOMA:"腸胃",
	AIC_STRESS:"壓力",
	AIC_MOUTH:"口腔"
}
var advancedInformation = {
	ARC:"無資料",
	ANM:"無資料",
	AWM:"無資料",
	AIC:"",
	AWI:"無資料",
	AEM:"無資料"			
}
var customIconEnum = {
	YES:"有",
	NO:"沒有",
	UNSURE:"不確定",
	IFF_RARE:"幾乎沒有",
	IFF_ONEPERMON:"一個月一次",
	IFF_HIGHFREQ:"一個月一次以上",
	IWC_RARE:"幾乎沒有",
	IWC_1TO2:"一到兩次",
	IWC_3UP:"三次以上",
	ILP_FRONT:"前段",
	ILP_MID:"中段",
	ILP_BACK:"後段",
	IHS_DRY:"乾澀無光澤",
	IHS_HEALTH:"健康",
	IHS_ROUGH:"粗糙打結",
	IVA_UP:"上吐",
	IVA_BOT:"下瀉",
	IVA_BOTH:"都有",
	IVN_BETTER:"逐漸好轉中",
	IVN_FORAWHILE:"持續一陣子了",
	IBN_BETTER:"逐漸好轉中",
	IBN_FORAWHILE:"持續一陣子了",
	IPR_STRA:"過度理毛",
	IPR_STRB:"來回踱步",
	IPR_STRC:"四處躲藏",
	IPR_STRD:"食慾下降",
	IPR_STRE:"隨地便溺",
	IMO_BS:"口臭",
	IMO_OVERSWEAT:"過度流口水"
}
var iconInformation = {
	IFE:"無資料",
	IFF:"無資料",
	IEI:"無資料",
	IHE:"無資料",
	IWC:"無資料",
	IDC:"無資料",
	IHH:"無資料",
	ILH:"無資料",
	ILP:"無資料",
	IHS:"無資料",
	IPO:"無資料",
	ICV:"無資料",
	ISR:"無資料",
	INR:"無資料",
	IBC:"無資料",
	IEB:"無資料",
	IEF:"無資料",
	IJF:"無資料",
	IVO:"無資料",
	IVA:"無資料",
	IVN:"無資料",
	IBP:"無資料",
	IBN:"無資料",
	IPR:"無資料",
	IMO:"無資料"
}
var customExtraEnum = {
	YES:"有",
	NO:"無",
	UNSURE:"不確定",
	EEH_STRIKE:"全力以赴",
	EEH_HARD:"正在努力中",
	EEH_FROMNOW:"現在開始",
	EKL_EXP:"專家",
	EKL_STU:"學習中",
	EKL_BEG:"新手",
	ENL_EXP:"專家",
	ENL_STU:"學習中",
	ENL_BEG:"新手",
	EFI_BEEF:"牛肉",
	EFI_SLAM:"羊肉",
	EFI_CHIC:"雞肉",
	EFI_DUCK:"鴨肉",
	EFI_TURK:"火雞",
	EFI_FISH:"魚",
	EFI_DEER:"鹿",
	EFI_PIG:"豬",
	EEC_CONTROL:"定時定量",
	EEC_FULL:"buffet",
	ECM_ONCE:"一餐",
	ECM_TWICE:"兩餐",
	ECM_UP:"三餐以上",
	EES_SOON:"馬上吃完",
	EES_SLOW:"慢慢吃",
	EES_NEVER:"吃不完",
	EAB_NEVER:"從未",
	EAB_ONCE:"一兩次",
	EAB_FORTHUP:"四次以上",
	EAC_NEVER:"從未",
	EAC_ONCE:"一次",
	EAC_TWICE:"兩三次",
	EAC_EACHDAY:"幾乎每天",
	EAD_BEEF:"牛肉",
	EAD_SLAM:"羊肉",
	EAD_CHIC:"雞肉",
	EAD_DUCK:"鴨肉",
	EAD_TURK:"火雞",
	EAD_FISH:"魚",
	EAD_DEER:"鹿",
	EAD_PIG:"豬",
	EAE_LOWFREQ:"頻率低",
	EAE_HIGHFREQ:"頻率高",
	EAF_NEVER:"從來沒有",
	EAF_YESBUTHATE:"有，不愛吃",
	EAF_ONCE:"一週一兩次",
	EAF_THIRD:"三次或以上",
	EBB_FIRST:"第一手拿到",
	EBB_WANTTOKNOW:"想了解看看",
	EBB_DONTWANT:"不想知道",
	EBC_INTER:"網路",
	EBC_FB_IG:"Facebook/IG",
	EBC_FRIEND:"朋友介紹",
	EBC_OTHER:"其他"
}
var extraInformation = {
	EEH:"無資料",
	EKL:"無資料",
	ENL:"無資料",
	EFB:"無資料",
	EFI:"無資料",
	EFG:"無資料",
	EEC:"無資料",
	ECM:"無資料",
	EES:"無資料",
	EAA:"無資料",
	EAB:"無資料",
	EAC:"無資料",
	EAD:"無資料",
	EAE:"無資料",
	EAF:"無資料",
	EBA:"無資料",
	EBB:"無資料",
	EBC:"無資料"
}
//GLOBAL VAR
var icon = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var iconRecord = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var ingredients = [0,0,0,0,0,0,0,0,0];
var allergy = [0,0,0,0,0,0,0,0,0,0];
var stress = [0,0,0,0,0,0];
var species = "";
//
function iconClick(id){
	if(id=="AIC_IMMU"){
		if(icon[0]==0) icon[0] = 1;
		else icon[0] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="AIC_HEART"){
		if(icon[1]==0) icon[1] = 1;
		else icon[1] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="AIC_MEHAIR"){
		if(icon[2]==0) icon[2] = 1;
		else icon[2] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="AIC_LIHAIR"){
		if(icon[3]==0) icon[3] = 1;
		else icon[3] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="AIC_LOHAIR"){
		if(icon[4]==0) icon[4] = 1;
		else icon[4] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="AIC_SKIN"){
		if(icon[5]==0) icon[5] = 1;
		else icon[5] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="AIC_JOINT"){
		if(icon[6]==0) icon[6] = 1;
		else icon[6] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="AIC_BONE"){
		if(icon[7]==0) icon[7] = 1;
		else icon[7] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="AIC_ADDWEI"){
		if(icon[8]==0) icon[8] = 1;
		else icon[8] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="AIC_OVERWEI"){
		if(icon[9]==0) icon[9] = 1;
		else icon[9] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="AIC_STOMA"){
		if(icon[10]==0) icon[10] = 1;
		else icon[10] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="AIC_STRESS"){
		if(icon[11]==0) icon[11] = 1;
		else icon[11] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="AIC_MOUTH"){
		if(icon[12]==0) icon[12] = 1;
		else icon[12] = 0;
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	//ingredients
	if(id=="EFI_BEEF"){
		if(ingredients[0]==0) ingredients[0] = 1;
		else ingredients[0] = 0;
		if(ingredients[8]==1){
			ingredients[8] = 0;
			$("#EFI_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EFI_SLAM"){
		if(ingredients[1]==0) ingredients[1] = 1;
		else ingredients[1] = 0;
		if(ingredients[8]==1){
			ingredients[8] = 0;
			$("#EFI_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EFI_CHIC"){
		if(ingredients[2]==0) ingredients[2] = 1;
		else ingredients[2] = 0;
		if(ingredients[8]==1){
			ingredients[8] = 0;
			$("#EFI_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EFI_DUCK"){
		if(ingredients[3]==0) ingredients[3] = 1;
		else ingredients[3] = 0;
		if(ingredients[8]==1){
			ingredients[8] = 0;
			$("#EFI_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EFI_TURK"){
		if(ingredients[4]==0) ingredients[4] = 1;
		else ingredients[4] = 0;
		if(ingredients[8]==1){
			ingredients[8] = 0;
			$("#EFI_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EFI_FISH"){
		if(ingredients[5]==0) ingredients[5] = 1;
		else ingredients[5] = 0;
		if(ingredients[8]==1){
			ingredients[8] = 0;
			$("#EFI_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EFI_DEER"){
		if(ingredients[6]==0) ingredients[6] = 1;
		else ingredients[6] = 0;
		if(ingredients[8]==1){
			ingredients[8] = 0;
			$("#EFI_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EFI_PIG"){
		if(ingredients[7]==0) ingredients[7] = 1;
		else ingredients[7] = 0;
		if(ingredients[8]==1){
			ingredients[8] = 0;
			$("#EFI_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EFI_unsure"){
		if(ingredients[8]==0){
			if(ingredients[0]==1) $("#EFI_BEEF").toggleClass("icon iconSelected");
			if(ingredients[1]==1) $("#EFI_SLAM").toggleClass("icon iconSelected");
			if(ingredients[2]==1) $("#EFI_CHIC").toggleClass("icon iconSelected");
			if(ingredients[3]==1) $("#EFI_DUCK").toggleClass("icon iconSelected");
			if(ingredients[4]==1) $("#EFI_TURK").toggleClass("icon iconSelected");
			if(ingredients[5]==1) $("#EFI_FISH").toggleClass("icon iconSelected");
			if(ingredients[6]==1) $("#EFI_DEER").toggleClass("icon iconSelected");
			if(ingredients[7]==1) $("#EFI_PIG").toggleClass("icon iconSelected");
			for(i in ingredients){
				if(i!=8){
					ingredients[i] = 0;
				}
				else{
					ingredients[8] = 1;
					var newID = "#" + id;
					$(newID).toggleClass("icon iconSelected");
				}
			}
		}else{
			ingredients[8] = 0;
			var newID = "#" + id;
			$(newID).toggleClass("icon iconSelected");
		}		
	}
	//allergy
	if(id=="EAD_BEEF"){
		if(allergy[0]==0) allergy[0] = 1;
		else allergy[0] = 0;
		if(allergy[8]==1){
			allergy[8] = 0;
			$("#EAD_no").toggleClass("icon iconSelected");
		}
		if(allergy[9]==1){
			allergy[9] = 0;
			$("#EAD_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EAD_SLAM"){
		if(allergy[1]==0) allergy[1] = 1;
		else allergy[1] = 0;
		if(allergy[8]==1){
			allergy[8] = 0;
			$("#EAD_no").toggleClass("icon iconSelected");
		}
		if(allergy[9]==1){
			allergy[9] = 0;
			$("#EAD_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EAD_CHIC"){
		if(allergy[2]==0) allergy[2] = 1;
		else allergy[2] = 0;
		if(allergy[8]==1){
			allergy[8] = 0;
			$("#EAD_no").toggleClass("icon iconSelected");
		}
		if(allergy[9]==1){
			allergy[9] = 0;
			$("#EAD_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EAD_DUCK"){
		if(allergy[3]==0) allergy[3] = 1;
		else allergy[3] = 0;
		if(allergy[8]==1){
			allergy[8] = 0;
			$("#EAD_no").toggleClass("icon iconSelected");
		}
		if(allergy[9]==1){
			allergy[9] = 0;
			$("#EAD_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EAD_TURK"){
		if(allergy[4]==0) allergy[4] = 1;
		else allergy[4] = 0;
		if(allergy[8]==1){
			allergy[8] = 0;
			$("#EAD_no").toggleClass("icon iconSelected");
		}
		if(allergy[9]==1){
			allergy[9] = 0;
			$("#EAD_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EAD_FISH"){
		if(allergy[5]==0) allergy[5] = 1;
		else allergy[5] = 0;
		if(allergy[8]==1){
			allergy[8] = 0;
			$("#EAD_no").toggleClass("icon iconSelected");
		}
		if(allergy[9]==1){
			allergy[9] = 0;
			$("#EAD_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EAD_DEER"){
		if(allergy[6]==0) allergy[6] = 1;
		else allergy[6] = 0;
		if(allergy[8]==1){
			allergy[8] = 0;
			$("#EAD_no").toggleClass("icon iconSelected");
		}
		if(allergy[9]==1){
			allergy[9] = 0;
			$("#EAD_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EAD_PIG"){
		if(allergy[7]==0) allergy[7] = 1;
		else allergy[7] = 0;
		if(allergy[8]==1){
			allergy[8] = 0;
			$("#EAD_no").toggleClass("icon iconSelected");
		}
		if(allergy[9]==1){
			allergy[9] = 0;
			$("#EAD_unsure").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="EAD_no"){
		if(allergy[8]==0){
			if(allergy[0]==1) $("#EAD_BEEF").toggleClass("icon iconSelected");
			if(allergy[1]==1) $("#EAD_SLAM").toggleClass("icon iconSelected");
			if(allergy[2]==1) $("#EAD_CHIC").toggleClass("icon iconSelected");
			if(allergy[3]==1) $("#EAD_DUCK").toggleClass("icon iconSelected");
			if(allergy[4]==1) $("#EAD_TURK").toggleClass("icon iconSelected");
			if(allergy[5]==1) $("#EAD_FISH").toggleClass("icon iconSelected");
			if(allergy[6]==1) $("#EAD_DEER").toggleClass("icon iconSelected");
			if(allergy[7]==1) $("#EAD_PIG").toggleClass("icon iconSelected");
			if(allergy[9]==1) $("#EAD_unsure").toggleClass("icon iconSelected");
			for(i in allergy){
				if(i!=8){
					allergy[i] = 0;
				}
				else{
					allergy[8] = 1;
					var newID = "#" + id;
					$(newID).toggleClass("icon iconSelected");
				}
			}
		}else{
			allergy[8] = 0;
			var newID = "#" + id;
			$(newID).toggleClass("icon iconSelected");
		}	
	}
	if(id=="EAD_unsure"){
		if(allergy[9]==0){
			if(allergy[0]==1) $("#EAD_BEEF").toggleClass("icon iconSelected");
			if(allergy[1]==1) $("#EAD_SLAM").toggleClass("icon iconSelected");
			if(allergy[2]==1) $("#EAD_CHIC").toggleClass("icon iconSelected");
			if(allergy[3]==1) $("#EAD_DUCK").toggleClass("icon iconSelected");
			if(allergy[4]==1) $("#EAD_TURK").toggleClass("icon iconSelected");
			if(allergy[5]==1) $("#EAD_FISH").toggleClass("icon iconSelected");
			if(allergy[6]==1) $("#EAD_DEER").toggleClass("icon iconSelected");
			if(allergy[7]==1) $("#EAD_PIG").toggleClass("icon iconSelected");
			if(allergy[8]==1) $("#EAD_no").toggleClass("icon iconSelected");
			for(i in allergy){
				if(i!=9){
					allergy[i] = 0;
				}
				else{
					allergy[9] = 1;
					var newID = "#" + id;
					$(newID).toggleClass("icon iconSelected");
				}
			}
		}else{
			allergy[9] = 0;
			var newID = "#" + id;
			$(newID).toggleClass("icon iconSelected");
		}	
	}
	//stress
	if(id=="IPR_STRA"){
		if(stress[0]==0) stress[0]=1;
		else stress[0] = 0;
		if(stress[5]==1){
			stress[5] = 0;
			$("#IPR_no").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="IPR_STRB"){
		if(stress[1]==0) stress[1]=1;
		else stress[1] = 0;
		if(stress[5]==1){
			stress[5] = 0;
			$("#IPR_no").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="IPR_STRC"){
		if(stress[2]==0) stress[2]=1;
		else stress[2] = 0;
		if(stress[5]==1){
			stress[5] = 0;
			$("#IPR_no").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="IPR_STRD"){
		if(stress[3]==0) stress[3]=1;
		else stress[3] = 0;
		if(stress[5]==1){
			stress[5] = 0;
			$("#IPR_no").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="IPR_STRE"){
		if(stress[4]==0) stress[4]=1;
		else stress[4] = 0;
		if(stress[5]==1){
			stress[5] = 0;
			$("#IPR_no").toggleClass("icon iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("icon iconSelected");
	}
	if(id=="IPR_no"){
		if(stress[5]==0){
			if(stress[0]==1) $("#IPR_STRA").toggleClass("icon iconSelected");
			if(stress[1]==1) $("#IPR_STRB").toggleClass("icon iconSelected");
			if(stress[2]==1) $("#IPR_STRC").toggleClass("icon iconSelected");
			if(stress[3]==1) $("#IPR_STRD").toggleClass("icon iconSelected");
			if(stress[4]==1) $("#IPR_STRE").toggleClass("icon iconSelected");
			for(i in stress){
				if(i!=5){
					stress[i] = 0;
				}else{
					stress[5] = 1;
					var newID = "#" + id;
					$(newID).toggleClass("icon iconSelected");
				}
			}
		}else{
			stress[5] = 0;
			var newID = "#" + id;
			$(newID).toggleClass("icon iconSelected");
		}
	}
}
//
function enterPress(id,event){
	var x = event.which || event.keyCode;
	var y = id.slice(0,3) + "Button";
	if(x==13)  document.getElementById(y).click();
}
function addToList(id){
	//BKN
	if(id=="BKNButton"){
		if($("#BKNEnter").val()!=""){
			basicInformation.name = $("#BKNEnter").val();
			$("#BKN").fadeOut(500,function(){
				$("#BCN").fadeIn(500,function(){
					$("#BCNEnter").focus();
				});
			});
		}
	}
	//BCN
	if(id=="BCNButton"){
		if($("#BCNEnter").val()!=""){
			basicInformation.catName = $("#BCNEnter").val();
			for(i=1;i<46;i++){
				var str = "catName" + i;
				document.getElementById(str).innerHTML = basicInformation.catName;				
			}
			$("#BCN").fadeOut(500,function(){
				$("#BNICEMEET").fadeIn(500,function(){
					trans_nicetomeetyou();
				});
			});
		}
	}
	//BKS
	if(id=="BKS_girl"){
		basicInformation.sex = customBasicEnum.girl;
		$("#BKS").fadeOut(500,function(){
			$("#BCS").fadeIn(500);
		});
	}
	if(id=="BKS_boy"){
		basicInformation.sex = customBasicEnum.boy;
		$("#BKS").fadeOut(500,function(){
			$("#BCS").fadeIn(500);
		});
	}
	//BCS
	if(id=="BCS_girl"){
		basicInformation.catSex = customBasicEnum.girl;
		$("#BCS").fadeOut(500,function(){
			$("#BKA").fadeIn(500);
		});
	}
	if(id=="BCS_boy"){
		basicInformation.catSex = customBasicEnum.boy;
		$("#BCS").fadeOut(500,function(){
			$("#BKA").fadeIn(500);
		});
	}
	//BKA
	if(id=="BKA_18-"){
		basicInformation.age = customBasicEnum._18_;
		$("#BKA").fadeOut(500,function(){
			$("#BCA").fadeIn(500,function(){
				$("#BCAEnter").focus();
			});
		});
	}
	if(id=="BKA_18-25"){
		basicInformation.age = customBasicEnum._18_25;
		$("#BKA").fadeOut(500,function(){
			$("#BCA").fadeIn(500,function(){
				$("#BCAEnter").focus();
			});
		});
	}
	if(id=="BKA_26-35"){
		basicInformation.age = customBasicEnum._26_35;
		$("#BKA").fadeOut(500,function(){
			$("#BCA").fadeIn(500,function(){
				$("#BCAEnter").focus();
			});
		});
	}
	if(id=="BKA_36-45"){
		basicInformation.age = customBasicEnum._36_45;
		$("#BKA").fadeOut(500,function(){
			$("#BCA").fadeIn(500,function(){
				$("#BCAEnter").focus();
			});
		});
	}
	if(id=="BKA_46-65"){
		basicInformation.age = customBasicEnum._46_65;
		$("#BKA").fadeOut(500,function(){
			$("#BCA").fadeIn(500,function(){
				$("#BCAEnter").focus();
			});
		});
	}
	if(id=="BKA_65+"){
		basicInformation.age = customBasicEnum._65_;
		$("#BKA").fadeOut(500,function(){
			$("#BCA").fadeIn(500,function(){
				$("#BCAEnter").focus();
			});
		});
	}
	//BCA
	if(id=="BCAButton"){
		if($("#BCAEnter").val()!=""){
			basicInformation.catAge = $("#BCAEnter").val();
			$("#BCA").fadeOut(500,function(){
				$("#BAGECAL").fadeIn(500,function(){
					trans_agePage();
				});	
			});
		}
	}
	//BSP
	if(id=="BSPButton"){
		if(species!=""){
			basicInformation.species = species;
			if(species=="no1"){
				$("#BSP").fadeOut(500,function(){
					$("#BNU").fadeIn(500,function(){
						$("#AIC_MEHAIR").toggleClass("questionBlock");
						$("#AIC_LOHAIR").toggleClass("questionBlock");
						$("#AIC_LIHAIR").toggleClass("questionBlock");
					});	
				});
			}else{
				$("#BSP").fadeOut(500,function(){
					$("#BNU").fadeIn(500);	
				});
			}
			
		}
	}
	//BNU
	if(id=="BNU_yes"){
		basicInformation.ligation = customBasicEnum.yes;
		$("#BNU").fadeOut(500,function(){
			$("#BCW").fadeIn(500,function(){
				$("#BCWEnter").focus();
			});	
		});
	}
	if(id=="BNU_no"){
		basicInformation.ligation = customBasicEnum.no;
		if(basicInformation.catSex==customBasicEnum.girl){
			$("#BNU").fadeOut(500,function(){
				$("#BPR").fadeIn(500);	
			});
		}else{
			$("#BNU").fadeOut(500,function(){
				$("#BCW").fadeIn(500,function(){
					$("#BCWEnter").focus();
				});	
			});
		}
	}
	//BPR
	if(id=="BPR_yes"){
		basicInformation.pregnancy = customBasicEnum.yes;
		$("#BPR").fadeOut(500,function(){
			$("#BPT").fadeIn(500);	
		});
	}
	if(id=="BPR_no"){
		basicInformation.pregnancy = customBasicEnum.no;
		$("#BPR").fadeOut(500,function(){
			$("#BCW").fadeIn(500,function(){
				$("#BCWEnter").focus();
			});	
		});
	}
	//BPT
	if(id=="BPT_1to3"){
		basicInformation.pregnancyTime = customBasicEnum._1to3;
		$("#BPT").fadeOut(500,function(){
			$("#BPREGPAGE").fadeIn(500,function(){
				trans_pregpage();
			});
		});
	}
	if(id=="BPT_3to6"){
		basicInformation.pregnancyTime = customBasicEnum._3to6;
		$("#BPT").fadeOut(500,function(){
			$("#BPREGPAGE").fadeIn(500,function(){
				trans_pregpage();
			});
		});
	}
	if(id=="BPT_6up"){
		basicInformation.pregnancyTime = customBasicEnum._6up;
		$("#BPT").fadeOut(500,function(){
			$("#BPREGPAGE").fadeIn(500,function(){
				trans_pregpage();
			});
		});
	}
	if(id=="BPT_unsure"){
		basicInformation.pregnancyTime = customBasicEnum.unsure;
		$("#BPT").fadeOut(500,function(){
			$("#BPREGPAGE").fadeIn(500,function(){
				trans_pregpage();
			});
		});
	}
	//BCW
	if(id=="BCWButton"){
		if($("#BCWEnter").val()!=""){
			basicInformation.catWeight = $("#BCWEnter").val();
			$("#BCW").fadeOut(500,function(){
				$("#BEF").fadeIn(500);	
			});
		}
	}
	//BEF
	if(id=="BEF_highFreq"){
		basicInformation.catExerciseFreq = customBasicEnum.highFreq;
		$("#BEF").fadeOut(500,function(){
			$("#BSI").fadeIn(500);	
		});
	}
	if(id=="BEF_medFreq"){
		basicInformation.catExerciseFreq = customBasicEnum.medFreq;
		if(basicInformation.pregnancy==customBasicEnum.yes){
			$("#BEF").fadeOut(500,function(){
				//goto advanced
				$("#ARC").fadeIn(500);
			});
		}else{
			$("#BEF").fadeOut(500,function(){
				$("#BBC").fadeIn(500);	
			});
		}
	}
	if(id=="BEF_lowFreq"){
		basicInformation.catExerciseFreq = customBasicEnum.lowFreq;
		if(basicInformation.pregnancy==customBasicEnum.yes){
			$("#BEF").fadeOut(500,function(){
				//goto advanced
				$("#ARC").fadeIn(500);
			});
		}else{
			$("#BEF").fadeOut(500,function(){
				$("#BBC").fadeIn(500);	
			});
		}
	}
	//BSI
	if(id=="BSI_inside"){
		basicInformation.catSide = customBasicEnum.inside;
		if(basicInformation.pregnancy==customBasicEnum.yes){
			$("#BSI").fadeOut(500,function(){
				//goto advanced
				$("#ARC").fadeIn(500);
			});
		}else{
			$("#BSI").fadeOut(500,function(){
				$("#BBC").fadeIn(500);	
			});
		}
	}
	if(id=="BSI_outside"){
		basicInformation.catSide = customBasicEnum.outside;
		if(basicInformation.pregnancy==customBasicEnum.yes){
			$("#BSI").fadeOut(500,function(){
				//goto advanced
				$("#ARC").fadeIn(500);
			});
		}else{
			$("#BSI").fadeOut(500,function(){
				$("#BBC").fadeIn(500);	
			});
		}
	}
	if(id=="BSI_medside"){
		basicInformation.catSide = customBasicEnum.medside;
		if(basicInformation.pregnancy==customBasicEnum.yes){
			$("#BSI").fadeOut(500,function(){
				//goto advanced
				$("#ARC").fadeIn(500);
			});
		}else{
			$("#BSI").fadeOut(500,function(){
				$("#BBC").fadeIn(500);	
			});
		}
	}
	//BBC
	if(id=="BBC_tooThin"){
		basicInformation.catSize = customBasicEnum.tooThin;
		$("#BBC").fadeOut(500,function(){
			//goto advanced
			$("#ARC").fadeIn(500,function(){
				$("#AIC_ADDWEI").toggleClass("questionBlock");
			});
		});
	}
	if(id=="BBC_aLittleThin"){
		basicInformation.catSize = customBasicEnum.aLittleThin;
		$("#BBC").fadeOut(500,function(){
			//goto advanced
			$("#ARC").fadeIn(500);
		});
	}
	if(id=="BBC_medium"){
		basicInformation.catSize = customBasicEnum.medium;
		$("#BBC").fadeOut(500,function(){
			//goto advanced
			$("#ARC").fadeIn(500);
		});
	}
	if(id=="BBC_aLittleFat"){
		basicInformation.catSize = customBasicEnum.aLittleFat;
		$("#BBC").fadeOut(500,function(){
			//goto advanced
			$("#ARC").fadeIn(500);
		});
	}
	if(id=="BBC_tooFat"){
		basicInformation.catSize = customBasicEnum.tooFat;
		$("#BBC").fadeOut(500,function(){
			//goto advanced
			$("#ARC").fadeIn(500,function(){
				$("#AIC_OVERWEI").toggleClass("questionBlock");
			});
		});
	}
	//ARC
	if(id=="ARC_SPE"){ //goto ANM
		advancedInformation.ARC = customAdvancedEnum.ARC_SPE;
		$("#ARC").fadeOut(500,function(){
			$("#ANM").fadeIn(500);
		});
	}
	if(id=="ARC_DAE"){ //goto AIC
		advancedInformation.ARC = customAdvancedEnum.ARC_DAE;
		$("#ARC").fadeOut(500,function(){
			$("#AIC").fadeIn(500);
		});
	}
	if(id=="ARC_KNO"){ //goto AIC
		advancedInformation.ARC = customAdvancedEnum.ARC_KNO;
		$("#ARC").fadeOut(500,function(){
			$("#AIC").fadeIn(500);
		});
	}
	//ANM
	if(id=="ANM_yes"){ //goto AWM
		advancedInformation.ANM = customAdvancedEnum.YES;
		$("#ANM").fadeOut(500,function(){
			$("#AWM").fadeIn(500,function(){
				$("#AWMEnter").focus();
			});
		});
	}
	if(id=="ANM_no"){ //goto AIC
		advancedInformation.ANM = customAdvancedEnum.NO;
		$("#ANM").fadeOut(500,function(){
			$("#AIC").fadeIn(500);
		});
	}
	//AWM //go to end
	if(id=="AWM_unsure"){
		advancedInformation.AWM = customAdvancedEnum.UNSURE;
		$("#AWM").fadeOut(500,function(){
			$("#ASPECIALFOOD").fadeIn(500,function(){
				trans_specialfood();
			});
		});
	}
	if(id=="AWMButton"){
		if($("#AWMEnter").val()!=""){
			advancedInformation.AWM = $("#AWMEnter").val();
			$("#AWM").fadeOut(500,function(){
				$("#ASPECIALFOOD").fadeIn(500,function(){
					trans_specialfood();
				});
			});
		}				
	}
	//AIC
	if(id=="AICButton"){
		if(icon[0]==0 && icon[1]==0 && icon[2]==0 && icon[3]==0 && icon[4]==0 && icon[5]==0 && icon[6]==0 && icon[7]==0 && icon[8]==0 && icon[9]==0 && icon[10]==0 && icon[11]==0){
			//err
		}else{
			//TODO: make AWI
			getAWI();
			$("#AIC").fadeOut(500,function(){
				$("#AWI").fadeIn(500);
			});
		}
	}
	//AWI
	if(id=="AWI_IMMU"){
		advancedInformation.AWI = customAdvancedEnum.AIC_IMMU;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	if(id=="AWI_HEART"){
		advancedInformation.AWI = customAdvancedEnum.AIC_HEART;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	if(id=="AWI_MEHAIR"){
		advancedInformation.AWI = customAdvancedEnum.AIC_MEHAIR;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	if(id=="AWI_LIHAIR"){
		advancedInformation.AWI = customAdvancedEnum.AIC_LIHAIR;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	if(id=="AWI_LOHAIR"){
		advancedInformation.AWI = customAdvancedEnum.AIC_LOHAIR;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	if(id=="AWI_SKIN"){
		advancedInformation.AWI = customAdvancedEnum.AIC_SKIN;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	if(id=="AWI_JOINT"){
		advancedInformation.AWI = customAdvancedEnum.AIC_JOINT;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	if(id=="AWI_BONE"){
		advancedInformation.AWI = customAdvancedEnum.AIC_BONE;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	if(id=="AWI_ADDWEI"){
		advancedInformation.AWI = customAdvancedEnum.AIC_ADDWEI;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	if(id=="AWI_OVERWEI"){
		advancedInformation.AWI = customAdvancedEnum.AIC_OVERWEI;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	if(id=="AWI_STOMA"){
		advancedInformation.AWI = customAdvancedEnum.AIC_STOMA;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	if(id=="AWI_STRESS"){
		advancedInformation.AWI = customAdvancedEnum.AIC_STRESS;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	if(id=="AWI_MOUTH"){
		advancedInformation.AWI = customAdvancedEnum.AWI_MOUTH;
		$("#AWI").fadeOut(500,function(){
			$("#AEM").fadeIn(500,function(){
				$("#AEMEnter").focus();
			});
		});
	}
	//AEM
	if(id=="AEMButton"){
		if($("#AEMEnter").val()!=""){
			advancedInformation.AEM = $("#AEMEnter").val();
			$("#AEM").fadeOut(500,function(){
				//record original icon
				for(i in icon){
					iconRecord[i] = icon[i];
				}
				//accroding to AWI
				if(advancedInformation.AWI == customAdvancedEnum.AIC_IMMU){
					iconRecord[0] = 0;
					travelIcon = customAdvancedEnum.AIC_IMMU;
					alreadyTravel.IMMU = 1;
					$("#IFE").fadeIn(500);
				}
				else if(advancedInformation.AWI == customAdvancedEnum.AIC_HEART){
					iconRecord[1] = 0;
					travelIcon = customAdvancedEnum.AIC_HEART;
					alreadyTravel.HEART = 1;
					$("#IHE").fadeIn(500);
				}
				else if(advancedInformation.AWI == customAdvancedEnum.AIC_MEHAIR){
					iconRecord[2] = 0;		
					travelIcon = customAdvancedEnum.AIC_MEHAIR;
					alreadyTravel.MEHAIR = 1;
					$("#IWC").fadeIn(500);
				}
				else if(advancedInformation.AWI == customAdvancedEnum.AIC_LIHAIR){
					iconRecord[3] = 0;
					travelIcon = customAdvancedEnum.AIC_LIHAIR;
					alreadyTravel.LIHAIR = 1;
					$("#IWC").fadeIn(500);
				}
				else if(advancedInformation.AWI == customAdvancedEnum.AIC_LOHAIR){
					iconRecord[4] = 0;
					travelIcon = customAdvancedEnum.AIC_LOHAIR;
					alreadyTravel.LOHAIR = 1;
					$("#IWC").fadeIn(500);
				}
				else if(advancedInformation.AWI == customAdvancedEnum.AIC_SKIN){
					iconRecord[5] = 0;
					travelIcon = customAdvancedEnum.AIC_SKIN;
					alreadyTravel.SKIN = 1;
					$("#ILH").fadeIn(500);
				}
				else if(advancedInformation.AWI == customAdvancedEnum.AIC_JOINT){
					iconRecord[6] = 0;
					travelIcon = customAdvancedEnum.AIC_JOINT;
					alreadyTravel.JOINT = 1;
					$("#IEB").fadeIn(500);
				}
				else if(advancedInformation.AWI == customAdvancedEnum.AIC_BONE){
					iconRecord[7] = 0;
					travelIcon = customAdvancedEnum.AIC_BONE;
					alreadyTravel.BONE = 1;
					$("#IBC").fadeIn(500);
				}
				else if(advancedInformation.AWI == customAdvancedEnum.AIC_ADDWEI){
					iconRecord[8] = 0;
					//go to redirect function
					redirectIcon();
				}
				else if(advancedInformation.AWI == customAdvancedEnum.AIC_OVERWEI){
					iconRecord[9] = 0;
					//go to redirect function
					redirectIcon();
				}
				else if(advancedInformation.AWI == customAdvancedEnum.AIC_STOMA){
					iconRecord[10] = 0;
					travelIcon = customAdvancedEnum.AIC_STOMA;
					alreadyTravel.STOMA = 1;
					$("#IVO").fadeIn(500);
				}
				else if(advancedInformation.AWI == customAdvancedEnum.AIC_STRESS){
					iconRecord[11] = 0;
					travelIcon = customAdvancedEnum.AIC_STRESS;
					alreadyTravel.STRESS = 1;
					$("#IBP").fadeIn(500);
				}
				else if(advancedInformation.AWI == customAdvancedEnum.AIC_MOUTH){
					iconRecord[12] = 0;
					travelIcon = customAdvancedEnum.AIC_MOUTH;
					alreadyTravel.MOUTH = 1;
					$("#IMO").fadeIn(500);
				}
			});
		}
	}
	//--------------------------------------------
	// IMMU
	//--------------------------------------------
	//IFE
	if(id=="IFE_yes"){
		iconInformation.IFE = customIconEnum.YES;
		$("#IFE").fadeOut(500,function(){
			$("#IFF").fadeIn(500);
		});
	}
	if(id=="IFE_no"){
		iconInformation.IFE = customIconEnum.NO;
		$("#IFE").fadeOut(500,function(){
			$("#IFF").fadeIn(500);
		});
	}
	//IFF
	if(id=="IFF_RARE"){
		iconInformation.IFF = customIconEnum.IFF_RARE;
		$("#IFF").fadeOut(500,function(){
			$("#IEI").fadeIn(500);
		});
	}
	if(id=="IFF_ONEPERMON"){
		iconInformation.IFF = customIconEnum.IFF_ONEPERMON;
		$("#IFF").fadeOut(500,function(){
			$("#IEI").fadeIn(500);
		});
	}
	if(id=="IFF_HIGHFREQ"){
		iconInformation.IFF = customIconEnum.IFF_HIGHFREQ;
		$("#IFF").fadeOut(500,function(){
			$("#IEI").fadeIn(500);
		});
	}
	//IEI
	if(id=="IEI_yes"){
		iconInformation.IEI = customIconEnum.YES;
		$("#IEI").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="IEI_no"){
		iconInformation.IEI = customIconEnum.NO;
		$("#IEI").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//--------------------------------------------
	// HEART
	//--------------------------------------------
	//IHE
	if(id=="IHE_yes"){
		iconInformation.IHE = customIconEnum.YES;
		$("#IHE").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="IHE_no"){
		iconInformation.IHE = customIconEnum.NO;
		$("#IHE").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//--------------------------------------------
	// HAIR, SKIN
	//--------------------------------------------
	//IWC
	if(id=="IWC_RARE"){
		iconInformation.IWC = customIconEnum.IWC_RARE;
		$("#IWC").fadeOut(500,function(){
			$("#IHH").fadeIn(500);
		});
	}
	if(id=="IWC_1TO2"){
		iconInformation.IWC = customIconEnum.IWC_1TO2;
		$("#IWC").fadeOut(500,function(){
			$("#IHH").fadeIn(500);
		});
	}
	if(id=="IWC_3UP"){
		iconInformation.IWC = customIconEnum.IWC_3UP;
		$("#IWC").fadeOut(500,function(){
			$("#IDC").fadeIn(500);
		});
	}
	//IDC
	if(id=="IDC_yes"){
		iconInformation.IDC = customIconEnum.YES;
		$("#IDC").fadeOut(500,function(){
			$("#IHH").fadeIn(500);
		});
	}
	if(id=="IDC_no"){
		iconInformation.IDC = customIconEnum.NO;
		$("#IDC").fadeOut(500,function(){
			$("#IHH").fadeIn(500);
		});
	}
	//IHH
	if(id=="IHH_yes"){
		iconInformation.IHH = customIconEnum.YES;
		$("#IHH").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="IHH_no"){
		iconInformation.IHH = customIconEnum.NO;
		$("#IHH").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//ILH
	if(id=="ILH_yes"){
		iconInformation.ILH = customIconEnum.YES;
		$("#ILH").fadeOut(500,function(){
			$("#ILP").fadeIn(500);
		});
	}
	if(id=="ILH_no"){
		iconInformation.ILH = customIconEnum.NO;
		$("#ILH").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//ILP
	if(id=="ILP_FRONT"){
		iconInformation.ILP = customIconEnum.ILP_FRONT;
		$("#ILP").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="ILP_MID"){
		iconInformation.ILP = customIconEnum.ILP_MID;
		$("#ILP").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="ILP_BACK"){
		iconInformation.ILP = customIconEnum.ILP_BACK;
		$("#ILP").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//IHS
	if(id=="IHS_DRY"){
		iconInformation.IHS = customIconEnum.IHS_DRY;
		$("#IHS").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="IHS_HEALTH"){
		iconInformation.IHS = customIconEnum.IHS_HEALTH;
		$("#IHS").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="IHS_ROUGH"){
		iconInformation.IHS = customIconEnum.IHS_ROUGH;
		$("#IHS").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//IPO
	if(id=="IPO_yes"){
		iconInformation.IPO = customIconEnum.YES;
		$("#IPO").fadeOut(500,function(){
			$("#ICV").fadeIn(500);
		});
	}
	if(id=="IPO_no"){
		iconInformation.IPO = customIconEnum.NO;
		$("#IPO").fadeOut(500,function(){
			$("#ICV").fadeIn(500);
		});
	}
	//ICV
	if(id=="ICV_yes"){
		iconInformation.ICV = customIconEnum.YES;
		$("#ICV").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="ICV_no"){
		iconInformation.ICV = customIconEnum.NO;
		$("#ICV").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//ISR
	if(id=="ISR_yes"){
		iconInformation.ISR = customIconEnum.YES;
		$("#ISR").fadeOut(500,function(){
			$("#INR").fadeIn(500);
		});
	}
	if(id=="ISR_no"){
		iconInformation.ISR = customIconEnum.NO;
		$("#ISR").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//INR
	if(id=="INR_yes"){
		iconInformation.INR = customIconEnum.YES;
		$("#INR").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="INR_no"){
		iconInformation.INR = customIconEnum.NO;
		$("#INR").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//--------------------------------------------
	// JOINT, BONE
	//--------------------------------------------
	//IEB
	if(id=="IEB_yes"){
		iconInformation.IEB = customIconEnum.YES;
		$("#IEB").fadeOut(500,function(){
			redirectIcon();
		});
	}
	if(id=="IEB_no"){
		iconInformation.IEB = customIconEnum.NO;
		$("#IEB").fadeOut(500,function(){
			redirectIcon();
		});
	}
	//IBC
	if(id=="IBC_yes"){
		iconInformation.IBC = customIconEnum.YES;
		$("#IBC").fadeOut(500,function(){
			$("#IEF").fadeIn(500);
		});
	}
	if(id=="IBC_no"){
		iconInformation.IBC = customIconEnum.NO;
		$("#IBC").fadeOut(500,function(){
			$("#IEF").fadeIn(500);
		});
	}
	//IEF
	if(id=="IEF_yes"){
		iconInformation.IEF = customIconEnum.YES;
		$("#IEF").fadeOut(500,function(){
			$("#IJF").fadeIn(500);
		});
	}
	if(id=="IEF_no"){
		iconInformation.IEF = customIconEnum.NO;
		$("#IEF").fadeOut(500,function(){
			$("#IJF").fadeIn(500);
		});
	}
	//IJF
	if(id=="IJF_yes"){
		iconInformation.IJF = customIconEnum.YES;
		$("#IJF").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="IJF_no"){
		iconInformation.IJF = customIconEnum.NO;
		$("#IJF").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//--------------------------------------------
	// DIGEST, STRESS
	//--------------------------------------------
	//IVO
	if(id=="IVO_yes"){
		iconInformation.IVO = customIconEnum.YES;
		$("#IVO").fadeOut(500,function(){
			$("#IVA").fadeIn(500);
		});
	}
	if(id=="IVO_no"){
		iconInformation.IVO = customIconEnum.NO;
		$("#IVO").fadeOut(500,function(){
			redirectIcon();
		});
	}
	//IVA
	if(id=="IVA_UP"){
		iconInformation.IVA = customIconEnum.IVA_UP;
		$("#IVA").fadeOut(500,function(){
			$("#IVN").fadeIn(500);
		});
	}
	if(id=="IVA_BOT"){
		iconInformation.IVA = customIconEnum.IVA_BOT;
		$("#IVA").fadeOut(500,function(){
			$("#IVN").fadeIn(500);
		});
	}
	if(id=="IVA_BOTH"){
		iconInformation.IVA = customIconEnum.IVA_BOTH;
		$("#IVA").fadeOut(500,function(){
			$("#IVN").fadeIn(500);
		});
	}
	if(id=="IVA_unsure"){
		iconInformation.IVA = customIconEnum.UNSURE;
		$("#IVA").fadeOut(500,function(){
			redirectIcon();
		});
	}
	//IVN
	if(id=="IVN_BETTER"){
		iconInformation.IVN = customIconEnum.IVN_BETTER;
		$("#IVN").fadeOut(500,function(){
			redirectIcon();
		});
	}
	if(id=="IVN_FORAWHILE"){
		iconInformation.IVN = customIconEnum.IVN_FORAWHILE;
		$("#IVN").fadeOut(500,function(){
			redirectIcon();
		});
	}
	if(id=="IVN_unsure"){
		iconInformation.IVN = customIconEnum.UNSURE;
		$("#IVN").fadeOut(500,function(){
			redirectIcon();
		});
	}
	//IBP
	if(id=="IBP_yes"){
		iconInformation.IBP = customIconEnum.YES;
		$("#IBP").fadeOut(500,function(){
			$("#IBN").fadeIn(500);
		});
	}
	if(id=="IBP_no"){
		iconInformation.IBP = customIconEnum.NO;
		$("#IBP").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//IBN
	if(id=="IBN_BETTER"){
		iconInformation.IBN = customIconEnum.IBN_BETTER;
		$("#IBN").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="IBN_FORAWHILE"){
		iconInformation.IBN = customIconEnum.IBN_FORAWHILE;
		$("#IBN").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="IBN_unsure"){
		iconInformation.IBN = customIconEnum.UNSURE;
		$("#IBN").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//IPR
	if(id=="IPRButton"){				
		$("#IPR").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//--------------------------------------------
	// MOUTH
	//--------------------------------------------
	//IMO
	if(id=="IMO_BS"){
		iconInformation.IMO = customIconEnum.IMO_BS;
		$("#IMO").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="IMO_OVERSWEAT"){
		iconInformation.IMO = customIconEnum.IMO_OVERSWEAT;
		$("#IMO").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	if(id=="IMO_no"){
		iconInformation.IMO = customIconEnum.NO;
		$("#IMO").fadeOut(500,function(){
			//GO BACK
			redirectIcon();
		});
	}
	//--------------------------------------------
	// EXTRA
	//--------------------------------------------
	//EEH
	if(id=="EEH_STRIKE"){
		extraInformation.EEH = customExtraEnum.EEH_STRIKE;
		$("#EEH").fadeOut(500,function(){
			$("#EKL").fadeIn(500);
		});
	}
	if(id=="EEH_HARD"){
		extraInformation.EEH = customExtraEnum.EEH_HARD;
		$("#EEH").fadeOut(500,function(){
			$("#EKL").fadeIn(500);
		});
	}
	if(id=="EEH_FROMNOW"){
		extraInformation.EEH = customExtraEnum.EEH_FROMNOW;
		$("#EEH").fadeOut(500,function(){
			$("#EKL").fadeIn(500);
		});
	}
	//EKL
	if(id=="EKL_EXP"){
		extraInformation.EKL = customExtraEnum.EKL_EXP;
		$("#EKL").fadeOut(500,function(){
			$("#EKEEPEXP").fadeIn(500,function(){
				trans_keepexpert();
			});
		});
	}
	if(id=="EKL_STU"){
		extraInformation.EKL = customExtraEnum.EKL_STU;
		$("#EKL").fadeOut(500,function(){
			$("#EKEEPEXP").fadeIn(500,function(){
				trans_keepexpert();
			});
		});
	}
	if(id=="EKL_BEG"){
		extraInformation.EKL = customExtraEnum.EKL_BEG;
		$("#EKL").fadeOut(500,function(){
			$("#EKEEPEXP").fadeIn(500,function(){
				trans_keepexpert();
			});
		});
	}
	//ENL
	if(id=="ENL_EXP"){
		extraInformation.ENL = customExtraEnum.ENL_EXP;
		$("#ENL").fadeOut(500,function(){
			$("#ENUTRIEXP").fadeIn(500,function(){
				trans_nutritionexpert();
			});
		});
	}
	if(id=="ENL_STU"){
		extraInformation.ENL = customExtraEnum.ENL_STU;
		$("#ENL").fadeOut(500,function(){
			$("#ENUTRIEXP").fadeIn(500,function(){
				trans_nutritionexpert();
			});
		});
	}
	if(id=="ENL_BEG"){
		extraInformation.ENL = customExtraEnum.ENL_BEG;
		$("#ENL").fadeOut(500,function(){
			$("#ENUTRIEXP").fadeIn(500,function(){
				trans_nutritionexpert();
			});
		});
	}
	//EFB
	if(id=="EFB_unsure"){
		extraInformation.EFB = customExtraEnum.UNSURE;
		$("#EFB").fadeOut(500,function(){
			$("#EFI").fadeIn(500);
		});
	}
	if(id=="EFBButton"){
		if($("#EFBEnter").val()!=""){
			extraInformation.EFB = $("#EFBEnter").val();
			$("#EFB").fadeOut(500,function(){
				$("#EEC").fadeIn(500);
			});
		}
	}
	//EFI
	if(id=="EFIButton"){
		extraInformation.EFI = "";
		$("#EFI").fadeOut(500,function(){
			$("#EFG").fadeIn(500);
		});
	}
	//EFG
	if(id=="EFG_yes"){
		extraInformation.EFG = customExtraEnum.YES;
		$("#EFG").fadeOut(500,function(){
			$("#EEC").fadeIn(500);
		});
	}
	if(id=="EFG_no"){
		extraInformation.EFG = customExtraEnum.NO;
		$("#EFG").fadeOut(500,function(){
			$("#EEC").fadeIn(500);
		});
	}
	if(id=="EFG_unsure"){
		extraInformation.EFG = customExtraEnum.UNSURE;
		$("#EFG").fadeOut(500,function(){
			$("#EEC").fadeIn(500);
		});
	}
	//EEC
	if(id=="EEC_CONTROL"){
		extraInformation.EEC = customExtraEnum.EEC_CONTROL;
		$("#EEC").fadeOut(500,function(){
			$("#ECM").fadeIn(500);
		});
	}
	if(id=="EEC_FULL"){
		extraInformation.EEC = customExtraEnum.EEC_FULL;
		$("#EEC").fadeOut(500,function(){
			$("#EAA").fadeIn(500);
		});
	}
	//ECM
	if(id=="ECM_ONCE"){
		extraInformation.ECM = customExtraEnum.ECM_ONCE;
		$("#ECM").fadeOut(500,function(){
			$("#EES").fadeIn(500);
		});
	}
	if(id=="ECM_TWICE"){
		extraInformation.ECM = customExtraEnum.ECM_TWICE;
		$("#ECM").fadeOut(500,function(){
			$("#EES").fadeIn(500);
		});
	}
	if(id=="ECM_UP"){
		extraInformation.ECM = customExtraEnum.ECM_UP;
		$("#ECM").fadeOut(500,function(){
			$("#EES").fadeIn(500);
		});
	}
	//EES
	if(id=="EES_SOON"){
		extraInformation.EES = customExtraEnum.EES_SOON;
		$("#EES").fadeOut(500,function(){
			$("#EAA").fadeIn(500);
		});
	}
	if(id=="EES_SLOW"){
		extraInformation.EES = customExtraEnum.EES_SLOW;
		$("#EES").fadeOut(500,function(){
			$("#EAA").fadeIn(500);
		});
	}
	if(id=="EES_NEVER"){
		extraInformation.EES = customExtraEnum.EES_NEVER;
		$("#EES").fadeOut(500,function(){
			$("#EAA").fadeIn(500);
		});
	}
	//EAA
	if(id=="EAA_yes"){
		extraInformation.EAA = customExtraEnum.YES;
		$("#EAA").fadeOut(500,function(){
			$("#EAB").fadeIn(500);
		});
	}
	if(id=="EAA_no"){
		extraInformation.EAA = customExtraEnum.NO;
		$("#EAA").fadeOut(500,function(){
			$("#EAB").fadeIn(500);
		});
	}
	//EAB
	if(id=="EAB_NEVER"){
		extraInformation.EAB = customExtraEnum.EAB_NEVER;
		$("#EAB").fadeOut(500,function(){
			$("#EAC").fadeIn(500);
		});
	}
	if(id=="EAB_ONCE"){
		extraInformation.EAB = customExtraEnum.EAB_ONCE;
		$("#EAB").fadeOut(500,function(){
			$("#EAC").fadeIn(500);
		});
	}
	if(id=="EAB_FORTHUP"){
		extraInformation.EAB = customExtraEnum.EAB_FORTHUP;
		$("#EAB").fadeOut(500,function(){
			$("#EAC").fadeIn(500);
		});
	}
	//EAC
	if(id=="EAC_NEVER"){
		extraInformation.EAC = customExtraEnum.EAC_NEVER;
		$("#EAC").fadeOut(500,function(){
			$("#EAD").fadeIn(500);
		});
	}
	if(id=="EAC_ONCE"){
		extraInformation.EAC = customExtraEnum.EAC_ONCE;
		$("#EAC").fadeOut(500,function(){
			$("#EAD").fadeIn(500);
		});
	}
	if(id=="EAC_TWICE"){
		extraInformation.EAC = customExtraEnum.EAC_TWICE;
		$("#EAC").fadeOut(500,function(){
			$("#EAD").fadeIn(500);
		});
	}
	if(id=="EAC_EACHDAY"){
		extraInformation.EAC = customExtraEnum.EAC_EACHDAY;
		$("#EAC").fadeOut(500,function(){
			$("#EAD").fadeIn(500);
		});
	}
	//EAD
	if(id=="EADButton"){
		extraInformation.EAD = "";
		$("#EAD").fadeOut(500,function(){
			$("#EAE").fadeIn(500);
		});
	}
	//EAE
	if(id=="EAE_HIGHFREQ"){
		extraInformation.EAE = customExtraEnum.EAE_HIGHFREQ;
		$("#EAE").fadeOut(500,function(){
			$("#EAF").fadeIn(500);
		});
	}
	if(id=="EAE_LOWFREQ"){
		extraInformation.EAE = customExtraEnum.EAE_LOWFREQ;
		$("#EAE").fadeOut(500,function(){
			$("#EAF").fadeIn(500);
		});
	}
	//EAF
	if(id=="EAF_NEVER"){
		extraInformation.EAF = customExtraEnum.EAF_NEVER;
		$("#EAF").fadeOut(500,function(){
			$("#EBA").fadeIn(500);
		});
	}
	if(id=="EAF_YESBUTHATE"){
		extraInformation.EAF = customExtraEnum.EAF_YESBUTHATE;
		$("#EAF").fadeOut(500,function(){
			$("#EBA").fadeIn(500);
		});
	}
	if(id=="EAF_ONCE"){
		extraInformation.EAF = customExtraEnum.EAF_ONCE;
		$("#EAF").fadeOut(500,function(){
			$("#EBA").fadeIn(500);
		});
	}
	if(id=="EAF_THIRD"){
		extraInformation.EAF = customExtraEnum.EAF_THIRD;
		$("#EAF").fadeOut(500,function(){
			$("#EBA").fadeIn(500);
		});
	}
	//EBA
	if(id=="EBAButton"){
		if($("#EBA_PLACE").val()!="0"){
			extraInformation.EBA = $("#EBA_PLACE").val();
			$("#EBA").fadeOut(500,function(){
				$("#EBB").fadeIn(500);
			});
		}
	}
	//EBB
	if(id=="EBB_FIRST"){
		extraInformation.EBB = customExtraEnum.EBB_FIRST;
		$("#EBB").fadeOut(500,function(){
			$("#EBC").fadeIn(500);
		});
	}
	if(id=="EBB_WANTTOKNOW"){
		extraInformation.EBB = customExtraEnum.EBB_WANTTOKNOW;
		$("#EBB").fadeOut(500,function(){
			$("#EBC").fadeIn(500);
		});
	}
	if(id=="EBB_DONTWANT"){
		extraInformation.EBB = customExtraEnum.EBB_DONTWANT;
		$("#EBB").fadeOut(500,function(){
			$("#EBC").fadeIn(500);
		});
	}
	//EBC
	if(id=="EBC_INTER"){
		extraInformation.EBC = customExtraEnum.EBC_INTER;
		$("#EBC").fadeOut(500,function(){
			//
			showResult();
		});
	}
	if(id=="EBC_FB_IG"){
		extraInformation.EBC = customExtraEnum.EBC_FB_IG;
		$("#EBC").fadeOut(500,function(){
			//
			showResult();
		});
	}
	if(id=="EBC_FRIEND"){
		extraInformation.EBC = customExtraEnum.EBC_FRIEND;
		$("#EBC").fadeOut(500,function(){
			//
			showResult();
		});
	}
	if(id=="EBC_OTHER"){
		extraInformation.EBC = customExtraEnum.EBC_OTHER;
		$("#EBC").fadeOut(500,function(){
			//
			showResult();
		});
	}
}
//Generate AWI innerHTML
function getAWI(){
	if(icon[0]==0) $("#AWI_IMMU").toggleClass("questionBlock");
	if(icon[1]==0) $("#AWI_HEART").toggleClass("questionBlock");
	if(icon[2]==0) $("#AWI_MEHAIR").toggleClass("questionBlock");
	if(icon[3]==0) $("#AWI_LIHAIR").toggleClass("questionBlock");
	if(icon[4]==0) $("#AWI_LOHAIR").toggleClass("questionBlock");
	if(icon[5]==0) $("#AWI_SKIN").toggleClass("questionBlock");
	if(icon[6]==0) $("#AWI_JOINT").toggleClass("questionBlock");
	if(icon[7]==0) $("#AWI_BONE").toggleClass("questionBlock");
	if(icon[8]==0) $("#AWI_ADDWEI").toggleClass("questionBlock");
	if(icon[9]==0) $("#AWI_OVERWEI").toggleClass("questionBlock");
	if(icon[10]==0) $("#AWI_STOMA").toggleClass("questionBlock");
	if(icon[11]==0) $("#AWI_STRESS").toggleClass("questionBlock");
	if(icon[12]==0) $("#AWI_MOUTH").toggleClass("questionBlock");
}
//species
function chooseSpecies(id){
	if(id=="no1") {species = "no1";document.getElementById("modalSpecies").innerHTML = "「 加 拿 大 無 毛 貓 」";}
	if(id=="sh1") {species = "sh1";document.getElementById("modalSpecies").innerHTML = "「 英 短 」";}
	if(id=="sh2") {species = "sh2";document.getElementById("modalSpecies").innerHTML = "「 美 短 」";}
	if(id=="sh3") {species = "sh3";document.getElementById("modalSpecies").innerHTML = "「 異 短 」";}
	if(id=="sh4") {species = "sh4";document.getElementById("modalSpecies").innerHTML = "「 歐 短 」";}
	if(id=="sh5") {species = "sh5";document.getElementById("modalSpecies").innerHTML = "「 藍 貓 」";}
	if(id=="sh6") {species = "sh6";document.getElementById("modalSpecies").innerHTML = "「 暹 羅 」";}
	if(id=="sh7") {species = "sh7";document.getElementById("modalSpecies").innerHTML = "「 狸 花 」";}
	if(id=="sh8") {species = "sh8";document.getElementById("modalSpecies").innerHTML = "「 埃 及 貓 」";}
	if(id=="sh9") {species = "sh9";document.getElementById("modalSpecies").innerHTML = "「 雪 鞋 貓 」";}
	if(id=="sh10") {species = "sh10";document.getElementById("modalSpecies").innerHTML = "「 曼 赤 肯 」";}
	if(id=="sh11") {species = "sh11";document.getElementById("modalSpecies").innerHTML = "「 新 加 坡 貓 」";}
	if(id=="sh12") {species = "sh12";document.getElementById("modalSpecies").innerHTML = "「 日 本 短 尾 」";}
	if(id=="sh13") {species = "sh13";document.getElementById("modalSpecies").innerHTML = "「 蘇 格 蘭 折 耳 」";}
	if(id=="sh14") {species = "sh14";document.getElementById("modalSpecies").innerHTML = "「 阿 比 西 尼 亞 」";}
	if(id=="sh15") {species = "sh15";document.getElementById("modalSpecies").innerHTML = "「 孟 加 拉 貓 」";}
	if(id=="lo1") {species = "lo1";document.getElementById("modalSpecies").innerHTML = "「 波 斯 貓 」";}
	if(id=="lo2") {species = "lo2";document.getElementById("modalSpecies").innerHTML = "「 布 偶 貓 」";}
	if(id=="lo3") {species = "lo3";document.getElementById("modalSpecies").innerHTML = "「 伯 曼 貓 」";}
	if(id=="lo4") {species = "lo4";document.getElementById("modalSpecies").innerHTML = "「 緬 因 貓 」";}
	if(id=="lo5") {species = "lo5";document.getElementById("modalSpecies").innerHTML = "「 金 吉 拉 」";}
	if(id=="lo6") {species = "lo6";document.getElementById("modalSpecies").innerHTML = "「 挪 威 森 林 」";}
	if(id=="lo7") {species = "lo7";document.getElementById("modalSpecies").innerHTML = "「 西 伯 利 亞 」";}
	if(id=="lo8") {species = "lo8";document.getElementById("modalSpecies").innerHTML = "「 喜 馬 拉 雅 」";}
	if(id=="lo9") {species = "lo9";document.getElementById("modalSpecies").innerHTML = "「 索 馬 利 貓 」";}
	if(id=="lo10") {species = "lo10";document.getElementById("modalSpecies").innerHTML = "「 長 毛 暹 羅 貓 」";}
	if(id=="lo11") {species = "lo11";document.getElementById("modalSpecies").innerHTML = "「 塞 爾 凱 克 捲 毛 貓 」";}
}
//redirect icon part		
var travelIcon = "";
var alreadyTravel = {
	IMMU : 0,
	HEART : 0,
	MEHAIR : 0,
	LIHAIR : 0,
	LOHAIR : 0,
	SKIN : 0,
	JOINT : 0,
	BONE : 0,
	ADDWEI : 0,
	OVERWEI : 0,
	STOMA : 0,
	STRESS : 0,
	MOUTH : 0
}
function redirectIcon(){
	//traveling
	if(travelIcon==customAdvancedEnum.AIC_MEHAIR){
		travelIcon = "";
		alreadyTravel.MEHAIR = 1;
		$("#IPO").fadeIn(500);
	}
	else if(travelIcon==customAdvancedEnum.AIC_LIHAIR){
		travelIcon = "";
		alreadyTravel.LIHAIR = 1;
		$("#IHS").fadeIn(500);
	}
	else if(travelIcon==customAdvancedEnum.AIC_LOHAIR){
		travelIcon = "";
		alreadyTravel.LOHAIR = 1;
		if(alreadyTravel.SKIN==1){					
			redirectIcon();
		}else{					
			$("#ILH").fadeIn(500);
		}
	}
	else if(travelIcon==customAdvancedEnum.AIC_SKIN){
		travelIcon = "";
		alreadyTravel.SKIN = 1;
		$("#ISR").fadeIn(500);
	}
	else if(travelIcon==customAdvancedEnum.AIC_JOINT){
		travelIcon = "";
		alreadyTravel.JOINT = 1;
		if(alreadyTravel.BONE==1){
			redirectIcon();
		}
		else{
			$("#IBC").fadeIn(500);
		}
	}
	else if(travelIcon==customAdvancedEnum.AIC_STOMA){
		travelIcon = "";
		alreadyTravel.STOMA = 1;
		if(alreadyTravel.STRESS==1){
			redirectIcon();
		}
		else{
			$("#IBP").fadeIn(500);
		}
	}
	else if(travelIcon==customAdvancedEnum.AIC_STRESS){
		travelIcon = "";
		alreadyTravel.STRESS = 1;
		$("#IPR").fadeIn(500);
	}
	//IMMU
	else if(iconRecord[0]==1){
		iconRecord[0] = 0;
		travelIcon = "";
		alreadyTravel.IMMU = 1;
		$("#IFE").fadeIn(500);
	}
	//HEART
	else if(iconRecord[1]==1){
		iconRecord[1] = 0;
		travelIcon = "";
		alreadyTravel.HEART = 1;
		$("#IHE").fadeIn(500);
	}
	//HAIR,SKIN
	else if(iconRecord[2]==1){
		travelIcon = customAdvancedEnum.AIC_MEHAIR;
		alreadyTravel.MEHAIR = 1;
		iconRecord[2] = 0;
		if(alreadyTravel.LIHAIR==1 || alreadyTravel.LOHAIR==1){
			travelIcon = "";
			$("#IPO").fadeIn(500);
		}
		else{
			$("#IWC").fadeIn(500);
		}
	}
	else if(iconRecord[3]==1){
		travelIcon = customAdvancedEnum.AIC_LIHAIR;
		alreadyTravel.LIHAIR = 1;
		iconRecord[3] = 0;
		if(alreadyTravel.MEHAIR==1 || alreadyTravel.LOHAIR==1){
			travelIcon = "";
			$("#IHS").fadeIn(500);
		}else{
			$("#IWC").fadeIn(500);
		}
	}
	else if(iconRecord[4]==1){
		travelIcon = customAdvancedEnum.AIC_LOHAIR;
		alreadyTravel.LOHAIR = 1;
		iconRecord[4] = 0;
		if(alreadyTravel.MEHAIR==1 || alreadyTravel.LIHAIR==1){
			if(alreadyTravel.SKIN==1){
				travelIcon = "";
				redirectIcon();
			}else{
				travelIcon = "";
				$("#ILH").fadeIn(500);
			}
		}else{
			$("#IWC").fadeIn(500);
		}
	}
	else if(iconRecord[5]==1){
		travelIcon = customAdvancedEnum.AIC_SKIN;
		alreadyTravel.SKIN = 1;
		iconRecord[5] = 0;
		if(alreadyTravel.LOHAIR==1){
			travelIcon = "";
			$("#ISR").fadeIn(500);
		}else{
			$("#ILH").fadeIn(500);
		}
	}
	//JOINT,BONE
	else if(iconRecord[6]==1){
		travelIcon = customAdvancedEnum.AIC_JOINT;
		alreadyTravel.JOINT = 1;
		iconRecord[6] = 0;
		$("#IEB").fadeIn(500);
	}
	else if(iconRecord[7]==1){
		travelIcon = "";
		alreadyTravel.BONE = 1;
		iconRecord[7] = 0;
		if(alreadyTravel.JOINT==1){
			redirectIcon();
		}else{
			$("#IBC").fadeIn(500);
		}
	}
	//STOMA,STRESS
	else if(iconRecord[10]==1){
		travelIcon = customAdvancedEnum.AIC_STOMA;
		alreadyTravel.STOMA = 1;
		iconRecord[10] = 0;
		$("#IVO").fadeIn(500);
	}
	else if(iconRecord[11]==1){
		travelIcon = customAdvancedEnum.AIC_STRESS;
		alreadyTravel.STRESS = 1;
		iconRecord[11] = 0;
		if(alreadyTravel.STOMA==1){
			travelIcon = "";
			$("#IPR").fadeIn(500);
		}else{
			$("#IBP").fadeIn(500);
		}
	}
	//MOUTH
	else if(iconRecord[12]==1){
		iconRecord[12] = 0;
		alreadyTravel.MOUTH = 1;
		travelIcon = "";
		$("#IMO").fadeIn(500);
	}
	else{
		alert("icon question complete!");
		$("#EEH").fadeIn(500);
	}
}
//----------------------------------
// Transition Page
//----------------------------------
function trans_hello(){
	var hello = setInterval(myFunction,2000);
	function myFunction(){
		$("#BHELLO").fadeOut(500,function(){
			$("#BKN").fadeIn(500,function(){
				$("#BKNEnter").focus();
				clearInterval(hello);
			});
		});
	}
}
function trans_nicetomeetyou(){
	var Ainner = "<span>" + basicInformation.name + ", " + basicInformation.catName + "很高興認識你們</span>";
	var Binner = "<br><span class='smallSpan'>飲食可以改善身體狀況</span><br><span class='smallSpan'>我們相信因為有我們的存在，" + basicInformation.catName + "也會變得更健康</span><br><span class='smallSpan'>就讓我們用五分鐘，來幫" + basicInformation.catName + "做個飲食健檢吧~</span>";
	document.getElementById("BNICE_A").innerHTML = Ainner;
	document.getElementById("BNICE_B").innerHTML = Binner;
	var functionA = setInterval(myFunctionA,100);
	var functionB = setInterval(myFunctionB,7000);
	function myFunctionA(){
		$("#BNICE_A").fadeIn(1500,function(){
			$("#BNICE_B").fadeIn(1500,function(){				
				clearInterval(functionA);
			});
		});
	}
	function myFunctionB(){
		$("#BNICEMEET").fadeOut(500,function(){
			$("#BKS").fadeIn(500,function(){
				clearInterval(functionB);
			});
		});
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
	var functionA = setInterval(myFunctionA,100);
	var functionB = setInterval(myFunctionB,5000);
	function myFunctionA(){
		$("#BAGE_A").fadeIn(1500,function(){
			$("#BAGE_B").fadeIn(1500,function(){				
				clearInterval(functionA);
			});
		});
	}
	function myFunctionB(){
		$("#BAGECAL").fadeOut(500,function(){
			$("#BSP").fadeIn(500,function(){
				clearInterval(functionB);
			});
		});
	}
}
function trans_pregpage(){
	var Ainner = "<span>好的，卡卡貓會依照" + basicInformation.catName + "的懷孕狀況加入至我們推薦菜單裡~</span>";
	var Binner = "<br><span>也預祝" + basicInformation.catName + "生產順利喔！</span>";
	document.getElementById("BPREGPAGE_A").innerHTML = Ainner;
	document.getElementById("BPREGPAGE_B").innerHTML = Binner;
	var functionA = setInterval(myFunctionA,100);
	var functionB = setInterval(myFunctionB,7000);
	function myFunctionA(){
		$("#BPREGPAGE_A").fadeIn(1500,function(){
			$("#BPREGPAGE_B").fadeIn(1500,function(){				
				clearInterval(functionA);
			});
		});
	}
	function myFunctionB(){
		$("#BPREGPAGE").fadeOut(500,function(){
			$("#BCW").fadeIn(500,function(){
				$("#BCWEnter").focus();
				clearInterval(functionB);
			});
		});
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
		Binner = "<br><span>再多加油～！~</span>";
		document.getElementById("EKEEPEXP_A").innerHTML = Ainner;
		document.getElementById("EKEEPEXP_B").innerHTML = Binner;	
	}else{
		Ainner = "<span>別擔心</span>";
		Binner = "<br><span>卡卡貓會帶領你並且給妳更多飼育貓咪的小訣竅！</span>";
		document.getElementById("EKEEPEXP_A").innerHTML = Ainner;
		document.getElementById("EKEEPEXP_B").innerHTML = Binner;	
	}	
	var functionA = setInterval(myFunctionA,100);
	var functionB = setInterval(myFunctionB,5000);
	function myFunctionA(){
		$("#EKEEPEXP_A").fadeIn(1500,function(){
			$("#EKEEPEXP_B").fadeIn(1500,function(){				
				clearInterval(functionA);
			});
		});
	}
	function myFunctionB(){
		$("#EKEEPEXP").fadeOut(500,function(){
			$("#ENL").fadeIn(500,function(){
				clearInterval(functionB);
			});
		});
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
		Ainner = "<span>好的</span>";
		Binner = "<br><span>卡卡貓也會與您一起加油的~~</span>";
		document.getElementById("ENUTRIEXP_A").innerHTML = Ainner;
		document.getElementById("ENUTRIEXP_B").innerHTML = Binner;
	}else{
		Ainner = "<span>請放心，卡卡貓專業的獸醫團隊會照顧" + basicInformation.catName + "的飲食健康</span>";
		Binner = "<br><span>因為我們重視" + basicInformation.catName + "就像你重視" + basicInformation.catName + "一樣，我們會給您全面並且完整的健康營養資訊~</span>";
		document.getElementById("ENUTRIEXP_A").innerHTML = Ainner;
		document.getElementById("ENUTRIEXP_B").innerHTML = Binner;
	}
	var functionA = setInterval(myFunctionA,100);
	var functionB = setInterval(myFunctionB,5000);
	function myFunctionA(){
		$("#ENUTRIEXP_A").fadeIn(1500,function(){
			$("#ENUTRIEXP_B").fadeIn(1500,function(){				
				clearInterval(functionA);
			});
		});
	}
	function myFunctionB(){
		$("#ENUTRIEXP").fadeOut(500,function(){
			$("#EFB").fadeIn(500,function(){
				$("#EFBEnter").focus();
				clearInterval(functionB);
			});
		});
	}
}
//testing
function showResult(){
	var resultInformation = "";
	resultInformation += "<h3>飼主姓名 : " + basicInformation.name + "</h3>";
	resultInformation += "<h3>貓貓姓名 : " + basicInformation.catName + "</h3>";
	resultInformation += "<h3>飼主性別 : " + basicInformation.sex + "</h3>";
	resultInformation += "<h3>貓貓性別 : " + basicInformation.catSex + "</h3>";
	resultInformation += "<h3>飼主年齡 : " + basicInformation.age + "</h3>";
	resultInformation += "<h3>貓貓年齡 : " + basicInformation.catAge + "</h3>";
	resultInformation += "<h3>貓貓品種 : " + basicInformation.species + "</h3>";
	resultInformation += "<h3>貓貓結紮 : " + basicInformation.ligation + "</h3>";
	resultInformation += "<h3>貓貓懷孕 : " + basicInformation.pregnancy + "</h3>";			
	resultInformation += "<h3>懷孕時間 : " + basicInformation.pregnancyTime + "</h3>";			
	resultInformation += "<h3>貓貓體重 : " + basicInformation.catWeight + "</h3>";
	resultInformation += "<h3>貓貓活動 : " + basicInformation.catExerciseFreq + "</h3>";
	resultInformation += "<h3>室內室外 : " + basicInformation.catSide + "</h3>";
	resultInformation += "<h3>貓貓體型 : " + basicInformation.catSize + "</h3>";
	document.getElementById("result").innerHTML = resultInformation;
}