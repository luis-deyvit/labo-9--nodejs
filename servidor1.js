// 
const http = require("http");
const url = require("url");
const puerto = process.argv[2];



	const server = http.createServer(function (req, res) {

    const dir = url.parse(req.url, true);
    
    console.log(dir.path);
    console.log(dir.pathname);
    console.log(dir.query);

    const {iso}= dir.query;
  
    if (dir.pathname == "/api/parseTime") {
    	var x=iso.substring(11,13);
    	var y=iso.substring(14,16);
    	var z=iso.substring(17,19);

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(`Hora ${x} minuto : ${y}  segundo ${z}`);
        res.end();
    }else{
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(`La ruta no es correcta`);
        res.end();
    }
});

server.listen(puerto, function () {
    console.log("Servidor esta corriendo!!!!!!!");
});


// http://localhost:6060/api/parseTime?iso=2018-07-10T12:10:15.474Z



