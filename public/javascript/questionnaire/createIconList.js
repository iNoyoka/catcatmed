var tempList = [];
var iconRecord = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var alreadyInList = {IMMU:0,HEART:0,MEHAIR:0,LIHAIR:0,LOHAIR:0,SKIN:0,ADDWEI:0,OVERWEI:0,JOINT:0,BONE:0,STOMA:0,STRESS:0,MOUTH:0}
function createIconTravelList(){
	iconTravelList = [];
	for(i in icon)	iconRecord[i]=icon[i];
	if(advancedInformation.AWI == customAdvancedEnum.AIC_IMMU){
		alreadyInList.IMMU = 1;
		iconRecord[0] = 0;
		tempList.push("#IFE");
		stepByStepIconList();
	}
	else if(advancedInformation.AWI == customAdvancedEnum.AIC_HEART){
		alreadyInList.HEART = 1;
		iconRecord[1] = 0;
		tempList.push("#IHE");
		stepByStepIconList();
	}
	else if(advancedInformation.AWI == customAdvancedEnum.AIC_MEHAIR){
		alreadyInList.MEHAIR = 1;
		iconRecord[2] = 0;
		tempList.push("#IWC");
		tempList.push("#IPO");		
		stepByStepIconList();
	}
	else if(advancedInformation.AWI == customAdvancedEnum.AIC_LIHAIR){
		alreadyInList.LIHAIR = 1;
		iconRecord[3] = 0;		
		tempList.push("#IWC");
		tempList.push("#IHS");
		stepByStepIconList();
	}
	else if(advancedInformation.AWI == customAdvancedEnum.AIC_LOHAIR){
		alreadyInList.LOHAIR = 1;
		iconRecord[4] = 0;
		tempList.push("#IWC");
		tempList.push("#ILH");
		stepByStepIconList();
	}
	else if(advancedInformation.AWI == customAdvancedEnum.AIC_SKIN){
		alreadyInList.SKIN = 1;
		iconRecord[5] = 0;
		tempList.push("#ILH");
		tempList.push("#ISR");
		stepByStepIconList();
	}
	else if(advancedInformation.AWI == customAdvancedEnum.AIC_JOINT){
		alreadyInList.JOINT = 1;
		iconRecord[6] = 0;
		tempList.push("#IEB");
		tempList.push("#IBC");
		stepByStepIconList();
	}
	else if(advancedInformation.AWI == customAdvancedEnum.AIC_BONE){
		alreadyInList.BONE = 1;
		iconRecord[7] = 0;
		tempList.push("#IBC");
		stepByStepIconList();
	}
	else if(advancedInformation.AWI == customAdvancedEnum.AIC_ADDWEI){
		alreadyInList.ADDWEI = 1;
		iconRecord[8] = 0;
		tempList.push("#IAW");
		stepByStepIconList();
	}
	else if(advancedInformation.AWI == customAdvancedEnum.AIC_OVERWEI){
		alreadyInList.OVERWEI = 1;
		iconRecord[9] = 0;
		tempList.push("#ILW");
		stepByStepIconList();
	}
	else if(advancedInformation.AWI == customAdvancedEnum.AIC_STOMA){
		alreadyInList.STOMA = 1;
		iconRecord[10] = 0;
		tempList.push("#IVO");
		tempList.push("#IBP");
		stepByStepIconList();
	}
	else if(advancedInformation.AWI == customAdvancedEnum.AIC_STRESS){
		alreadyInList.STRESS = 1;
		iconRecord[11] = 0;
		tempList.push("#IBP");
		tempList.push("#IPR");
		stepByStepIconList();
	}
	else if(advancedInformation.AWI == customAdvancedEnum.AIC_MOUTH){
		alreadyInList.MOUTH = 1;
		iconRecord[12] = 0;
		tempList.push("#IMO");
		stepByStepIconList();
	}else{
		stepByStepIconList();
	}
}
//
function stepByStepIconList(){
	if(iconRecord[0]==1){
		iconRecord[0] = 0;
		alreadyInList.IMMU = 1;
		tempList.push("#IFE");
		stepByStepIconList();
	}
	else if(iconRecord[1]==1){
		iconRecord[1] = 0;
		alreadyInList.HEART = 1;
		tempList.push("#IHE");
		stepByStepIconList();
	}
	else if(iconRecord[2]==1){
		iconRecord[2] = 0;
		alreadyInList.MEHAIR = 1;
		if(alreadyInList.LIHAIR==1 || alreadyInList.LOHAIR==1){
			tempList.push("#IPO");
			stepByStepIconList();
		}else{
			tempList.push("#IWC");
			tempList.push("#IPO");
			stepByStepIconList();			
		}
	}
	else if(iconRecord[3]==1){
		iconRecord[3] = 0;
		alreadyInList.LIHAIR = 1;
		if(alreadyInList.MEHAIR==1 || alreadyInList.LOHAIR==1){
			tempList.push("#IHS");
			stepByStepIconList();
		}else{
			tempList.push("#IWC");
			tempList.push("#IHS");
			stepByStepIconList();
		}
	}
	else if(iconRecord[4]==1){
		iconRecord[4] = 0;
		alreadyInList.LOHAIR = 1;
		if(alreadyInList.MEHAIR==1 || alreadyInList.LIHAIR==1){
			tempList.push("#ILH");
			stepByStepIconList();
		}else{
			tempList.push("#IWC");
			tempList.push("#ILH");
			stepByStepIconList();
		}
	}
	else if(iconRecord[5]==1){
		iconRecord[5] = 0;
		alreadyInList.SKIN = 1;
		if(alreadyInList.LOHAIR==1){
			tempList.push("#ISR");
			stepByStepIconList();
		}else{
			tempList.push("#ILH");
			tempList.push("#ISR");
			stepByStepIconList();
		}
	}
	//both joint and bone
	else if(iconRecord[6]==1 && iconRecord[7]==1){
		iconRecord[6] = 0;
		iconRecord[7] = 0;
		alreadyInList.JOINT = 1;
		alreadyInList.BONE = 1;
		tempList.push("#IEB");
		tempList.push("#IBC");
		stepByStepIconList();
	}
	else if(iconRecord[6]==1){
		iconRecord[6] = 0;
		alreadyInList.JOINT = 1;
		if(alreadyInList.BONE==1){
			tempList.push("#IEB");
			stepByStepIconList();
		}else{
			tempList.push("#IEB");
			tempList.push("#IBC");
			stepByStepIconList();
		}
	}
	else if(iconRecord[7]==1){
		iconRecord[7] = 0;
		alreadyInList.BONE = 1;
		if(alreadyInList.JOINT==1){
			stepByStepIconList();
		}else{
			tempList.push("#IBC");
			stepByStepIconList();
		}
	}
	else if(iconRecord[8]==1){
		alreadyInList.ADDWEI = 1;
		iconRecord[8] = 0;
		tempList.push("#IAW");
		stepByStepIconList();
	}
	else if(iconRecord[9]==1){
		alreadyInList.OVERWEI = 1;
		iconRecord[9] = 0;
		tempList.push("#ILW");
		stepByStepIconList();
	}
	//both stoma and stress
	else if(iconRecord[10]==1 && iconRecord[11]==1){
		iconRecord[10] = 0;
		iconRecord[11] = 0;
		alreadyInList.STOMA = 1;
		alreadyInList.STRESS = 1;
		tempList.push("#IVO");
		tempList.push("#IBP");
		tempList.push("#IPR");
		stepByStepIconList();
	}
	else if(iconRecord[10]==1){
		iconRecord[10] = 0;
		alreadyInList.STOMA = 1;
		if(alreadyInList.STRESS==1){
			tempList.push("#IVO");
			stepByStepIconList();
		}else{
			tempList.push("#IVO");
			tempList.push("#IBP");
			stepByStepIconList();
		}
	}
	else if(iconRecord[11]==1){
		iconRecord[11] = 0;
		alreadyInList.STRESS = 1;
		if(alreadyInList.STOMA==1){
			tempList.push("#IPR");
			stepByStepIconList();
		}else{
			tempList.push("#IBP");
			tempList.push("#IPR");
			stepByStepIconList();
		}
	}
	else if(iconRecord[12]==1){
		iconRecord[12] = 0;
		alreadyInList.MOUTH = 1;
		tempList.push("#IMO");
		stepByStepIconList();
	}else if(iconRecord[0]==0 && iconRecord[1]==0 && iconRecord[2]==0 && iconRecord[3]==0 && iconRecord[4]==0 && iconRecord[5]==0 && iconRecord[6]==0 && iconRecord[7]==0 && iconRecord[8]==0 && iconRecord[9]==0 && iconRecord[10]==0 && iconRecord[11]==0 && iconRecord[12]==0){
		tempList.push("#EEH");
		var num = 0;
		for(i in tempList){
			num++;
			//alert(tempList[i]);
		} 
		for(i=0;i<num;i++) iconTravelList.push(tempList.pop());
	}
}