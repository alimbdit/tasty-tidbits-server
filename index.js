const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const allChef = require('./data/chef.json');

app.get('/', (req, res) => {
    res.send('Chef is running.')
})




app.listen(port,()=>{
    console.log(`Chef API is running on port: ${port}`)
    })