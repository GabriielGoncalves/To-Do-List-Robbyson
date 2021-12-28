const MongoClient = require('mongodb').MongoClient;
const {ObjectId} = require('mongodb')

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url,  { useUnifiedTopology: true });

const dbName = 'Robbyson';

var _db;
function connectToDB(callback){
    client.connect(function (err){
        console.log(`Conectado com sucesso no banco de dados!`);
        
        _db = client.db(dbName)
        callback(err)
    });
}

const procurarDocumentos = async () => {
    const collection = _db.collection('Tarefas')
    try{
        // $and : [{arquivado: false}, {concluido: false}]
    const results = await collection.find({arquivado: false}).toArray();
    console.log(results)
    return results
    }catch(error){
        throw new Error(error)
    }
}

const procurarDocumento = async (_id) => {
    const collection = _db.collection('Tarefas')
    try{
    const results = await collection.findOne(new ObjectId(_id));
    return results
    }catch(error){
        throw new Error(error)
    }
}

const procurarDocumentosArquivados = async () => {
    const collection = _db.collection('Tarefas')
    try{
    const results = await collection.find({$and : [{concluido: true}, {arquivado: true}]}).toArray();
    console.log(results)
    return results
    }catch(error){
        throw new Error(error)
    }
}

const procurarDocumentoPorDescricao = async (document) => {
    const collection = _db.collection('Tarefas')
    try{
    // const results = await collection.findOne({descricao: document});
    const results = await collection.find({descricao: document}).toArray(); //nessa linha traz todos //os documentos onde a descrição bate, no de cima traz apenas o primeiro documento.  // console.log(results)
    return results
    }catch(error){
        throw new Error(error)
    }
}

const inserirDocumento = async (document) => {
    const collection = _db.collection('Tarefas')
    try{
    const results = await collection.insertOne(document)
    return results
    }catch(error){
        throw new Error(error)
    }
}

const atualizarDocumento = async(id, document) => {
    const collection = _db.collection('Tarefas')
    try{
    const results = await collection.updateOne({ _id: new ObjectId(id) }, {$set: document})
    return results
    }catch(error){
        throw new Error(error)
    }
}

const arquivarDocumento = async(id) => {
    const collection = _db.collection('Tarefas')
    try{
    const results = await collection.updateOne({ _id: new ObjectId(id) }, {$set: {arquivado: true}})
    console.log(results)
    }catch(error){
        console.log(error)
    }
}

const concluirDocumento = async(id) => {
    const collection = _db.collection('Tarefas')
    try{
    const results = await collection.updateOne({ _id: new ObjectId(id) }, {$set: {concluido: true}})
    console.log(results)
    }catch(error){
        console.log(error)
    }
}


const deletarDocumento = async (id) => {
    const collection = _db.collection('Tarefas')
    try{
    const results = await collection.deleteOne({_id: new ObjectId(id)})
    return results
    } catch(error){
        throw new Error(error)
    }
}

module.exports = {
    connectToDB, 
    procurarDocumento, 
    procurarDocumentos, 
    procurarDocumentosArquivados,
    procurarDocumentoPorDescricao,
    inserirDocumento,
    atualizarDocumento,
    arquivarDocumento, 
    concluirDocumento,
    deletarDocumento 
}