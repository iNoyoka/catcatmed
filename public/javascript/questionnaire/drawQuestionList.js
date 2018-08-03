var questionInformation = [
	{
		id : "BHELLO",
		type : "A"
	},
	{
		id : "BWELCOMEBACK",
		type : "A"
	},
	{
		id : "BKN",
		type : "S"
	},
	{
		id : "BCN",
		type : "B",
		catname : false,
		question : "請問貓孩的名字？"
	},
	{
		id : "BNICEMEET",
		type : "A"
	},
	{
		id : "BCS",
		type : "C",
		catname : true,
		question : "請問#是男生還是女生？",
		answerNumber : 2,
		answer : ["男生","女生"],
		answerImg : ["",""],
		answerId : ["BCS_boy","BCS_girl"]
	},
	{
		id : "BCA",
		type : "S"
	},
	{
		id : "BAGECAL",
		type : "A",
	},
	{
		id : "BSP",
		type : "S"
	},
	{
		id : "BNU",
		type : "C",
		catname : true,
		question : "#是否結紮了呢？",
		answerNumber : 2,
		answer : ["是","否"],
		answerImg : ["",""],
		answerId : ["BNU_yes","BNU_no"]
	},
	{
		id : "BPR",
		type : "C",
		catname : true,
		question : "#是否懷孕了呢？",
		answerNumber : 2,
		answer : ["是","否"],
		answerImg : ["",""],
		answerId : ["BPR_yes","BPR_no"]
	},
	{
		id : "BPT",
		type : "C",
		catname : true,
		question : "請問#懷孕多久了呢？",
		answerNumber : 4,
		answer : ["1~3週","3~6週","6週以上","不確定"],
		answerImg : ["","","",""],
		answerId : ["BPT_1to3","BPT_3to6","BPT_6up","BPT_unsure"]
	},
	{
		id : "BPREGPAGE",
		type : "A"
	},
	{
		id : "BCW",
		type : "S"
	},
	{
		id : "BEF",
		type : "E",
		catname : true,
		question : "玩樂對貓咪而言就是一個運動的方式，請問#運動的頻率？",
		answerNumber : 3,
		answer : ["很愛玩，一整天都跑來跑去","會跟我玩，但也很愛睡","都不動，一直都在睡覺"],
		answerImg : ["","",""],
		answerId : ["BEF_highFreq","BEF_medFreq","BEF_lowFreq"]
	},
	{
		id : "BSI",
		type : "C",
		catname : true,
		question : "請問#是室內貓還是室外貓？",
		answerNumber : 2,
		answer : ["室外","室內"],
		answerImg : ["",""],
		answerId : ["BSI_outside","BSI_inside"]
	},
	{
		id : "BBC",
		type : "E",
		catname : true,
		question : "請問#的體型？",
		answerNumber : 5,
		answer : ["過瘦","稍瘦","適中","稍胖","過胖"],
		answerImg : ["","","","",""],
		answerId : ["BBC_tooThin","BBC_aLittleThin","BBC_medium","BBC_aLittleFat","BBC_tooFat"]
	},
	{
		id : "ARC",
		type : "G",
		catname : false,
		question : "請問您來卡卡貓為了...",
		answerNumber : 3,
		answer : ["特定需求","日常保健","知識了解"],
		answerSmall : ["貓咪有特殊疾病需要多加照護","加強貓咪的身體健康","想先瞭解看看是否有能幫上貓孩的地方"],
		answerImg : ["","",""],
		answerId : ["ARC_SPE","ARC_DAE","ARC_KNO"]
	},
	{
		id : "ANM",
		type : "C",
		catname : true,
		question : "請問#目前是否有在吃處方飼料？",
		answerNumber : 2,
		answer : ["有","沒有"],
		answerImg : ["",""],
		answerId : ["ANM_yes","ANM_no"]
	},
	{
		id : "AWM",
		type : "F",
		catname : false,
		question : "請問是在吃哪一種處方飼料呢？",
		answer : "不確定",
		answerImg : "",
		answerId : "AWM_unsure"
	},
	{
		id : "ASPECIALFOOD",
		type : "A"
	},
	{
		id : "AIC",
		type : "S"
	},
	{
		id : "AWI",
		type : "S"
	},
	{
		id : "AEM",
		type : "B",
		catname : false,
		question : "請問您的email是？"
	},
	{
		id : "IFE",
		type : "C",
		catname : true,
		question : "請問#目前有沒有感冒？",
		answerNumber : 2,
		answer : ["有","沒有"],
		answerImg : ["",""],
		answerId : ["IFE_yes","IFE_no"],
	},
	{
		id : "IFF",
		type : "C",
		catname : true,
		question : "請問#感冒的頻率？",
		answerNumber : 3,
		answer : ["幾乎沒有","一個月一次","一個月一次以上"],
		answerImg : ["","",""],
		answerId : ["IFF_RARE","IFF_ONEPERMON","IFF_HIGHFREQ"]
	},
	{
		id : "IEI",
		type : "C",
		catname : true,
		question : "是否覺得#需要額外的免疫力保健呢？",
		answerNumber : 2,
		answer : ["需要","不需要"],
		answerImg : ["",""],
		answerId : ["IEI_yes","IEI_no"]		
	},
	{
		id : "IHE",
		type : "C",
		catname : true,
		question : "請問#有沒有任何心血管病史？",
		answerNumber : 2,
		answer : ["有","沒有"],
		answerImg : ["",""],
		answerId : ["IHE_yes","IHE_no"]
	},
	{
		id : "IWC",
		type : "C",
		catname : true,
		question : "請問#平均一週梳幾次毛？",
		answerNumber : 3,
		answer : ["幾乎沒有","1~2次","3次以上"],
		answerImg : ["","",""],
		answerId : ["IWC_RARE","IWC_1TO2","IWC_3UP"]
	},
	{
		id : "IDC",
		type : "C",
		catname : false,
		question : "是否每天梳毛之後，掉毛現象還是很嚴重呢？",
		answerNumber : 2,
		answer : ["是","否"],
		answerImg : ["",""],
		answerId : ["IDC_yes","IDC_no"]
	},
	{
		id : "IHH",
		type : "C",
		catname : true,
		question : "請問在幫#梳毛時，毛髮當中有硬塊嗎？",
		answerNumber : 2,
		answer : ["有","沒有"],
		answerImg : ["",""],
		answerId : ["IHH_yes","IHH_no"]
	},
	{
		id : "ILH",
		type : "C",
		catname : true,
		question : "請問#有沒有脫毛的現象？",
		answerNumber : 2,
		answer : ["有","沒有"],
		answerImg : ["",""],
		answerId : ["ILH_yes","ILH_no"]
	},
	{
		id : "ILP",
		type : "E",
		catname : true,
		question : "請問#脫毛的部位為：",
		answerNumber : 3,
		answer : ["前段","中段","後段"],
		answerImg : ["","",""],
		answerId : ["ILP_FRONT","ILP_MID","ILP_BACK"]
	},
	{
		id : "IHS",
		type : "C",
		catname : true,
		question : "請問#的毛髮摸起來：",
		answerNumber : 3,
		answer : ["乾澀無光澤","健康","粗糙打結"],
		answerImg : ["","",""],
		answerId : ["IHS_DRY","IHS_HEALTH","IHS_ROUGH"]
	},
	{
		id : "IPO",
		type : "C",
		catname : true,
		question : "貓咪理毛時，毛髮容易進入到貓咪的身體，請問#的排泄物中是否可以看到毛呢？",
		answerNumber : 2,
		answer : ["是","否"],
		answerImg : ["",""],
		answerId : ["IPO_yes","IPO_no"]
	},
	{
		id : "ICV",
		type : "C",
		catname : true,
		question : "請問#近兩個禮拜是否有吐毛呢？",
		answerNumber : 2,
		answer : ["是","否"],
		answerImg : ["",""],
		answerId : ["ICV_yes","ICV_no"]
	},
	{
		id : "ISR",
		type : "C",
		catname : true,
		question : "請問近兩個禮拜，#的皮膚是否有紅腫的現象？",
		answerNumber : 2,
		answer : ["是","否"],
		answerImg : ["",""],
		answerId : ["ISR_yes","ISR_no"]
	},
	{
		id : "INR",
		type : "C",
		catname : false,
		question : "請問目前還有皮膚紅腫的情形嗎？",
		answerNumber : 2,
		answer : ["有","沒有"],
		answerImg : ["",""],
		answerId : ["INR_yes","INR_no"]
	},
	{
		id : "IEB",
		type : "C",
		catname : true,
		question : "是否有覺得#需要額外的關節保健呢？",
		answerNumber : 2,
		answer : ["是","否"],
		answerImg : ["",""],
		answerId : ["IEB_yes","IEB_no"]
	},
	{
		id : "IBC",
		type : "C",
		catname : true,
		question : "請問獸醫師是否有推薦#補充軟骨素或是葡萄糖胺呢？",
		answerNumber : 2,
		answer : ["有","沒有"],
		answerImg : ["",""],
		answerId : ["IBC_yes","IBC_no"]
	},
	{
		id : "IEF",
		type : "C",
		catname : true,
		question : "請問#是否有平常很好動，最近突然不喜歡活動，有活動力下降的現象？",
		answerNumber : 2,
		answer : ["是","否"],
		answerImg : ["",""],
		answerId : ["IEF_yes","IEF_no"]
	},
	{
		id : "IJF",
		type : "C",
		catname : true,
		question : "請問#是否有跳躍力變差的現象？",
		answerNumber : 2,
		answer : ["是","否"],
		answerImg : ["",""],
		answerId : ["IJF_yes","IJF_no"]
	},
	{
		id : "IVO",
		type : "C",
		catname : true,
		question : "請問#是否有嘔吐或是拉肚子的問題？",
		answerNumber : 2,
		answer : ["是","否"],
		answerImg : ["",""],
		answerId : ["IVO_yes","IVO_no"]
	},
	{
		id : "IVA",
		type : "C",
		catname : false,
		question : "請問消化系統問題是偏向？",
		answerNumber : 4,
		answer : ["嘔吐","拉肚子","都有","不確定"],
		answerImg : ["","","",""],
		answerId : ["IVA_UP","IVA_BOT","IVA_BOTH","IVA_unsure"]
	},
	{
		id : "IVN",
		type : "C",
		catname : false,
		question : "請問目前還有上吐/下瀉的情形嗎？",
		answerNumber : 3,
		answer : ["逐漸好轉中","目前還有持續","不確定"],
		answerImg : ["","",""],
		answerId : ["IVN_BETTER","IVN_FORAWHILE","IVN_unsure"]
	},
	{
		id : "IBP",
		type : "C",
		catname : true,
		question : "請問近兩個禮拜，#是否有發生血便的情形？",
		answerNumber : 2,
		answer : ["有","沒有"],
		answerImg : ["",""],
		answerId : ["IBP_yes","IBP_no"]
	},
	{
		id : "IBN",
		type : "C",
		catname : false,
		question : "請問目前還有血便的情形嗎？",
		answerNumber : 3,
		answer : ["逐漸好轉中","目前還有持續","不確定"],
		answerImg : ["","",""],
		answerId : ["IBN_BETTER","IBN_FORAWHILE","IBN_unsure"]
	},
	{
		id : "IPR",
		type : "D",
		catname : true,
		question : "#是否有下列問題？",
		answerNumber : 6,
		answer : ["過度理毛","來回踱步","四處躲藏","食慾下降","隨地便溺","都沒有"],
		answerImg : ["","","","","",""],
		answerId : ["IPR_STRA","IPR_STRB","IPR_STRC","IPR_STRD","IPR_STRE","IPR_no"]
	},
	{
		id : "IMO",
		type : "C",
		catname : true,
		question : "#是否有下列問題？",
		answerNumber : 3,
		answer : ["口臭","過度流口水","都沒有"],
		answerImg : ["","",""],
		answerId : ["IMO_BS","IMO_OVERSWEAT","IMO_no"]
	},
	{
		id : "IAW",
		type : "A"
	},
	{
		id : "ILW",
		type : "A"
	},
	{
		id : "EEH",
		type : "C",
		catname : true,
		question : "飲食可以解決貓咪八成以上的身體問題，您願意為了#的飲食健康而努力嗎？",
		answerNumber : 3,
		answer : ["全力以赴","正在努力中","現在開始"],
		answerImg : ["","",""],
		answerId : ["EEH_STRIKE","EEH_HARD","EEH_FROMNOW"]
	},
	{
		id : "EKL",
		type : "C",
		catname : false,
		question : "說道飼育貓咪您是個：",
		answerNumber : 3,
		answer : ["專家","學習中","新手"],
		answerImg : ["","",""],
		answerId : ["EKL_EXP","EKL_STU","EKL_BEG"]
	},
	{
		id : "EKEEPEXP",
		type : "A"
	},
	{
		id : "ENL",
		type : "C",
		catname : false,
		question : "說道貓咪營養您是個：",
		answerNumber : 3,
		answer : ["專家","學習中","新手"],
		answerImg : ["","",""],
		answerId : ["ENL_EXP","ENL_STU","ENL_BEG"]
	},
	{
		id : "ENUTRIEXP",
		type : "A"
	},
	{
		id : "EFB",
		type : "F",
		catname : true,
		question : "請問#近期吃的飼料品牌為何？",
		answer : "不確定",
		answerImg : "",
		answerId : "EFB_unsure"
	},
	{
		id : "EFI",
		type : "D",
		catname : false,
		question : "那主成分是下列哪些呢？",
		answerNumber : 9,
		answer : ["牛肉","羊肉","雞肉","鴨肉","火雞","魚","鹿","豬","不確定"],
		answerImg : ["","","","","","","","",""],
		answerId : ["EFI_BEEF","EFI_SLAM","EFI_CHIC","EFI_DUCK","EFI_TURK","EFI_FISH","EFI_DEER","EFI_PIG","EFI_unsure"]
	},
	{
		id : "EFG",
		type : "C",
		catname : false,
		question : "是有穀還是無穀呢？",
		answerNumber : 3,
		answer : ["有穀","無穀","不確定"],
		answerImg : ["","",""],
		answerId : ["EFG_yes","EFG_no","EFG_unsure"]
	},
	{
		id : "EEC",
		type : "C",
		catname : true,
		question : "請問#是吃buffet還是定時定量呢？",
		answerNumber : 2,
		answer : ["定時定量","吃到飽飽喔"],
		answerImg : ["",""],
		answerId : ["EEC_CONTROL","EEC_FULL"]
	},
	{
		id : "ECM",
		type : "C",
		catname : true,
		question : "請問您一天餵#吃幾餐呢？",
		answerNumber : 3,
		answer : ["一餐","兩餐","三餐以上"],
		answerImg : ["","",""],
		answerId : ["ECM_ONCE","ECM_TWICE","ECM_UP"]
	},
	{
		id : "EES",
		type : "C",
		catname : true,
		question : "#吃飼料的速度？",
		answerNumber : 3,
		answer : ["馬上吃光光","慢慢吃，過兩三小時才會吃完","吃一整天都吃不完"],
		answerImg : ["","",""],
		answerId : ["EES_SOON","EES_SLOW","EES_NEVER"]
	},
	{
		id : "EAA",
		type : "C",
		catname : true,
		question : "#是否有吃保健食品呢？",
		answerNumber : 2,
		answer : ["有","沒有"],
		answerImg : ["",""],
		answerId : ["EAA_yes","EAA_no"]
	},
	{
		id : "EAB",
		type : "C",
		catname : true,
		question : "#一個月使用幾次化毛膏呢？",
		answerNumber : 3,
		answer : ["從未","一兩次","四次以上"],
		answerImg : ["","",""],
		answerId : ["EAB_NEVER","EAB_ONCE","EAB_FORTHUP"]
	},
	{
		id : "EAC",
		type : "C",
		catname : true,
		question : "#一週吃幾次罐頭呢？",
		answerNumber : 4,
		answer : ["從未","一次","兩三次","幾乎每天"],
		answerImg : ["","","",""],
		answerId : ["EAC_NEVER","EAC_ONCE","EAC_TWICE","EAC_EACHDAY"]
	},
	{
		id : "EAD",
		type : "D",
		catname : true,
		question : "#是否有對什麼食物過敏呢？",
		answerNumber : 10,
		answer : ["牛肉","羊肉","雞肉","鴨肉","火雞","魚","鹿","豬","沒有","不確定"],
		answerImg : ["","","","","","","","","",""],
		answerId : ["EAD_BEEF","EAD_SLAM","EAD_CHIC","EAD_DUCK","EAD_TURK","EAD_FISH","EAD_DEER","EAD_PIG","EAD_no","EAD_unsure"]
	},
	{
		id : "EAE",
		type : "C",
		catname : true,
		question : "#一天的喝水頻率高還是低呢？",
		answerNumber : 2,
		answer : ["頻率高","頻率低"],
		answerImg : ["",""],
		answerId : ["EAE_HIGHFREQ","EAE_LOWFREQ"]
	},
	{
		id : "EAF",
		type : "C",
		catname : true,
		question : "您是否有煮東西給#吃的習慣？",
		answerNumber : 4,
		answer : ["從來沒有","有，不愛吃","一週一兩次","一週三次以上"],
		answerImg : ["","","",""],
		answerId : ["EAF_NEVER","EAF_YESBUTHATE","EAF_ONCE","EAF_THIRD"]
	},
	{
		id : "EBA",
		type : "S"
	},
	{
		id : "EBB",
		type : "C",
		catname : false,
		question : "如果有可靠的貓咪最新研究您希望？",
		answerNumber : 3,
		answer : ["第一手拿到","想了解看看","不想知道"],
		answerImg : ["","","",""],
		answerId : ["EBB_FIRST","EBB_WANTTOKNOW","EBB_DONTWANT"]
	},
	{
		id : "EBC",
		type : "C",
		catname : false,
		question : "請問您怎麼知道我們的？",
		answerNumber : 4,
		answer : ["網路","FB / IG","朋友介紹","其他"],
		answerImg : ["","","",""],
		answerId : ["EBC_INTER","EBC_FB_IG","EBC_FRIEND","EBC_OTHER"]
	},
	{
		id : "RESULT",
		type : "A"
	}
]
	
