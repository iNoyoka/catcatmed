//-----------------------------
// LET USER KNOW
//-----------------------------
//Generate AWI innerHTML
function createAWI(){
	if(icon[0]==0) {$("#AWI_IMMU").toggleClass("elementInVisable");}
	if(icon[1]==0) {$("#AWI_HEART").toggleClass("elementInVisable");}
	if(icon[2]==0) {$("#AWI_MEHAIR").toggleClass("elementInVisable");}
	if(icon[3]==0) {$("#AWI_LIHAIR").toggleClass("elementInVisable");}
	if(icon[4]==0) {$("#AWI_LOHAIR").toggleClass("elementInVisable");}
	if(icon[5]==0) {$("#AWI_SKIN").toggleClass("elementInVisable");}
	if(icon[6]==0) {$("#AWI_JOINT").toggleClass("elementInVisable");}
	if(icon[7]==0) {$("#AWI_BONE").toggleClass("elementInVisable");}
	if(icon[8]==0) {$("#AWI_ADDWEI").toggleClass("elementInVisable");}
	if(icon[9]==0) {$("#AWI_OVERWEI").toggleClass("elementInVisable");}
	if(icon[10]==0) {$("#AWI_STOMA").toggleClass("elementInVisable");}
	if(icon[11]==0) {$("#AWI_STRESS").toggleClass("elementInVisable");}
	if(icon[12]==0) {$("#AWI_MOUTH").toggleClass("elementInVisable");}
}
//-----------------------------
// MULTIPLE SELECT:
// 		AIC -> 選擇想要了解的項目
// 		EFI -> 現在正在吃的飼料的主成分
// 		EAD -> 有沒有過敏的東西
// 		IPR -> 壓力的表現特徵
//-----------------------------
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