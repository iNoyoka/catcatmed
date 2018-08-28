var clickedItem = 'beef';

function showLibraryInformation(item){      
    if(item == clickedItem){        
    }
    else{
        var innerHTML = '';
        $("#libraryInformation").fadeOut(0);
        $("#"+clickedItem).toggleClass('librarySelector_item_selected');
        $("#"+item).toggleClass('librarySelector_item_selected');        
        clickedItem = item;
        if(item=='beef'){
            innerHTML += '<h3>牛肉 Beef</h3><br><br>';
            innerHTML += '<h4>成分資訊</h4><br>';
            innerHTML += '<h5>蛋白質 : 20%</h5>';
            innerHTML += '<h5>脂肪含量 : 低</h5>';
            innerHTML += '<br><h4>營養資訊</h4><br>';
            innerHTML += '<h5>內含的維生素A和B群可以預防貧血，且有豐富的鐵質可預防缺鐵性貧血。<br>蛋白質、胺基酸、醣類因容易被吸收，成為生長時做為細胞組織所需要。<br>中醫認為牛肉屬溫性，有暖胃作用。由於牛肉纖維較粗，且含有較多膽固醇，相對較不易消化，因此餵食毛孩前需剁碎為優。</h5>';
            innerHTML += '<br><h4>補鐵冠軍、血紅素鐵</h4><br>';
            innerHTML += '<h5>包括豬、牛、羊等的肌肉和內臟，顏色較深，呈暗紅色，故俗稱「紅肉」<br>顏色越紅，所含血紅素鐵越多</h5>';
            innerHTML += '<br><h4>維生素</h4><br>';
            innerHTML += '<h5>以維生素A和維生素B群為主</h5>';
        }
        if(item=='pork'){
            innerHTML += '<h3>豬肉 Pork</h3><br><br>';
            innerHTML += '<h4>成分資訊</h4><br>';
            innerHTML += '<h5>蛋白質 : 13%</h5>';
            innerHTML += '<h5>脂肪含量 : 高</h5>';
            innerHTML += '<br><h4>營養資訊</h4><br>';
            innerHTML += '<h5>含有多種必需胺基酸、鈣、磷、鐵、硫胺素、核黃素和尼克酸，但其脂肪量也較高，較肥胖的毛孩需斟酌給食。<br>中醫認為豬肉具有補虛強身、滋陰潤燥、豐肌澤膚的作用。</h5>';
            innerHTML += '<br><h4>補鐵冠軍、血紅素鐵</h4><br>';
            innerHTML += '<h5>包括豬、牛、羊等的肌肉和內臟，顏色較深，呈暗紅色，故俗稱「紅肉」<br>顏色越紅，所含血紅素鐵越多</h5>';
            innerHTML += '<br><h4>維生素</h4><br>';
            innerHTML += '<h5>以維生素A和維生素B群為主</h5>';
        }
        if(item=='lamb'){
            innerHTML += '<h3>羊肉 Lamb</h3><br><br>';
            innerHTML += '<h4>成分資訊</h4><br>';
            innerHTML += '<h5>蛋白質 : 20%</h5>';
            innerHTML += '<h5>脂肪含量 : 中</h5>';
            innerHTML += '<br><h4>營養資訊</h4><br>';
            innerHTML += '<h5>含多種蛋白質、維生素B1/B2/E、鐵、鈣、磷、煙酸等營養素，且賴氨酸、精氨酸等含量也比其他肉類更高。<br>粗脂肪含量介於豬肉和牛肉之間，而鈣的含量比豬肉豐富。<br>中醫認為羊肉屬大熱之品，冬天補尤佳。</h5>';
            innerHTML += '<br><h4>補鐵冠軍、血紅素鐵</h4><br>';
            innerHTML += '<h5>包括豬、牛、羊等的肌肉和內臟，顏色較深，呈暗紅色，故俗稱「紅肉」<br>顏色越紅，所含血紅素鐵越多</h5>';
            innerHTML += '<br><h4>維生素</h4><br>';
            innerHTML += '<h5>以維生素A和維生素B群為主</h5>';
        }
        if(item=='chicken'){
            innerHTML += '<h3>雞肉 Chicken</h3><br><br>';
            innerHTML += '<h4>成分資訊</h4><br>';
            innerHTML += '<h5>蛋白質 : 16~20%</h5>';
            innerHTML += '<h5>脂肪 : 9~14%</h5>';
            innerHTML += '<h5>高蛋白低脂肪，多種氨基酸，以不飽和脂肪酸為主</h5>';
            innerHTML += '<br><h4>營養資訊</h4><br>';
            innerHTML += '<h5>具有高蛋白質低脂肪的特點，富含多種胺基酸，其含量與蛋奶中的胺基酸譜式相似，可作為優質蛋白質來源。<br>另含有醣類、維生素A、維生素B群、鈣、磷、鐵、銅等營養素。<br>須注意雞皮脂肪含量較高，而雞臀夾病菌多，最好不要給毛孩食用。</h5>';
            innerHTML += '<br><h4>性價比之王</h4><br>';
            innerHTML += '<h5>主要為雞、鴨、鵝等，從補充優質蛋白質為角度考量，其性價比比較高。</h5>';
        }
        if(item=='duck'){
            innerHTML += '<h3>鴨肉 Duck</h3><br><br>';
            innerHTML += '<h4>成分資訊</h4><br>';
            innerHTML += '<h5>蛋白質 : 16~20%</h5>';
            innerHTML += '<h5>脂肪 : 9~14%</h5>';
            innerHTML += '<h5>高蛋白低脂肪，多種氨基酸，以不飽和脂肪酸為主</h5>';
            innerHTML += '<br><h4>營養資訊</h4><br>';
            innerHTML += '<h5>飽和脂肪酸與膽固醇含量比一般肉類低，而肉中的脂肪也不同於其他動物油，其化學成分和橄欖油相似，具有降低膽固醇的作用。<br>其中鴨胸肉脂肪含量最低，肉質也相對細膩，對腸胃較不易產生負擔。<br>中醫認為鴨肉有滋陰補虛、除蒸止嗽、利水道等功效。</h5>';
            innerHTML += '<br><h4>性價比之王</h4><br>';
            innerHTML += '<h5>主要為雞、鴨、鵝等，從補充優質蛋白質為角度考量，其性價比比較高。</h5>';
        }
        if(item=='fish'){
            innerHTML += '<h3>魚肉 Fish</h3><br><br>';
            innerHTML += '<h4>成分資訊</h4><br>';
            innerHTML += '<h5>蛋白質 : 15~22%</h5>';
            innerHTML += '<h5>脂肪 : 1~10%</h5>';
            innerHTML += '<h5>多由不飽和脂肪酸組合，DHA有助於大腦發育、延緩大腦和眼睛衰老<br>EPA有助降低血管炎症反應、預防心腦血管疾病</h5>';
            innerHTML += '<br><h4>營養資訊</h4><br>';
            innerHTML += '<h5>相對畜肉、禽肉，魚肉更利於毛孩消化、吸收，所含的不飽和脂肪酸不只易於消化吸收，更有益於活化毛孩大腦神經細胞。</h5>';
            innerHTML += '<br><h4>維生素、礦物質</h4><br>';
            innerHTML += '<h5>含有維生素A、維生素D<br>硒、鋅、碘的含量高</h5>';
        }
        if(item=='deer'){
            innerHTML += '<h3>鹿肉 Deer</h3><br><br>';
            innerHTML += '<h4>成分資訊</h4><br>';
            innerHTML += '<h5>高蛋白易吸收、低脂肪、低膽固醇</h5>';
            innerHTML += '<br><h4>營養資訊</h4><br>';
            innerHTML += '<h5>富含B群、鐵質是牛肉1.5倍</h5>';
        }
        if(item=='turkey'){
            innerHTML += '<h3>火雞肉 Turkey</h3><br><br>';
            innerHTML += '<h4>成分資訊</h4><br>';
            innerHTML += '<h5>高蛋白低脂低膽固醇，含豐富維生素及微量離子</h5>';
            innerHTML += '<br><h4>營養資訊</h4><br>';
            innerHTML += '<h5>鐵質高，富含鋅質增加免疫力，和維生素B群抗氧化</h5>';
        }
        if(item=='Glucosamine'){
            innerHTML += '<h3>葡萄糖胺/軟骨素 Glucosamine/Chondroitin</h3><br><br>';
            innerHTML += '<h4>相關icon</h4><br>';
            innerHTML += '<h5>關節</h5>';
            innerHTML += '<br><h4>相關資訊</h4><br>';
            innerHTML += '<h5>在年輕的貓咪身上，身體會自行合成葡萄糖胺，並與身體中的血糖一起發揮作用，但隨著貓咪變老，或是關節軟骨損傷，身體逐漸無法產生足夠的葡萄糖胺時，就需要靠外在的補充囉!</h5>';
            innerHTML += '<br><h4>關節炎發生之可能原因</h4><br>';
            innerHTML += '<h5>1. 關節部位受傷(脫臼)<br>2. 老化<br>3. 先天遺傳<br>4. 營養不足<br><br>但是通常來說，關節炎發生的關鍵都與「滑囊液」與「軟骨組織」受損有關</h5>';
        }
        if(item=='Amino_Acid'){
            innerHTML += '<h3>離胺酸 Amino Acid</h3><br><br>';
            innerHTML += '<h4>相關icon</h4><br>';
            innerHTML += '<h5>免疫力、皮膚</h5>';
            innerHTML += '<br><h4>相關資訊</h4><br>';
            innerHTML += '<h5>離胺酸是一種動物體內的必需胺基酸，對於維持健康有重要的影響力，由於無法自行由體內合成，而必須由食物攝取，才能製造維持生命所需的蛋白質。因此離胺酸對於貓的成長發育及組織修復非常重要，也能維持免疫系統的健全。</h5>';
            innerHTML += '<br><h4>貓疱疹病毒 FHV-1</h4><br>';
            innerHTML += '<h5>動物醫學報告指出，全球約80%的貓（含成、幼貓）均感染過貓疱疹病毒（FHV-1）引起之上呼吸道感染症，然而當感染復原後，大約有90%的貓會變成慢性潛伏感染。<br>一般正常時無症狀，不過卻可能隨時復發，常見的情況就是易流眼淚、打噴嚏。<br>由於目前尚無完全治癒的方法，只能控制病情。</h5>';
            innerHTML += '<h5>當貓處於有壓力的緊迫狀況（如：生病、換環境、營養不良等）情況下，容易造成病毒的復發。<br>而離氨酸會和精氨酸(Arginine)競爭，沒有精氨酸，皰疹病毒就不能繁殖，而減低了病毒複製的能力。<br>且離氨酸非藥物，幾乎無副作用，故長期補充適量的離胺酸，可有效預防及減輕貓皰疹病毒的發病或復發。 </h5>';
        }
        if(item=='Taurine'){
            innerHTML += '<h3>牛磺酸 Taurine</h3><br><br>';
            innerHTML += '<h4>相關icon</h4><br>';
            innerHTML += '<h5>心臟、懷孕</h5>';
            innerHTML += '<br><h4>相關資訊</h4><br>';
            innerHTML += '<h5>牛磺酸（Taurine）是蛋白質中的一種氨基酸 (Amino Acid)，可以在人體、與動物的體內自行合成，但貓咪卻完全無法自行在體內合成牛磺酸，只能100%從食物中獲取；如果貓咪沒有獲得足夠的牛磺酸，會出現各種退化、消化系統等問題，對貓咪的健康影響甚大。</h5>';
            innerHTML += '<h5>牛磺酸對貓咪健康影響劇烈，一旦貓咪體內的牛磺酸有所不足，就有可能引發下列的疾病：</h5>';
            innerHTML += '<h5>1. 視網膜退化(FCRD)：視力衰退、可能全盲<br>2. 擴張型心肌症（DCM）：心臟肌肉無法正常收縮，導致心臟衰竭<br>3. 消化疾病：膽汁無法順利分泌，營養無法順利吸收，因此消化困難<br>4. 母貓生殖功能衰竭：生出不健康的小幼貓、甚至不孕<br>5. 幼貓發展遲緩：牛磺酸在維持腦部運作及發展<br>6. 免疫功能失調：牛磺酸可以保護貓咪的腸胃、肝臟，增強抵抗力</h5>';
        }
        if(item=='Lecithin'){
            innerHTML += '<h3>卵磷脂 Lecithin</h3><br><br>';
            innerHTML += '<h4>相關icon</h4><br>';
            innerHTML += '<h5>亮毛、脫毛</h5>';
            innerHTML += '<br><h4>相關資訊</h4><br>';
            innerHTML += '<h5>卵磷脂，又稱為蛋黃素，被譽為與蛋白質、維生素並列的「第三營養素」。<br>卵磷脂裡面含有肌醇磷脂，而肌醇是毛髮生長的基本物質，能夠促進健康毛髮的生長，防止脫髮。<br>還有降低膽固醇，增強清除自由基的能力，加快新陳代謝，幫助貓咪延緩衰老的作用。</h5>';
            innerHTML += '<h5>蛋黃卵磷脂是最被推崇的類型，但過多的攝取容易造成貓咪腹瀉和消化不良。</h5>';
        }
        if(item=='LCarnitine'){
            innerHTML += '<h3>左旋肉鹼 L-Carnitine</h3><br><br>';
            innerHTML += '<h4>相關icon</h4><br>';
            innerHTML += '<h5>過胖、骨頭</h5>';
            innerHTML += '<br><h4>相關資訊</h4><br>';
            innerHTML += '<h5>添加在寵物食品中的左旋肉鹼，多由細菌發酵而來，在生物體內的作用是，幫助細胞中的長鍊脂肪酸進入粒線體，進一步轉化成能量。</h5>';
            innerHTML += '<h5>左旋肉鹼其實不是必要的營養素，但是這個成份能促進脂肪酸消耗代謝的同時，又不減少肌肉的質量。<br>有幾個研究支持了它益於減重的說法：在過重的貓咪，添加250ppm左旋肉鹼可造成較快的減重效果，而且沒有副作用。</h5>';
        }
        if(item=='Omega'){
            innerHTML += '<h3>Omega-3/Omega-6</h3><br><br>';
            innerHTML += '<h4>相關icon</h4><br>';
            innerHTML += '<h5>皮膚</h5>';
            innerHTML += '<br><h4>相關資訊</h4><br>';
            innerHTML += '<h5>Omega-3 脂肪酸能非常有效地對抗和預防炎症，可被形容為 “Anti-inflammatory” 。相反，若攝取過量 Omega-6 脂肪酸， 身體就會容易產生炎症。<br>Omega-3分為長鏈(來自魚類)和短鏈(來自植物，如:亞麻籽)，當中植物來源的短鏈Omega-3需經過轉換才能變成貓咪所能吸收的EPA和DHA，但貓咪身上的轉換能力有限，若是要補充Omega-3就要好好注意來源，以免貓咪沒有真正利用到。</h5>';
            innerHTML += '<br><h4>其他研究</h4><br>';
            innerHTML += '<h5>Omega3補充品並無會有任何的副作用，但還是避免過度補充，因為其潛在可能會影響血小板功能的特性， Omega3脂肪酸會影響血小板的能力，使其迅速結合在一起造成血液凝結的功能降低。<br><br>在飼料中，Omega-3:Omega-6之最佳比通常為20:1，當補充omega3脂肪酸或額外添加到食物中時，這個比例會降低。一般建議健康飲食約5:1，此比例也被廣泛應用於寵物的食品上。更低的比例也在臨床研究中被証實能帶來更多的健康效益。</h5>';
        }
        if(item=='Zincum'){
            innerHTML += '<h3>鋅 Zincum</h3><br><br>';
            innerHTML += '<h4>相關icon</h4><br>';
            innerHTML += '<h5>皮膚、毛髮</h5>';
            innerHTML += '<br><h4>相關資訊</h4><br>';
            innerHTML += '<h5>鋅是多種體內酵素的催化劑，也涉及許多不同的生理功能。一些主要功能包含:</h5>';
            innerHTML += '<h5>1. 核酸代謝<br>2. 蛋白質合成<br>3. 碳水化合物代謝<br>4. 免疫力<br>5. 傷口癒合</h5>';
            innerHTML += '<br><h5>鋅是一種很難被吸收的元素，研究指出，攝入的鋅僅被吸收5~40%，而影響鋅吸收的有幾項原因:</h5>';
            innerHTML += '<h5>1. 遺傳<br>2. 高纖維<br>3. 鈣攝取過多</h5>';
            innerHTML += '<br><h5>貓咪如果缺鋅會有厭食，生長速度下降，脫毛，生殖功能受損，免疫功能下降和骨骼生長障礙的現象。</h5>';
        }
        if(item=='Magnesium'){
            innerHTML += '<h3>鎂 Magnesium</h3><br><br>';
            innerHTML += '<h4>相關icon</h4><br>';
            innerHTML += '<h5>骨頭</h5>';
            innerHTML += '<br><h4>相關資訊</h4><br>';
            innerHTML += '<h5>鎂的影響來自於與其他維生素和礦物質的共同作用，適當的骨骼生長、體內酶的功能與蛋白質的產生皆有影響。<br>鎂多存在於於未加工的小麥胚芽，全穀類，大豆，牛奶和魚類中。但在高溫下烹飪會去除食物中的鎂。</h5>';
            innerHTML += '<br><h4>與其他元素的互動關係</h4><br>';
            innerHTML += '<h5>鈣和磷的濃度會影響貓咪身體鎂的平衡，大量的鈣或磷會減少腸道對鎂的吸收。</h5>';
        }
        if(item=='Natrium'){
            innerHTML += '<h3>鈉 Natrium</h3><br><br>';
            innerHTML += '<h4>相關icon</h4><br>';
            innerHTML += '<h5>泌尿道</h5>';
            innerHTML += '<br><h4>相關資訊</h4><br>';
            innerHTML += '<h5>鈉能維持體內滲透壓、調節酸鹼平衡，若鈉濃度不足，將影響蛋白質消化和能量的使用，也可能會影響鈣的吸收和使用，以及其他水溶性維生素(例如:核黃酸等)的作用</h5>';
            innerHTML += '<h5>過量的鈉攝取須通過腎臟過濾並排出體外，若沒有良好的飲水習慣對貓咪身體會造成龐大負擔。</h5>';
        }
        if(item=='Calcium'){
            innerHTML += '<h3>鈣 Natrium</h3><br><br>';
            innerHTML += '<h4>相關icon</h4><br>';
            innerHTML += '<h5>骨頭、口腔</h5>';
            innerHTML += '<br><h4>相關資訊</h4><br>';
            innerHTML += '<h5>鈣的主要功能有二:<br>1. 作為骨骼和牙齒中的結構成分<br>2. 刺激細胞對激素及神經傳遞物質反應</h5>';
            innerHTML += '<h5>一般貓飼料中的鈣源自於帶骨的肉粉、家禽副，而在飼料添加物中常見的碳酸鈣、硫酸鈣、骨粉等都是鈣的補充劑。</h5>';
            innerHTML += '<br><h4>與其他元素的互動關係</h4><br>';
            innerHTML += '<h5>寵物食品中鈣的攝去最好與磷的比例為1.1~1.5:1</h5>';
        }
        if(item=='Cuprum'){
            innerHTML += '<h3>銅 Cuprum</h3><br><br>';
            innerHTML += '<h4>相關icon</h4><br>';
            innerHTML += '<h5>骨頭、懷孕</h5>';
            innerHTML += '<br><h4>相關資訊</h4><br>';
            innerHTML += '<h5>以小貓、懷孕貓和哺乳貓需特別注意銅的攝取。銅有催化紅血球的形成，因此缺銅也可能發生貧血症狀。</h5>';
        }
        document.getElementById('libraryInformation').innerHTML = innerHTML;
        $("#libraryInformation").fadeIn(500);
    }    
}