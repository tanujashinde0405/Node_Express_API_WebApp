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
    console.log("post request")
})

router.get('/', (req, res) => {
    console.log(users);
    res.send("Hello!!");
});

export default router;
