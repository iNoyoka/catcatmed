function drawQuestion(newPage){
	var page = newPage.substr(1,newPage.length-1);
	var innerHTML = '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingBlock"></div>';
	for(i in questionInformation){
		if(questionInformation[i].id == page){
			if(questionInformation[i].type == "A"){ //animation
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="' + questionInformation[i].id + '">';
				innerHTML += '</div>';
				Draw(innerHTML,newPage);
			}
			else if(questionInformation[i].type == "B"){ //single fillin
				var question = questionInformation[i].question;
				var id = questionInformation[i].id;
				if(questionInformation[i].catname==true){
					question = question.replace("#",basicInformation.catName);
				}
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="'+id+'">';
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  question">'+question+'</div>';
				innerHTML += '<div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 text-center"><input type="text" id="'+id+'Enter'+'" onkeypress="enterPress(this.id,event)"></div>';
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingBlock"></div>';
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"><button id="'+id+'Button'+'" onclick="addToList(this.id);">下一題</button></div>';
				innerHTML += '</div>';
				Draw(innerHTML,newPage);
			}
			else if(questionInformation[i].type == "C"){ //single choice
				var question = questionInformation[i].question;
				var id = questionInformation[i].id;
				if(questionInformation[i].catname==true){
					question = question.replace("#",basicInformation.catName);
				}
				//icon part
				
				try{
				if(questionInformation[i].icon==true){
					innerHTML = "";
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="'+id+'">';
					var iconList = [];
					for(j=0;j<questionInformation[i].iconNumber;j++){
						iconList.push(questionInformation[i].iconList[j]);
					}
					if(questionInformation[i].iconNumber == 1){						
						innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
						innerHTML += '<img style="width: 8%" src="'+targetIconName(iconList.pop())+'">';
						innerHTML += '</div>';
					}else if(questionInformation[i].iconNumber == 2){						
						innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
						innerHTML += '<img style="width: 8%" src="'+targetIconName(iconList.pop())+'">';
						innerHTML += '<img style="width: 8%" src="'+targetIconName(iconList.pop())+'">';
						innerHTML += '</div>';
					}else if(questionInformation[i].iconNumber == 3){						
						innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
						innerHTML += '<img style="width: 8%" src="'+targetIconName(iconList.pop())+'">';
						innerHTML += '<img style="width: 8%" src="'+targetIconName(iconList.pop())+'">';
						innerHTML += '<img style="width: 8%" src="'+targetIconName(iconList.pop())+'">';
						innerHTML += '</div>';
					}
				}else{
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="'+id+'">';
				}
				}
				catch(err){alert("LOADING ICON FAILED");}
				
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  question">'+question+'</div>';
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
				if(questionInformation[i].answerType == "A"){
					if(questionInformation[i].answerNumber == 2){
						innerHTML += '<div class="col-lg-4 col-md-4"></div>';
						for(j=0;j<2;j++){
							innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
							innerHTML += '<div class="answer" onclick="addToList(this.id);" id="'+questionInformation[i].answerId[j]+'"><span class="options">'+questionInformation[i].answer[j]+'</span></div></div>';
						}
					}else if(questionInformation[i].answerNumber == 3){
						innerHTML += '<div class="col-lg-3 col-md-3"></div>';
						for(j=0;j<3;j++){
							innerHTML += '<div class="col-lg-2 col-md-2">';
							innerHTML += '<div class="answer" onclick="addToList(this.id);" id="'+questionInformation[i].answerId[j]+'"><span class="options">'+questionInformation[i].answer[j]+'</span></div></div>';
						}
					}else if(questionInformation[i].answerNumber == 4){
						innerHTML += '<div class="col-lg-2 col-md-2"></div>';
						for(j=0;j<4;j++){
							innerHTML += '<div class="col-lg-2 col-md-2">';
							innerHTML += '<div class="answer" onclick="addToList(this.id);" id="'+questionInformation[i].answerId[j]+'"><span class="options">'+questionInformation[i].answer[j]+'</span></div></div>';
						}
					}
				}else{
					//innerHTML += '<div class="col-lg-2 col-md-2 answer_TOP" onclick="addToList(this.id);" id="ARC_SPE">';
					//innerHTML += '<div class="answer"><span class="options">特定需求</span></div>';
					//innerHTML += '<p style="position:relative;bottom:-10px;">貓咪有特殊疾病需要多加照護</p></div>';
					if(questionInformation[i].answerNumber == 2){
						innerHTML += '<div class="col-lg-4 col-md-4"></div>';
						for(j=0;j<2;j++){
							innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6 answer_TOP" onclick="addToList(this.id);" id="'+questionInformation[i].answerId[j]+'">';
							innerHTML += '<div class="answer"><img src="'+questionInformation[i].answerImg[j]+'"></div>';
							innerHTML += '<p">'+questionInformation[i].answer[j]+'</p></div>';
						}
					}else if(questionInformation[i].answerNumber == 3){
						innerHTML += '<div class="col-lg-3 col-md-3"></div>';
						for(j=0;j<3;j++){
							innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6 answer_TOP" onclick="addToList(this.id);" id="'+questionInformation[i].answerId[j]+'">';
							innerHTML += '<div class="answer"><img src="'+questionInformation[i].answerImg[j]+'"></div>';
							innerHTML += '<p>'+questionInformation[i].answer[j]+'</p></div>';
						}
					}else if(questionInformation[i].answerNumber == 4){
						innerHTML += '<div class="col-lg-2 col-md-2"></div>';
						for(j=0;j<4;j++){
							innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6 answer_TOP" onclick="addToList(this.id);" id="'+questionInformation[i].answerId[j]+'">';
							innerHTML += '<div class="answer"><img src="'+questionInformation[i].answerImg[j]+'"></div>';
							innerHTML += '<p>'+questionInformation[i].answer[j]+'</p></div>';
						}
					}else if(questionInformation[i].answerNumber == 5){
						innerHTML += '<div class="col-lg-1 col-md-1"></div>';
						for(j=0;j<5;j++){
							innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6 answer_TOP" onclick="addToList(this.id);" id="'+questionInformation[i].answerId[j]+'">';
							innerHTML += '<div class="answer"><img src="'+questionInformation[i].answerImg[j]+'"></div>';
							innerHTML += '<p>'+questionInformation[i].answer[j]+'</p></div>';
						}
					}
				}				
				innerHTML += '</div>';
				innerHTML += '</div>';
				Draw(innerHTML,newPage);
			}
			else if(questionInformation[i].type == "D"){ //multiple choice
				var question = questionInformation[i].question;
				var id = questionInformation[i].id;
				if(questionInformation[i].catname==true){
					question = question.replace("#",basicInformation.catName);
				}
				innerHTML = "";
				//icon part
				if(questionInformation[i].icon==true){
					var iconList = [];
					for(j=0;j<questionInformation[i].iconNumber;j++){
						iconList.push(questionInformation[i].iconList[j]);
					}
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="'+id+'">';
					if(questionInformation[i].iconNumber == 1){						
						innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
						innerHTML += '<img style="width: 8%" src="'+targetIconName(iconList.pop())+'">';
						innerHTML += '</div>';
					}
				}else{
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="'+id+'">';
				}				
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  question">'+question+'</div>';
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
				if(questionInformation[i].answerType == "A"){
					if(questionInformation[i].answerNumber == 6){
						for(j=0;j<6;j++){
							innerHTML += '<div class="col-lg-2 col-md-2">';
							innerHTML += '<div class="icon" id="'+questionInformation[i].answerId[j]+'" onclick="iconClick(this.id)"><span class="options">'+questionInformation[i].answer[j]+'</span></div></div>';
						}
					}
				}else{
					if(questionInformation[i].answerNumber == 12){
						for(j=0;j<6;j++){
							innerHTML += '<div class="col-lg-2 col-md-2">';
							innerHTML += '<div class="_IMG" id="'+questionInformation[i].answerId[j]+'" onclick="iconClick(this.id)"><img class="multiSelect_IMG" src="images/questionnaire/icons-'+questionInformation[i].answerImg[j]+'.png"><p style="margin-bottom: 5px;">'+questionInformation[i].answer[j]+'</p></div></div>';
						}
						for(j=0;j<6;j++){
							innerHTML += '<div class="col-lg-2 col-md-2">';
							innerHTML += '<div class="_IMG" id="'+questionInformation[i].answerId[j+6]+'" onclick="iconClick(this.id)"><img class="multiSelect_IMG" src="images/questionnaire/icons-'+questionInformation[i].answerImg[j+6]+'.png"><p style="margin-bottom: 5px;">'+questionInformation[i].answer[j+6]+'</p></div></div>';
						}
					}
				}				
				innerHTML += '</div>';
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
				innerHTML += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-lg-offset-4 col-md-offset-4 text-center"><button id="'+id+'Button" onclick="addToList(this.id);">下 一 步</button></div>';
				innerHTML += '</div>';					
				innerHTML += '</div>';
				Draw(innerHTML,newPage);				
			}
			else if(questionInformation[i].type == "F"){ //fillin plus single choice
				var question = questionInformation[i].question;
				var id = questionInformation[i].id;
				if(questionInformation[i].catname==true){
					question = question.replace("#",basicInformation.catName);
				}
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="'+id+'">';
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  question">'+question+'</div>';
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
				innerHTML += '<div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 text-center"><input type="text" id="'+id+'Enter'+'" onkeypress="enterPress(this.id,event)"></div>';
				innerHTML += '<div class="col-lg-2 col-md-2 text-center"><button id="'+questionInformation[i].answerId+'" onclick="addToList(this.id);">不 確 定</button></div>';
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingBlock"></div>';
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
				innerHTML += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-lg-offset-4 col-md-offset-4 text-center"><button id="'+id+'Button'+'" onclick="addToList(this.id);">下 一 步</button></div>';
				innerHTML += '</div>';
				innerHTML += '</div>';
				innerHTML += '</div>';
				Draw(innerHTML,newPage);
			}
			else if(questionInformation[i].type == "G"){ //specialLargeSmall single choice
				var question = questionInformation[i].question;
				var id = questionInformation[i].id;
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="'+id+'">';
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  question">'+question+'</div>';
				innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
				if(questionInformation[i].answerNumber == 3){
					innerHTML += '<div class="col-lg-3 col-md-3"></div>';
					for(j=0;j<3;j++){
						innerHTML += '<div class="col-lg-2 col-md-2">';
						innerHTML += '<div class="placeholder" onclick="addToList(this.id);" id="'+questionInformation[i].answerId[j]+'"><span class="options">'+questionInformation[i].answer[j]+'</span></div></div>';
					}
				}
				innerHTML += '</div>';
				innerHTML += '</div>';
				Draw(innerHTML,newPage);
			}
			else if(questionInformation[i].type == "S"){	//special page
				if(questionInformation[i].id == "BKN"){
					innerHTML = "";
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="BKN">';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 question">請問您的名字？</div>';
					innerHTML += '<div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 text-center"><input type="text" id="BKNEnter" onkeypress="enterPress(this.id,event)"></div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 question">請問您是貓孩的爸爸還是媽媽？</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
					innerHTML += '<div class="col-lg-2 col-lg-offset-4 col-md-2 col-md-offset-4 col-sm-6 col-xs-6">';
					innerHTML += '<div class="icon" onclick="iconClick(this.id);" id="BKS_boy"><span class="options">爸爸</span></div>';
					innerHTML += '</div>';
					innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
					innerHTML += '<div class="icon" onclick="iconClick(this.id);" id="BKS_girl"><span class="options">媽媽</span></div>';
					innerHTML += '</div></div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 question">請問您的年齡？</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
					innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
					innerHTML += '<div class="icon" onclick="iconClick(this.id);" id="BKA_18-">';
					innerHTML += '<span class="options">18以下</span>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
					innerHTML += '<div class="icon" onclick="iconClick(this.id);" id="BKA_18-25">';
					innerHTML += '<span class="options">18-25</span>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
					innerHTML += '<div class="icon" onclick="iconClick(this.id);" id="BKA_26-35">';
					innerHTML += '<span class="options">26-35</span>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
					innerHTML += '<div class="icon" onclick="iconClick(this.id);" id="BKA_36-45">';
					innerHTML += '<span class="options">36-45</span>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
					innerHTML += '<div class="icon" onclick="iconClick(this.id);" id="BKA_46-65">';
					innerHTML += '<span class="options">46-65</span>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
					innerHTML += '<div class="icon" onclick="iconClick(this.id);" id="BKA_65-">';
					innerHTML += '<span class="options">65+</span>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingBotBlock"></div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">';
					innerHTML += '<button id="BKNButton" onclick="addToList(this.id);">開始填寫</button>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					Draw(innerHTML,newPage);					
				}
				else if(questionInformation[i].id=="BCA"){
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="BCA">';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 question">'+basicInformation.catName+'幾歲了呢？'+'</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 text-center">';
					innerHTML += '<div class="dropdown"><button class="dropbtn" id="catage_year">0</button><div class="dropdown-content" id="catage_yearVanishControl">';
					innerHTML += '<p onclick="changeAge(this);">0</p><p onclick="changeAge(this);">1</p><p onclick="changeAge(this);">2</p><p onclick="changeAge(this);">3</p><p onclick="changeAge(this);">4</p><p onclick="changeAge(this);">5</p><p onclick="changeAge(this);">6</p><p onclick="changeAge(this);">7</p><p onclick="changeAge(this);">8</p><p onclick="changeAge(this);">9</p><p onclick="changeAge(this);">10</p><p onclick="changeAge(this);">11</p><p onclick="changeAge(this);">12</p><p onclick="changeAge(this);">13</p><p onclick="changeAge(this);">14</p><p onclick="changeAge(this);">15</p><p onclick="changeAge(this);">16</p><p onclick="changeAge(this);">17</p><p onclick="changeAge(this);">18</p><p onclick="changeAge(this);">19</p><p onclick="changeAge(this);">20</p><p onclick="changeAge(this);">20+</p>';
					innerHTML += '</div></div>';
					innerHTML += '<p style="display:inline-block">歲</p>';
					innerHTML += '<div class="dropdown"><button class="dropbtn"id="catage_month">0</button><div class="dropdown-content" id="catage_monthVanishControl">';
					innerHTML += '<p onclick="changeAgeMonth(this);">0</p><p onclick="changeAgeMonth(this);">1</p><p onclick="changeAgeMonth(this);">2</p><p onclick="changeAgeMonth(this);">3</p><p onclick="changeAgeMonth(this);">4</p><p onclick="changeAgeMonth(this);">5</p><p onclick="changeAgeMonth(this);">6</p><p onclick="changeAgeMonth(this);">7</p><p onclick="changeAgeMonth(this);">8</p><p onclick="changeAgeMonth(this);">9</p><p onclick="changeAgeMonth(this);">10</p><p onclick="changeAgeMonth(this);">11</p>';
					innerHTML += '</div></div>';
					innerHTML += '<p style="display:inline-block">個月</p>';
					innerHTML += '</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingBlock"></div>';
					/*
					innerHTML += '<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"><hr></div>';
					innerHTML += '<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">or</div>';
					innerHTML += '<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"><hr></div>';
					*/
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">';
					innerHTML += '<button id="BCAButton" onclick="addToList(this.id);">下 一 題</button>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					Draw(innerHTML,newPage);
				}
				else if(questionInformation[i].id=="BSP"){
					innerHTML = "";
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="BSP">';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 question">請問'+basicInformation.catName+'的品種是？'+'</div>';
					innerHTML += '<div class="dropdown"><button class="dropbtn dropbtnSquare" id="noHairSpecies"><span class="options"><img src="images/questionnaire/icons-18.png"></span></button><div class="dropdown-content" id="noHairSpeciesVanishControl">';
					innerHTML += '<p onclick="changeNoHair(this);">加拿大無毛貓</p>';
					innerHTML += '</div></div>';
					innerHTML += '<div class="dropdown"><button class="dropbtn dropbtnSquare" id="shortHairSpecies"><span class="options"><img src="images/questionnaire/icons-16.png"></span></button><div class="dropdown-content" id="shortHairSpeciesVanishControl">';
					innerHTML += '<p onclick="changeShortHair(this);">英 短</p>';
					innerHTML += '<p onclick="changeShortHair(this);">美 短</p>';
					innerHTML += '<p onclick="changeShortHair(this);">異 短</p>';
					innerHTML += '<p onclick="changeShortHair(this);">歐 短</p>';
					innerHTML += '<p onclick="changeShortHair(this);">藍 貓</p>';
					innerHTML += '<p onclick="changeShortHair(this);">暹 羅</p>';
					innerHTML += '<p onclick="changeShortHair(this);">狸 花</p>';
					innerHTML += '<p onclick="changeShortHair(this);">埃 及 貓</p>';
					innerHTML += '<p onclick="changeShortHair(this);">雪 鞋 貓</p>';
					innerHTML += '<p onclick="changeShortHair(this);">曼 赤 肯</p>';
					innerHTML += '<p onclick="changeShortHair(this);">新加坡貓</p>';
					innerHTML += '<p onclick="changeShortHair(this);">日本短尾</p>';
					innerHTML += '<p onclick="changeShortHair(this);">蘇格蘭折耳</p>';
					innerHTML += '<p onclick="changeShortHair(this);">阿比西尼亞</p>';
					innerHTML += '<p onclick="changeShortHair(this);">孟加拉貓</p>';
					innerHTML += '</div></div>';
					innerHTML += '<div class="dropdown"><button class="dropbtn dropbtnSquare" id="longHairSpecies"><span class="options"><img src="images/questionnaire/icons-17.png"></span></button><div class="dropdown-content" id="longHairSpeciesVanishControl">';
					innerHTML += '<p onclick="changeLongHair(this);">波 斯 貓</p>';
					innerHTML += '<p onclick="changeLongHair(this);">布 偶 貓</p>';
					innerHTML += '<p onclick="changeLongHair(this);">伯 曼 貓</p>';
					innerHTML += '<p onclick="changeLongHair(this);">緬 因 貓</p>';
					innerHTML += '<p onclick="changeLongHair(this);">金 吉 拉</p>';
					innerHTML += '<p onclick="changeLongHair(this);">挪威森林</p>';
					innerHTML += '<p onclick="changeLongHair(this);">西伯利亞</p>';
					innerHTML += '<p onclick="changeLongHair(this);">喜馬拉雅</p>';
					innerHTML += '<p onclick="changeLongHair(this);">索馬利貓</p>';
					innerHTML += '<p onclick="changeLongHair(this);">長毛暹羅貓</p>';
					innerHTML += '<p onclick="changeLongHair(this);">塞爾凱克捲毛貓</p>';
					innerHTML += '</div></div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingBlock"></div>';
					innerHTML += '<div class="col-lg-3 col-md-3 col-lg-offset-3 col-md-offset-3 col-sm-6 col-xs-6 text-center">';
					innerHTML += '<button id="BSPMix" onclick="addToList(this.id);">'+basicInformation.catName+'是米克斯喔~</button>';
					innerHTML += '</div>';
					innerHTML += '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center">';
					innerHTML += '<button id="BSPButton" onclick="addToList(this.id);">下一題</button>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					Draw(innerHTML,newPage);
				}
				else if(questionInformation[i].id=="BCW"){
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="BCW">';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 question">'+basicInformation.catName+'目前多重呢？'+'</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 text-center">';
					//
					innerHTML += '<div class="dropdown"><button class="dropbtn" id="catwei_kilo">0</button><div class="dropdown-content" id="catwei_kiloVanishControl">';
					innerHTML += '<p onclick="changeWeiKilo(this);">0</p>';					
					innerHTML += '<p onclick="changeWeiKilo(this);">1</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">2</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">3</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">4</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">5</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">6</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">7</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">8</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">9</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">10</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">11</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">12</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">13</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">14</p>';
					innerHTML += '<p onclick="changeWeiKilo(this);">15+</p>';
					innerHTML += '</div></div>';
					innerHTML += '<p style="display:inline-block">公斤</p>';
					innerHTML += '<div class="dropdown"><button class="dropbtn" id="catwei_gram">0</button><div class="dropdown-content" id="catwei_gramVanishControl">';
					innerHTML += '<p onclick="changeWeiGram(this);">0</p>';					
					innerHTML += '<p onclick="changeWeiGram(this);">100</p>';
					innerHTML += '<p onclick="changeWeiGram(this);">200</p>';
					innerHTML += '<p onclick="changeWeiGram(this);">300</p>';
					innerHTML += '<p onclick="changeWeiGram(this);">400</p>';
					innerHTML += '<p onclick="changeWeiGram(this);">500</p>';
					innerHTML += '<p onclick="changeWeiGram(this);">600</p>';
					innerHTML += '<p onclick="changeWeiGram(this);">700</p>';
					innerHTML += '<p onclick="changeWeiGram(this);">800</p>';
					innerHTML += '<p onclick="changeWeiGram(this);">900</p>';
					innerHTML += '</div></div>';
					innerHTML += '<p style="display:inline-block">公克</p>';
					//
					innerHTML += '</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingBlock"></div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">';
					innerHTML += '<button id="BCWButton" onclick="addToList(this.id);">下 一 題</button>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					Draw(innerHTML,newPage);
				}
				else if(questionInformation[i].id=="ARC"){
					innerHTML = "";
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="ARC">';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  question">請問您來卡卡貓為了：</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
					innerHTML += '<div class="col-lg-3 col-md-3"></div>';					
					innerHTML += '<div class="col-lg-2 col-md-2 answer_TOP" onclick="addToList(this.id);" id="ARC_SPE">';
					innerHTML += '<div class="answer"><span class="options">特定需求</span></div>';
					innerHTML += '<p style="position:relative;bottom:-10px;">貓咪有特殊疾病需要多加照護</p></div>';
					innerHTML += '<div class="col-lg-2 col-md-2 answer_TOP" onclick="addToList(this.id);" id="ARC_DAE">';
					innerHTML += '<div class="answer"><span class="options">日常保健</span></div>';
					innerHTML += '<p style="position:relative;bottom:-10px;">加強'+basicInformation.catName+'的身體健康</p></div>';
					innerHTML += '<div class="col-lg-2 col-md-2 answer_TOP" onclick="addToList(this.id);" id="ARC_KNO">';
					innerHTML += '<div class="answer"><span class="options">知識了解</span></div>';
					innerHTML += '<p style="position:relative;bottom:-10px;">想先了解看看是否有能幫上我'+basicInformation.catName+'的地方</p></div>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					Draw(innerHTML,newPage);
				}
				else if(questionInformation[i].id=="AIC"){
					innerHTML = "";
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="AIC">';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 question">這次想特別注重的項目為何呢？(複選)</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">';
					var AICNumber = 11;
					if(basicInformation.species=="加拿大無毛貓") AICNumber -= 3;
					if(basicInformation.catSize == customBasicEnum.tooThin) AICNumber += 1;
					if(basicInformation.catSize == customBasicEnum.tooFat) AICNumber += 1;
					if(AICNumber==12){
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_IMMU" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/IMMU.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_HEART" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/HEART.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_MEHAIR" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/MEHAIR.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_LIHAIR" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/LIHAIR.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_LOHAIR" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/LOHAIR.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_SKIN" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/SKIN.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_JOINT" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/JOINT.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_BONE" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/BONE.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_STOMA" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/STOMA.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_STRESS" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/STRESS.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_MOUTH" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/MOUTH.png"></div></div>';
						if(basicInformation.catSize == customBasicEnum.tooThin){
							innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
							innerHTML += '<div class="AIC_IMG" id="AIC_ADDWEI" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/ADDWEI.png"></div></div>';
						}							
						if(basicInformation.catSize == customBasicEnum.tooFat){
							innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
							innerHTML += '<div class="AIC_IMG" id="AIC_OVERWEI" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/OVERWEI.png"></div></div>';
						}
					}else if(AICNumber==11){
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
						innerHTML += '<div class="AIC_IMG" id="AIC_IMMU" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/IMMU.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
						innerHTML += '<div class="AIC_IMG" id="AIC_HEART" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/HEART.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
						innerHTML += '<div class="AIC_IMG" id="AIC_MEHAIR" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/MEHAIR.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
						innerHTML += '<div class="AIC_IMG" id="AIC_LIHAIR" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/LIHAIR.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
						innerHTML += '<div class="AIC_IMG" id="AIC_LOHAIR" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/LOHAIR.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
						innerHTML += '<div class="AIC_IMG" id="AIC_SKIN" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/SKIN.png"></div></div>';
						innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>';
						innerHTML += '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
						innerHTML += '<div class="AIC_IMG" id="AIC_JOINT" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/JOINT.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
						innerHTML += '<div class="AIC_IMG" id="AIC_BONE" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/BONE.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
						innerHTML += '<div class="AIC_IMG" id="AIC_STOMA" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/STOMA.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
						innerHTML += '<div class="AIC_IMG" id="AIC_STRESS" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/STRESS.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">';
						innerHTML += '<div class="AIC_IMG" id="AIC_MOUTH" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/MOUTH.png"></div></div>';
					}else if(AICNumber==9){
						innerHTML += '<div class="col-lg-1 col-md-1 col-sm-12 col-xs-12"></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_IMMU" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/IMMU.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_HEART" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/HEART.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_SKIN" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/SKIN.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_JOINT" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/JOINT.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_BONE" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/BONE.png"></div></div>';
						innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_STOMA" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/STOMA.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_STRESS" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/STRESS.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_MOUTH" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/MOUTH.png"></div></div>';
						if(basicInformation.catSize == customBasicEnum.tooThin){
							innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
							innerHTML += '<div class="AIC_IMG" id="AIC_ADDWEI" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/ADDWEI.png"></div></div>';
						}							
						if(basicInformation.catSize == customBasicEnum.tooFat){
							innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
							innerHTML += '<div class="AIC_IMG" id="AIC_OVERWEI" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/OVERWEI.png"></div></div>';
						}
					}else if(AICNumber==8){
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>'
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_IMMU" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/IMMU.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_HEART" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/HEART.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_SKIN" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/SKIN.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_JOINT" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/JOINT.png"></div></div>';
						innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>'
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_BONE" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/BONE.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_STOMA" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/STOMA.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_STRESS" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/STRESS.png"></div></div>';
						innerHTML += '<div class="col-lg-2 col-md-2 col-sm-6 col-xs-2">';
						innerHTML += '<div class="AIC_IMG" id="AIC_MOUTH" onclick="iconClick(this.id)"><img src="images/questionnaire/icon/black/MOUTH.png"></div></div>';
					}
					innerHTML += '</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
					innerHTML += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-lg-offset-4 col-md-offset-4 text-center"><button id="AICButton" onclick="addToList(this.id);">下 一 步</button></div>';
					innerHTML += '</div>';					
					innerHTML += '</div>';
					Draw(innerHTML,newPage);					
				}
				else if(questionInformation[i].id=="AWI"){
					innerHTML = "";
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="AWI">';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 question">在上一題的回答中<br>您最重視的問題是哪一個呢？</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">';
					var AWINumber = 0;
					for(j in icon){
						if(icon[j]==1) AWINumber += 1;						
					}					
					innerHTML += createAWI(AWINumber);
					Draw(innerHTML,newPage);
				}
				else if(questionInformation[i].id=="EBA"){
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center questionBlock" id="EBA">';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 question">您和'+basicInformation.catName+'目前住在哪裡呢？'+'</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 text-center">';
					//
					innerHTML += '<div class="dropdown"><button class="dropbtn" id="catplace">台北市</button><div class="dropdown-content" id="catplaceVanishControl">';
					innerHTML += '<p onclick="changePlace(this);">台北市</p>';
					innerHTML += '<p onclick="changePlace(this);">新北市</p>';
					innerHTML += '<p onclick="changePlace(this);">桃園市</p>';
					innerHTML += '<p onclick="changePlace(this);">台中市</p>';
					innerHTML += '<p onclick="changePlace(this);">基隆市</p>';
					innerHTML += '<p onclick="changePlace(this);">新竹市</p>';
					innerHTML += '<p onclick="changePlace(this);">新竹縣</p>';
					innerHTML += '<p onclick="changePlace(this);">苗栗縣</p>';
					innerHTML += '<p onclick="changePlace(this);">彰化縣</p>';
					innerHTML += '<p onclick="changePlace(this);">南投縣</p>';
					innerHTML += '<p onclick="changePlace(this);">雲林縣</p>';
					innerHTML += '<p onclick="changePlace(this);">嘉義縣</p>';
					innerHTML += '<p onclick="changePlace(this);">嘉義市</p>';
					innerHTML += '<p onclick="changePlace(this);">台南市</p>';
					innerHTML += '<p onclick="changePlace(this);">高雄市</p>';
					innerHTML += '<p onclick="changePlace(this);">屏東縣</p>';
					innerHTML += '<p onclick="changePlace(this);">宜蘭縣</p>';
					innerHTML += '<p onclick="changePlace(this);">花蓮縣</p>';
					innerHTML += '<p onclick="changePlace(this);">台東縣</p>';
					innerHTML += '<p onclick="changePlace(this);">澎湖縣</p>';
					innerHTML += '</div></div>';
					//
					innerHTML += '</div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingBlock"></div>';
					innerHTML += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">';
					innerHTML += '<button id="EBAButton" onclick="addToList(this.id);">下 一 題</button>';
					innerHTML += '</div>';
					innerHTML += '</div>';
					Draw(innerHTML,newPage);
				}
			}			
	
		}
	}
}
function Draw(innerHTML,newPage){
	document.getElementById("questionnaireInner").innerHTML = innerHTML;
	$(newPage).fadeIn(200);
	specialAnimationControlerIn(newPage);
	animationLock = 0;
	var functionA = setInterval(myFunctionA,50);
	function myFunctionA(){
		rebuildIcon();
		rebuildValue();
		clearInterval(functionA);
	}	
}
function clearQuestion(originalPage,newPage){
	var page = originalPage.substr(1,originalPage.length-1);
	/* ANIMATION HERE */
	$(originalPage).fadeOut(200,function(){
		drawQuestion(newPage);
	});
	/* BACK BUTTON & PROGRESS */
	transformAnimation(originalPage);
	specialAnimationControlerOut(originalPage,newPage);
}
function showVanishProgressBar(){
	$("#backButton_TOP").toggleClass("elementInVisable");
	$("#questionnaireProgressBar").toggleClass("elementInVisable");
}
function changeAge(year){
	document.getElementById("catage_year").innerHTML = year.innerHTML;
	catage_year_var = year.innerHTML;
	vanishContent("catage_yearVanishControl");
}
function changeAgeMonth(month){
	document.getElementById("catage_month").innerHTML = month.innerHTML;
	catage_month_var = month.innerHTML;
	vanishContent("catage_monthVanishControl");
}
function changeNoHair(species){
	document.getElementById("noHairSpecies").innerHTML = '<span class="options">'+species.innerHTML+'</span>';
	catSpecies = species.innerHTML;
	$("#noHairSpecies").css("background-color","#3D5BA8");
	$("#noHairSpecies").css("color","white");
	document.getElementById("shortHairSpecies").innerHTML = '<span class="options"><img src="images/questionnaire/icons-16.png"></span>';
	$("#shortHairSpecies").css("background-color","#F1F1F2");
	$("#shortHairSpecies").css("color","gray");
	document.getElementById("longHairSpecies").innerHTML = '<span class="options"><img src="images/questionnaire/icons-17.png"></span>';
	$("#longHairSpecies").css("background-color","#F1F1F2");
	$("#longHairSpecies").css("color","gray");
	vanishContent("noHairSpeciesVanishControl");
}
function changeShortHair(species){
	document.getElementById("shortHairSpecies").innerHTML = '<span class="options">'+species.innerHTML+'</span>';
	catSpecies = species.innerHTML;
	$("#shortHairSpecies").css("background-color","#3D5BA8");
	$("#shortHairSpecies").css("color","white");
	document.getElementById("noHairSpecies").innerHTML = '<span class="options"><img src="images/questionnaire/icons-18.png"></span>';
	$("#noHairSpecies").css("background-color","#F1F1F2");
	$("#noHairSpecies").css("color","gray");
	document.getElementById("longHairSpecies").innerHTML = '<span class="options"><img src="images/questionnaire/icons-17.png"></span>';
	$("#longHairSpecies").css("background-color","#F1F1F2");
	$("#longHairSpecies").css("color","gray");
	vanishContent("shortHairSpeciesVanishControl");
}
function changeLongHair(species){
	document.getElementById("longHairSpecies").innerHTML = '<span class="options">'+species.innerHTML+'</span>';
	catSpecies = species.innerHTML;
	$("#longHairSpecies").css("background-color","#3D5BA8");
	$("#longHairSpecies").css("color","white");
	document.getElementById("noHairSpecies").innerHTML = '<span class="options"><img src="images/questionnaire/icons-18.png"></span>';
	$("#noHairSpecies").css("background-color","#F1F1F2");
	$("#noHairSpecies").css("color","gray");
	document.getElementById("shortHairSpecies").innerHTML = '<span class="options"><img src="images/questionnaire/icons-16.png"></span>';
	$("#shortHairSpecies").css("background-color","#F1F1F2");
	$("#shortHairSpecies").css("color","gray");
	vanishContent("longHairSpeciesVanishControl");
}
function changeWeiKilo(weight){
	document.getElementById("catwei_kilo").innerHTML = weight.innerHTML;
	catwei_kilo_var = weight.innerHTML;
	vanishContent("catwei_kiloVanishControl");
}
function changeWeiGram(weight){
	document.getElementById("catwei_gram").innerHTML = weight.innerHTML;
	catwei_gram_var = weight.innerHTML;
	vanishContent("catwei_gramVanishControl");
}
function changePlace(place){
	document.getElementById("catplace").innerHTML = place.innerHTML;
	vanishContent("catplaceVanishControl");
}
function vanishContent(id){
	var functionA = setInterval(myFunctionA,50);
	$("#"+id+"").toggleClass("elementInVisable");
	function myFunctionA(){
		$("#"+id+"").toggleClass("elementInVisable");
		clearInterval(functionA);
	}	
}
//------------------------------------
// Return Icon address
//------------------------------------
function targetIconName(iconName){
	if(iconName=="IMMU") return "images/questionnaire/icon/black/IMMU.png";
	if(iconName=="HEART") return "images/questionnaire/icon/black/HEART.png";
	if(iconName=="LOHAIR") return "images/questionnaire/icon/black/LOHAIR.png";
	if(iconName=="LIHAIR") return "images/questionnaire/icon/black/LIHAIR.png";
	if(iconName=="MEHAIR") return "images/questionnaire/icon/black/MEHAIR.png";
	if(iconName=="SKIN") return "images/questionnaire/icon/black/SKIN.png";
	if(iconName=="JOINT") return "images/questionnaire/icon/black/JOINT.png";
	if(iconName=="BONE") return "images/questionnaire/icon/black/BONE.png";
	if(iconName=="STOMA") return "images/questionnaire/icon/black/STOMA.png";
	if(iconName=="STRESS") return "images/questionnaire/icon/black/STRESS.png";
	if(iconName=="MOUTH") return "images/questionnaire/icon/black/MOUTH.png";
}
