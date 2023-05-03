const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');



const allChef = require('./data/chef.json');
const blogs = require('./data/blog.json');
const reviews = require('./data/reviews.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef is running.')
})

app.get('/blog', (req, res) => {
    res.send(blogs);
})


app.get('/blog/:id', (req, res) => {
    const id = req.params.id;
    const targetBlog = blogs.find(blog => blog.blog_id === id);
    res.send(targetBlog)
})


app.get('/reviews', (req, res) => {
    res.send(reviews);
})

app.get('/reviews/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const singleReview = reviews.find(review => review.customer_id === id);
    res.send(singleReview)
})

app.get('/chef', (req, res) => {
    res.send(allChef)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const targetChef = allChef.find(chef => chef.id === id);
    res.send(targetChef);
})







app.listen(port,()=>{
    console.log(`Chef API is running on port: ${port}`)
    })