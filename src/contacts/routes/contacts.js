var express = require('express');
var router = express.Router();
var num = 0;
var contacts=new Array();
/* GET contacts */
router.get('/:id', function(req, res, next) {
	//console.log(req.params.id);
	res.send(contacts[+req.params.id]);
});

router.post('/', function(req, res, next) {
	//var msg=new Array();
	//contacts.message=msg;
	//console.log(contacts);
	contacts[num++]=req.body;
	res.send(""+(num-1));
  //console.log(req.body);
});

router.put('/:id', function(req, res, next) {
    //console.log(req.body);
	var original = contacts[+req.params.id];
	var newobject = req.body;
	for(var i in newobject)
	{
		original[i]=newobject[i];
	}
	contacts[+req.params.id]=original;
	res.send(original);
  });
/*router.post('/:id',function(req,res,next){
	console.log(+req.params.id);
	var original=contacts[+req.params.id];
	console.log(original);
	original.message.push(req.body);
	contacts[+req.params.id]=original;
	res.send(original);
}); */
module.exports = router;
