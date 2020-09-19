const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.get('/', async (req, res) => {
    const info = await loadInfo();
    res.send(await info.find({}).toArray());
});

router.post('/', async (req, res) =>{
    const info = await loadInfo();
    await info.insertOne({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        createdAr: new Date()
    });
    res.status(201).send();
});

router.delete('/:id', async (req, res) => {
    const info = await loadInfo();
    await info.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadInfo() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://barterX123:barterX123@cluster0.hqcrg.mongodb.net/<dbname>?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    return client.db('BarterX').collection('info');
}

module.exports = router;