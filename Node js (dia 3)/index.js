const http = require('http');
const port = 3000; //Pode ser qualquer porta, mas a 3000 é a menos utilizada 

//Testar no terminal 

const server = http.createServer((req, res) =>{
    res.write('Hallo World');
    res.end();
}).listen(port,() =>{
    console.log(`Server listening on port ${port}`); //Usar esta notação com crase é bom para escrever sem precisar concatenar
    console.log('Server listening on port ' + port);
});


server.on('request', (req, res) => {
})

