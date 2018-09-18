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
    req.session.qnrecord = 'BCA';
    res.render('questionnaire/BCA',{name:req.session.BCN});
});
router.post('/BCA',function(req,res,next){
    req.session.BSA = req.body.BSA;
    req.session.BSA_ageYear = req.body.ageYear;
    req.session.BSA_ageMonth = req.body.ageMonth;
    req.session.BSA_year = req.body.year;
    req.session.BSA_month = req.body.month;
    req.session.BSA_day = req.body.day;
    req.session.qnrecordList.push('BCA')
    res.send('BSP');
});
//
router.get('/BSP',function(req,res,next){
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
    req.session.qnrecord = 'BNU';
    res.render('questionnaire/BNU',{name:req.session.BCN});
});
router.post('/BNU',function(req,res,next){
    req.session.BNU = req.body.name;
    req.session.qnrecordList.push('BNU');
    if(req.session.BNU=='no' && req.session.BCS=='female'){
        res.send('BPR');
    }else if(req.session.BNU=='yes' && req.session.BCS=='female'){
        res.send('BFN');
    }else{
        res.send('BCW');
    }
});
//
router.get('/BPR',function(req,res,next){
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
    req.session.qnrecord = 'BEF';
    res.render('questionnaire/BEF',{name:req.session.BCN});
});
router.post('/BEF',function(req,res,next){
    req.session.BEF = req.body.name;
    req.session.qnrecordList.push('BEF');
    if(req.session.BEF=='A'){
        res.send('BSI');
    }else if(req.session.BEF!='A' && req.session.BPR=='yes'){
        res.send('iconpart')
    }else{
        res.send('BBC');
    }
});
//
router.get('/BSI',function(req,res,next){
    req.session.qnrecord = 'BSI';
    res.render('questionnaire/BSI',{name:req.session.BCN});
});
router.post('/BSI',function(req,res,next){
    req.session.BSI = req.body.name;
    req.session.qnrecordList.push('BSI');
    if(req.session.BPR=='yes'){
        res.send('iconpart');
    }else{
        res.send('BBC');
    }
});
//
router.get('/BBC',function(req,res,next){
    req.session.qnrecord = 'BBC';
    res.render('questionnaire/BBC',{name:req.session.BCN});
});
router.post('/BBC',function(req,res,next){
    req.session.BBC = req.body.name;
    req.session.qnrecordList.push('BBC');
    console.log("?");
});
//
router.get('/joint_now',function(req,res,next){
    req.session.qnrecord = 'joint_now';
    res.render('questionnaire/joint_now',{name:req.session.BCN});
});
router.post('/joint_now',function(req,res,next){
    req.session.joint_now = req.body.name;
    req.session.qnrecordList.push('joint_med');
    res.send('joint_med');
});
//
router.get('/joint_med',function(req,res,next){
    req.session.qnrecord = 'joint_med';
    // link to heart
    res.render('questionnaire/joint_med',{name:req.session.BCN});
});
router.post('/joint_med',function(req,res,next){
    req.session.joint_med = req.body.name;
    req.session.qnrecordList.push('joint_med');
    if(req.session.joint_med=='yes'){
        res.send('questionnaire/joint_jump');
    }else{
        res.send('questionnaire/joint_below');
    }
});
//
router.get('/joint_below',function(req,res,next){
    req.session.qnrecord = 'joint_below';
    res.render('questionnaire/joint_below',{name:req.session.BCN});
});
router.post('/joint_below',function(req,res,next){
    req.session.joint_below = JSON.parse(req.body.name);
    req.session.qnrecordList.push('joint_below');
    res.send('questionnaire/joint_jump');
});
//
router.get('/joint_jump',function(req,res,next){
    req.session.qnrecord = 'joint_jump';
    res.render('questionnaire/jump');
});
router.post('/joint_jump',function(req,res,next){
    req.session.joint_jump = req.body.name;
    req.session.qnrecordList.push('joint_jump');
    res.send('joint_daily');
});
//
router.get('/joint_daily',function(req,res,next){
    req.session.qnrecord = 'joint_daily';
    res.render('questionnaire/joint_daily');
});
router.post('/joint_daily',function(req,res,next){
    req.session.joint_daily = JSON.parse(req.body.name);
    req.session.qnrecordList.push('joint_daily');
    res.send('iconlist');
});
//
router.get('/heart_now',function(req,res,next){
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
    req.session.qnrecord = 'heart_behave';
    res.render('questionnaire/heart_behave',{name:req.session.BCN});
});
router.post('/heart_behave',function(req,res,next){
    req.session.heart_behave = JSON.parse(req.body.name);
    req.session.qnrecordList.push('heart_behave');
    res.send('/heart_avgtemp');
});
//
router.get('/heart_avgtemp',function(req,res,next){
    req.session.qnrecord = 'heart_avgtemp';
    res.render('questionnaire/heart_avgtemp');
});
router.post('/heart_avgtemp',function(req,res,next){
    req.session.heart_avgtemp = req.body.name;
    req.session.qnrecordList.push('heart_avgtemp');
    res.send('iconlist');
});
//
router.get('/mouth_now',function(req,res,next){
    req.session.qnrecord = '/mouth_now';
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
    req.session.qnrecord = 'mouth_behave';
    res.render('questionnaire/mouth_behave',{name:req.session.BCN});
})
router.post('/mouth_behave',function(req,res,next){
    req.session.mouth_behave = JSON.parse(req.body.name);
    req.session.qnrecordList.push('mouth_behave');
    res.send('mouth_brush');
});
//
router.get('/mouth_brush',function(req,res,next){
    req.session.qnrecord = 'mouth_brush';
    res.render('questionnaire/mouth_brush');
});
router.post('/mouth_brush',function(req,res,next){
    req.session.mouth_brush = req.body.name;
    req.session.qnrecordList.push('mouth_brush');
    res.send('iconlist');
});
//
router.get('/fur_freq',function(req,res,next){
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
    req.session.qnrecord = 'fur_behave';
    res.render('questionnaire/fur_behave',{name:req.session.BCN});
});
router.post('/fur_behave',function(req,res,next){
    req.session.fur_behave = JSON.parse(req.body.name);
    req.session.qnrecordList.push('fur_behave');
    if(req.session.fur_behave.includes('E')){
        res.send('fur_tie');
    }else{
        res.send('iconlist');
    }
});
//
router.get('/fur_tie',function(req,res,next){
    req.session.qnrecord = 'fur_tie';
    res.render('questionnaire/fur_tie',{name:req.session.BCN});
});
router.post('/fur_tie',function(req,res,next){
    req.session.fur_tie = JSON.parse(req.body.name);
    req.session.qnrecordList.push('fur_tie');
    res.send('iconlist');
});
//
router.get('/immu_now',function(req,res,next){
    req.session.qnrecord = 'immu_now';
    res.render('questionnaire/immu_now',{name:req.session.BCN});
});
router.post('/immu_now',function(req,res,next){
    req.session.immu_now = req.body.name;
    req.session.qnrecordList = JSON.parse('immu_now');
    if(req.session.immu_now=='yes'){
        res.send('immu_behave_before')
    }else{
        res.send('immu_behave');
    }
});
//
router.get('/immu_behave',function(req,res,next){
   req.session.qnrecord = 'immu_behave';
   res.render('questionnaire/immu_behave',{name:req.session.BCN}); 
});
router.post('/immu_behave',function(req,res,next){
    req.session.immu_behave = JSON.parse(req.body.name);
    req.session.qnrecordList.push('immu_behave');
    res.send('immu_behave_before');
});
//
router.get('/immu_behave_before',function(req,res,next){
    if(false){
        //六個月以下
        req.session.qnrecord = 'immu_behave_before';
        res.render('questionnaire/immu_behave_before',{name:req.session.BCN});
    }else{
        res.redirect('/immu_spirit');
    }
});
router.post('/immu_behave_before',function(req,res,next){
    req.session.immu_behave_before = JSON.parse(req.body.name);
    req.session.qnrecordList.push('immu_behave_before');
    res.send('immu_spirit');
});
//
router.get('/immu_spirit',function(req,res,next){
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
    req.session.qnrecord = 'immu_med';
    res.render('questionnaire/immu_med',{name:req.session.BCN});
});
router.post('/immu_med',function(req,res,next){
    req.session.immu_med = req.body.name;
    req.session.qnrecordList.push('immu_med');
    res.send('iconlist');
});
//
router.get('/kidney_now',function(req,res,next){
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
    req.session.qnrecord = 'kidney_urine';
    res.render('questionnaire/kidney_urine',{name:req.session.BCN});
});
router.post('/kidney_urine',function(req,res,next){
    req.session.kidney_urine = req.body.name;
    req.session.qnrecordList.push('kidney_urine');
    res.send('kidney_health');
});
//
router.get('/urinary_now',function(req,res,next){
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
    req.session.qnrecord = 'urinary_behave';
    res.render('questionnaire/urinary_behave',{name:req.session.BCN});
});
router.post('/urinary_behave',function(req,res,next){
    req.session.urinary_behave = JSON.parse(req.body.name);
    req.session.qnrecordList.push('urinary_behave');
    res.send('urinary_together');
});
//
router.get('/urinary_together',function(req,res,next){
    req.session.qnrecord = 'urinary_together';
    res.render('questionnarie/urinary_together',{name:req.body.BCN});
});
router.post('/urinary_together',function(req,res,next){
    req.session.urinary_together = req.body.name;
    req.session.qnrecordList.push('urinary_together');
    res.send('urinary_water');
});
//
router.get('/urinary_water',function(req,res,next){
    req.session.qnrecord = 'urinary_water';
    res.render('questionnaire/urinary_water',{name:req.session.BCN});
});
router.post('/urinary_water',function(req,res,next){
    req.session.urinary_water = req.body.name;
    req.session.qnrecordList.push('urinary_water');
    res.send('iconlist');
});
//
router.get('/stoma_problem',function(req,res,next){
    req.session.qnrecord = 'stoma_problem';
    res.render('questionnaire/stoma_problem',{name:req.body.BCN});
});
router.post('/stoma_problem',function(req,res,next){
    req.session.stoma_problem = JSON.parse(req.body.name);
    req.session.qnrecordList.push('stoma_problem');
    if(req.session.stoma_problem.includes('B') && !req.session.stoma_problem.includes('F')){
        res.send('stomexcepA');
    }else if(!req.session.stoma_problem.includes('B') && req.session.stoma_problem.includes('F')){
        res.send('stoma_strange');
    }else if(req.session.stoma_problem.includes('B') && req.session.stoma_problem.includes('F')){
        res.send('stomexcepB')
    }else{
        res.send('iconlist');
    }
});
// HANDLE STOMA EXCEPTION
router.get('/stomexcepA',function(req,res,next){
    req.session.qnrecord = 'stomexcepA';
    res.render('questionnaire/stoma_bathroom',{name:req.body.BCN});
});
router.get('/stomexcepB',function(req,res,next){
    req.session.qnrecord = 'stomexcepB';
    res.render('questionnaire/stoma_bathroom',{name:req.body.BCN});
});
router.post('/stoma_bathroom',function(req,res,next){
    req.session.stoma_bathroom = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    if(req.session.qnrecord=='stomexcepA'){
        res.send('iconlist');
    }else if(req.session.qnrecord=='stomexcepB'){
        res.send('stoma_strange');
    }
});
//
router.get('/stoma_strange',function(req,res,next){
    req.session.qnrecord = 'stoma_strange';
    res.render('questionnaire/stoma_strange',{name:req.body.BCN});
});
router.post('/stoma_strange',function(req,res,next){
    req.session.stoma_strange = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('iconlist');
});
//
router.get('/melt_freq',function(req,res,next){
    req.session.qnrecord = 'melt_freq';
    res.render('questionnaire/melt_freq',{name:req.session.BCN});
});
router.post('/melt_freq',function(req,res,next){
    req.session.melr_freq = req.body.name;
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('iconlist');
});
//
router.get('/stress_now',function(req,res,next){
    req.session.qnrecord = 'stress_now';
    res.render('questionnaire/stress_now',{name:req.session.BCN});
});
router.post('/stress_now',function(req,res,next){
    req.session.stress_now = JSON.parse(req.body.name);
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('stress_enviornment');
});
//
router.get('/stress_enviornment',function(req,res,next){
    req.session.qnrecord = 'stress_enviornment';
    res.render('questionnaire/stress_enviornment',{name:req.session.BCN});
});
router.post('/stress_enviornment',function(req,res,next){
    req.session.stress_enviornment = JSON.parse(req.body.name);
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('stress_enviornment_out')
});
//
router.get('/stress_enviornment_out',function(req,res,next){
    req.session.qnrecord = 'stress_enviornment_out';
    res.render('questionnaire/stress_enviornment_out',{name:req.session.BCN});
});
router.post('/stress_enviornment_out',function(req,res,next){
    req.session.stress_enviornment_out = JSON.parse(req.body.name);
    req.session.qnrecordList.push(req.session.qnrecord);
    res.send('stress_lifestyle');
});

module.exports = router;