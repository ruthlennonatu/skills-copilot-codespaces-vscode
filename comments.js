// Create web server
// Create a route for comments
// Create a route for comments/:id
// Create a route for comments/:id/edit
// Create a route for comments/:id/delete

const express = require('express');
const app = express();
const port = 3000;
const comments = require('./comments.js');

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.get('/comments/:id', (req, res) => {
    res.send(comments.filter(comment => comment.id == req.params.id));
});

app.get('/comments/:id/edit', (req, res) => {
    res.send(`Editing comment with id ${req.params.id}`);
});

app.get('/comments/:id/delete', (req, res) => {
    res.send(`Deleting comment with id ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});