var http = require('http');

http.createServer(function(req,res){
    res.end("Bem vindo jovem padawan!");
}).listen(8081);

console.log("servidor rodando!");