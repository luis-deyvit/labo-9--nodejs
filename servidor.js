var http = require('http');
var url = require('url');
const moment = require('moment');

function parseTime(h, m, s) { 
	this.hora = h;
	this.minuto = m;
	this.segundo = s;
}
var server = http.createServer(function(peticion, respuesta){
    
    var dir = url.parse(peticion.url,true);
	
	//console.log(dir.pathname);
	//console.log(dir.path);
	//console.log(dir.query.iso);

	const time = dir.query.iso;

	var t = time;
	console.log(t);
	
	var ans = new parseTime("8","3","12");
	
	respuesta.writeHead(200, {"Content-Type": "application/json"});
    respuesta.write(JSON.stringify(ans));
    respuesta.end();
});

server.listen(3000, function(){
    console.log("Servidor corriendo");
});