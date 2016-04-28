var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  
  res.render('start');

});

router.post('/aboutyou', function(req, res){
  res.cookie('aboutyou', req.body);
  var validpostcode =/[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/.test(req.body.postcode);
 if (validpostcode) {

    if (req.body.button=="Continue"){
    res.redirect('typeoflicence');}
    else {
    res.redirect('summary');  
    }
   }
else {
  var details=req.cookies.aboutyou;
  var edit=req.query.edit;
  res.render('aboutyou', {details:details, edit:edit, error:'Postcode invalid'});
} 
});

router.get('/aboutyou', function (req, res) {
var details=req.cookies.aboutyou;
var edit=req.query.edit;

  res.render('aboutyou', {details:details, edit:edit, error:' '});
});

router.post('/typeoflicence', function(req, res){
  res.cookie('typeoflicence', req.body);
  res.redirect('summary');
});

router.get('/summary', function (req, res) {
var details=req.cookies.aboutyou;
var typeoflicence=req.cookies.typeoflicence;
  res.render('summary', {details:details, typeoflicence:typeoflicence});

});

module.exports = router;
