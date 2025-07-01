const express = require('express');
const app = express();
const port = 2300;

app.use(express.json()); // Middleware for parsing JSON


// Routes
const Router = require('./routes/users');
app.use('routes/users', Router);


//Server Detailsss
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});