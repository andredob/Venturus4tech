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
    app.get('/vagas/:id', async(req, res) =>{    //find para achar o id do elemento que possui o mesmo id 
        try {
            let id = req.params.id;
            let vagasId = vagas.find(el => ( el.id == id));  
            if (vagasId != null) return res.status(200).send(vagasId)
            return res.status(500).send('Id inesistente');
        } catch (error) {
            return res.status(500).send('Internal Error');
        }
    })

    //post de uma vaga nova
    app.post('/vagas', async (req, res) => {
        try {
            let vagasLength = vagas.length;
            let vaga = createVaga(req.body);                           //ele passa o body, pois o body ja possui todas as informsções
            vagas.push(vaga);                                          //adiciona a vaga nova criada no arquivo vagas
            if(vagas.length > vagasLength) return res.send('Added'); /*verifica se o tamanho atual é maior que o tamanho anteriro,
                                                                       se for maior é porque algo foi adicionado e ele deve retornar uma mensagem de sucesso*/
            return res.status(500).send('Internal Error');
        } catch (error) {
            return res.status(500).send('Internal Error');
        }
    })

    //put para determinado id
    app.put('vagas/:id', (req, res) =>{
        try {
            if(!req.bod){
                return res.status(403).send('Adicione algum valor a ser adicionado')
            }

            let index = vagas.findIndex(job => job.id === req.params.id);
            if (index >= 0) {
                Object.keys(req.body).forEach(vaga => {
                    vagas[index][vaga] = req.body[vaga];
                })
                return res.send(`vaga com id ${req.params.id} alterada com sucesso`);
            }
            return res.send(`nao foi encontrado esse id`);
        } catch (error) {
            return res.send(ìnternal);
        }
    })

    //deletar vaga por id
    app.delete('/vagas/delete:id', async (req, res) => {
        try {
            let id = req.params.id;
            let vagaId = vagas.find(el => el.id == id);
            if (vagaId != null) {
                delete vagaId;
                return res.status(200).send(`Foi deletado a vaga com ID ${vagaId}`)
            }
            
        } catch (error) {
            
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


   