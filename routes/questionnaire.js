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
module.exports = router;