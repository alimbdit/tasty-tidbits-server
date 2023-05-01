const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const allChef = require('./data/chef.json');

app.get('/', (req, res) => {
    res.send('Chef is running.')
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const targetChef = allChef.find(chef => chef.id === id);
    res.send(targetChef);
})

app.get('/chef', (req, res) => {
    res.send(allChef)
})






app.listen(port,()=>{
    console.log(`Chef API is running on port: ${port}`)
    })