var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

router.get('/',function(req, res){
	res.render('river');
});



module.exports = router;