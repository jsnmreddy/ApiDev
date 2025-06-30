const express = require('express');
const router = express.Router();

let users = [
    { id: 1, PetType:"Dog", Petname: 'Cyrus', Age:'6', Breed: 'Lab', DateOfBirth:""  },
    { id: 2, PetType:"Dog", Petname: 'Xoro', Age:'3', Breed: 'Pug', DateOfBirth:"" },
     { id: 3, PetType:"Dog", Petname: 'Lufy', Age:'2', Breed: 'Huskey', DateOfBirth:"" }
   
];

// GET all Pets
router.get('/pet_info', (req, res) => {
  res.json(users);
});

//get Pets by ID
router.get('/pet_info/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(418).send('User not found');
    res.json(user);
});

//Create Petprofile
router.post('/pet_info/users', (req, res) => {
    const user = {
        id: users.length + 1,
        PetType: req.body.PetType,
        Petname: req.body.name,
        Age: req.body.Age,
        Breed: req.body.Breed,
       DateOfBirth: req.body.DateOfBirth
    };
    users.push(user);
    res.status(201).json(user);
});

//update PetProfile
router.put('/pet_info/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    user.name = req.body.name;
    res.json(user);
});

//delete PetProfile
router.delete('/pet_info/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});


module.exports = router;