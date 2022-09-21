import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Tanuja",
        lastName: "Shinde",
        age: 23
    },
    {
        firstName: "Hrishikesh",
        lastName: "Bawane",
        age: 25
    },
]

router.post('/', (req, res) => {
    console.log("post request");
    console.log("inserting an user..!")
    res.send("Hello from post!!");
})

router.get('/', (req, res) => {
    console.log(users);
    res.send("Hello!!");
});

export default router;
