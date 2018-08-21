//-----------------------------
// LET USER KNOW
//-----------------------------
//Generate AWI innerHTML
function createAWI(AWINumber){
	var innerHTML = "";
	var AWIList = [];
	var AWINameList = [];
	if(icon[0]==1) {AWIList.push("AWI_IMMU");AWINameList.push("IMMU");}
	if(icon[1]==1) {AWIList.push("AWI_HEART");AWINameList.push("HEART");}
	if(icon[2]==1) {AWIList.push("AWI_MEHAIR");AWINameList.push("MEHAIR");}
	if(icon[3]==1) {AWIList.push("AWI_LIHAIR");AWINameList.push("LIHAIR");}
	if(icon[4]==1) {AWIList.push("AWI_LOHAIR");AWINameList.push("LOHAIR");}
	if(icon[5]==1) {AWIList.push("AWI_SKIN");AWINameList.push("SKIN");}
	if(icon[6]==1) {AWIList.push("AWI_JOINT");AWINameList.push("JOINT");}
	if(icon[7]==1) {AWIList.push("AWI_BONE");AWINameList.push("BONE");}
	if(icon[8]==1) {AWIList.push("AWI_ADDWEI");AWINameList.push("ADDWEI");}
	if(icon[9]==1) {AWIList.push("AWI_OVERWEI");AWINameList.push("OVERWEI");}
	if(icon[10]==1) {AWIList.push("AWI_STOMA");AWINameList.push("STOMA");}
	if(icon[11]==1) {AWIList.push("AWI_STRESS");AWINameList.push("STRESS");}
	if(icon[12]==1) {AWIList.push("AWI_MOUTH");AWINameList.push("MOUTH");}
	if(AWINumber == 1){
		innerHTML += '<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"></div>';
		innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
	}else if(AWINumber == 2){
		innerHTML += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>';
		for(i=0;i<2;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
	}else if(AWINumber == 3){
		innerHTML += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>';
		for(i=0;i<3;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
	}else if(AWINumber == 4){
		innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>';
		for(i=0;i<4;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
	}else if(AWINumber == 5){
		innerHTML += '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>';
		for(i=0;i<5;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
	}else if(AWINumber == 6){
		for(i=0;i<6;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
	}else if(AWINumber == 7){
		innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>';
		for(i=0;i<4;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
		innerHTML += '<div class="col-lg-12 col-md-12"></div>';
		innerHTML += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>';
		for(i=0;i<3;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
	}else if(AWINumber == 8){
		innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>';
		for(i=0;i<4;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
		innerHTML += '<div class="col-lg-12 col-md-12"></div>';
		innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>';
		for(i=0;i<4;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
	}else if(AWINumber == 9){
		innerHTML += '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>';
		for(i=0;i<5;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
		innerHTML += '<div class="col-lg-12 col-md-12"></div>';
		innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>';
		for(i=0;i<4;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
	}else if(AWINumber == 10){
		innerHTML += '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>';
		for(i=0;i<5;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
		innerHTML += '<div class="col-lg-12 col-md-12"></div>';
		innerHTML += '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>';
		for(i=0;i<5;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
	}else if(AWINumber == 11){
		for(i=0;i<6;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
		innerHTML += '<div class="col-lg-12 col-md-12"></div>';
		innerHTML += '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>';
		for(i=0;i<5;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
	}else if(AWINumber == 12){
		for(i=0;i<6;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
		for(i=0;i<6;i++){
			innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 vol-xs-2" id="'+AWIList.pop()+'" onclick="addToList(this.id)"><div class="AIC_IMG"><img src="images/questionnaire/icon/black/'+AWINameList.pop()+'.png"></div></div>';
		}
	}
	innerHTML += '</div>';
	innerHTML += '</div>';
	return innerHTML;
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
		if(icon[0]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/IMMU.png">';
			icon[0] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/IMMU.png">';
			icon[0] = 0;
		}		
	}
	if(id=="AIC_HEART"){
		if(icon[1]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/HEART.png">';
			icon[1] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/HEART.png">';
			icon[1] = 0;
		}		
	}
	if(id=="AIC_MEHAIR"){
		if(icon[2]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/MEHAIR.png">';
			icon[2] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/MEHAIR.png">';
			icon[2] = 0;
		}
	}
	if(id=="AIC_LIHAIR"){
		if(icon[3]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/LIHAIR.png">';
			icon[3] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/LIHAIR.png">';
			icon[3] = 0;	
		}	
	}
	if(id=="AIC_LOHAIR"){
		if(icon[4]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/LOHAIR.png">';
			icon[4] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/LOHAIR.png">';
			icon[4] = 0;	
		}	
	}
	if(id=="AIC_SKIN"){
		if(icon[5]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/SKIN.png">';
			icon[5] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/SKIN.png">';
			icon[5] = 0;	
		}	
	}
	if(id=="AIC_JOINT"){
		if(icon[6]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/JOINT.png">';
			icon[6] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/JOINT.png">';
			icon[6] = 0;
		}		
	}
	if(id=="AIC_BONE"){
		if(icon[7]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/BONE.png">';
			icon[7] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/BONE.png">';
			icon[7] = 0;
		}		
	}
	if(id=="AIC_ADDWEI"){
		if(icon[8]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/ADDWEI.png">';
			icon[8] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/ADDWEI.png">';
			icon[8] = 0;	
		}	
	}
	if(id=="AIC_OVERWEI"){
		if(icon[9]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/OVERWEI.png">';
			icon[9] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/OVERWEI.png">';
			icon[9] = 0;
		}		
	}
	if(id=="AIC_STOMA"){
		if(icon[10]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/STOMA.png">';
			icon[10] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/STOMA.png">';
			icon[10] = 0;	
		}	
	}
	if(id=="AIC_STRESS"){
		if(icon[11]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/STRESS.png">';
			icon[11] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/STRESS.png">';
			icon[11] = 0;
		}		
	}
	if(id=="AIC_MOUTH"){
		if(icon[12]==0){
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/blue/MOUTH.png">';
			icon[12] = 1;
		}
		else{
			document.getElementById(id).innerHTML = '<img src="images/questionnaire/icon/black/MOUTH.png">';
			icon[12] = 0;		
		}
	}
	//ingredients
	if(id=="EFI_BEEF"){
		if(ingredients[0]==0) ingredients[0] = 1;
		else ingredients[0] = 0;
		if(ingredients[11]==1){
			ingredients[11] = 0;
			$("#EFI_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EFI_SLAM"){
		if(ingredients[1]==0) ingredients[1] = 1;
		else ingredients[1] = 0;
		if(ingredients[11]==1){
			ingredients[11] = 0;
			$("#EFI_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EFI_CHIC"){
		if(ingredients[2]==0) ingredients[2] = 1;
		else ingredients[2] = 0;
		if(ingredients[11]==1){
			ingredients[11] = 0;
			$("#EFI_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EFI_DUCK"){
		if(ingredients[3]==0) ingredients[3] = 1;
		else ingredients[3] = 0;
		if(ingredients[11]==1){
			ingredients[11] = 0;
			$("#EFI_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EFI_TURK"){
		if(ingredients[4]==0) ingredients[4] = 1;
		else ingredients[4] = 0;
		if(ingredients[11]==1){
			ingredients[11] = 0;
			$("#EFI_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EFI_FISH"){
		if(ingredients[5]==0) ingredients[5] = 1;
		else ingredients[5] = 0;
		if(ingredients[11]==1){
			ingredients[11] = 0;
			$("#EFI_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EFI_DEER"){
		if(ingredients[6]==0) ingredients[6] = 1;
		else ingredients[6] = 0;
		if(ingredients[11]==1){
			ingredients[11] = 0;
			$("#EFI_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EFI_PIG"){
		if(ingredients[7]==0) ingredients[7] = 1;
		else ingredients[7] = 0;
		if(ingredients[11]==1){
			ingredients[11] = 0;
			$("#EFI_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EFI_BEAN"){
		if(ingredients[8]==0) ingredients[8] = 1;
		else ingredients[8] = 0;
		if(ingredients[11]==1){
			ingredients[11] = 0;
			$("#EFI_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EFI_SEAFOOD"){
		if(ingredients[9]==0) ingredients[9] = 1;
		else ingredients[9] = 0;
		if(ingredients[11]==1){
			ingredients[11] = 0;
			$("#EFI_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EFI_EGG"){
		if(ingredients[10]==0) ingredients[10] = 1;
		else ingredients[10] = 0;
		if(ingredients[11]==1){
			ingredients[11] = 0;
			$("#EFI_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EFI_unsure"){
		if(ingredients[11]==0){
			if(ingredients[0]==1) $("#EFI_BEEF").toggleClass("iconSelected");
			if(ingredients[1]==1) $("#EFI_SLAM").toggleClass("iconSelected");
			if(ingredients[2]==1) $("#EFI_CHIC").toggleClass("iconSelected");
			if(ingredients[3]==1) $("#EFI_DUCK").toggleClass("iconSelected");
			if(ingredients[4]==1) $("#EFI_TURK").toggleClass("iconSelected");
			if(ingredients[5]==1) $("#EFI_FISH").toggleClass("iconSelected");
			if(ingredients[6]==1) $("#EFI_DEER").toggleClass("iconSelected");
			if(ingredients[7]==1) $("#EFI_PIG").toggleClass("iconSelected");
			if(ingredients[8]==1) $("#EFI_PIG").toggleClass("iconSelected");
			if(ingredients[9]==1) $("#EFI_PIG").toggleClass("iconSelected");
			if(ingredients[10]==1) $("#EFI_PIG").toggleClass("iconSelected");
			for(i in ingredients){
				if(i!=11){
					ingredients[i] = 0;
				}
				else{
					ingredients[11] = 1;
					var newID = "#" + id;
					$(newID).toggleClass("iconSelected");
				}
			}
		}else{
			ingredients[11] = 0;
			var newID = "#" + id;
			$(newID).toggleClass("iconSelected");
		}
	}
	//allergy
	if(id=="EAD_BEEF"){
		if(allergy[0]==0) allergy[0] = 1;
		else allergy[0] = 0;		
		if(allergy[11]==1){
			allergy[11] = 0;
			$("#EAD_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EAD_SLAM"){
		if(allergy[1]==0) allergy[1] = 1;
		else allergy[1] = 0;		
		if(allergy[11]==1){
			allergy[11] = 0;
			$("#EAD_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EAD_CHIC"){
		if(allergy[2]==0) allergy[2] = 1;
		else allergy[2] = 0;		
		if(allergy[11]==1){
			allergy[11] = 0;
			$("#EAD_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EAD_DUCK"){
		if(allergy[3]==0) allergy[3] = 1;
		else allergy[3] = 0;		
		if(allergy[11]==1){
			allergy[11] = 0;
			$("#EAD_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EAD_TURK"){
		if(allergy[4]==0) allergy[4] = 1;
		else allergy[4] = 0;		
		if(allergy[11]==1){
			allergy[11] = 0;
			$("#EAD_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EAD_FISH"){
		if(allergy[5]==0) allergy[5] = 1;
		else allergy[5] = 0;		
		if(allergy[11]==1){
			allergy[11] = 0;
			$("#EAD_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EAD_DEER"){
		if(allergy[6]==0) allergy[6] = 1;
		else allergy[6] = 0;		
		if(allergy[11]==1){
			allergy[11] = 0;
			$("#EAD_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EAD_PIG"){
		if(allergy[7]==0) allergy[7] = 1;
		else allergy[7] = 0;
		if(allergy[11]==1){
			allergy[11] = 0;
			$("#EAD_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EAD_BEAN"){
		if(allergy[8]==0) allergy[8] = 1;
		else allergy[8] = 0;
		if(allergy[11]==1){
			allergy[11] = 0;
			$("#EAD_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EAD_SEAFOOD"){
		if(allergy[9]==0) allergy[9] = 1;
		else allergy[9] = 0;		
		if(allergy[11]==1){
			allergy[11] = 0;
			$("#EAD_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EAD_EGG"){
		if(allergy[10]==0) allergy[10] = 1;
		else allergy[10] = 0;		
		if(allergy[11]==1){
			allergy[11] = 0;
			$("#EAD_unsure").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="EAD_unsure"){
		if(allergy[11]==0){
			if(allergy[0]==1) $("#EAD_BEEF").toggleClass("iconSelected");
			if(allergy[1]==1) $("#EAD_SLAM").toggleClass("iconSelected");
			if(allergy[2]==1) $("#EAD_CHIC").toggleClass("iconSelected");
			if(allergy[3]==1) $("#EAD_DUCK").toggleClass("iconSelected");
			if(allergy[4]==1) $("#EAD_TURK").toggleClass("iconSelected");
			if(allergy[5]==1) $("#EAD_FISH").toggleClass("iconSelected");
			if(allergy[6]==1) $("#EAD_DEER").toggleClass("iconSelected");
			if(allergy[7]==1) $("#EAD_PIG").toggleClass("iconSelected");
			if(allergy[8]==1) $("#EAD_no").toggleClass("iconSelected");
			if(allergy[9]==1) $("#EAD_no").toggleClass("iconSelected");
			if(allergy[10]==1) $("#EAD_no").toggleClass("iconSelected");
			for(i in allergy){
				if(i!=11){
					allergy[i] = 0;
				}
				else{
					allergy[11] = 1;
					var newID = "#" + id;
					$(newID).toggleClass("iconSelected");
				}
			}
		}else{
			allergy[11] = 0;
			var newID = "#" + id;
			$(newID).toggleClass("iconSelected");
		}	
	}
	//stress
	if(id=="IPR_STRA"){
		if(stress[0]==0) stress[0]=1;
		else stress[0] = 0;
		if(stress[5]==1){
			stress[5] = 0;
			$("#IPR_no").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="IPR_STRB"){
		if(stress[1]==0) stress[1]=1;
		else stress[1] = 0;
		if(stress[5]==1){
			stress[5] = 0;
			$("#IPR_no").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="IPR_STRC"){
		if(stress[2]==0) stress[2]=1;
		else stress[2] = 0;
		if(stress[5]==1){
			stress[5] = 0;
			$("#IPR_no").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="IPR_STRD"){
		if(stress[3]==0) stress[3]=1;
		else stress[3] = 0;
		if(stress[5]==1){
			stress[5] = 0;
			$("#IPR_no").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="IPR_STRE"){
		if(stress[4]==0) stress[4]=1;
		else stress[4] = 0;
		if(stress[5]==1){
			stress[5] = 0;
			$("#IPR_no").toggleClass("iconSelected");
		}
		var newID = "#" + id;
		$(newID).toggleClass("iconSelected");
	}
	if(id=="IPR_no"){
		if(stress[5]==0){
			if(stress[0]==1) $("#IPR_STRA").toggleClass("iconSelected");
			if(stress[1]==1) $("#IPR_STRB").toggleClass("iconSelected");
			if(stress[2]==1) $("#IPR_STRC").toggleClass("iconSelected");
			if(stress[3]==1) $("#IPR_STRD").toggleClass("iconSelected");
			if(stress[4]==1) $("#IPR_STRE").toggleClass("iconSelected");
			for(i in stress){
				if(i!=5){
					stress[i] = 0;
				}else{
					stress[5] = 1;
					var newID = "#" + id;
					$(newID).toggleClass("iconSelected");
				}
			}
		}else{
			stress[5] = 0;
			var newID = "#" + id;
			$(newID).toggleClass("iconSelected");
		}
	}
	/* FIRST PAGE */
	if(id=="BKS_boy"){
		if(basicInformation.sex == customBasicEnum.girl){
			$("#BKS_boy").toggleClass("iconSelected");
			$("#BKS_girl").toggleClass("iconSelected");
			basicInformation.sex = customBasicEnum.boy;
		}else if(basicInformation.sex == "無資料"){
			$("#BKS_boy").toggleClass("iconSelected");
			basicInformation.sex = customBasicEnum.boy;
		}else if(basicInformation.sex == customBasicEnum.boy){
			$("#BKS_boy").toggleClass("iconSelected");
			basicInformation.sex = "無資料"
		}
	}
	if(id=="BKS_girl"){
		if(basicInformation.sex == customBasicEnum.boy){
			$("#BKS_boy").toggleClass("iconSelected");
			$("#BKS_girl").toggleClass("iconSelected");
			basicInformation.sex = customBasicEnum.girl;
		}else if(basicInformation.sex == "無資料"){
			$("#BKS_girl").toggleClass("iconSelected");
			basicInformation.sex = customBasicEnum.girl;
		}else if(basicInformation.sex == customBasicEnum.girl){
			$("#BKS_girl").toggleClass("iconSelected");
			basicInformation.sex = "無資料"
		}
	}
	if(id=="BKA_18-"){
		if(basicInformation.age == "無資料"){
			$("#BKA_18-").toggleClass("iconSelected");
			keeperAge[0] = 1;
			basicInformation.age = customBasicEnum._18_;
		}else if(basicInformation.age == customBasicEnum._18_){
			$("#BKA_18-").toggleClass("iconSelected");
			keeperAge[0] = 0;
			basicInformation.age = "無資料";
		}else{
			$("#BKA_18-").toggleClass("iconSelected");
			resetAge();
			keeperAge[0] = 1;
			basicInformation.age = customBasicEnum._18_;
		}
	}
	if(id=="BKA_18-25"){
		if(basicInformation.age == "無資料"){
			$("#BKA_18-25").toggleClass("iconSelected");
			keeperAge[1] = 1;
			basicInformation.age = customBasicEnum._18_25;
		}else if(basicInformation.age == customBasicEnum._18_25){
			$("#BKA_18-25").toggleClass("iconSelected");
			keeperAge[1] = 0;
			basicInformation.age = "無資料";
		}else{
			$("#BKA_18-25").toggleClass("iconSelected");
			resetAge();
			keeperAge[1] = 1;
			basicInformation.age = customBasicEnum._18_25;
		}
	}
	if(id=="BKA_26-35"){
		if(basicInformation.age == "無資料"){
			$("#BKA_26-35").toggleClass("iconSelected");
			keeperAge[2] = 1;
			basicInformation.age = customBasicEnum._26_35;
		}else if(basicInformation.age == customBasicEnum._26_35){
			$("#BKA_26-35").toggleClass("iconSelected");
			keeperAge[2] = 0;
			basicInformation.age = "無資料";
		}else{
			$("#BKA_26-35").toggleClass("iconSelected");
			resetAge();
			keeperAge[2] = 1;
			basicInformation.age = customBasicEnum._26_35;
		}
	}
	if(id=="BKA_36-45"){
		if(basicInformation.age == "無資料"){
			$("#BKA_36-45").toggleClass("iconSelected");
			keeperAge[3] = 1;
			basicInformation.age = customBasicEnum._36_45;
		}else if(basicInformation.age == customBasicEnum._36_45){
			$("#BKA_36-45").toggleClass("iconSelected");
			keeperAge[3] = 0;
			basicInformation.age = "無資料";
		}else{
			$("#BKA_36-45").toggleClass("iconSelected");
			resetAge();
			keeperAge[3] = 1;
			basicInformation.age = customBasicEnum._36_45;
		}
	}
	if(id=="BKA_46-65"){
		if(basicInformation.age == "無資料"){
			$("#BKA_46-65").toggleClass("iconSelected");
			keeperAge[4] = 1;
			basicInformation.age = customBasicEnum._46_65;
		}else if(basicInformation.age == customBasicEnum._46_65){
			$("#BKA_46-65").toggleClass("iconSelected");
			keeperAge[4] = 0;
			basicInformation.age = "無資料";
		}else{
			$("#BKA_46-65").toggleClass("iconSelected");
			resetAge();
			keeperAge[4] = 1;
			basicInformation.age = customBasicEnum._46_65;
		}
	}
	if(id=="BKA_65-"){
		if(basicInformation.age == "無資料"){
			$("#BKA_65-").toggleClass("iconSelected");
			keeperAge[5] = 1;
			basicInformation.age = customBasicEnum._65_;
		}else if(basicInformation.age == customBasicEnum._65_){
			$("#BKA_65-").toggleClass("iconSelected");
			keeperAge[5] = 0;
			basicInformation.age = "無資料";
		}else{
			$("#BKA_65-").toggleClass("iconSelected");
			resetAge();
			keeperAge[5] = 1;
			basicInformation.age = customBasicEnum._65_;
		}
	}	
}
function resetAge(){
	if(keeperAge[0] == 1) {$("#BKA_18-").toggleClass("iconSelected");keeperAge[0] = 0;}
	if(keeperAge[1] == 1) {$("#BKA_18-25").toggleClass("iconSelected");keeperAge[1] = 0;}
	if(keeperAge[2] == 1) {$("#BKA_26-35").toggleClass("iconSelected");keeperAge[2] = 0;}
	if(keeperAge[3] == 1) {$("#BKA_36-45").toggleClass("iconSelected");keeperAge[3] = 0;}
	if(keeperAge[4] == 1) {$("#BKA_46-65").toggleClass("iconSelected");keeperAge[4] = 0;}
	if(keeperAge[5] == 1) {$("#BKA_65-").toggleClass("iconSelected");keeperAge[5] = 0;}
}