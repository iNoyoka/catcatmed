var express = require('express');
var router = express.Router();

// 首頁以及分流
router.get('/', function(req, res, next) {
    if(req.session.qnrecordList==null){
        req.session.qnrecordList = [];
        req.session.qnrecordList.push('/questionnaire');
    }
    if(req.session.qnrecord!=null && req.session.qnrecord!='BKN'){
        res.redirect('questionnaire/'+req.session.qnrecord);
    }else if(req.session.qnrecord=='BKN'){
        req.session.qnrecordList = [];
        req.session.qnrecordList.push('/questionnaire');
        res.render('questionnaire/BHELLO');
    }else{
        res.render('questionnaire/BHELLO');
    }    
});
// 返回上一題
router.post('/back',function(req,res,next){
    if(req.session.qnrecordList==null){
        req.session.qnrecord = null;
        res.send('/questionnaire');
    }
    else{
        res.send(req.session.qnrecordList.pop());
    }    
});
//
router.get('/BKN',function(req,res,next){
    req.session.BKN_name = null;
    req.session.BKN_age = null;
    req.session.BKN_sex = null;
    req.session.qnrecord = 'BKN';
    res.render('questionnaire/BKN');
});
router.post('/BKN',function(req,res,next){
    req.session.BKN_name = req.body.BKN_name;
    req.session.BKN_sex = req.body.BKN_sex;
    req.session.BKN_age = req.body.BKN_age;
    req.session.qnrecordList.push('BKN')
    res.send('BCN');
});
//
router.get('/BCN',function(req,res,next){
    req.session.BCN = null;
    req.session.qnrecord = 'BCN';
    res.render('questionnaire/BCN');
});
router.post('/BCN',function(req,res,next){
    req.session.BCN = req.body.name;
    req.session.qnrecordList.push('BCN')
    res.send('BCS');
});
//
router.get('/BCS',function(req,res,next){
    req.session.BCS = null;
    req.session.qnrecord = 'BCS';
    res.render('questionnaire/BCS',{name:req.session.BCN});
});
router.post('/BCS',function(req,res,next){
    req.session.BCS = req.body.name;
    req.session.qnrecordList.push('BCS')
    res.send('BCA');
});
//
router.get('/BCA',function(req,res,next){
    req.session.BCA_ageYear = null;
    req.session.BCA_ageMonth = null;
    req.session.qnrecord = 'BCA';
    res.render('questionnaire/BCA',{name:req.session.BCN});
});
router.post('/BCA',function(req,res,next){
    req.session.BCA_ageYear = req.body.ageYear;
    req.session.BCA_ageMonth = req.body.ageMonth;
    req.session.qnrecordList.push('BCA')
    res.send('BAGE');
});
//
router.get('/BAGE',function(req,res,next){
    var transYear = (req.session.BCA_ageYear - 3 + 1) * 4 + 25;
    res.render('questionnaire/BAGE',{year:req.session.BCA_ageYear,month:req.session.BCA_ageMonth,sex:req.session.BCS,name:req.session.BCN,calyear:transYear});
});
//
router.get('/BSP',function(req,res,next){
    req.session.BSP = null;
    req.session.qnrecord = 'BSP';
    res.render('questionnaire/BSP',{name:req.session.BCN});
});
router.post('/BSP',function(req,res,next){
    req.session.BSP = req.body.name;
    req.session.qnrecordList.push('BSP')
    res.send('BNU');
});
//
router.get('/BNU',function(req,res,next){
    req.session.BNU = null;
    req.session.qnrecord = 'BNU';
    res.render('questionnaire/BNU',{name:req.session.BCN});
});
router.post('/BNU',function(req,res,next){
    req.session.BNU = req.body.name;
    req.session.qnrecordList.push('BNU');
    if(req.session.BNU=='no' && req.session.BCS=='female'){
        res.send('BPR');
    }else{
        res.send('BCW');
    }
});
//
router.get('/BPR',function(req,res,next){
    req.session.BPR = null;
    req.session.qnrecord = 'BPR';
    res.render('questionnaire/BPR',{name:req.session.BCN});
});
router.post('/BPR',function(req,res,next){
    req.session.BPR = req.body.name;
    req.session.qnrecordList.push('BPR');
    if(req.session.BPR=='yes'){
        res.send('BPT');
    }else if(req.session.BPR=='no' && req.session.BCS=='female'){
        res.send('BFN');
    }
    else{
        res.send('BCW');
    }
});
//
router.get('/BPT',function(req,res,next){
    req.session.BPT = null;
    req.session.qnrecord = 'BPT';
    res.render('questionnaire/BPT',{name:req.session.BCN});
});
router.post('/BPT',function(req,res,next){
    req.session.BPT = req.body.name;
    req.session.qnrecordList.push('BPT');
    res.send('BCW');
});
//
router.get('/BFN',function(req,res,next){
    req.session.BFN = null;
    req.session.qnrecord = 'BFN';
    res.render('questionnaire/BFN',{name:req.session.BCN});
});
router.post('/BFN',function(req,res,next){
    req.session.BFN = req.body.name;
    req.session.qnrecordList.push('BFN');
    if(req.session.BFN=='yes'){
        res.send('BFA');
    }else{
        res.send('BCW');
    }
});
//
router.get('/BFA',function(req,res,next){
    req.session.BFA_kittyNum = null;
    req.session.BFA_week = null;
    req.session.qnrecord = 'BFA';
    res.render('questionnaire/BFA',{name:req.session.BCN});
});
router.post('/BFA',function(req,res,next){
    req.session.BFA_kittyNum = req.body.kittyNum;
    req.session.BFA_week = req.body.week;
    req.session.qnrecordList.push('BFA');
    res.send('BCW');
});
//
router.get('/BCW',function(req,res,next){
    req.session.BCW_kilo = null;
    req.session.BCW_gram = null;
    req.session.qnrecord = 'BCW';
    res.render('questionnaire/BCW',{name:req.session.BCN});
});
router.post('/BCW',function(req,res,next){
    req.session.BCW_kilo = req.body.kilo;
    req.session.BCW_gram = req.body.gram;
    req.session.qnrecordList.push('BCW');
    res.send('BEF');
})
//
router.get('/BEF',function(req,res,next){
    req.session.BEF = null;
    req.session.qnrecord = 'BEF';
    res.render('questionnaire/BEF',{name:req.session.BCN});
});
router.post('/BEF',function(req,res,next){
    req.session.BEF = req.body.name;
    req.session.qnrecordList.push('BEF');
    res.send('BSI');
});
//
router.get('/BSI',function(req,res,next){
    req.session.BSI = null;
    req.session.qnrecord = 'BSI';
    res.render('questionnaire/BSI',{name:req.session.BCN});
});
router.post('/BSI',function(req,res,next){
    req.session.BSI = req.body.name;
    req.session.qnrecordList.push('BSI');
    if(req.session.BPR=='yes'){
        res.send('catfood_select');
    }else{
        res.send('BBC');
    }
});
//
router.get('/BBC',function(req,res,next){
    req.session.BBC = null;
    req.session.qnrecord = 'BBC';
    res.render('questionnaire/BBC',{name:req.session.BCN});
});
router.post('/BBC',function(req,res,next){
    req.session.BBC = req.body.name;
    req.session.qnrecordList.push('BBC');
    if(req.session.BBC=='D' || req.session.BBC=='E'){
        res.send('weight_control');
    }else{
        res.send('catfood_select');
    }
});
//
router.get('/weight_control',function(req,res,next){
    req.session.weight_control = null;
    req.session.qnrecord = 'weight_control';
    res.render('questionnaire/weight_control',{name:req.session.BCN});
});
router.post('/weight_control',function(req,res,next){
    req.session.weight_control = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('catfood_select');
});
//
router.get('/catfood_select',function(req,res,next){
    req.session.catfood_select = null;
    res.redirect('/questionnaire/select_icon')
    //req.session.qnrecord = 'catfood_select';
    //res.render('questionnaire/catfood_select',{name:req.session.BCN});
});
router.post('/catfood_select',function(req,res,next){
    req.session.catfood_select = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('select_icon');
});
//
router.get('/select_icon',function(req,res,next){
    req.session.select_icon = null;
    req.session.qnrecord = 'select_icon';
    res.render('questionnaire/select_icon',{name:req.session.BCN});
});
router.post('/select_icon',function(req,res,next){
    req.session.select_icon = JSON.parse(req.body.name);
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('iconlist_redirect');
});
// ICON LIST GENERATE
router.get('/iconlist_redirect',function(req,res,next){
    function findList(id,list){
        if(id=='start'){
            return list[0];
        }else{
            for(i=0;i<3;i++){
                if(list[i]==id){
                    if(list[i+1]!=null) return list[i+1];
                    else return 'end';
                }
            }
        }
    }
    function match(id){
        if(id=='end') return 'extra_eatinghabit';
        if(id=='err') return 'err';
        if(id=='A') return 'joint_now';
        if(id=='B') return 'heart_now';
        if(id=='C') return 'mouth_now';
        if(id=='D') return 'fur_freq';
        if(id=='E') return 'immu_now';
        if(id=='F') return 'kidney_now';
        if(id=='G') return 'urinary_now';
        if(id=='H') return 'stoma_problem';
        if(id=='I') return 'melt_freq';
        if(id=='J') return 'stress_now';
    }
    if(req.session.qnrecord=='select_icon'){
        res.redirect('/questionnaire/'+match(findList('start',req.session.select_icon)));
    }else{
        if(req.session.qnrecord=='joint_daily'){
            res.redirect('/questionnaire/'+match(findList('A',req.session.select_icon)));
        }else if(req.session.qnrecord=='heart_avgtemp'){
            res.redirect('/questionnaire/'+match(findList('B',req.session.select_icon)));
        }else if(req.session.qnrecord=='mouth_brush'){
            res.redirect('/questionnaire/'+match(findList('C',req.session.select_icon)));
        }else if(req.session.qnrecord=='fur_behave'){
            res.redirect('/questionnaire/'+match(findList('D',req.session.select_icon)));
        }else if(req.session.qnrecord=='fur_tie'){
            res.redirect('/questionnaire/'+match(findList('D',req.session.select_icon)));
        }else if(req.session.qnrecord=='immu_med'){
            res.redirect('/questionnaire/'+match(findList('E',req.session.select_icon)));
        }else if(req.session.qnrecord=='kidney_urine' || req.session.qnrecord=='kidney_health'){
            res.redirect('/questionnaire/'+match(findList('F',req.session.select_icon)));
        }else if(req.session.qnrecord=='urinary_water'){
            res.redirect('/questionnaire/'+match(findList('G',req.session.select_icon)));
        }else if(req.session.qnrecord=='stoma_problem' || req.session.qnrecord=='stoma_bathroom' || req.session.qnrecord=='stoma_strange' || req.session.qnrecord=='stomexcepA'){
            res.redirect('/questionnaire/'+match(findList('H',req.session.select_icon)));
        }else if(req.session.qnrecord=='melt_freq'){
            res.redirect('/questionnaire/'+match(findList('I',req.session.select_icon)));
        }else if(req.session.qnrecord=='stress_lifestyle'){
            res.redirect('/questionnaire/'+match(findList('J',req.session.select_icon)));
        }else{
            res.redirect('/questionnaire/'+match(findList('error',req.session.select_icon)));
        }
    }
});
// err
router.get('/err',function(req,res,next){
    res.render('questionnaire/error');
});
// ICON PART
router.get('/joint_now',function(req,res,next){
    req.session.joint_now = null;
    req.session.qnrecord = 'joint_now';
    res.render('questionnaire/joint_now',{name:req.session.BCN});
});
router.post('/joint_now',function(req,res,next){
    req.session.joint_now = req.body.name;
    req.session.qnrecordList.push('joint_now');
    res.send('joint_med');
});
//
router.get('/joint_med',function(req,res,next){
    req.session.joint_med = null;
    req.session.qnrecord = 'joint_med';
    // link to heart
    res.render('questionnaire/joint_med',{name:req.session.BCN});
});
router.post('/joint_med',function(req,res,next){
    req.session.joint_med = req.body.name;
    req.session.qnrecordList.push('joint_med');
    if(req.session.joint_med=='yes'){
        res.send('joint_jump');
    }else{
        res.send('joint_below');
    }
});
//
router.get('/joint_below',function(req,res,next){
    req.session.joint_below = null;
    req.session.qnrecord = 'joint_below';
    res.render('questionnaire/joint_below',{name:req.session.BCN});
});
router.post('/joint_below',function(req,res,next){
    req.session.joint_below = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.joint_below = [];
        req.session.joint_below.push('unsure');
    }
    req.session.qnrecordList.push('joint_below');
    res.send('joint_jump');
});
//
router.get('/joint_jump',function(req,res,next){
    req.session.joint_jump = null;
    req.session.qnrecord = 'joint_jump';
    res.render('questionnaire/joint_jump',{name:req.session.BCN});
});
router.post('/joint_jump',function(req,res,next){
    req.session.joint_jump = req.body.name;
    req.session.qnrecordList.push('joint_jump');
    res.send('joint_daily');
});
//
router.get('/joint_daily',function(req,res,next){
    req.session.joint_daily = null;
    req.session.qnrecord = 'joint_daily';
    res.render('questionnaire/joint_daily',{name:req.session.BCN});
});
router.post('/joint_daily',function(req,res,next){
    req.session.joint_daily = req.body.name;
    req.session.qnrecordList.push('joint_daily');
    res.send('iconlist_redirect');
});
//
router.get('/heart_now',function(req,res,next){
    req.session.heart_now = null;
    req.session.qnrecord = 'heart_now';
    res.render('questionnaire/heart_now',{name:req.session.BCN});
});
router.post('/heart_now',function(req,res,next){
    req.session.heart_now = req.body.name;
    req.session.qnrecordList.push('heart_now');
    // link to joint
    if(req.session.heart_now=='yes'){
        res.send('heart_avgtemp');
    }else{
        res.send('heart_behave')
    }
});
//
router.get('/heart_behave',function(req,res,next){
    req.session.heart_behave = null;
    req.session.qnrecord = 'heart_behave';
    res.render('questionnaire/heart_behave',{name:req.session.BCN});
});
router.post('/heart_behave',function(req,res,next){
    req.session.heart_behave = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.heart_behave = [];
        req.session.heart_behave.push('unsure');
    }
    req.session.qnrecordList.push('heart_behave');
    res.send('heart_avgtemp');
});
//
router.get('/heart_avgtemp',function(req,res,next){
    req.session.heart_avgtemp = null;
    req.session.qnrecord = 'heart_avgtemp';
    res.render('questionnaire/heart_avgtemp',{name:req.session.BCN});
});
router.post('/heart_avgtemp',function(req,res,next){
    req.session.heart_avgtemp = req.body.name;
    req.session.qnrecordList.push('heart_avgtemp');
    res.send('iconlist_redirect');
});
//
router.get('/mouth_now',function(req,res,next){
    req.session.mouth_now = null;
    req.session.qnrecord = 'mouth_now';
    res.render('questionnaire/mouth_now',{name:req.session.BCN});
});
router.post('/mouth_now',function(req,res,next){
    req.session.mouth_now = req.body.name;
    req.session.qnrecordList.push('mouth_now');
    if(req.session.mouth_now=='yes'){
        res.send('mouth_brush');
    }else{
        res.send('mouth_behave');
    }
});
//
router.get('/mouth_behave',function(req,res,next){
    req.session.mouth_behave = null;
    req.session.qnrecord = 'mouth_behave';
    res.render('questionnaire/mouth_behave',{name:req.session.BCN});
})
router.post('/mouth_behave',function(req,res,next){
    req.session.mouth_behave = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.mouth_behave = [];
        req.session.mouth_behave.push('unsure');
    }
    req.session.qnrecordList.push('mouth_behave');
    res.send('mouth_brush');
});
//
router.get('/mouth_brush',function(req,res,next){
    req.session.mouth_brush = null;
    req.session.qnrecord = 'mouth_brush';
    res.render('questionnaire/mouth_brush',{name:req.session.BCN});
});
router.post('/mouth_brush',function(req,res,next){
    req.session.mouth_brush = req.body.name;
    req.session.qnrecordList.push('mouth_brush');
    res.send('iconlist_redirect');
});
//
router.get('/fur_freq',function(req,res,next){
    req.session.fur_freq = null;
    req.session.qnrecord = 'fur_freq';
    res.render('questionnaire/fur_freq',{name:req.session.BCN});
});
router.post('/fur_freq',function(req,res,next){
    req.session.fur_freq = req.body.name;
    req.session.qnrecordList.push('fur_freq');
    res.send('fur_behave');
});
//
router.get('/fur_behave',function(req,res,next){
    req.session.fur_behave = null;
    req.session.qnrecord = 'fur_behave';
    res.render('questionnaire/fur_behave',{name:req.session.BCN});
});
router.post('/fur_behave',function(req,res,next){
    req.session.fur_behave = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.fur_behave = [];
        req.session.fur_behave.push('unsure');
    }
    req.session.qnrecordList.push('fur_behave');
    if(req.session.fur_behave.includes('E')){
        res.send('fur_tie');
    }else{
        res.send('iconlist_redirect');
    }
});
//
router.get('/fur_tie',function(req,res,next){
    req.session.fur_tie = null;
    req.session.qnrecord = 'fur_tie';
    res.render('questionnaire/fur_tie',{name:req.session.BCN});
});
router.post('/fur_tie',function(req,res,next){
    req.session.fur_tie = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.fur_tie = [];
        req.session.fur_tie.push('unsure');
    }
    req.session.qnrecordList.push('fur_tie');
    res.send('iconlist_redirect');
});
//
router.get('/immu_now',function(req,res,next){
    req.session.immu_now = null;
    req.session.qnrecord = 'immu_now';
    res.render('questionnaire/immu_now',{name:req.session.BCN});
});
router.post('/immu_now',function(req,res,next){
    req.session.immu_now = req.body.name;
    req.session.qnrecordList.push('immu_now');
    if(req.session.immu_now=='yes'){
        res.send('immu_behave_before')
    }else{
        res.send('immu_behave');
    }
});
//
router.get('/immu_behave',function(req,res,next){
    req.session.immu_behave = null;
   req.session.qnrecord = 'immu_behave';
   res.render('questionnaire/immu_behave',{name:req.session.BCN}); 
});
router.post('/immu_behave',function(req,res,next){
    req.session.immu_behave = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.immu_behave = [];
        req.session.immu_behave.push('unsure');
    }
    req.session.qnrecordList.push('immu_behave');
    res.send('immu_behave_before');
});
//
router.get('/immu_behave_before',function(req,res,next){
    req.session.immu_behave_before = null;
    var year = parseInt(req.session.BCA_ageYear);
    var month = parseInt(req.session.BCA_ageMonth);
    if(year==0 && month<=6){
        //六個月以下
        req.session.qnrecord = 'immu_behave_before';
        res.render('questionnaire/immu_behave_before',{name:req.session.BCN});
    }else{
        res.redirect('/questionnaire/immu_spirit');
    }
});
router.post('/immu_behave_before',function(req,res,next){
    req.session.immu_behave_before = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.immu_behave_before = [];
        req.session.immu_behave_before.push('unsure');
    }
    req.session.qnrecordList.push('immu_behave_before');
    res.send('immu_spirit');
});
//
router.get('/immu_spirit',function(req,res,next){
    req.session.immu_spirit = null;
    req.session.qnrecord = 'immu_spirit';
    res.render('questionnaire/immu_spirit',{name:req.session.BCN});
});
router.post('/immu_spirit',function(req,res,next){
    req.session.immu_spirit = req.body.name;
    req.session.qnrecordList.push('immu_spirit');
    res.send('immu_med');
});
//
router.get('/immu_med',function(req,res,next){
    req.session.immu_med = null;
    req.session.qnrecord = 'immu_med';
    res.render('questionnaire/immu_med',{name:req.session.BCN});
});
router.post('/immu_med',function(req,res,next){
    req.session.immu_med = req.body.name;
    req.session.qnrecordList.push('immu_med');
    res.send('iconlist_redirect');
});
//
router.get('/kidney_now',function(req,res,next){
    req.session.kidney_now = null;
    req.session.qnrecord = 'kidney_now';
    res.render('questionnaire/kidney_now',{name:req.session.BCN});
});
router.post('/kidney_now',function(req,res,next){
    req.session.kidney_now = req.body.name;
    req.session.qnrecordList.push('kidney_now');
    res.send('kidney_urine');
});
//
router.get('/kidney_urine',function(req,res,next){
    req.session.kidney_urine = null;
    req.session.qnrecord = 'kidney_urine';
    res.render('questionnaire/kidney_urine',{name:req.session.BCN});
});
router.post('/kidney_urine',function(req,res,next){
    req.session.kidney_urine = req.body.name;
    req.session.qnrecordList.push('kidney_urine');
    var year = parseInt(req.session.BCA_ageYear);
    if(year>=5){ //貓咪五歲以上
        res.send('kidney_health');
    }else{
        res.send('iconlist_redirect');
    }
});
//
router.get('/kidney_health',function(req,res,next){
    req.session.kidney_health = null;
    req.session.qnrecord = 'kidney_health';
    res.render('questionnaire/kidney_health',{name:req.session.BCN});
});
router.post('/kidney_health',function(req,res,next){
    req.session.kidney_health = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('iconlist_redirect');
});
//
router.get('/urinary_now',function(req,res,next){
    req.session.urinary_now = null;
    req.session.qnrecord = 'urinary_now';
    res.render('questionnaire/urinary_now',{name:req.session.BCN});
});
router.post('/urinary_now',function(req,res,next){
    req.session.urinary_now = req.body.name;
    req.session.qnrecordList.push('urinary_now');
    if(req.session.urinary_now=='yes'){
        res.send('urinary_together');
    }else{
        res.send('urinary_behave');
    }
});
//
router.get('/urinary_behave',function(req,res,next){
    req.session.urinary_behave = null;
    req.session.qnrecord = 'urinary_behave';
    res.render('questionnaire/urinary_behave',{name:req.session.BCN});
});
router.post('/urinary_behave',function(req,res,next){
    req.session.urinary_behave = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.urinary_behave = [];
        req.session.urinary_behave.push('unsure');
    }
    req.session.qnrecordList.push('urinary_behave');
    res.send('urinary_together');
});
//
router.get('/urinary_together',function(req,res,next){
    req.session.urinary_together = null;
    req.session.qnrecord = 'urinary_together';
    res.render('questionnaire/urinary_together',{name:req.session.BCN});
});
router.post('/urinary_together',function(req,res,next){
    req.session.urinary_together = req.body.name;
    req.session.qnrecordList.push('urinary_together');
    res.send('urinary_water');
});
//
router.get('/urinary_water',function(req,res,next){
    req.session.urinary_water = null;
    req.session.qnrecord = 'urinary_water';
    res.render('questionnaire/urinary_water',{name:req.session.BCN});
});
router.post('/urinary_water',function(req,res,next){
    req.session.urinary_water = req.body.name;
    req.session.qnrecordList.push('urinary_water');
    res.send('iconlist_redirect');
});
//
router.get('/stoma_problem',function(req,res,next){
    req.session.stoma_problem = null;
    req.session.qnrecord = 'stoma_problem';
    res.render('questionnaire/stoma_problem',{name:req.body.BCN});
});
router.post('/stoma_problem',function(req,res,next){
    req.session.stoma_problem = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.stoma_problem = [];
        req.session.stoma_problem.push('unsure');
    }
    req.session.qnrecordList.push('stoma_problem');
    if(req.session.stoma_problem.includes('A') && !req.session.stoma_problem.includes('E')){
        res.send('stomexcepA');
    }else if(!req.session.stoma_problem.includes('A') && req.session.stoma_problem.includes('E')){
        res.send('stoma_strange');
    }else if(req.session.stoma_problem.includes('A') && req.session.stoma_problem.includes('E')){
        res.send('stomexcepB')
    }else{
        res.send('iconlist_redirect');
    }
});
// HANDLE STOMA EXCEPTION
router.get('/stomexcepA',function(req,res,next){
    req.session.stoma_bathroom = null;
    req.session.qnrecord = 'stomexcepA';
    res.render('questionnaire/stoma_bathroom',{name:req.body.BCN});
});
router.get('/stomexcepB',function(req,res,next){
    req.session.stoma_bathroom = null;
    req.session.qnrecord = 'stomexcepB';
    res.render('questionnaire/stoma_bathroom',{name:req.body.BCN});
});
router.post('/stoma_bathroom',function(req,res,next){
    req.session.stoma_bathroom = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    if(req.session.qnrecord=='stomexcepA'){
        res.send('iconlist_redirect');
    }else if(req.session.qnrecord=='stomexcepB'){
        res.send('stoma_strange');
    }
});
//
router.get('/stoma_strange',function(req,res,next){
    req.session.stoma_strange = null;
    req.session.qnrecord = 'stoma_strange';
    res.render('questionnaire/stoma_strange',{name:req.body.BCN});
});
router.post('/stoma_strange',function(req,res,next){
    req.session.stoma_strange = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('iconlist_redirect');
});
//
router.get('/melt_freq',function(req,res,next){
    req.session.melr_freq = null;
    req.session.qnrecord = 'melt_freq';
    res.render('questionnaire/melt_freq',{name:req.session.BCN});
});
router.post('/melt_freq',function(req,res,next){
    req.session.melr_freq = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('iconlist_redirect');
});
//
router.get('/stress_now',function(req,res,next){
    req.session.stress_now = null;
    req.session.qnrecord = 'stress_now';
    res.render('questionnaire/stress_now',{name:req.session.BCN});
});
router.post('/stress_now',function(req,res,next){
    req.session.stress_now = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.stress_now = [];
        req.session.stress_now.push('unsure');
    }
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('stress_enviornment');
});
//
router.get('/stress_enviornment',function(req,res,next){
    req.session.stress_enviornment = null;
    req.session.qnrecord = 'stress_enviornment';
    res.render('questionnaire/stress_enviornment',{name:req.session.BCN});
});
router.post('/stress_enviornment',function(req,res,next){
    req.session.stress_enviornment = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.stress_enviornment = [];
        req.session.stress_enviornment.push('unsure');
    }
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('stress_enviornment_out')
});
//
router.get('/stress_enviornment_out',function(req,res,next){
    req.session.stress_enviornment_out = null;
    req.session.qnrecord = 'stress_enviornment_out';
    res.render('questionnaire/stress_enviornment_out',{name:req.session.BCN});
});
router.post('/stress_enviornment_out',function(req,res,next){
    req.session.stress_enviornment_out = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.stress_enviornment_out = [];
        req.session.stress_enviornment_out.push('unsure');
    }
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('stress_lifestyle');
});
//
router.get('/stress_lifestyle',function(req,res,next){
    req.session.stress_lifestyle = null;
    req.session.qnrecord = 'stress_lifestyle';
    res.render('questionnaire/stress_lifestyle',{name:req.session.BCN});
});
router.post('/stress_lifestyle',function(req,res,next){
    req.session.stress_lifestyle = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.stress_lifestyle = [];
        req.session.stress_lifestyle.push('unsure');
    }
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('iconlist_redirect');
});
//
router.get('/extra_eatinghabit',function(req,res,next){
    req.session.extra_eatinghabit = null;
    req.session.qnrecord = 'extra_eatinghabit';
    res.render('questionnaire/extra_eatinghabit',{name:req.session.BCN});
});
router.post('/extra_eatinghabit',function(req,res,next){
    req.session.extra_eatinghabit = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    if(req.session.extra_eatinghabit=='A'){
        res.send('extra_eatingfreq')
    }else{
        res.send('extra_weekcan');
    }
})
//
router.get('/extra_eatingfreq',function(req,res,next){
    req.session.extra_eatingfreq = null;
    req.session.qnrecord = 'extra_eatingfreq';
    res.render('questionnaire/extra_eatingfreq',{name:req.session.BCN});
});
router.post('/extra_eatingfreq',function(req,res,next){
    req.session.extra_eatingfreq = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('extra_weekcan');
});
//
router.get('/extra_weekcan',function(req,res,next){
    req.session.extra_weekcan_major = null;
    req.session.extra_weekcan_minor = null;
    req.session.qnrecord = 'extra_weekcan';
    res.render('questionnaire/extra_weekcan',{name:req.session.BCN});
});
router.post('/extra_weekcan',function(req,res,next){
    req.session.extra_weekcan_major = req.body.major;
    req.session.extra_weekcan_minor = req.body.minor;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('extra_freshflesh');
});
//
router.get('/extra_freshflesh',function(req,res,next){
    req.session.extra_freshflesh = null;
    req.session.qnrecord = 'extra_freshflesh';
    res.render('questionnaire/extra_freshflesh',{name:req.session.BCN});
});
router.post('/extra_freshflesh',function(req,res,next){
    req.session.extra_freshflesh = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('extra_minifish');
});
//
router.get('/extra_minifish',function(req,res,next){
    req.session.extra_minifish = null;
    req.session.qnrecord = 'extra_minifish';
    res.render('questionnaire/extra_minifish',{name:req.session.BCN});
});
router.post('/extra_minifish',function(req,res,next){
    req.session.extra_minifish = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('extra_killbugs');
});
//
router.get('/extra_killbugs',function(req,res,next){
    req.session.extra_killbugs = null;
    req.session.qnrecord = 'extra_killbugs';
    res.render('questionnaire/extra_killbugs',{name:req.session.BCN});
});
router.post('/extra_killbugs',function(req,res,next){
    req.session.extra_killbugs = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('extra_vacci');
});
//
router.get('/extra_vacci',function(req,res,next){
    req.session.extra_vacci = null;
    req.session.qnrecord = 'extra_vacci';
    res.render('questionnaire/extra_vacci',{name:req.session.BCN});
});
router.post('/extra_vacci',function(req,res,next){
    req.session.extra_vacci = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('extra_alergent');
});
//
router.get('/extra_alergent',function(req,res,next){
    req.session.extra_alergent = null;
    req.session.qnrecord = 'extra_alergent';
    res.render('questionnaire/extra_alergent',{name:req.session.BCN});
});
router.post('/extra_alergent',function(req,res,next){
    req.session.extra_alergent = JSON.parse(req.body.name);
    if(req.body.unsure=='yes'){
        req.session.extra_alergent = [];
        req.session.extra_alergent.push('unsure');
    }
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('extra_drinking');
});
//
router.get('/extra_drinking',function(req,res,next){
    req.session.extra_drinking = null;
    req.session.qnrecord = 'extra_drinking';
    res.render('questionnaire/extra_drinking',{name:req.session.BCN});
});
router.post('/extra_drinking',function(req,res,next){
    req.session.extra_drinking = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('extra_cooking');
});
//
router.get('/extra_cooking',function(req,res,next){
    req.session.extra_cooking = null;
    req.session.qnrecord = 'extra_cooking';
    res.render('questionnaire/extra_cooking',{name:req.session.BCN});
});
router.post('/extra_cooking',function(req,res,next){
    req.session.extra_cooking = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    var year = parseInt(req.session.BCA_ageYear);
    if(year>=12){ //貓咪五歲以上
        res.send('extra_strangehabit');
    }else{
        res.send('extra_place');
    }
});
//
router.get('/extra_strangehabit',function(req,res,next){
    req.session.extra_strangehabit = null;
    req.session.qnrecord = 'extra_strangehabit';
    res.render('questionnaire/extra_strangehabit',{name:req.session.BCN});
});
router.post('/extra_strangehabit',function(req,res,next){
    req.session.extra_strangehabit = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('extra_place'); 
});
//
router.get('/extra_place',function(req,res,next){
    req.session.extra_place = null;
    req.session.qnrecord = 'extra_place';
    res.render('questionnaire/extra_place',{name:req.session.BCN});
});
router.post('/extra_place',function(req,res,next){
    req.session.extra_place = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('extra_knowhow');
});
//
router.get('/extra_knowhow',function(req,res,next){
    req.session.extra_knowhow = null;
    req.session.qnrecord = 'extra_knowhow';
    res.render('questionnaire/extra_knowhow',{name:req.session.BCN});
});
router.post('/extra_knowhow',function(req,res,next){
    req.session.extra_knowhow = req.body.name;
    //req.session.qnrecordList.push(req.session.qnrecord);
    res.send('final');
});
//
router.get('/final',function(req,res,next){
    if(req.session.BKN_sex==1){
        res.render('questionnaire/final',{name:req.session.BKN_name,sex:req.session.BKN_sex});
    }else{
        res.render('questionnaire/final',{name:req.session.BKN_name,sex:null});
    }
});

module.exports = router;