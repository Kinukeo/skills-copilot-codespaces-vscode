//Create web server
import express, { json } from 'express';
const app = express();

//Use the express.json middleware
app.use(json());

//Create an array to store comments
const comments = [];

//Create a GET endpoint to return comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//Create a POST endpoint to add comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

//Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});