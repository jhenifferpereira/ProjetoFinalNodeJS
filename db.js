var mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost/ProjetoNodeJS', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(conn => global.conn = conn.db("ProjetoNodeJS"))
    .catch(err => console.log(err));

var ObjectId = require('mongodb').ObjectId;


function insertClient(customer, callback) {
    global.conn.collection('cliente').insertOne(customer, callback);
}

function findAllClients(callback) {
    global.conn.collection('cliente').find({}).toArray(callback);
}

function deleteOneClient(id, callback) {
    global.conn.collection('cliente').deleteOne({ _id: new ObjectId(id) }, callback);
}

function findOneClient(id, callback) {
    global.conn.collection('cliente').find(new ObjectId(id)).toArray(callback);
}

function updateClient(id, customer, callback) {
    global.conn.collection('cliente').replaceOne({ _id: new ObjectId(id) }, customer, callback);
}


function insertProduct(customer, callback) {
    global.conn.collection('produto').insertOne(customer, callback);
}

function findAllProducts(callback) {
    global.conn.collection('produto').find({}).toArray(callback);
}

function deleteOneProduct(id, callback) {
    global.conn.collection('produto').deleteOne({ _id: new ObjectId(id) }, callback);
}

function findOneProduct(id, callback) {
    global.conn.collection('produto').find(new ObjectId(id)).toArray(callback);
}

function updateProduct(id, customer, callback) {
    global.conn.collection('produto').replaceOne({ _id: new ObjectId(id) }, customer, callback);
}


module.exports = {
    insertClient,
    findAllClients,
    deleteOneClient,
    findOneClient,
    updateClient,
    insertProduct,
    findAllProducts,
    deleteOneProduct,
    findOneProduct,
    updateProduct
}