var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  
  res.render('start');

});

router.post('/aboutyou', function(req, res){
  res.cookie('aboutyou', req.body);
  if (req.body.button=="Continue"){
  res.redirect('typeoflicence');}
  else {
  res.redirect('summary');  
  }
});

router.get('/aboutyou', function (req, res) {
var details=req.cookies.aboutyou;
var edit=req.query.edit;

  res.render('aboutyou', {details:details, edit:edit});
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
