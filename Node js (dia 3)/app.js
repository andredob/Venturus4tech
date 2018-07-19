//rodar o servidor com nodemon para resetar a cada atualização automaticamente
const express = require('express');
const app = express(); //declarando o express
const port = 3000;
const bodyParser = require('body-parser'); //parse pra fazer a tradução mais simples
let vagas = require('./config/vagas.js'); //importa o arquivo Vagas e atribui a variavel Vagas
const Vaga = require('./model/vaga.js');


    app.use(bodyParser.urlencoded({ extended : false})); //app use o bodyoarser desta maneira
    app.use(bodyParser.json()); //usa o parser para transformar em json

    app.get('/', async (req, res) => {
        return res.send('Hallo World!');
    });

    //get de todas as vagas
    app.get('/vagas', async (req, res) =>{
        return res.send(vagas);
    })

    //get de uma vapa por ID
    app.get('/vagas:id', async(req, res) =>{
        try {
            let id = req.params.id;
            var vagaId =  vagas.find(el => { el.id == id });
            if (vagaId != null) return res.send(vagaId);    
            return res.status(500).send('vagaId=null');
        } catch (error) {
            return res.status(500).send('Internal Error');
        }
    })

    //post de uma vaga nova
    app.post('/vagas', async (req, res) => {
        try {
            let vagasLength = vagas.length;
            let vaga = createVaga(req.body); //ele passa o body, pois o body ja possui todas as informsções
            vagas.push(vaga); //adiciona a vaga nova criada no arquivo vagas
            if(vagas.length > vagasLength) return res.send('Added'); /*verifica se o tamanho atual é maior que o tamanho anteriro,
                                                                       se for maior é porque algo foi adicionado e ele deve retornar uma mensagem de sucesso*/
            return res.status(500).send('Internal Error');
        } catch (error) {
            return res.status(500).send('Internal Error');
        }
    })

    //retorna a oprta que o servidor esta usando
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })

    //function para criar vagas
    const createVaga = (obj) => new Vaga(
        obj.id, obj.name, obj.description, obj.skills,
        obj.salary, obj.area, obj.differencials, obj.isPcd, obj.isActive
    )


