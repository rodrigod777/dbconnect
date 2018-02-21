var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var dao = require("./dao");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/producto', function(request, response){
	var opc = parseInt(request.query.opc);
	switch (opc){
		case 1:
			sql = "SELECT C1000 FROM CL_CLIENTES WHERE C0902 = 8700013921";
			dao.open(sql,[],false,response);
			break;
		default:
			response.contentType('application/json').status(200);
			response.send(JSON.stringify("Opcion no valida"));
	}
	response.end;
});

app.use(router);

app.listen(3000,function(){
	console.log("Servidor Web - http:localhost:3000");
});