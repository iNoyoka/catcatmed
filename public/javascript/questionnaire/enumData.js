//-------------------------------------------------------------
// ENUM DATA
//		A. BASIC, ADVANCED, ICON, EXTRA ENUM and DATARECORD
//		B. TRAVEL LIST (RECORD LIST and ICON LIST)
//-------------------------------------------------------------
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
	_1to3:"1_3",
	_3to6:"4_6",
	_6up:"6up",
	unsure:"不確定",
}
var basicInformation = {
	name:"無資料",
	catName:"無資料",
	sex:"無資料",
	catSex:"女",
	age:"無資料",
	catAgeYear:"2",
	catAgeMonth:"6",
	species:"無資料",
	ligation:"是",
	pregnancy:"無資料",
	pregnancyTime:"無資料",
	catWeightKilo:"3",
	catWeightGram:"0",
	catExerciseFreq:"中",
	catSide:"無資料",
	catSize:"適中"
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
//----------------------------------------------------------------------------------
// base on AIC AWI to generate ICONTRAVELLIST[]
// while traveling (by using transformPage), record each page in RECORDTRAVELLIST[]
//----------------------------------------------------------------------------------
var iconTravelList = [];
var iconTraveledList = [];
var recordTravelList = [];
var currentPage = "#BHELLO";
//--------------------------------------------------
// FOR MULTIPLE's GLOBAL VAR
//--------------------------------------------------
var icon = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var ingredients = [0,0,0,0,0,0,0,0,0,0,0,0];
var allergy = [0,0,0,0,0,0,0,0,0,0,0,0];
var stress = [0,0,0,0,0,0];
//--------------------------------------------------
// FIRST PAGE & SPECIES
//--------------------------------------------------
var catSpecies = "";
var keeperAge = [0,0,0,0,0,0];
var catage_year_var = "0";
var catage_month_var = "0";
var catwei_kilo_var = "0";
var catwei_gram_var = "0";
var progressPercent = 0;