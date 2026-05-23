// Assignment: Build and Deploy your API

const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// 1. GET /user
app.get("/", (req, res) => {
  res.send("My week 2 API!");
});


// 2. POST /user

app.use(express.json());

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    
// Respond with the greeting
    res.status(200).send(`Hello, ${name}`);
});


// 3. GET /user/:id to return “User [id] profile”
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ${userId} profile`);
});


// 4. .env for PORT
// 1. Initialize environment variables from .env immediately
require('dotenv').config();



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server successfully running on port ${PORT}`);
});


// 5. Serve a static HTML page at /
app.use(express.static('public'));



// 7. Bonus: Custom middleware to log requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next();
});