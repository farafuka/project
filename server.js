const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// GET /user
app.get("/user", (req, res) => {
  res.send("My week 2 API!");
});



app.post('/user', (req, res) => {
    // Fallback to an empty object {} if req.body is missing or undefined
    const { name, email } = req.body || {} 

    if (!name || !email) {
        return res.status(400).json({ 
            error: "Bad Request", 
            message: "Missing 'name' or 'email' in JSON payload, or missing Content-Type header." 
        });
    }

    res.send(`Hello, ${name}!`);
});


// 3. GET /user/:id to return “User [id] profile”
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ${userId} profile`);
});


// 4. .env for PORT
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