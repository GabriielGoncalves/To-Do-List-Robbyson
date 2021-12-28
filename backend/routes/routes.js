const app = require('express')()
//const bodyParser = require('body-parser')
const db = require('../data/dataBase')
const {ObjectId} = require('mongodb')


db.connectToDB((err) => {
    if(err){
        console.log(err);
    }

    const checkBody = ((req, res, next) => {
        if("_id" in req.body){
            req.body._id = ObjectId(req.body._id)
        }
        next()
    })

    // app.get('/home', (req, res) => {
    //     res.render(__dirname + '/views/index')
    // })

    app.get('/tarefas', async (req, res) => {
        try{
        const results = await db.procurarDocumentos()
        res.status(200).json({message: results})
        }catch(err){
            res.status(200).send({message: "Não consegui encontrar as tarefas"})
            throw new Error(err)
        }
    })
    
    app.get('/tarefas/pesquisar/id/:id', async(req, res) => {
        try{
        const results = await db.procurarDocumento(req.params.id)
        console.log(results)
        res.status(201).json({message: results})
        } catch (err){
            res.status(400).json({message: "Não consegui concluir sua requisição."})
            throw new Error(err)
        }
    })

    app.get('/tarefas/pesquisar/:descricao', async (req, res) => {
        try{
            const description = req.params.descricao
            const results = await db.procurarDocumentoPorDescricao(description)
        // console.log(results)
            res.status(200).json({message: results})
        } catch(err){
            res.status(400).json({message: "Erro!"})
            res.status(500).json({message: "Desculpe. Não foi encontrado nenhum documento com essa descrição"})
            throw new Error(err)
        }
    })
    

    app.get('/tarefas/arquivadas', async (req, res) => {
        try{
        const results = await db.procurarDocumentosArquivados()
        res.status(200).json({message: results})
        }catch(err){
            res.status(400).json({message: 'Erro!'})
            throw new Error(err)
        }
    })

    app.post('/tarefas/inserir-tarefa', async (req, res) => {
        try{
        const results = await db.inserirDocumento(req.body)
        console.log(results)
        res.status(201).json({message: "Tarefa inserida com sucesso"})
        }catch(err){
            res.status(400).json({message: "Desculpa, não consegui cadastrar sua tarefa. Tente novamente"})
            throw new Error(err)
        }
    })

    app.patch('/tarefas/arquivar/:id', async (req, res) => {
        try{
        const results = await db.arquivarDocumento(req.params)
        console.log(results)
        res.status(200).json({message: "Dados alterados com sucesso"})
        }catch(error){
            res.status(400).json({message: "Erro!"})
        }
    })//IMPORTANTE FRISAR QUE O PUT ELE SÓ ALTERA O DOCUMENTO POR COMPLETO, E O PATCH ALTERA PARCILAMENTE OU TOTAL


    app.patch('/tarefas/concluir/:id', async (req, res) => {
        try{
        const results = await db.concluirDocumento(req.params)
        res.status(200).json({message: "Dados alterados com sucesso"})
        }catch(error){
            res.status(400).json({message: "Erro!"})
        }
    })

    app.put('/tarefas/atualizar/:id', async (req, res) => {
        try{
        const results = await db.atualizarDocumento(req.params, req.body)
        console.log(results)
        res.status(200).json({message: "Dados alterados com sucesso"})
        }catch(error){
            res.status(400).json({message: "Erro!"})
        }
    })

    app.delete('/tarefas/deletar/:id', async(req, res) => {
        try {
            const results = await db.deletarDocumento(req.params)
            res.status(200).json({message: "Tarefa excluída com sucesso"})            
        }catch (error) {
            res.status(400).json({message: "Não consegui excluir a tarefa. "})
            throw new Error(error)
        }
    })
})

module.exports = app