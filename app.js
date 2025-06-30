const express = require('express');
const app = express();
const port = 2300;

app.use(express.json()); // Middleware for parsing JSON


// Routes
const Router = require('./routes/users');
app.use('routes/users', Router);

// let users = [
//     { id: 1, name: 'Cyrus', age:'6', breed: 'Lab', Date_Of_Birth:""  },
//     { id: 2, name: 'Xoro', age:'3', breed: 'Pug', Date_Of_Birth:"" },
//      { id: 3, name: 'Lufy', age:'2', breed: 'Huskey', Date_Of_Birth:"" }
   
// ];


// app.get('/pet_info/users', (req, res) => {
//     res.json(users);
// });

// app.get('/pet_info/users/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user) return res.status(418).send('User not found');
//     res.json(user);
// });

// app.post('/pet_info/users', (req, res) => {
//     const user = {
//         id: users.length + 1,
//         name: req.body.name,
//         age: req.body.age,
//         breed: req.body.breed,
//        Date_Of_Birth: req.body.Date_Of_Birth
//     };
//     users.push(user);
//     res.status(201).json(user);
// });

// app.put('/pet_info/users/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user) return res.status(404).send('User not found');
//     user.name = req.body.name;
//     res.json(user);
// });

// app.delete('/pet_info/users/:id', (req, res) => {
//     users = users.filter(u => u.id !== parseInt(req.params.id));
//     res.status(204).send();
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});